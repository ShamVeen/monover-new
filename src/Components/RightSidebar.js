import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { url } from '../GlobalUrl';
import preview from '../images/preview.png';
import eye from '../images/icons/eye.svg';
import previewPlaceholder from '../images/preview-placeholder.png';
import folderIcon from '../images/icons/folder.svg';
import folderFilled from '../images/icons/folder-filled.svg';
import {
  Tab,
  Nav,
  Col,
  Row,
  Card,
  Tooltip,
  OverlayTrigger,
} from 'react-bootstrap';
import { Draggable, Droppable } from 'react-drag-and-drop';
import FilePreviews from './DragAndDrop/FilePreviews';
import FilesModal from './DragAndDrop/FilesModal';
import {
  getAllDocuments,
  addDocument,
  getFolders,
  getPreviousDocuments,
} from '../api/review';

function RightSidebar() {
  const navigate = useNavigate();
  const [modalOpen, setModalOpen] = useState(false);

  const [clients, setClients] = useState([]);
  const [clientsNum, setClientsNum] = useState([]);
  const [documents, setDocuments] = useState([]);
  const [loading, setLoading] = useState(false);
  const [showClientModal, setShowClientModal] = useState(false);
  const handleClose = () => setShowClientModal(false);
  const [is_folders_loading, set_folders_loading] = useState(true);
  const [folder, setFolder] = useState([]);
  const [modelStatus, setModal] = useState(false);
  //
  const [subProjectModal, setSubProjectModal] = useState(false);
  const [documentByDate, setdocumentByDate] = useState();
  //
  const [data, setData] = useState([]);

  const [commonModal, setCommonModal] = useState(false);
  const [clientName, setclientName] = useState('');
  const [showEditClient, setshowEditClient] = useState(false);
  const [editClientNames, seteditClientNames] = useState('');
  const [editClientId, seteditClientId] = useState();
  const [clientDropBool, setclientDropBool] = useState(false);
  const [clientDropBool1, setclientDropBool1] = useState(false);
  const [clientDropBool2, setclientDropBool2] = useState(false);
  const [onDropData, setonDropData] = useState({});
  const [onDropData1, setonDropData1] = useState({});
  const [onDropData2, setonDropData2] = useState({});
  const [loadings, setloadings] = useState(false);

  const [active, setActive] = useState(false);
  const [file, setFile] = useState();
  const [draggedFiles, setDraggedFiles] = useState({});
  const [dragActive, setDragActive] = useState(false);
  const [choosedFolder, setChoosedFolder] = useState(null);
  const [selectedFiles, setSelectedFiles] = useState([]);
  const [selectMulti, setSelectMulti] = useState(false);
  //
  const alldocsId = useState([]);
  const alldocsPath = useState([]);
  const handleCloseClient = () => setshowEditClient(false);
  //

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

  const setModelStatus = (status, prj_id, prj_name) => {
    setModal({ status: status, projectId: prj_id, prj_name: prj_name });
  };

  // let getDocuments = async () => {
  //   await getAllDocuments()
  //     .then((response) => {
  //       setData(response.data)
  //     })
  //     .catch((err) => {
  //       console.error(err)
  //       getDocuments()
  //     })
  // }
  const handleSelectFile = (checked, fileId) => {
    const existingFiles = JSON.parse(JSON.stringify(selectedFiles));
    if (checked) existingFiles.push(fileId);
    else {
      const index = existingFiles.indexOf(fileId);
      existingFiles.splice(index, 1);
    }
    setSelectedFiles(existingFiles);
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

  const load_previous_documents = ({ sub_project_id }) => {
    return axios
      .get(url + `/api/subproject/${sub_project_id}/document/`)
      .then((res) => {
        return {
          sub_project_id: sub_project_id,
          documents: res.data,
        };
      })
      .catch((err) => {
        throw err;
      });
  };
  //

  const revertFile = (file, folderId) => {
    setData([...data, file]);
    setDraggedFiles({
      ...draggedFiles,
      [folderId.toString()]: draggedFiles[folderId].filter(
        (item) => item.id !== file.id
      ),
    });
  };

  function handleOnFileUpload(event) {
    setFile(event.target.files[0]);
  }

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

  const handleDrag = function (e) {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === 'dragenter' || e.type === 'dragover') {
      setDragActive(true);
    } else if (e.type === 'dragleave') {
      setDragActive(false);
    }
  };
  return (
    <div>
      {/* <div class="right-sidebar">
            <div class="panel">
              <div class="panel-header d-flex justify-content-between align-items-center p-4 py-3">
                <div class="">
                  <h4 class="panel-title mb-0">orders</h4>
                </div>
                <div class="panel-action">
                  <a href="" class="btn btn-primary me-2">
                    <svg
                      class="me-3"
                      width="13"
                      height="14"
                      viewBox="0 0 12 13"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M6.59722 0.5625L6.59721 5.84026L11.875 5.84028V7.15972L6.59721 7.15971L6.59722 12.4375H5.27778L5.27776 7.15971L0 7.15972V5.84028L5.27776 5.84026L5.27778 0.5625H6.59722Z"
                        fill="white"
                      />
                    </svg>
                    Upload File
                  </a>
                </div>
              </div>
              <div class="panel-content d-flex justify-content-between flex-wrap align-items-start px-4 pt-4 py-5">
                <div class="panel-doc-preview p-1 mb-3">
                  <div>
                    <img class="img-fluid" src="images/preview.png" alt="" />
                  </div>
                  <a href="">
                    <img src="images/icons/eye.svg" alt="" />
                  </a>
                </div>
                <div class="panel-doc-preview p-1">
                  <div>
                    <img
                      class="img-fluid"
                      src="images/preview-placeholder.png"
                      alt=""
                    />
                  </div>
                  <a href="">
                    <img src="images/icons/eye.svg" alt="" />
                  </a>
                </div>
                <div class="panel-doc-preview p-1">
                  <div>
                    <img
                      class="img-fluid"
                      src="images/preview-placeholder.png"
                      alt=""
                    />
                  </div>
                  <a href="">
                    <img src="images/icons/eye.svg" alt="" />
                  </a>
                </div>
              </div>
            </div>
            <div class="panel">
              <div class="panel-header d-flex justify-content-between align-items-center p-4 py-3">
                <div class="">
                  <h4 class="panel-title mb-0">recently viewed</h4>
                </div>
                <div class="panel-action">
                  <a href="" class="btn btn-primary me-2">
                    <svg
                      class="me-3"
                      width="13"
                      height="14"
                      viewBox="0 0 12 13"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M6.59722 0.5625L6.59721 5.84026L11.875 5.84028V7.15972L6.59721 7.15971L6.59722 12.4375H5.27778L5.27776 7.15971L0 7.15972V5.84028L5.27776 5.84026L5.27778 0.5625H6.59722Z"
                        fill="white"
                      />
                    </svg>
                    Upload File
                  </a>
                </div>
              </div>
              <div class="panel-content d-flex justify-content-between flex-wrap align-items-start px-4 pt-4 py-5">
                <div class="panel-doc-preview p-1">
                  <div>
                    <img
                      class="img-fluid"
                      src="images/preview-placeholder.png"
                      alt=""
                    />
                  </div>
                  <a href="">
                    <img src="images/icons/eye.svg" alt="" />
                  </a>
                </div>
                <div class="panel-doc-preview p-1">
                  <div>
                    <img
                      class="img-fluid"
                      src="images/preview-placeholder.png"
                      alt=""
                    />
                  </div>
                  <a href="">
                    <img src="images/icons/eye.svg" alt="" />
                  </a>
                </div>
                <div class="panel-doc-preview p-1">
                  <div>
                    <img
                      class="img-fluid"
                      src="images/preview-placeholder.png"
                      alt=""
                    />
                  </div>
                  <a href="">
                    <img src="images/icons/eye.svg" alt="" />
                  </a>
                </div>
              </div>
            </div>
            <div class="panel">
              <div class="panel-header d-flex justify-content-between align-items-center p-4 py-3">
                <div class="">
                  <h4 class="panel-title mb-0">folders</h4>
                </div>
              </div>
              <div class="panel-content d-flex flex-wrap align-items-start px-4 pt-4 py-5">
                <div class="folder active d-flex flex-column align-items-center p-1 mb-3 me-3">
                  <img
                    class="img-fluid"
                    src="images/icons/folder-filled.svg"
                    alt=""
                  />
                  <span class="pt-2">Folder1</span>
                </div>
                <div class="folder active d-flex flex-column align-items-center p-1 mb-3 me-3">
                  <img class="img-fluid" src="images/icons/folder.svg" alt="" />
                  <span class="pt-2">Folder2</span>
                </div>
                <div class="folder active d-flex flex-column align-items-center p-1 mb-3 me-3">
                  <img class="img-fluid" src="images/icons/folder.svg" alt="" />
                  <span class="pt-2">Folder3</span>
                </div>
                <div class="folder active d-flex flex-column align-items-center p-1 mb-3 me-3">
                  <img class="img-fluid" src="images/icons/folder.svg" alt="" />
                  <span class="pt-2">Folder4</span>
                </div>
                <div class="folder active d-flex flex-column align-items-center p-1 mb-3 me-3">
                  <img class="img-fluid" src="images/icons/folder.svg" alt="" />
                  <span class="pt-2">Folder5</span>
                </div>
                <div class="folder active d-flex flex-column align-items-center p-1 mb-3 me-3">
                  <img class="img-fluid" src="images/icons/folder.svg" alt="" />
                  <span class="pt-2">Folder6</span>
                </div>
                <div class="folder active d-flex flex-column align-items-center p-1 mb-3 me-3">
                  <img class="img-fluid" src="images/icons/folder.svg" alt="" />
                  <span class="pt-2">Folder4</span>
                </div>
                <div class="folder active d-flex flex-column align-items-center p-1 mb-3 me-3">
                  <img class="img-fluid" src="images/icons/folder.svg" alt="" />
                  <span class="pt-2">Folder5</span>
                </div>
                <div class="folder active d-flex flex-column align-items-center p-1 mb-3 me-3">
                  <img class="img-fluid" src="images/icons/folder.svg" alt="" />
                  <span class="pt-2">Folder6</span>
                </div>
              </div>
            </div>
          </div> */}

      {/* <div className="right-sidebar">
              <div className="panel">
                <div className="panel-header d-flex justify-content-between align-items-center p-4 py-3">
                  <div className="">
                    <h4 className="panel-title mb-0">orders</h4>
                  </div>
                  <div className="panel-action">
                    <a href="" className="btn btn-primary me-2">
                      <svg
                        className="me-3"
                        width="13"
                        height="14"
                        viewBox="0 0 12 13"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M6.59722 0.5625L6.59721 5.84026L11.875 5.84028V7.15972L6.59721 7.15971L6.59722 12.4375H5.27778L5.27776 7.15971L0 7.15972V5.84028L5.27776 5.84026L5.27778 0.5625H6.59722Z"
                          fill="white"
                        />
                      </svg>
                      Upload File
                    </a>
                  </div>
                </div>
                <div className="panel-content d-flex justify-content-between flex-wrap align-items-start px-4 pt-4 py-5">
                  <div className="panel-doc-preview p-1 mb-3">
                    <div>
                      <img className="img-fluid" src={preview} alt="" />
                    </div>
                    <a href="">
                      <img src={eye} alt="" />
                    </a>
                  </div>
                  <div className="panel-doc-preview p-1">
                    <div>
                      <img
                        className="img-fluid"
                        src={previewPlaceholder}
                        alt=""
                      />
                    </div>
                    <a href="">
                      <img src={eye} alt="" />
                    </a>
                  </div>
                  <div className="panel-doc-preview p-1">
                    <div>
                      <img
                        className="img-fluid"
                        src={previewPlaceholder}
                        alt=""
                      />
                    </div>
                    <a href="">
                      <img src={eye} alt="" />
                    </a>
                  </div>
                </div>
              </div>
              <div className="panel">
                <div className="panel-header d-flex justify-content-between align-items-center p-4 py-3">
                  <div className="">
                    <h4 className="panel-title mb-0">recently viewed</h4>
                  </div>
                  <div className="panel-action">
                    <a href="" className="btn btn-primary me-2">
                      <svg
                        className="me-3"
                        width="13"
                        height="14"
                        viewBox="0 0 12 13"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M6.59722 0.5625L6.59721 5.84026L11.875 5.84028V7.15972L6.59721 7.15971L6.59722 12.4375H5.27778L5.27776 7.15971L0 7.15972V5.84028L5.27776 5.84026L5.27778 0.5625H6.59722Z"
                          fill="white"
                        />
                      </svg>
                      Upload File
                    </a>
                  </div>
                </div>
                <div className="panel-content d-flex justify-content-between flex-wrap align-items-start px-4 pt-4 py-5">
                  <div className="panel-doc-preview p-1">
                    <div>
                      <img
                        className="img-fluid"
                        src={previewPlaceholder}
                        alt=""
                      />
                    </div>
                    <a href="">
                      <img src={eye} alt="" />
                    </a>
                  </div>
                  <div className="panel-doc-preview p-1">
                    <div>
                      <img
                        className="img-fluid"
                        src={previewPlaceholder}
                        alt=""
                      />
                    </div>
                    <a href="">
                      <img src={eye} alt="" />
                    </a>
                  </div>
                  <div className="panel-doc-preview p-1">
                    <div>
                      <img
                        className="img-fluid"
                        src={previewPlaceholder}
                        alt=""
                      />
                    </div>
                    <a href="">
                      <img src={eye} alt="" />
                    </a>
                  </div>
                </div>
              </div>
              <div className="panel">
                <div className="panel-header d-flex justify-content-between align-items-center p-4 py-3">
                  <div className="">
                    <h4 className="panel-title mb-0">folders</h4>
                  </div>
                  <div className="panel-action"></div>
                </div>
                <div className="panel-content d-flex flex-wrap align-items-start px-4 pt-4 py-5">
                  <div className="folder active d-flex flex-column align-items-center p-1 mb-3 me-3">
                    <img className="img-fluid" src={folderFilled} alt="" />
                    <span className="pt-2">Folder1</span>
                  </div>
                  <div className="folder active d-flex flex-column align-items-center p-1 mb-3 me-3">
                    <img className="img-fluid" src={folderIcon} alt="" />
                    <span className="pt-2">Folder2</span>
                  </div>
                  <div className="folder active d-flex flex-column align-items-center p-1 mb-3 me-3">
                    <img className="img-fluid" src={folderIcon} alt="" />
                    <span className="pt-2">Folder3</span>
                  </div>
                  <div className="folder active d-flex flex-column align-items-center p-1 mb-3 me-3">
                    <img className="img-fluid" src={folderIcon} alt="" />
                    <span className="pt-2">Folder4</span>
                  </div>
                  <div className="folder active d-flex flex-column align-items-center p-1 mb-3 me-3">
                    <img className="img-fluid" src={folderIcon} alt="" />
                    <span className="pt-2">Folder5</span>
                  </div>
                  <div className="folder active d-flex flex-column align-items-center p-1 mb-3 me-3">
                    <img className="img-fluid" src={folderIcon} alt="" />
                    <span className="pt-2">Folder6</span>
                  </div>
                  <div className="folder active d-flex flex-column align-items-center p-1 mb-3 me-3">
                    <img className="img-fluid" src={folderIcon} alt="" />
                    <span className="pt-2">Folder4</span>
                  </div>
                  <div className="folder active d-flex flex-column align-items-center p-1 mb-3 me-3">
                    <img className="img-fluid" src={folderIcon} alt="" />
                    <span className="pt-2">Folder5</span>
                  </div>
                  <div className="folder active d-flex flex-column align-items-center p-1 mb-3 me-3">
                    <img className="img-fluid" src={folderIcon} alt="" />
                    <span className="pt-2">Folder6</span>
                  </div>
                </div>
              </div>
            </div> */}

      <div className="right-sidebar">
        <div className="panel">
          <div className="panel-header d-flex justify-content-between align-items-center p-4 py-3">
            <div className="">
              <h4 className="panel-title mb-0">orders</h4>
            </div>
            <div className="panel-action">
              <a
                href=""
                className="btn btn-primary me-2"
                onChange={handleOnFileUpload}
              >
                <svg
                  className="me-3"
                  width="13"
                  height="14"
                  viewBox="0 0 12 13"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M6.59722 0.5625L6.59721 5.84026L11.875 5.84028V7.15972L6.59721 7.15971L6.59722 12.4375H5.27778L5.27776 7.15971L0 7.15972V5.84028L5.27776 5.84026L5.27778 0.5625H6.59722Z"
                    fill="white"
                  />
                </svg>
                <label htmlFor="upload">Upload File</label>
              </a>
            </div>
          </div>

          <Card.Body
            style={{
              height: '350px',
              overflowY: 'scroll',
              overflowX: 'scroll',
            }}
          >
            {/* <div className="panel-content d-flex justify-content-between flex-wrap align-items-start px-4 pt-4 py-5">
                      <div className="panel-doc-preview p-1 mb-3">
                        <div>
                          <img className="img-fluid" src={preview} alt="" />
                        </div>
                        <a href="">
                          <img src={eye} alt="" />
                        </a>
                      </div>
                      <div className="panel-doc-preview p-1">
                        <div>
                          <img
                            className="img-fluid"
                            src={previewPlaceholder}
                            alt=""
                          />
                        </div>
                        <a href="">
                          <img src={eye} alt="" />
                        </a>
                      </div>
                      <div className="panel-doc-preview p-1">
                        <div>
                          <img
                            className="img-fluid"
                            src={previewPlaceholder}
                            alt=""
                          />
                        </div>
                        <a href="">
                          <img src={eye} alt="" />
                        </a>
                      </div>
                    </div> */}{' '}
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
        </div>
        <div className="panel">
          <div className="panel-header d-flex justify-content-between align-items-center p-4 py-3">
            <div className="">
              <h4 className="panel-title mb-0">recently viewed</h4>
            </div>
            {/* <div className="panel-action">
                    <a href="" className="btn btn-primary me-2">
                      <svg
                        className="me-3"
                        width="13"
                        height="14"
                        viewBox="0 0 12 13"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M6.59722 0.5625L6.59721 5.84026L11.875 5.84028V7.15972L6.59721 7.15971L6.59722 12.4375H5.27778L5.27776 7.15971L0 7.15972V5.84028L5.27776 5.84026L5.27778 0.5625H6.59722Z"
                          fill="white"
                        />
                      </svg>
                      Upload File
                    </a>
                  </div> */}
          </div>
          {/* <div className="panel-content d-flex justify-content-between flex-wrap align-items-start px-4 pt-4 py-5">
                    <div className="panel-doc-preview p-1">
                      <div>
                        <img
                          className="img-fluid"
                          src={previewPlaceholder}
                          alt=""
                        />
                      </div>
                      <a href="">
                        <img src={eye} alt="" />
                      </a>
                    </div>
                    <div className="panel-doc-preview p-1">
                      <div>
                        <img
                          className="img-fluid"
                          src={previewPlaceholder}
                          alt=""
                        />
                      </div>
                      <a href="">
                        <img src={eye} alt="" />
                      </a>
                    </div>
                    <div className="panel-doc-preview p-1">
                      <div>
                        <img
                          className="img-fluid"
                          src={previewPlaceholder}
                          alt=""
                        />
                      </div>
                      <a href="">
                        <img src={eye} alt="" />
                      </a>
                    </div>
                  </div> */}
          <Card.Body style={{ height: '350px', overflowY: 'scroll' }}>
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
        </div>
        <div className="panel">
          <div className="panel-header d-flex justify-content-between align-items-center p-4 py-3">
            <div className="">
              <h4 className="panel-title mb-0">folders</h4>
            </div>
            <div className="panel-action"></div>
          </div>
          {/* <div className="panel-content d-flex flex-wrap align-items-start px-4 pt-4 py-5">
                  <div className="folder active d-flex flex-column align-items-center p-1 mb-3 me-3">
                    <img className="img-fluid" src={folderFilled} alt="" />
                    <span className="pt-2">Folder1</span>
                  </div>
                  <div className="folder active d-flex flex-column align-items-center p-1 mb-3 me-3">
                    <img className="img-fluid" src={folderIcon} alt="" />
                    <span className="pt-2">Folder2</span>
                  </div>
                  <div className="folder active d-flex flex-column align-items-center p-1 mb-3 me-3">
                    <img className="img-fluid" src={folderIcon} alt="" />
                    <span className="pt-2">Folder3</span>
                  </div>
                  <div className="folder active d-flex flex-column align-items-center p-1 mb-3 me-3">
                    <img className="img-fluid" src={folderIcon} alt="" />
                    <span className="pt-2">Folder4</span>
                  </div>
                  <div className="folder active d-flex flex-column align-items-center p-1 mb-3 me-3">
                    <img className="img-fluid" src={folderIcon} alt="" />
                    <span className="pt-2">Folder5</span>
                  </div>
                  <div className="folder active d-flex flex-column align-items-center p-1 mb-3 me-3">
                    <img className="img-fluid" src={folderIcon} alt="" />
                    <span className="pt-2">Folder6</span>
                  </div>
                  <div className="folder active d-flex flex-column align-items-center p-1 mb-3 me-3">
                    <img className="img-fluid" src={folderIcon} alt="" />
                    <span className="pt-2">Folder4</span>
                  </div>
                  <div className="folder active d-flex flex-column align-items-center p-1 mb-3 me-3">
                    <img className="img-fluid" src={folderIcon} alt="" />
                    <span className="pt-2">Folder5</span>
                  </div>
                  <div className="folder active d-flex flex-column align-items-center p-1 mb-3 me-3">
                    <img className="img-fluid" src={folderIcon} alt="" />
                    <span className="pt-2">Folder6</span>
                  </div>
                </div> */}
          <Card.Body style={{ height: '350px', overflowY: 'scroll' }}>
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
        </div>
      </div>
    </div>
  );
}

export default RightSidebar;
