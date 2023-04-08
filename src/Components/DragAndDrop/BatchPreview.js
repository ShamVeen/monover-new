import React, { useState, useEffect, useRef } from 'react';
import { Modal, Button, Row, Col } from 'react-bootstrap';
import PdfIcon from '../../images/pdf-icon.png';
import ImageIcon from '../../images/image-file.png';
import batchImage from '../../images/batches.jpeg';
import WordIcon from '../../images/word-file.png';
import TextIcon from '../../images/text-file.png';
import InvalidIcon from '../../images/file3.jpeg';
import { url } from '../../GlobalUrl';
import { RiCheckboxBlankFill } from 'react-icons/ri';
import preview from '../../images/preview.jpg';
import { useNavigate } from 'react-router';
// checking because everytime file url is not a http link, but sometimes
// file url is coming path
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

function BatchPreview(props) {
  // console.log(props);
  const { file } = props;
  const [lgShow, setLgShow] = useState(false);
  const navigate = useNavigate();
  const [iframeTimeoutId, setIframeTimeoutId] = useState(undefined);
  const iframeRef = useRef(null);
  const [link, setLink] = useState('');

  const openModal = (e) => {
    e.stopPropagation();
    e.cancelBubble = true;
    loadDoc();
    setLgShow(true);
  };

  const loadDoc = () => {
    // console.log("filepathhsss", filePath2);
    const intervalId = setInterval(updateIframeSrc, 1000 * 5);
    setIframeTimeoutId(intervalId);
    // console.log("intervalllll", intervalId);
  };

  async function iframeLoaded() {
    document.getElementById('IFRAME').style.backgroundImage = 'none';
    await clearInterval(iframeTimeoutId);
  }

  function getIframeLink() {
    return `https://docs.google.com/gview?url=${filePath}&embedded=true`;
  }

  function updateIframeSrc() {
    if (iframeRef.current) {
      iframeRef.current.src = getIframeLink();
    }
  }

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
  //   const extension = file.document_name.substring(
  //     file.document_name.lastIndexOf(".") + 1
  //   );

  const extension = file.document_name.substring(
    file.document_name.lastIndexOf('.') + 1
  );

  const filePath = isURL(file.file) ? file.file : url + file.file;
  const filePath2 = isURL(file.file) ? file.file : file.file;
  // console.log("filepre", filePath, filePath2);
  const FileIcon = () => {
    if (extension === 'jpg' || extension === 'jpeg' || extension === 'png')
      return (
        <img
          src={batchImage}
          width={100}
          height={70}
          // style={{ marginTop: "20px" }}
          alt="file"
        />
      );
    else if (extension === 'pdf')
      return <img src={PdfIcon} width={80} alt="file" />;
    else if (extension === 'doc' || extension === 'docx')
      return <img src={WordIcon} width={80} alt="file" />;
    else if (extension === 'txt')
      return <img src={TextIcon} width={80} alt="file" />;
    return <img src={InvalidIcon} width={80} alt="file" />;
  };

  // const document_content =
  //   "document_content" in file ? JSON.parse(file.document_content) : [];

  // useEffect(() => {
  //   const intervalId = setInterval(updateIframeSrc, 1000 * 2);
  //   setIframeTimeoutId(intervalId);
  // }, [link]);

  // function iframeLoaded() {
  //   document.getElementById("IFRAME").style.backgroundImage = "none";
  //   clearInterval(iframeTimeoutId);
  // }
  // async function getIframeLink() {
  //   return `https://docs.google.com/gview?url=${filePath}&embedded=true`;
  // }
  // function updateIframeSrc() {
  //   if (iframeRef.current) {
  //     iframeRef.current.src = getIframeLink();
  //   }
  // }

  return (
    <div>
      <div
        // onClick={() => {

        //   if (!(props.choosedFolder && props.selectMulti)) {
        //     localStorage.setItem("Imagepath", filePath);
        //     navigate.push(`/document-details/${file.id}`);
        //   }

        // }}
        title={file.batch_name}
        style={{
          cursor:
            props.choosedFolder && props.selectMulti ? 'pointer' : 'default',
        }}
      >
        {!(props.choosedFolder && props.selectMulti) && (
          <div
            style={{ marginLeft: '80px' }}
            onClick={(e) => {
              e.stopPropagation();
              setLink(filePath);
              openModal(e);
            }}
          >
            <div onMouseEnter={onHover} onMouseLeave={onLeave}>
              {hover ? (
                <b
                  onClick={(e) => {
                    e.stopPropagation();
                    setLink(filePath);
                    openModal(e);
                  }}
                >
                  Expand
                </b>
              ) : (
                <RiCheckboxBlankFill style={{ cursor: 'pointer' }} size={20} />
              )}
            </div>
          </div>
        )}
        <div>
          <FileIcon />
        </div>

        <div />
        <div className=" lead small mt-2">
          {file.document_name.length > 10
            ? file.document_name.slice(0, 10)
            : file.document_name}
          <p>BATCH</p>
        </div>
      </div>
      <Modal
        size="lg"
        show={lgShow}
        onHide={() => {
          closeModal();
        }}
        aria-labelledby="example-modal-sizes-title-lg"
      >
        <Modal.Header closeButton>
          <Modal.Title
            id="example-modal-sizes-title-lg"
            style={{ marginLeft: '18rem' }}
          >
            Batches
          </Modal.Title>
        </Modal.Header>
        <h4 style={{ marginLeft: '5rem' }}>
          <b>Sort by: Document</b>
        </h4>

        <Modal.Body>
          <div className="row">
            {/* <div className='r'></div> */}

            <div className="col-6">
              <div style={{ borderStyle: 'solid' }}>
                <h3 style={{ marginLeft: '5rem' }}>Document Type 1</h3>
              </div>

              <div style={{ marginTop: '10px', borderStyle: 'solid' }}>
                {' '}
                {extension === 'jpg' ||
                extension === 'jpeg' ||
                extension === 'png' ? (
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
                ) : extension === 'pdf' ? (
                  <div class="iframe-loading">
                    <iframe
                      id="IFRAME"
                      className="PDFIMG"
                      onLoad={iframeLoaded}
                      onError={updateIframeSrc}
                      ref={iframeRef}
                      src={getIframeLink()}
                      // src={`https://docs.google.com/gview?url=${imagePath}&embedded=true`}
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
                )}
                {extension === 'jpg' ||
                extension === 'jpeg' ||
                extension === 'png' ? (
                  <img
                    src={filePath2}
                    style={{
                      width: '30%',
                      borderStyle: 'solid',
                      marginTop: '5px',
                      marginLeft: '2px',
                    }}
                    alt={file.document_name}
                  />
                ) : extension === 'pdf' ? (
                  <div class="iframe-loading">
                    <iframe
                      id="IFRAME"
                      className="PDFIMG"
                      onLoad={iframeLoaded}
                      onError={updateIframeSrc}
                      ref={iframeRef}
                      src={getIframeLink()}
                      // src={`https://docs.google.com/gview?url=${imagePath}&embedded=true`}
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
                )}
                {extension === 'jpg' ||
                extension === 'jpeg' ||
                extension === 'png' ? (
                  <img
                    src={filePath2}
                    style={{
                      width: '30%',
                      borderStyle: 'solid',
                      marginTop: '5px',
                      marginLeft: '2px',
                    }}
                    alt={file.document_name}
                  />
                ) : extension === 'pdf' ? (
                  <div class="iframe-loading">
                    <iframe
                      id="IFRAME"
                      className="PDFIMG"
                      onLoad={iframeLoaded}
                      onError={updateIframeSrc}
                      ref={iframeRef}
                      src={getIframeLink()}
                      // src={`https://docs.google.com/gview?url=${imagePath}&embedded=true`}
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
                )}
                {extension === 'jpg' ||
                extension === 'jpeg' ||
                extension === 'png' ? (
                  <img
                    src={filePath2}
                    style={{
                      width: '30%',
                      borderStyle: 'solid',
                      marginTop: '5px',
                      marginLeft: '2px',
                    }}
                    alt={file.document_name}
                  />
                ) : extension === 'pdf' ? (
                  <div class="iframe-loading">
                    <iframe
                      id="IFRAME"
                      className="PDFIMG"
                      onLoad={iframeLoaded}
                      onError={updateIframeSrc}
                      ref={iframeRef}
                      src={getIframeLink()}
                      // src={`https://docs.google.com/gview?url=${imagePath}&embedded=true`}
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
                )}
                {/* <img
                  src={filePath}
                  style={{
                    width: '30%',
                    borderStyle: 'solid',
                    marginTop: '5px',
                    marginLeft: '2px'
                  }}
                  alt={file.document_name}
                />
                <img
                  src={filePath}
                  style={{
                    width: '30%',
                    borderStyle: 'solid',
                    marginLeft: '5px',
                    marginTop: '5px'
                  }}
                  alt={file.document_name}
                />{' '}
                <img
                  src={filePath}
                  style={{
                    width: '30%',
                    borderStyle: 'solid',
                    marginTop: '5px'
                  }}
                  alt={file.document_name}
                />{' '}
                <img
                  src={filePath}
                  style={{
                    width: '30%',
                    borderStyle: 'solid',
                    marginTop: '5px',
                    marginLeft: '2px'
                  }}
                  alt={file.document_name}
                />{' '}
                <img
                  src={filePath}
                  style={{
                    width: '30%',
                    borderStyle: 'solid',
                    marginTop: '5px',
                    marginLeft: '2px'
                  }}
                  alt={file.document_name}
                /> */}
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
                  style={{ width: '30%' }}
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
                    // src={`https://docs.google.com/gview?url=${imagePath}&embedded=true`}
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
                {extension === 'jpg' ||
                extension === 'jpeg' ||
                extension === 'png' ? (
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
                ) : extension === 'pdf' ? (
                  <div class="iframe-loading">
                    <iframe
                      id="IFRAME"
                      className="PDFIMG"
                      onLoad={iframeLoaded}
                      onError={updateIframeSrc}
                      ref={iframeRef}
                      src={getIframeLink()}
                      // src={`https://docs.google.com/gview?url=${imagePath}&embedded=true`}
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
                )}
                {/*               
                <img
                  src={filePath}
                  style={{
                    width: '30%',
                    borderStyle: 'solid',
                    marginTop: '5px',
                    marginLeft: '2px'
                  }}
                  alt={file.document_name}
                />
                <img
                  src={filePath}
                  style={{
                    width: '30%',
                    borderStyle: 'solid',
                    marginLeft: '5px',
                    marginTop: '5px'
                  }}
                  alt={file.document_name}
                />{' '}
                <img
                  src={filePath}
                  style={{
                    width: '30%',
                    borderStyle: 'solid',
                    marginTop: '5px',
                    marginLeft: '2px'
                  }}
                  alt={file.document_name}
                />{' '}
                <img
                  src={filePath}
                  style={{
                    width: '30%',
                    borderStyle: 'solid',
                    marginTop: '5px',
                    marginLeft: '2px'
                  }}
                  alt={file.document_name}
                />{' '} */}
                {extension === 'jpg' ||
                extension === 'jpeg' ||
                extension === 'png' ? (
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
                ) : extension === 'pdf' ? (
                  <div class="iframe-loading">
                    <iframe
                      id="IFRAME"
                      className="PDFIMG"
                      onLoad={iframeLoaded}
                      onError={updateIframeSrc}
                      ref={iframeRef}
                      src={getIframeLink()}
                      // src={`https://docs.google.com/gview?url=${imagePath}&embedded=true`}
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
                )}
                {extension === 'jpg' ||
                extension === 'jpeg' ||
                extension === 'png' ? (
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
                ) : extension === 'pdf' ? (
                  <div class="iframe-loading">
                    <iframe
                      id="IFRAME"
                      className="PDFIMG"
                      onLoad={iframeLoaded}
                      onError={updateIframeSrc}
                      ref={iframeRef}
                      src={getIframeLink()}
                      // src={`https://docs.google.com/gview?url=${imagePath}&embedded=true`}
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
                )}
                {extension === 'jpg' ||
                extension === 'jpeg' ||
                extension === 'png' ? (
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
                ) : extension === 'pdf' ? (
                  <div class="iframe-loading">
                    <iframe
                      id="IFRAME"
                      className="PDFIMG"
                      onLoad={iframeLoaded}
                      onError={updateIframeSrc}
                      ref={iframeRef}
                      src={getIframeLink()}
                      // src={`https://docs.google.com/gview?url=${imagePath}&embedded=true`}
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
                )}
                {extension === 'jpg' ||
                extension === 'jpeg' ||
                extension === 'png' ? (
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
                ) : extension === 'pdf' ? (
                  <div class="iframe-loading">
                    <iframe
                      id="IFRAME"
                      className="PDFIMG"
                      onLoad={iframeLoaded}
                      onError={updateIframeSrc}
                      ref={iframeRef}
                      src={getIframeLink()}
                      // src={`https://docs.google.com/gview?url=${imagePath}&embedded=true`}
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
                )}
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

        <h4 style={{ marginLeft: '5rem' }}>
          <b>Sort by: Customer</b>
        </h4>

        <Modal.Body>
          <div className="row">
            {/* <div className='r'></div> */}

            <div className="col-4">
              <div style={{ borderStyle: 'solid' }}>
                <h3 style={{ marginLeft: '3rem' }}>Customer 1</h3>
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
                    // src={`https://docs.google.com/gview?url=${imagePath}&embedded=true`}
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
              <div
                style={{
                  marginTop: '10px',
                  borderStyle: 'solid',
                  height: '300px',
                }}
              >
                {' '}
                {/* <img
                  src={filePath}
                  style={{
                    width: '30%',
                    borderStyle: 'solid',
                    marginTop: '5px',
                    marginLeft: '2px'
                  }}
                  alt={file.document_name}
                />
                <img
                  src={filePath}
                  style={{
                    width: '30%',
                    borderStyle: 'solid',
                    marginLeft: '5px',
                    marginTop: '5px'
                  }}
                  alt={file.document_name}
                />{' '}
                 */}
                {extension === 'jpg' ||
                extension === 'jpeg' ||
                extension === 'png' ? (
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
                ) : extension === 'pdf' ? (
                  <div class="iframe-loading">
                    <iframe
                      id="IFRAME"
                      className="PDFIMG"
                      onLoad={iframeLoaded}
                      onError={updateIframeSrc}
                      ref={iframeRef}
                      src={getIframeLink()}
                      // src={`https://docs.google.com/gview?url=${imagePath}&embedded=true`}
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
                )}
                {extension === 'jpg' ||
                extension === 'jpeg' ||
                extension === 'png' ? (
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
                ) : extension === 'pdf' ? (
                  <div class="iframe-loading">
                    <iframe
                      id="IFRAME"
                      className="PDFIMG"
                      onLoad={iframeLoaded}
                      onError={updateIframeSrc}
                      ref={iframeRef}
                      src={getIframeLink()}
                      // src={`https://docs.google.com/gview?url=${imagePath}&embedded=true`}
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
                )}
                {extension === 'jpg' ||
                extension === 'jpeg' ||
                extension === 'png' ? (
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
                ) : extension === 'pdf' ? (
                  <div class="iframe-loading">
                    <iframe
                      id="IFRAME"
                      className="PDFIMG"
                      onLoad={iframeLoaded}
                      onError={updateIframeSrc}
                      ref={iframeRef}
                      src={getIframeLink()}
                      // src={`https://docs.google.com/gview?url=${imagePath}&embedded=true`}
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
                )}
              </div>
            </div>

            <div className="col-4">
              <div style={{ borderStyle: 'solid' }}>
                {' '}
                <h3 style={{ marginLeft: '3rem' }}>Customer 2</h3>
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
                    // src={`https://docs.google.com/gview?url=${imagePath}&embedded=true`}
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

              <div
                style={{
                  marginTop: '10px',
                  borderStyle: 'solid',
                  height: '300px',
                }}
              >
                {' '}
                {/* <img
                  src={filePath}
                  style={{
                    width: '30%',
                    borderStyle: 'solid',
                    marginTop: '5px',
                    marginLeft: '2px'
                  }}
                  alt={file.document_name}
                /> */}
                {/* <img
                  src={filePath}
                  style={{
                    width: '30%',
                    borderStyle: 'solid',
                    marginLeft: '5px',
                    marginTop: '5px'
                  }}
                  alt={file.document_name}
                /> */}
                {extension === 'jpg' ||
                extension === 'jpeg' ||
                extension === 'png' ? (
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
                ) : extension === 'pdf' ? (
                  <div class="iframe-loading">
                    <iframe
                      id="IFRAME"
                      className="PDFIMG"
                      onLoad={iframeLoaded}
                      onError={updateIframeSrc}
                      ref={iframeRef}
                      src={getIframeLink()}
                      // src={`https://docs.google.com/gview?url=${imagePath}&embedded=true`}
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
                )}
                {extension === 'jpg' ||
                extension === 'jpeg' ||
                extension === 'png' ? (
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
                ) : extension === 'pdf' ? (
                  <div class="iframe-loading">
                    <iframe
                      id="IFRAME"
                      className="PDFIMG"
                      onLoad={iframeLoaded}
                      onError={updateIframeSrc}
                      ref={iframeRef}
                      src={getIframeLink()}
                      // src={`https://docs.google.com/gview?url=${imagePath}&embedded=true`}
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
                )}
              </div>
            </div>

            <div className="col-4">
              <div style={{ borderStyle: 'solid' }}>
                {' '}
                <h3 style={{ marginLeft: '3rem' }}>Customer 3</h3>
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
                    // src={`https://docs.google.com/gview?url=${imagePath}&embedded=true`}
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

              <div
                style={{
                  marginTop: '10px',
                  borderStyle: 'solid',
                  height: '300px',
                }}
              >
                {' '}
                {/* <img
                  src={filePath}
                  style={{
                    width: '40%',
                    borderStyle: 'solid',
                    marginTop: '5px',
                    marginLeft: '2px'
                  }}
                  alt={file.document_name}
                />
                <img
                  src={filePath}
                  style={{
                    width: '40%',
                    borderStyle: 'solid',
                    marginLeft: '5px',
                    marginTop: '5px'
                  }}
                  alt={file.document_name}
                />
                
                <img
                  src={filePath}
                  style={{
                    width: '40%',
                    borderStyle: 'solid',
                    marginLeft: '5px',
                    marginTop: '5px'
                  }}
                  alt={file.document_name}
                /> */}
                {extension === 'jpg' ||
                extension === 'jpeg' ||
                extension === 'png' ? (
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
                ) : extension === 'pdf' ? (
                  <div class="iframe-loading">
                    <iframe
                      id="IFRAME"
                      className="PDFIMG"
                      onLoad={iframeLoaded}
                      onError={updateIframeSrc}
                      ref={iframeRef}
                      src={getIframeLink()}
                      // src={`https://docs.google.com/gview?url=${imagePath}&embedded=true`}
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
                )}
                {extension === 'jpg' ||
                extension === 'jpeg' ||
                extension === 'png' ? (
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
                ) : extension === 'pdf' ? (
                  <div class="iframe-loading">
                    <iframe
                      id="IFRAME"
                      className="PDFIMG"
                      onLoad={iframeLoaded}
                      onError={updateIframeSrc}
                      ref={iframeRef}
                      src={getIframeLink()}
                      // src={`https://docs.google.com/gview?url=${imagePath}&embedded=true`}
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
                )}
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

export default BatchPreview;
