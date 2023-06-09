import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { url } from '../../GlobalUrl';
import Top from '../Top';
import ScreenTop from '../mobileComp/ScreenTop';
import BBoxAnnotator from 'react-bbox-annotator';
import { useNavigate } from 'react-router';
import { IoMdArrowRoundBack } from 'react-icons/io5';
import { FaTimes } from 'react-icons/fa';

import { IconButton } from '@material-ui/core';
import { CgAddR } from 'react-icons/cg';
import { AiOutlineArrowRight } from 'react-icons/ai';

import DocumentDetailsModal from './DocumentDetailsModal';
import { Button } from 'react-bootstrap';
import { ToastContainer, toast } from 'react-toastify';
import { Col, Row } from 'react-bootstrap';
import { useRef } from 'react';
import ClientModal from './ClientModel5';
import { Spinner } from 'reactstrap';

// import preprocessImage from './Preprocess';
import Tesseract from 'tesseract.js';

// import axios from "axios"
// import './App.css';
const UseAsTemplateImage = ({ match }) => {
  // ---------------split array in two-two parts-------------------------
  function chunkArrayInGroups(arr, size) {
    var result = [];
    for (var i = 0; i < arr.length; i += size)
      result.push(arr.slice(i, i + size));
    return result;
  }
  // ----------------------------------------
  const [apiGod, setapiGod] = useState(null);
  const docId = match.params.id;
  const navigate = useNavigate();
  const [combineArray, setcombineArray] = useState([]);
  const [fields, setFields] = useState([]);
  const [imagePath, setImagePath] = useState(null);
  const [docName, setDocName] = useState(null);
  const [modal, setModal] = useState(false);
  const [modaled, setModaled] = useState(false);
  const [entries, setEntries] = useState([]);
  const [is_doc_loading, set_doc_loading] = useState(true);
  //   changes---
  //   const labels = modaled ? ["V"] : ["L"];
  const [toggleAdvance, settoggleAdvance] = useState(false);

  //   --------
  const [field, setField] = useState([]);
  // console.log("doctryconclusion", fields);
  // console.log("doctryconclusion", myDoc);
  // console.log("doctryconclusion", docName);
  // console.log("doctryconclusion", imagePath);
  // console.log("doctryconclusion", entries);

  const token = localStorage.getItem('token');
  // console.log(token);
  // alert(JSON.stringify(token))

  // console.log(JSON.stringify(token));
  // console.log(token);
  const [image, setImage] = useState({ bytes: '' });
  const [text, setText] = useState('');
  const canvasRef = useRef(null);
  const imageRef = useRef(null);

  const [docForm, setDocForm] = useState([]);

  const [showClientModal, setShowClientModal] = useState(false);
  const handleClose = () => setShowClientModal(false);

  const handleChange = (event) => {
    setImage(event.target.files[0]);
  };

  // console.log(
  //   "dsssssssssssssssssssssssssssssssssssssssssssssssssssssssssssss",
  //   imagePath
  // );

  const handleDocumntContent = (index, event, key) => {
    const { name, value } = event.target;
    const v = event.target.value;
    console.log(v);
    console.log(key);
    let newArr = [...docForm];

    newArr[index][1] = value;

    setDocForm(newArr);
    // setDocContents((prevData) => {
    //   return {
    //     ...prevData,
    //     [name]: value,
    //   };
    // });
    // setObjectData({ document_content: JSON.stringify(docContents) });
    // console.log("OBJECTDATA",objectData)
  };

  const handleClick = async () => {
    var formData = new FormData();
    formData.append('image', imagePath);
    //   formData.append("l",entries)

    await axios
      .post('http://34.93.209.224:8000/api/image-ocr/', formData, {
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
      })
      .then((res) => {
        // console.log("ttttttttttttttttttttttttttttttttttttttt", res);
        let text = res.data.text.alert(JSON.stringify(text));
        setText(text);

        if (res.status === 200) {
          // alert("Document added successfully!");
          // toast.success("Document added successfull", {
          //   position: "top-center",
          //   autoClose: 3000,
          //   hideProgressBar: false,
          //   closeOnClick: true,
          //   pauseOnHover: true,
          //   draggable: true,
          //   progress: undefined,
          // });
        }
      })
      .catch((err) => {
        // setLoading(false);
        // console.log(err);
        alert('Error !');
        //     //handleClear();
      });
  };

  const handledata = () => {
    return text.map((item, index) => {
      return (
        <div
          style={{
            border: '0.5px solid #dfe6e9',
            borderRadius: 5,
            display: 'flex',
            flexDirection: 'column',
            margin: 10,
          }}
        >
          {item}
        </div>
      );
    });
  };

  const toggle = () => setModal(!modal);
  const toggl = () => setModaled(!modaled);
  async function documentDetailsApi() {
    set_doc_loading(true);
    await axios
      .get(url + `/api/document/${docId}/`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
      })
      .then((res) => {
        setapiGod(res);
        setImagePath(res.data.file);
        console.log('res', res);
        setDocForm(Object.entries(res.data.document_content.SummaryFields));
        setDocName(res.data.document_name);
        set_doc_loading(false);
      })
      .catch((err) => {
        console.log(err);
        set_doc_loading(false);
      });
  }

  useEffect(() => {
    documentDetailsApi();
  }, []);

  // console.log("summaryfields", docForm);
  const handleDocumentContent = (index, event) => {
    let newArr = [...fields];
    newArr[index][1] = event.target.value;
    setFields(newArr);

    // docForm.push(fields)
  };

  // const [field,setField]=useState([])
  const handleDocument = (index, event) => {
    let newArr = [...field];
    newArr[index][1] = event.target.value;
    setField(newArr);
    // console.log("fields",field)
  };

  async function addAsTemplateApi() {
    // alert("Add As Template")
    // console.log("TOOOOKEN:",token)
    // console.log("DOCID:",docId)
    await axios
      .patch(
        url + `/api/document/${docId}/`,
        {
          is_template: 1,
        },
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      )
      .then((res) => {
        console.log('PATCH RESPONSE', res.data);
        // alert("Form updated successfully");
        // setMsg("Form updated successfully");
        toast.success('This Form is Successfully added as Template', {
          position: 'top-center',
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      })
      .catch((err) => {
        console.log('patch req err', err);
        setMsg('Form Could not add as template');
      });
  }

  async function documentUpdate2Api() {
    // console.log(combineArray);
    // console.log(apiGod.data.document_content.SummaryFields);
    let arrPush = {};
    combineArray.map((elem) => {
      let keysArr = [elem[0]];
      let valuesArr = [elem[1]];
      let result = Object.assign.apply(
        {},
        keysArr.map((v, i) => ({ [v]: valuesArr[i] }))
      );
      arrPush = { ...arrPush, ...result };
    });
    // console.log(arrPush);
    alert('Document  2');
    apiGod.data.document_content.SummaryFields = arrPush;
    console.log(apiGod.data.document_content);
    await axios
      .patch(
        url + `/api/document/${docId}/`,
        {
          document_content: apiGod.data.document_content,
          document_entries: entries,
        },
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      )
      .then((res) => {
        console.log('PATCH RESPONSE', res);
        // alert("Form updated successfully");
        // setMsg("Form updated successfully");
        toast.success('fields are added Successfully', {
          position: 'top-center',
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      })
      .catch((err) => {
        console.log('patch req err', err);
        setMsg('Form Not updated');
      });
  }
  const [formArray, setFormArray] = useState(null);
  const [msg, setMsg] = useState('');
  async function documentUpdateApi() {
    //     console.log("consoleApiallhu",fields)
    // docForm.push(...fields);
    // console.log("fieldsssssssssssssssssssssssssssssssss",docForm)
    // console.log(JSON.stringify({document_content:formArray , SummaryFields: docForm }))

    //     console.log("Apiallhu",JSON.stringify(...myDoc, entries, fields))
    alert('Document  1');

    await axios
      .patch(
        url + `/api/document/${docId}/`,
        JSON.stringify({
          document_content: formArray,
          SummaryFields: docForm,
          document_entries: entries,
        }),
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      )
      .then((res) => {
        console.log('PATCH RESPONSE', res);
        // alert("Form updated successfully");
        // setMsg("Form updated successfully");
      })
      .catch((err) => {
        console.log('trytrytrytrytrytry', err);
        setMsg('Form Not updated');
      });
    // navigate.goBack();
    // toast.success(`Data added successfully`, {
    //   position: "top-center",
    //   autoClose: 3000,
    //   hideProgressBar: false,
    //   closeOnClick: true,
    //   pauseOnHover: true,
    //   draggable: true,
    //   progress: undefined,
    // });
    // await axios
    //     .patch(url + `/api/document/${docId}/`,JSON.stringify({document_content:formArray , SummaryFields: docForm }), {
    //         headers: {
    //             Authorization: `Bearer ${localStorage.getItem('token')}`,
    //         },
    //     })
    //     .then((res) => {
    //         console.log(res.data);
    //         toast.success('Document updated successfulyy')
    //     })
    //     .catch((err) => {
    //         console.log(err);
    //     });
  }
  //   const [annotatorArray, setannotatorArray] = useState([]);
  //   useEffect(() => {
  //     annotatorArray.map((element) => {
  //       console.log("elementpopup", [element.label]);
  //       if (element.label == "L") {
  //         toggl();
  //         settoggleAdvance(true);
  //       } else if (element.label == "V") {
  //         toggl();
  //         settoggleAdvance(false);
  //       }
  //     });
  //   }, [annotatorArray]);

  //   -------------------------------------------------------------------------------------------

  const handleshow = (e) => {
    console.log(e);
    e.map((element) => {
      if (element.label == 'L') {
        toggl();
        settoggleAdvance(true);
      } else if (element.label == 'V') {
        toggl();
        settoggleAdvance(false);
      }
    });
  };
  //   -------------------------------------------------------------------------------------------

  //   --------------------array 2 properties convert------------------------------------------------------
  useEffect(() => {
    setcombineArray([...docForm, ...chunkArrayInGroups(field, 2)]);
    console.log('effect runs');
  }, [field]);
  //   ------------------------------------------------------------------------------------------

  // const array=["1","2","","","","","",""]
  return (
    <>
      <div style={{ width: '100%', height: '100%' }}>
        <ScreenTop />
        <Top />
        <ToastContainer />

        {/* <div className="App">
      <main className="App-main"> */}
        {/* <h3>Actual image uploaded</h3>
        <img 
           src={image} className="App-logo" alt="logo"
           ref={imageRef} 
           />
        <h3>Canvas</h3>
        <canvas ref={canvasRef} width={700} height={250}></canvas> */}

        {/* <h3>Extracted text</h3>
        <div className="pin-box">
          <p> {handledata} </p>
        </div> 
        <input type="file" onChange={(event)=>handleChange(event)} />
        <button onClick={handleClick} style={{height:50}}>Convert to text</button>
      </main>
    </div> */}
        {is_doc_loading ? (
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              marginTop: '15vw',
              marginBottom: '15vw',
            }}
          >
            <Spinner
              animation="border"
              style={{ fontSize: '20px' }}
              role="status"
            >
              <span className="sr-only">Loading...</span>
            </Spinner>
            <h3 style={{ marginLeft: '20px' }}>Loading...</h3>
          </div>
        ) : (
          <div className="ml-5 mt-2">
            <div className="mb-4 p-2 shadow border rounded d-flex flex-row align-items-center  mr-5">
              <>
                <IconButton
                  style={{
                    background: 'black',
                    padding: '8px',
                    borderRadius: '50%',
                    marginRight: '25px',
                  }}
                  onClick={() => navigate.goBack()}
                >
                  <IoMdArrowRoundBack size={30} color="white" />
                </IconButton>
                <h2>Add as Template</h2>
              </>
              {/* <IconButton
              onClick={() => {
                toggle();
                console.log("ioioioio", fields);
              }}
            >
              <CgAddR size={25} color="black" />
            </IconButton> */}
            </div>
            <Row>
              <div className="d-flex flex-row">
                <div style={{ width: '110%' }}>
                  <h5 className="text-secondary">
                    <AiOutlineArrowRight /> Add Bounding boxes for Labels &
                    Values
                  </h5>
                  <div>
                    <BBoxAnnotator
                      style={{ width: '60% !important' }}
                      url={imagePath}
                      // url={
                      //   "https://milkgenomics.org/wp-content/uploads/2013/08/bigstock-cows-mother-and-baby-3998546.jpg"
                      // }
                      inputMethod="select"
                      labels={toggleAdvance ? 'V' : 'L'}
                      // labels={labels}
                      onChange={(e) => {
                        // setannotatorArray(e)
                        handleshow(e);
                        // const height = e.map(a => a.height);
                        // const width = e.map(a => a.width);
                        // const top =  e.map(a => a.top);
                        // const left =  e.map(a => a.left);
                        // const label =  e.map(a => a.label);

                        setEntries(e);
                      }}

                      //  setShowClientModal(prev => !prev)
                      //  onChange={(e) => setEntries(e)}
                      // onChange={(e) => setEntries(e)}
                    ></BBoxAnnotator>
                  </div>
                </div>

                <div className="ml-5 ">
                  {fields &&
                    fields.map((f, index) => (
                      <div className="Det_inputField" key={index}>
                        <label
                          style={{ fontWeight: 'bold' }}
                          className="Det_inputLabel d-flex flex-row"
                        >
                          <div className="mr-3">{f[0]}</div>
                        </label>
                        <div className="d-flex flex-row">
                          <input
                            style={{
                              border: '1px solid #e8e8e8',
                              backgroundColor: '#e8e8e8',
                              borderRadius: '12px',
                              fontSize: ' 16px',
                              padding: '10px 14px',
                              width: '85%',
                            }}
                            type="text"
                            name={f[1]}
                            value={f[1]}
                            key={f[1]}
                            onChange={(e) => handleDocumentContent(index, e)}
                          ></input>
                          <IconButton
                            style={{ marginLeft: '25px' }}
                            onClick={() =>
                              setFields(fields.filter((g) => g[1] !== f[1]))
                            }
                          >
                            <FaTimes color="red" />
                          </IconButton>
                        </div>
                      </div>
                    ))}
                  {fields.length > 0 && (
                    <Button
                      onClick={() => {
                        documentUpdateApi();
                      }}
                      className="w-100 mt-5"
                    >
                      Save Changes
                    </Button>
                  )}
                </div>
              </div>
              <div className="flex-row" style={{ width: '50%' }}>
                {docForm &&
                  docForm.map(([key, value], index) => (
                    <div className="Det_inputField">
                      <label
                        style={{ fontWeight: 'bold' }}
                        className="Det_inputLabel d-flex flex-row"
                      >
                        <div className="mr-3">{key}</div>
                      </label>
                      <Row>
                        <Col>
                          <input
                            style={{
                              border: '1px solid #e8e8e8',
                              backgroundColor: '#e8e8e8',
                              borderRadius: '12px',
                              fontSize: ' 16px',
                              padding: '10px 14px',
                              width: '85%',
                            }}
                            type="text"
                            name={value}
                            value={value}
                            // key={value}
                            onChange={(e) =>
                              handleDocumntContent(index, e, key)
                            }
                          ></input>
                          {/* <IconButton
                            style={{ marginLeft: "25px" }}
                            onClick={() =>
                              setDocForm(
                                docForm.filter((t) => t[index] !== value)
                              )
                            }
                          >
                            <FaTimes color="red" />
                          </IconButton> */}
                        </Col>
                      </Row>
                    </div>
                  ))}
                <div
                  // style={{ width: "40rem" }}
                  className=" "
                  // style={{ marginLeft: "10px", marginRight: "10px" }}
                >
                  {field &&
                    field.map((f, index) => (
                      <div className="Det_inputField" key={index} style={{}}>
                        {index % 2 == 0 ? (
                          <label
                            style={{ marginLeft: '0px', fontWeight: 'bold' }}
                            className="Det_inputLabel d-flex flex-row"
                          >
                            <div className="mr-3">{f}</div>
                          </label>
                        ) : (
                          <div className="d-flex flex-row">
                            <input
                              style={{
                                border: '1px solid #e8e8e8',
                                backgroundColor: '#e8e8e8',
                                borderRadius: '12px',
                                fontSize: ' 16px',
                                padding: '10px 14px',
                                width: '85%',
                              }}
                              type="text"
                              name={f}
                              value={f}
                              key={f}
                              onChange={(e) => handleDocument(index, e)}
                            ></input>

                            {/* <IconButton style={{ marginLeft: '25px' }}
                                            onClick={() => setField(field.filter(g => g[0] !== f[0]))}
                                        >
                                            <FaTimes color='red' />
                                        </IconButton>  */}
                          </div>
                        )}
                        {/*  */}

                        {/* <div className='d-flex flex-row'> */}
                        {/* <input
                                            style={{
                                                border: "1px solid #e8e8e8",
                                                backgroundColor: "#e8e8e8",
                                                borderRadius: "12px",
                                                fontSize: " 16px",
                                                padding: "10px 14px",
                                                width: "85%"
                                            }}

                                            type="text"
                                            name={f[1]}
                                            value={f[1]}
                                            key={f[1]}
                                            onChange={(e) => handleDocument(index, e)}
                                        ></input> */}
                        {/* <IconButton style={{ marginLeft: '25px' }}
                                            onClick={() => setField(field.filter(g => g[1] !== f[1]))}
                                        >
                                            <FaTimes color='red' />
                                        </IconButton> */}
                        {/* </div> */}
                        {/* <IconButton style={{ marginLeft: '25px' }}
                                            onClick={() => setField(field.filter(g => g[1] !== f[1]))}
                                        >
                                            <FaTimes color='red' />
                                        </IconButton>  */}
                      </div>
                    ))}
                  {field.length > 1 && (
                    <>
                      <Button
                        onClick={() => {
                          documentUpdate2Api();
                        }}
                        className="mt-5"
                        style={{
                          marginLeft: '5px',
                          borderRadius: '12px',
                          fontSize: ' 16px',
                          padding: '10px 24px',
                          width: '85%',
                        }}
                      >
                        Save Changes
                      </Button>
                    </>
                  )}
                  <Button
                    onClick={() => {
                      addAsTemplateApi();
                    }}
                    className="mt-5"
                    style={{
                      marginLeft: '5px',
                      borderRadius: '12px',
                      fontSize: ' 16px',
                      padding: '10px 24px',
                      width: '85%',
                    }}
                  >
                    Add As Template
                  </Button>
                </div>
              </div>
              {/* <div
                     style={{marginLeft:'200px',marginTop:'40px'}}>
                           
                         {JSON.stringify(entries)}
                         
                         
                         
                         </div> */}
            </Row>
          </div>
        )}
      </div>
      <DocumentDetailsModal
        toggle={toggle}
        modal={modal}
        documentId={docId}
        docContents={fields}
        setDocContents={setFields}
      />
      <ClientModal
        toggleAdvance={toggleAdvance}
        toggle={toggl}
        modal={modaled}
        documentId={docId}
        docContents={field}
        setDocContents={setField}
      />
      <ToastContainer newestOnTop style={{ zIndex: '999999999999999999999' }} />
    </>
  );
};

export default UseAsTemplateImage;
