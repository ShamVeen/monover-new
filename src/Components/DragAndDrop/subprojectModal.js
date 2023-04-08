import axios from "axios"
import React, { useState, useEffect } from "react"
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  FormGroup,
  Input,
  Label
} from "reactstrap"
import { url } from "../../GlobalUrl"
import CommonModal from "../CommonModal/CommonModal"
import CommonModal1 from "../CommonModal/CommanModel1"
import Checks, { isAlphabets, isEmpty } from "./Checks"
import ClientModal from '../comps/ClientModal';
import logo from '../../images/landing/icon.svg' ;
import {
    Container,
    Tooltip,
    OverlayTrigger,
    Row,
    Col,
} from "react-bootstrap";




const SubprojectModal = (props) => {

  let tempClient = props.editClientId
  const [commonModal, setCommonModal] = useState(false)
  const [commonModal1, setCommonModal1] = useState(false)
  const [msg, setMsg] = useState("")
const [message,setMessage]=useState('')
  const [title, setTitle] = useState('')
  const [client, setClient] = useState('')
  const [showClientModal, setShowClientModal] = useState(false)
  // console.log("subprojectmodal",props);
  const handleClose = () => setShowClientModal(false);

  // var formData = new FormData();




  const { subProjectListApi } = props
const {fetchClients} = props



  useEffect(() => {
    if (props.projectId) {
      setClient(props.projectId)
    }
  }, [])


  const token = localStorage.getItem("token")

  // console.log("drrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrr",client)

  const commonToggle = () => setCommonModal(!commonModal)
  const commonToggle1 = () => setCommonModal1(!commonModal1)
  // 
 
  // 
  async function addSubProject() {
   let projectidC =   client.length<1 ? tempClient: client
   
    await axios
      .post(url + "/api/cu-subproject/", {
         "sub_project_name": title,
         "project_id": projectidC
      }, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
      .then((res) => {
        // console.log("RESP", res);
        if (res.status === 200) {
          setMsg(title + " folder added successfully !")
          setCommonModal(true)
          // alert(title +" added successfully !")
          subProjectListApi()
        }
        handleClear()
      })
      .catch((err) => {
        console.log("ERROR", err)
        setMsg("Error!")
        setCommonModal(true)
        // alert("Error !");
        handleClear()
      })
      window.location.reload()
  // }
  }
  function sendData() {
   
    var err = false;
    if ( title == '') {

      setMessage("Please Enter Order  Name ")
      setCommonModal1(true)
      err=true
    } 
    if(client == '' && !props.clientName) {
      setMsg("Please Select Client Name")
      setCommonModal(true)
      err=true

    }
    if(!err) {
      addSubProject()
      props.toggle()
    }
  }

  function handleClear() {
    setTitle('')
    setClient('')
    props.toggle()
  }

  // window.$(document).ready(function () {
  //   window.$("#Title").keypress(function (e) {
  //     if (e.keyCode === 13) {
  //       props.toggle();
  //       sendData();
  //     }
  //   });
  // });
  // 

  // 
  const closeBtn = (
    <button
      className="close"
      onClick={() => {
        props.toggle()
        handleClear()
      }}
      style={{ color: "red" }}
    >
      &times;
    </button>
  )
  return (
    <div>
     
      <Modal isOpen={props.modal} toggle={props.toggle}>
        <ModalHeader
          toggle={props.toggle}
          close={closeBtn}
          style={{ padding: "4px 10px" }}
        >
          <b>Create New Order</b>
        </ModalHeader>
        <ModalBody>
          <form
            onSubmit={(e) => {
              e.preventDefault()
              sendData()
            }}
          >
            <FormGroup>
              <Input
                type="text"
                placeholder='Enter Order folder title'
                id="Title"
                name={title}
                value={title}
                onChange={(e) => {
                  setTitle(e.target.value)
                }}
                required
              />
            </FormGroup >
            {!props.projectId && (
        
                <Input type="select" name="selectMulti" id="exampleSelectMulti"multyple 
             
                  onChange={(e) => setClient(e.target.value)}
                 
                >
                  <option defaultValue={props.clientName}>{props.clientName ? props.clientName :'Select Customer'}</option>
                  {props.clients.map(client => (
                    <option key={client.id} value={client.id}>{client.project_name}</option>
                  ))}
                </Input>
           
            )}
          </form>
          <div  style={{marginLeft:'0px',display:'flex',justifyContent:'flex-end',marginRight:'4px'}} >
        {/* <div style={{display:'flex',justifyContent:'flex-end'}}> */}
                                    {/* <OverlayTrigger
                                        placement={"top"}
                                        overlay={<Tooltip>Add Client</Tooltip>}
                                    >
                                        <img
                                            alt="folder-icon-add"
                                            // className="c-pointer"
                                            src={AddFolder2}
                                            style={{ width: "37px", cursor: "pointer", height: "37px",fontWeight:800 }}
                                            onClick={() => {
                                                setShowClientModal(prev => !prev)
                                            }}
                                        />
                                    </OverlayTrigger> */}
                                    {/* <div>b</div> */}
                           {/* </div>
                           <div> */}
                                    <p     onClick={() => {
                                                setShowClientModal(prev => !prev)
                                            }}><b style={{fontSize:14,cursor:'pointer',fontWeight:500,color:'#0070ff'}}>New Client</b></p>
                                {/* </div> */}
                                </div>
        </ModalBody>
        
        <ModalFooter style={{ padding: "14px 15px" }}>
          <Button
            type="submit"
            onClick={() => {
              sendData()
            }}
            id="addButton"
            color="primary"
          >
            &nbsp;<strong> Add</strong> &nbsp;
          </Button>
          <Button
            color="secondary"
            onClick={() => {
              handleClear()
            }}
          >
            Cancel
          </Button>
        </ModalFooter>
      </Modal>
      <CommonModal modal={commonModal} toggle={commonToggle} msg={msg} />
      <CommonModal1 modal={commonModal1} toggle={commonToggle1} message={message} />
      <ClientModal show={showClientModal}
      fetchClients={fetchClients}
      handleClose={handleClose} />
    </div>
  )
}

export default SubprojectModal
