import React, { useState, useEffect } from 'react';
import './DisplayDocuments.css';
import { Card, Row, Col } from 'react-bootstrap';
import {
  getAllDocuments,
  addDocument,
  getFolders,
  getPreviousDocuments,
} from '../../api/review';
import { Draggable, Droppable } from 'react-drag-and-drop';
import FilesModal from './FilesModal';
import FilePreviews from './FilePreviews';
// import FilePreviewBatch from './FilePreviewBatch'
import BatchPreview from './BatchPreview';
import BatchModal from './BatchModal';
import { FaChevronDown } from 'react-icons/fa';
import { BiSort } from 'react-icons/bi';

import showToast from '../../utils/toast';
import FolderIcon from '../../images/folder-icon.png';
import File from '../../images/file3.jpeg';

const DisplayDocuments = (props) => {
  const [data, setData] = useState([]);
  const [folder, setFolder] = useState([]);
  const [draggedFiles, setDraggedFiles] = useState({});
  const [selectMulti, setSelectMulti] = useState(false);
  const [choosedFolder, setChoosedFolder] = useState(null);
  const [selectedFiles, setSelectedFiles] = useState([]);
  const alldocsId = useState([]);
  const alldocsPath = useState([]);
  const [dragActive, setDragActive] = useState(false);

  const [active, setActive] = useState(false);

  const orgId = localStorage.getItem('orgId');
  let getDocuments = async () => {
    await getAllDocuments()
      .then((response) => {
        setData(response.data);
      })
      .catch((err) => {
        console.error(err);
        getDocuments();
      });
  };

  let createArray = () => {};

  const load_previous_documents = ({ sub_project_id }) => {
    getPreviousDocuments(sub_project_id)
      .then((response) => {
        return { sub_project_id: sub_project_id, documents: response.data };
      })
      .catch((err) => {
        console.log(err);
      });
  };

  async function subProjectListApi() {
    await getFolders()
      .then((response) => {
        setFolder(response.data);
        const promises = response.data.map((sub_project) => {
          return load_previous_documents({ sub_project_id: sub_project.id });
        });
        return Promise.all(promises);
      })
      .then((data) => {
        const obj = data.reduce((init, item) => {
          return {
            ...init,
            [item.sub_project_id]: item.documents,
          };
        }, {});
        setDraggedFiles({
          ...draggedFiles,
          ...obj,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  const handleSelectFile = (checked, fileId) => {
    const existingFiles = JSON.parse(JSON.stringify(selectedFiles));
    if (checked) existingFiles.push(fileId);
    else {
      const index = existingFiles.indexOf(fileId);
      existingFiles.splice(index, 1);
    }
    setSelectedFiles(existingFiles);
  };

  // const handleMultiSelectFile = (checked, fileId) => {
  //   const existingFiles = JSON.parse(JSON.stringify(selectedFiles))
  //   if (checked) existingFiles.push(fileId)
  //   else {
  //     const index = existingFiles.indexOf(fileId)
  //     existingFiles.splice(index, 1)
  //   }
  //   setSelectedFiles(existingFiles)
  // }

  const handleDrag = function (e) {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === 'dragenter' || e.type === 'dragover') {
      setDragActive(true);
    } else if (e.type === 'dragleave') {
      setDragActive(false);
    }
  };

  const addSuggestedDocs = (fileId, folderId) => {
    setDraggedFiles((prevState) => ({
      ...prevState,
      [folderId.toString()]: [
        ...(folderId in draggedFiles ? draggedFiles[folderId] : []),
        data.filter((item) => item.id === fileId)[0],
      ],
    }));
    setData(data.filter((item) => item.id !== fileId));
    if (selectedFiles.includes(fileId)) {
      handleSelectFile(false, fileId);
    }
  };

  const onCheck = (file, folder) => {
    if (folder) {
      const folderId = folder.id;
      setDraggedFiles((prevState) => ({
        ...prevState,
        [folderId.toString()]: [
          ...(folderId in draggedFiles ? draggedFiles[folderId] : []),
          data.filter((item) => item.id === file.id)[0],
        ],
      }));
      setData(data.filter((item) => item.id !== file.id));
      if (selectedFiles.includes(file.id)) {
        handleSelectFile(false, file.id);
      }
    }
  };

  const revertFile = (file, folderId) => {
    setData([...data, file]);
    setDraggedFiles({
      ...draggedFiles,
      [folderId.toString()]: draggedFiles[folderId].filter(
        (item) => item.id !== file.id
      ),
    });
  };

  let addProject = async (fileData) => {
    await addDocument(fileData)
      .then((response) => {
        showToast('success', 'Document added successfully');
        console.log(response.statusText);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleOnFileUpload = async (e) => {
    if (!orgId)
      return window.alert('Please select organisation and come back here !!!');
    const selectedFile = e.target.files[0];
    const fileData = new FormData();
    fileData.append('file', selectedFile, selectedFile.name);
    fileData.append('subproject', 'newproject');
    fileData.append('document_name', 'chirag');
    fileData.append('organisation_id', orgId);
    await addProject(fileData);
  };

  useEffect(() => {
    getDocuments();
    createArray();
    subProjectListApi();
    data.map((doc) => {
      alldocsId.push(doc.id);
      alldocsPath.push(doc.file);
    });
    localStorage.setItem('alldocs', JSON.stringify(alldocsId.slice(2)));
    localStorage.setItem('alldocsPath', JSON.stringify(alldocsPath.slice(2)));
  }, []);

  useEffect(() => {
    getDocuments();
  }, [data]);

  // const handleClick = () => {
  //   setActive(!active);
  // };

  return (
    <React.Fragment>
      <div className="section-sidebar">
        <div className="section-sidebar--filter">
          <div>
            <BiSort />
            <select onChange={(e) => props.groupBy(e)} className="form-select">
              <option value="client">Customer</option>
              <option value="document-type">Document Type</option>
              <option value="document-date">Document by Date</option>
            </select>
            <FaChevronDown />
          </div>
          <div>
            <BiSort />
            <select
              onChange={(e) => props.handleMostRecent(e)}
              className="form-select"
            >
              <option value="mostrecent">Most Recent</option>
              <option value="date">Date</option>
              <option value="size">Size</option>
              <option value="alpha">Alphabetically</option>
            </select>
            <FaChevronDown />
          </div>
        </div>
        <Card>
          <Card.Header className="section-sidebar--header">
            <div>Batches</div>
            <div style={{ marginLeft: '50px' }}>
              <input
                style={{ fontSize: '12px' }}
                type="file"
                id="upload"
                name="file"
                onChange={handleOnFileUpload}
                hidden
              />
              <label htmlFor="upload">Upload And Export</label>
            </div>
            <div>
              <input
                style={{ fontSize: '12px' }}
                type="file"
                id="upload"
                name="file"
                onChange={handleOnFileUpload}
                hidden
              />
              <label htmlFor="upload">Upload file</label>
            </div>
          </Card.Header>
          <div className="d-flex">
            {/* <Card.Subtitle className='text-muted m-3'>
              Here is the Orders list you can move the <br /> document
            </Card.Subtitle> */}
          </div>

          <Card.Body style={{ height: '250px', overflowY: 'scroll' }}>
            <Row>
              {/* {folder.map((f, i) => { */}
              {data.length &&
                data.map((file, i) => {
                  return (
                    <Col md={4} xs={12} sm={6} key={i}>
                      <Droppable
                        className="section-draggable"
                        key={i}
                        type="file"
                        data={[[file.id], [file.file]]}
                      >
                        <div
                          className="section-sidebar--file-preview"
                          onClick={() => onCheck(file, choosedFolder)}
                        >
                          <BatchPreview
                            onDragEnter={handleDrag}
                            from={'doc'}
                            file={file}
                            is_draggable={true}
                            selectMulti={selectMulti}
                            choosedFolder={choosedFolder}
                          />
                        </div>
                      </Droppable>

                      {/* <Draggable
                      className='section-draggable'
                      key={i}
                      type='file'
                      data={[[f.id], ['subfolder']]}
                    >
                      <BatchModal
                        className='section-sidebar--file-preview'
                        keys={i}
                        addSuggestedDocs={addSuggestedDocs}
                        revertFile={revertFile}
                        folder_id={f.id.toString()}
                        folder_name={f.sub_project_name.toString()}
                        files={
                          f.id.toString() in draggedFiles &&
                          draggedFiles[f.id.toString()].length
                            ? draggedFiles[f.id.toString()]
                            : []
                        }
                        folder_details={f}
                        choosedFolder={choosedFolder}
                        selectMulti={selectMulti}
                      />
                    </Draggable> */}
                    </Col>
                  );
                })}
            </Row>
          </Card.Body>
        </Card>

        <Card className="my-3">
          <Card.Header className="section-sidebar--header">
            <div>Orders</div>
            <div>
              <input
                style={{ fontSize: '12px' }}
                type="file"
                id="upload"
                name="file"
                onChange={handleOnFileUpload}
                hidden
              />
              <label htmlFor="upload">Upload file</label>
            </div>
          </Card.Header>
          <div className="d-flex">
            <Card.Subtitle className="text-muted m-3">
              Here is the Orders list you can move the <br /> document
            </Card.Subtitle>

            <div>
              <img
                // onClick={handleClick}
                alt="file-display"
                src={File}
                style={{
                  // width: '30px',
                  // cursor: 'pointer',
                  // backgroundColor: active ? 'lightgreen' : 'white',
                  height: '29px',
                  // borderRadius: '0%',
                  marginTop: '25px',
                  marginLeft: '45px',
                  // paddingRight:'5px'
                }}
              />
              <img
                className="folder-icon"
                alt="folder"
                src={FolderIcon}
                style={{
                  // width: '30px',
                  // backgroundColor: active2 ? 'lightgreen' : 'white',
                  height: '33px',
                  marginTop: '24px',
                  marginLeft: '8px',
                }}
              />
            </div>
          </div>

          <Card.Body style={{ height: '250px', overflowY: 'scroll' }}>
            <Row>
              {data.length &&
                data.map((file, i) => {
                  return (
                    <Col md={4} xs={12} sm={6} key={i}>
                      <Draggable
                        className="section-draggable"
                        key={i}
                        type="file"
                        data={[[file.id], [file.file]]}
                      >
                        <div
                          className="section-sidebar--file-preview"
                          onClick={() => onCheck(file, choosedFolder)}
                        >
                          <FilePreviews
                            onDragEnter={handleDrag}
                            from={'doc'}
                            file={file}
                            is_draggable={true}
                            selectMulti={selectMulti}
                            choosedFolder={choosedFolder}
                          />
                        </div>
                      </Draggable>
                    </Col>
                  );
                })}
            </Row>
          </Card.Body>
        </Card>
        <Card className="my-3">
          <Card.Header>Recently Accessed</Card.Header>
          <Card.Subtitle className="text-muted m-3">
            Here is the recently accessed list you can move the document
          </Card.Subtitle>
          <Card.Body style={{ height: '250px', overflowY: 'scroll' }}>
            <Row>
              {data.length &&
                data.slice(0, 5).map((file, i) => {
                  return (
                    <Col md={4} xs={12} sm={6} key={i}>
                      <Draggable
                        className="section-draggable"
                        key={i}
                        type="file"
                        data={[[file.id], [file.file]]}
                      >
                        <div
                          className="section-sidebar--file-preview"
                          onClick={() => onCheck(file, choosedFolder)}
                        >
                          <FilePreviews
                            from={'doc'}
                            file={file}
                            is_draggable={true}
                            selectMulti={selectMulti}
                            choosedFolder={choosedFolder}
                          />
                        </div>
                      </Draggable>
                    </Col>
                  );
                })}
              {folder.slice(0, 5).map((f, i) => {
                return (
                  <Col md={4} xs={12} sm={6} key={i}>
                    <Draggable
                      className="section-draggable"
                      key={i}
                      type="file"
                      data={[[f.id], ['subfolder']]}
                    >
                      <FilesModal
                        className="section-sidebar--file-preview"
                        keys={i}
                        addSuggestedDocs={addSuggestedDocs}
                        revertFile={revertFile}
                        folder_id={f.id.toString()}
                        folder_name={f.sub_project_name.toString()}
                        files={
                          f.id.toString() in draggedFiles &&
                          draggedFiles[f.id.toString()].length
                            ? draggedFiles[f.id.toString()]
                            : []
                        }
                        folder_details={f}
                        choosedFolder={choosedFolder}
                        selectMulti={selectMulti}
                      />
                    </Draggable>
                  </Col>
                );
              })}
            </Row>
          </Card.Body>
        </Card>
        <Card className="my-3">
          <Card.Header>Folders</Card.Header>
          <Card.Subtitle className="text-muted m-3">
            Here is the folders list you can move the document
          </Card.Subtitle>
          <Card.Body style={{ height: '250px', overflowY: 'scroll' }}>
            <Row>
              {folder.map((f, i) => {
                return (
                  <Col md={4} xs={12} sm={6} key={i}>
                    <Draggable
                      className="section-draggable"
                      key={i}
                      type="file"
                      data={[[f.id], ['subfolder']]}
                    >
                      <FilesModal
                        className="section-sidebar--file-preview"
                        keys={i}
                        addSuggestedDocs={addSuggestedDocs}
                        revertFile={revertFile}
                        folder_id={f.id.toString()}
                        folder_name={f.sub_project_name.toString()}
                        files={
                          f.id.toString() in draggedFiles &&
                          draggedFiles[f.id.toString()].length
                            ? draggedFiles[f.id.toString()]
                            : []
                        }
                        folder_details={f}
                        choosedFolder={choosedFolder}
                        selectMulti={selectMulti}
                      />
                    </Draggable>
                  </Col>
                );
              })}
            </Row>
          </Card.Body>
        </Card>
      </div>
    </React.Fragment>
  );
};

export default DisplayDocuments;
