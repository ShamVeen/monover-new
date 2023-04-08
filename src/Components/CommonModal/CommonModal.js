import React from "react";
import { Modal, ModalBody, ModalFooter, Button } from "reactstrap";

const CommonModal = (props) => {
    const check = (e)=>{
        console.log(e.key);
      }
    return (
        <Modal   isOpen={props.modal} toggle={props.toggle} backdrop={"static"}>
            
            <ModalBody>
                {props.msg}
            </ModalBody>
            {/* <ModalFooter style={{ padding: '4px 15px' }}> */}
                {/* <Button color="primary" onClick={() => props.toggle()}>
                    Ok
                </Button> */}
            <div className="d-flex justify-content-center  p-4">
                <Button  color="primary" onClick={() => props.toggle()}>
                        Okay
                    </Button>
                {
                    props.additional &&
                    <Button color="info"
                    className="ml-2"
                     onClick={() => props.additional()}>
                        Cancel
                    </Button>
                }
                </div>
            {/* </ModalFooter> */}
            
        </Modal>)
}

export default CommonModal;