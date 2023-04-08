import React, { useEffect, useState, useRef } from 'react';
import { Modal, Button } from 'react-bootstrap';
import FilePreview from './FilePreview3';
import {
  AiFillCloseCircle,
  AiOutlineMinusCircle,
  AiOutlinePlusCircle,
} from 'react-icons/ai';
import { RiCheckboxBlankFill } from 'react-icons/ri';
//  import { url } from '../../GlobalUrl'

import batchImage from '../../images/batches.jpeg';
import filePath from '../../images/file3.png';

import '../../App.css';

export function isURL(str) {
  var pattern = new RegExp(
    '^(https?:\\/\\/)?' + // protocol
      '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.?)+[a-z]{2,}|' + // domain name
      '((\\d{1,3}\\.){3}\\d{1,3}))' + // OR ip (v4) address
      '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*' + // port and path
      '(\\?[;&a-z\\d%_.~+=-]*)?' + // query string
      '(\\#[-a-z\\d_]*)?$',
    'i'
  ); // fragment locator
  return pattern.test(str);
}

function BatchModal({
  files = [],
  folder_id = '',
  revertFile,
  addSuggestedDocs,
  folder_details,
  suggestedFile = [],
  setModal,
  choosedFolder,
  selectMulti,
  keys,
  props,
}) {
  const [sug, setSug] = useState(suggestedFile);
  const [chechDocs, setChechDocs] = useState([]);

  const { file } = props;
  const [iframeTimeoutId, setIframeTimeoutId] = useState(undefined);
  const iframeRef = useRef(null);

  // useState(() => {
  //   setSug(suggestedFile);
  // }, [Modal]);
  // console.log("filesssss", files);
  // console.log("onDropFunc", onDrop);
  // console.log(suggestedFile ? suggestedFile.suggested_docs : "hello");
  // console.log("hello", files, folder_id, revertFile, folder_details);

  const removeFileFromSuggestions = (fileId, folderId) => {
    console.log('remove file id', fileId);
    if (chechDocs.length > 0 && chechDocs.includes(fileId)) {
      window.alert('file is already added in folder');
    } else {
      chechDocs.push(fileId);
      addSuggestedDocs(fileId, folderId);
    }
    // suggestedFile = suggestedFile.filter((file) => file.id !== id);
    // console.log(suggestedFile);
  };

  const addFileInSuggestions = (fileId, folderId, file) => {
    console.log('add file id', fileId, chechDocs.includes(fileId));
    if (chechDocs.length > 0 && chechDocs.includes(fileId)) {
      chechDocs.pop(fileId);
      revertFile(file, folderId);
    }
    // suggestedFile = suggestedFile.filter((file) => file.id !== id);
    // console.log(suggestedFile);
  };
  const [lgShow, setLgShow] = useState(false);

  //   function getIframeLink() {
  //          return `https://docs.google.com/gview?url=${filePath}&embedded=true`
  //        }
  //   function updateIframeSrc() {
  //     if (iframeRef.current) {
  //       iframeRef.current.src = getIframeLink()
  //     }
  //   }

  const [hover, setHover] = useState(false);
  const onHover = () => {
    setHover(true);
  };

  const onLeave = () => {
    setHover(false);
  };
  const closeModal = (e) => {
    var e = window.event;
    e.cancelBubble = true;
    if (e.stopPropagation) {
      e.stopPropagation();
    }
    setLgShow(false);
  };
  //   //   const extension = file.document_name.substring(
  //   //     file.document_name.lastIndexOf(".") + 1
  //   //   );

  //   const extension = file.document_name.substring(
  //     file.document_name.lastIndexOf('.') + 1
  //   )

  // const filePath = isURL(file.file) ? file.file : url + file.file
  //   //   const filePath2 = isURL(file.file) ? file.file : file.file
  //   // console.log("filepre", filePath, filePath2);

  return (
    <div key={keys}>
      <div
        className="c-pointer"
        style={{ textAlign: 'center' }}
        onClick={() => setLgShow(true)}
      >
        {files.length ? (
          <span
            style={{
              marginBottom: '-30px',
              marginLeft: '70px',
              position: 'absolute',
            }}
            className="badge badge-primary c-pointer"
          >
            {files.length}
          </span>
        ) : null}

        <img
          style={{ marginTop: '-30px', height: '85px' }}
          className={
            selectMulti &&
            choosedFolder &&
            choosedFolder.id === folder_details.id
              ? 'bd-bm-10'
              : ''
          }
          src={batchImage}
          alt="folder-icon"
        />
        <br></br>
        <span className="h6" style={{ fontWeight: '500' }}>
          {folder_details.sub_project_name}
        </span>
      </div>
      <Modal
        size="lg"
        show={lgShow}
        onHide={() => setLgShow(false)}
        aria-labelledby="example-modal-sizes-title-lg"
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-modal-sizes-title-lg">
            Files under Batches
          </Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <div className="row">
            {/* <div className='r'></div> */}

            <div className="col-6">
              <div style={{ borderStyle: 'solid' }}>
                <h3 style={{ marginLeft: '5rem' }}>Document Type 1</h3>
              </div>

              {/* {extension === 'jpg' ||
              extension === 'jpeg' ||
              extension === 'png' ? (
                <img
                  src={filePath}
                  style={{ width: '50%' }}
                  alt={file.document_name}
                />
              ) : extension === 'pdf' ? (
                <div class='iframe-loading'>
                  <iframe
                    id='IFRAME'
                    className='PDFIMG'
                    onLoad={iframeLoaded}
                    onError={updateIframeSrc}
                    ref={iframeRef}
                    src={getIframeLink()}
                    src={`https://docs.google.com/gview?url=${imagePath}&embedded=true`}
                  />
                </div>
              ) : (
                <div style={{ textAlign: 'center' }}>
                  <img
                    src={preview}
                    style={{ width: '90%', height: '30rem' }}
                  />
                  <h1>No Preview Available</h1>
                </div>
              )} */}
              <div style={{ marginTop: '10px', borderStyle: 'solid' }}>
                {' '}
                <img
                  src={filePath}
                  style={{
                    width: '30%',
                    borderStyle: 'solid',
                    marginTop: '5px',
                    marginLeft: '2px',
                  }}
                  alt={file.document_name}
                />
                <img
                  src={filePath}
                  style={{
                    width: '30%',
                    borderStyle: 'solid',
                    marginLeft: '5px',
                    marginTop: '5px',
                  }}
                  alt={file.document_name}
                />{' '}
                <img
                  src={filePath}
                  style={{
                    width: '30%',
                    borderStyle: 'solid',
                    marginTop: '5px',
                  }}
                  alt={file.document_name}
                />{' '}
                <img
                  src={filePath}
                  style={{
                    width: '30%',
                    borderStyle: 'solid',
                    marginTop: '5px',
                    marginLeft: '2px',
                  }}
                  alt={file.document_name}
                />{' '}
                <img
                  src={filePath}
                  style={{
                    width: '30%',
                    borderStyle: 'solid',
                    marginTop: '5px',
                    marginLeft: '2px',
                  }}
                  alt={file.document_name}
                />
              </div>
            </div>

            <div className="col-6">
              <div style={{ borderStyle: 'solid' }}>
                {' '}
                <h3 style={{ marginLeft: '5rem' }}>Document Type 2</h3>
              </div>
              {/* {extension === 'jpg' ||
              extension === 'jpeg' ||
              extension === 'png' ? (
                <img
                  src={filePath}
                  style={{ width: '50%' }}
                  alt={file.document_name}
                />
              ) : extension === 'pdf' ? (
                <div class='iframe-loading'>
                  <iframe
                    id='IFRAME'
                    className='PDFIMG'
                    onLoad={iframeLoaded}
                    onError={updateIframeSrc}
                    ref={iframeRef}
                    src={getIframeLink()}
                    src={`https://docs.google.com/gview?url=${imagePath}&embedded=true`}
                  />
                </div>
              ) : (
                <div style={{ textAlign: 'center' }}>
                  <img
                    src={preview}
                    style={{ width: '90%', height: '30rem' }}
                  />
                  <h1>No Preview Available</h1>
                </div>
              )} */}

              <div style={{ marginTop: '10px', borderStyle: 'solid' }}>
                {' '}
                <img
                  src={filePath}
                  style={{
                    width: '30%',
                    borderStyle: 'solid',
                    marginTop: '5px',
                    marginLeft: '2px',
                  }}
                  alt={file.document_name}
                />
                <img
                  src={filePath}
                  style={{
                    width: '30%',
                    borderStyle: 'solid',
                    marginLeft: '5px',
                    marginTop: '5px',
                  }}
                  alt={file.document_name}
                />{' '}
                <img
                  src={filePath}
                  style={{
                    width: '30%',
                    borderStyle: 'solid',
                    marginTop: '5px',
                    marginLeft: '2px',
                  }}
                  alt={file.document_name}
                />{' '}
                <img
                  src={filePath}
                  style={{
                    width: '30%',
                    borderStyle: 'solid',
                    marginTop: '5px',
                    marginLeft: '2px',
                  }}
                  alt={file.document_name}
                />{' '}
              </div>
            </div>

            {/* <div
              className="d-none"
              style={{ height: "80vh", overflowY: "scroll" }}
            >
              {document_content?.length > 0 &&
                Object.entries(document_content[0]).map(([key, value]) => (
                  <div className="Det_inputField">
                    <label className="Det_inputLabel">{key}</label>
                    <div className="row">
                      <div className="col-9">
                        <input
                          className="form-control w-100"
                          type="text"
                          name={key}
                          value={value}
                        ></input>
                      </div>
                      <div className="col-3">
                        <Button variant="outline-dark">
                          <span>
                            <i className="fa fa-times fa-lg"></i>
                          </span>
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
            </div> */}
          </div>
        </Modal.Body>
      </Modal>
    </div>
  );
}

export default BatchModal;
