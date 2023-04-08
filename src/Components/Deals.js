

import React, { useState, useEffect } from "react";
import axios from "axios";
import { url } from "../GlobalUrl";
import ScreenTop from "./mobileComp/ScreenTop";
import Loader from './Loader'
import Top from "./Top";
import {
    Container,
    Tooltip,
    OverlayTrigger,
    Row,
    Col,
    Modal
} from "react-bootstrap";
import { Link } from "react-router-dom";
import FilePreview from "./DragAndDrop/FilePreview5";
import {
    FaChevronDown,
 
} from "react-icons/fa";
import {

  BiSort,
  BiMenuAltLeft
} from "react-icons/bi";
import {
    SiMicrosoftexcel,
} from "react-icons/si";
import AddFolder2 from "../images/folder-add2.png";
import Share from "./Share";
import SubprojectModal from './DragAndDrop/subprojectModal'
import { useNavigate } from "react-router";
import logo from '../images/landing/icon.svg';
// import Excel from "./";
import '../App.css'
import {BsUpload } from 'react-icons/bs'
import {AiOutlineFolderAdd} from 'react-icons/ai'
import { useGlobalContext } from "../context";

const Deals = ({ match }) => {
    // 
    const {setsubProId,setdeal} = useGlobalContext() || {}

    const projectId = match.params.id
    
    const [deals, setDeals] = useState([])
    const [clientName, setClientName] = useState('')
    const [loading, setLoading] = useState(false)
    const [subProjectModal, setSubProjectModal] = useState(false);
    var navigate=useNavigate()
    const [modelStatus,setModal] = useState(false)
    setsubProId(projectId)
    const setModelStatus = (status,prj_id,prj_name) => {
        setModal({status : status,projectId : prj_id,prj_name:prj_name})
    }
      // 
       const [is_folders_loading, set_folders_loading] = useState(true);
       const [commonModal, setCommonModal] = useState(false);
       const [folder, setFolder] = useState([]);
       const [clients, setClients] = useState([]);
       const [file, setFile] = useState()

       // 
       // 
       async function subProjectListApi() {
       //  setLoading(true);
       //  if (projectId) {
       set_folders_loading(true);
       await axios
         // .get(url + "/api/filter/sub/project/", {
         .get(url + "/api/cu-subproject/", {
           headers: {
             Authorization: `Bearer ${localStorage.getItem("token")}`,
           },
         })
         .then((res) => {
           // console.log("subprojectList", res.data)
           setCommonModal(true);
           setFolder(res.data)
   
   
   
           const promises = res.data.map((sub_project) => {
             return load_previous_documents({ sub_project_id: sub_project.id });
           });
           return Promise.all(promises);
         })
         .then((data) => {
           // console.log(data);
           const obj = data.reduce((init, item) => {
             return {
               ...init,
               [item.sub_project_id]: item.documents,
             };
           }, {});
           // setDraggedFiles({
           //   ...draggedFiles,
           //   ...obj,
           // });
           set_folders_loading(false);
         })
         .catch((error) => {
           //  setLoading(false);
           console.log(error);
         });
       //  }
     }
   // 
   // 
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
   // 
   const fetchClients = async () => {
   
       const { data } = await axios.get(url + "/api/all-project", {
         headers: {
           Authorization: `Bearer ${localStorage.getItem("token")}`,
         },
   });
     setClients(data);
     // alert(data)
   };
    // 
    const deleteDeal = async (dealId) => {
        setLoading(true)
        await axios
        .delete(
            url + `/api/document/${dealId}/`,
            {
            
            },
        {
          headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
        }
      )
      .then((res) => {
       
        fetchDeals()
       
      })
      .catch((err) => {
        console.log("err", err);
      });
    //   alert("Deai ID: "+ dealId)
      setLoading(false)


}


    // fetch deals
    const fetchDeals = async () => {
        setLoading(true)
        console.log('deals id',match.params.id)
        var id=projectId

        const { data } = await axios.get(`${url}/api/document/list_documents/?id=${id}`, {
        }, {
            headers: {
                'Content-Type': "application/json",
                Authorization: `Bearer ${localStorage.getItem("token")}`
            }
            
        })
        var r=data.documents.documents
        var name=data.documents.sub_project_name
        setDeals(r)
        setdeal(r)
        setClientName(name)
    }

    //  hide model function
    const hideModel = () =>{
        setModal(false)
    }
    // 
    useEffect(() => {
        fetchDeals()
        subProjectListApi();
        fetchClients();
    }, [])

    const subProjectToggle = () => {
        setSubProjectModal(!subProjectModal);
    };
    // 
    

    
  function handleOnFileUpload(event) {
    setFile(event.target.files[0])
  }
    // 
    return (
        <>
      <div  className='mained'>
          {/* model condition */}
        { modelStatus ?
            <Row>
                <Col md={12}>

                <Modal 
                 onHide={hideModel}
                size="xl"
                show={modelStatus.status} style={{
                    width:'100%'
                }} >
                    <Modal.Header closeButton onClick={(ev)=>hideModel(ev)}>
                    <Modal.Title> Subprojects </Modal.Title>
                    </Modal.Header>

                        <Modal.Body style={{
                            width:'100%'
                        }}>
{/*                       
                        <Excel
                         dataDeal={projectId}
                         subfolder = {modelStatus.prj_name}
                         ></Excel> */}
                    </Modal.Body>
                </Modal>
                </Col>
            </Row> : ''
        }
            <ScreenTop />
            <Top />
            {/* {loading && <Loader />} */}
        {/* </div> */}
        <Container style={{maxWidth:'98.4%'}}>
      
      
                <Row>
                    <Col                                                    >
                        <div style={{marginTop:'30px'}}>
                            <div className=''style={{display:'flex',flexDirection:'row'}}>
                                <div>
                                    <OverlayTrigger
                                        placement={"top"}
                                        overlay={<Tooltip>Add Deal</Tooltip>}
                                    >
                                        <img
                                            alt="folder-icon-add"
                                            // className="c-pointer"
                                            src={AddFolder2}
                                            style={{ width: "52px", cursor: "pointer", height: "52px",fontWeight:800 }}
                                            onClick={() => {
                                                subProjectToggle()
                                            }}
                                        />
                                    </OverlayTrigger>
                                    {/* <div>b</div> */}
                                    <p className='text-center'><b style={{fontSize:11,fontWeight:700}}>New Deal</b></p>
                                </div>

                            </div>
                            <div className='d-flex flex-end'style={{borderRadius:'5px'}}>
                                <div style={{ fontWeight: 'bold',borderRadius:'8px', background: 'lightgray', marginLeft: 'auto',height:'28px',width:'158px' }}>
                                   <div style={{marginTop:'0px'}}>
                                    <BiSort />
                                    <BiMenuAltLeft className='' />
                                    <select style={{marginLeft:'6px',marginRight:'6px',fontSize:'13px',borderRadius:'10px',background:'lightgray',borderColor:'lightgray',fontWeight:700,WebkitAppearance:'none'}}>
                                        <option>Most Recent</option>
                                        <option>Date</option>
                                        <option>Size</option>
                                        <option>Alphabetically</option>
                                        </select>
                                    {/* Most Recent */}
                                    <FaChevronDown className='ml-2' />
                                </div>
                                </div>
                            </div>
                        </div>
                        
                            <div className="bz-card" style = {{ minHeight: "1rem",height:'450px', marginBottom: "38px", marginTop: "20px", width: "100%" }}
                            >
                               
                                <div className='d-flex flex-row justify-content-between'>
                                    <h4 style={{ fontWeight: 'bold',marginTop:'6px',fontSize:23,marginLeft:'2px'}}>{clientName}</h4>
                                    {/* <div style={{display:'flex',justifyContent:'flex-end'}}>  */}
                                    {/* <FaChevronDown style={{marginTop:'13px',marginRight:'5px'}} size={27} />  */}
                                    
                                    <div className='align-items-center' style={{display:'flex',flexDirection:'row'}}>
                                           {/* <AiOutlineFileZip size={23} item='folder'  /> */}
                                            {/*  */}
                                            <div
                                                onClick={() => {
                                                    subProjectToggle();
                                                }}
                                                className='uploadButton'
                                                >
                                                <OverlayTrigger placement="top" overlay={<Tooltip>Add Orders</Tooltip>}>
                                                    <AiOutlineFolderAdd className="fs30"/>
                                                </OverlayTrigger>
                                            </div> 
                                            {/*  */}
                                            {/* <Link to='/DragAndDrop'> */}
                                                <div className="uploadButton" >
                                                    
                                                    <OverlayTrigger placement={'top'} overlay={<Tooltip>Upload</Tooltip>}>
                                                        <BsUpload />
                                                    </OverlayTrigger>
                                                
                                                </div>
                                            {/* </Link> */}
                                           <OverlayTrigger placement={"top"} overlay={<Tooltip>Catalog</Tooltip>}>
                                           <img src={logo} style={{cursor:'pointer'}}  width='21px'></img>
                                           </OverlayTrigger>
                                            <Share size={23} item='folder'  />
                                            <SiMicrosoftexcel 
                                            size={23} 
                                            item='folder' 
                                            style={{
                                                cursor:'pointer'
                                            }}
                                            onClick={
                                                (event, rowData) => {
                                                    setModelStatus(true,projectId,clientName)
                                                  }
                                            }
                                            
                                            />
                                        </div>
                                       
                                </div>


                               
                             {(deals.length === 0) && <h3  className='m-5 text-center'><b style={{marginLeft:'10px',marginTop:'70px'}}>No Documents</b></h3>}

                                   <div  className=''style={{marginLeft:'1px',marginLeft:'20px',display:'flex',flexDirection:'row',flexWrap: "wrap",whiteSpace: "nowrap",width:'100%',marginTop:'42px',height:"138px",marginBottom:'0px'  }}>

                                        {deals.map((doc, index) => (
                                        <div style={{marginBottom:'22px',flex: 1}}>
                                            <FilePreview file={doc} deletedeal={deleteDeal}  />

                                        </div>  
                                        
                                        ))}

{/*                                         
                                        {deals.map((doc, index) => (
                                        <div style={{marginBottom:'22px',flex: 1}}>
                                            <FilePreview file={doc} deletedeal={deleteDeal}  />

                                        </div>  
                                        
                                        ))} */}

                                    </div>
                           
                                 

                            </div>
                            
                       
                        
                      
                    </Col>
                </Row>
            
            </Container>
            <SubprojectModal
                toggle={subProjectToggle}
                modal={subProjectModal}
                projectId={projectId}
                subProjectListApi={fetchDeals}
            />
        </div>
        </>
    )
}

export default Deals
