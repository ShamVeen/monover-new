import React from 'react'
import {
    Button,
    Modal,
    ModalHeader,
    ModalBody,
    ModalFooter,
   
  } from "reactstrap"



const ClientDropModal2 = (props) => {
  console.log(props)
  // 
  const sendData = async() =>{
   await props.addDropFolder()
  } 
  // 
    const handleClear =  () =>{
        props.toggle()
    }
    //
  return (
    <>
       {props.modal &&
        <Modal isOpen={props.modal} toggle={props.toggle}>
        <ModalHeader
        >
          <b>Are you sure to add document ?</b>
        </ModalHeader>
        <ModalBody>
          Add documents to { props.onDropData && props.onDropData.folder.sub_project_name ? props.onDropData.folder.sub_project_name : 'Subfolder' }
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
        }
    </>
  )
}

export default ClientDropModal2