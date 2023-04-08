import React, { useState , useEffect } from "react";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  FormGroup,
  Label,
  Input,
} from "reactstrap";

const DocumentDetailsModal = (props) => {
  const [formLabel, setFormLabel] = useState("");
  // const [formData, setFormData] = useState();
  const [detailsValidator, setdetailsValidator] = useState(false);
  const [textVal,settextval] = useState([])
  console.log(props.imageDimensions.width)
  console.log(props.ofAnno)
  // 
  // 
  let firValInd = textVal.filter((item,index)=>{
    return (index%2==0)
  })
  // 
  firValInd.length >1 && firValInd.splice(-1)
  // 
  console.log(firValInd)
  let secValInd = textVal.filter((item,index)=>{
    return(index%2==1)
  })
  // 
  console.log(secValInd)
  // 
  secValInd.length > 1 && secValInd.splice(-1)
  console.log(secValInd)
  // 
  let lastObj = props.ofAnno.filter((item,index)=>{
    return(index%2==0)
  })
  // 
  lastObj.length>1 && lastObj.splice(-1)
  // 
  let lastObj1 = props.ofAnno.filter((item,index)=>{
    return (index %2 ==1)
  })
  // 
  
  // 
  lastObj1.length >1 && lastObj.splice(-1)
  // 
  let width
  let height
  let x 
  let y
  let width1
  let height1
  let x1
  let y1
  // 
  lastObj.map((item)=>{
      return(
        width=item.mark.width,
            height=item.mark.height,
            x=item.mark.x,
           y=item.mark.y
      )
  })
  // 
  lastObj1.map((item)=>{
    return(
      width1=item.mark.width,
          height1=item.mark.height,
          x1=item.mark.x,
         y1=item.mark.y
    )
})
// 
let newObj2 = {
   LabelDetection:{
      Text:firValInd[0],
   Geometry:{
   BoundingBox:{
    Width:width/props.imageDimensions.width,
    Height:height/props.imageDimensions.height,
    Left:x/props.imageDimensions.width,
    Top:y/props.imageDimensions.height,
   },
   Polygon:[
  {X:x/props.imageDimensions.width,Y:y/props.imageDimensions.height},
  {X:x/props.imageDimensions.width,Y:y/props.imageDimensions.height+width},
  {X:x/props.imageDimensions.width+height,Y:y/props.imageDimensions.height},
  {X:x/props.imageDimensions+height,Y:y/props.imageDimensions.height+width},
  ]
 }
},
   ValueDetection:{
    Text:formLabel,
Geometry:{
    BoundingBox:{
    Width:width1/props.imageDimensions.width,
    Height:height1/props.imageDimensions.height,
    Left:x1/props.imageDimensions.width,
    Top:y1/props.imageDimensions.height,
   },
   Polygon:[
  {X:x1/props.imageDimensions.width,Y:y1/props.imageDimensions.height},
  {X:x1/props.imageDimensions.width,Y:y1/props.imageDimensions.height+width1},
  {X:x1/props.imageDimensions.width+height1,Y:y1/props.imageDimensions.height},
  {X:x1/props.imageDimensions.width+height1,Y:y1/props.imageDimensions.height+width1},
 ]
 }
}
}




  // 
  function addInput() {
    // console.log("Label", formLabel, "Data", formData);
    if (formLabel) {
      props.toggle();
      // 
      settextval([...textVal,formLabel])
      


      

    
      // 
      
      console.log(newObj2)
      // 
      let obj = [...props.expenseAll,newObj2]
      props.setexpenseAll(obj)
      console.log(props.expenseAll)
      let newArr = [...props.docContents, formLabel];

      // newArr[props.index][formLabel]= formData;
      // 
      console.log(textVal)
      // 
      props.setDocContents(newArr);
      // console.log(props.docContents);
      setFormLabel("");
      setdetailsValidator(false);
    } else if (!formLabel) {
      setdetailsValidator(true);
      // console.log("please enter details");
    }

    // props.setDocContents((prev) => {
    //     return {
    //         ...prev,
    //         [formLabel]:formData
    //     }
    // });
    // console.log({ formLabel: formData });
  }
  // onclick on cancel btn of model
  const cancelModel = () => {
    // console.log(props.docContents);
    setdetailsValidator(false);
    props.toggle();
    // props.setDocContents(props.docContents?.pop());
    // props.docContents.pop()
  };
  const closeBtn = (
    <button className="close" onClick={props.toggle} style={{ color: "red" }}>
      &times;
    </button>
  );
  // 
   
    
  
  // 
  return (
    <div>
      <Modal isOpen={props.modal} toggle={props.toggle} backdrop="static">
        {/* <ModalHeader toggle={props.toggle} close={closeBtn}>
          Add new detail
        </ModalHeader> */}
        <ModalBody>
          <FormGroup>
            <Label for="Field">
              {props.toggleAdvance ? (
                <strong>Enter Label </strong>
              ) : (
                <strong>Enter Value </strong>
              )}
            </Label>
            <Input
              type="text"
              placeholder="Field Name"
              id="Field"
              name={formLabel}
              // value={formLabel}
              onChange={(e) => {
                setFormLabel(e.target.value);
              }}
            />
            {detailsValidator && (
              <h6 style={{ color: "red", fontWeight: "bold", margin: "5px 0" }}>
                Please enter value!
              </h6>
            )}
            {/* <Label for="Data" style={{ marginTop: "8px" }}><strong>Data</strong></Label>
            <Input
              type="text"
              placeholder="Data"
              name={formData}
              value={formData}
              id="Data"
              onChange={(e) => {
                setFormData(e.target.value);
              }}
            /> */}
          </FormGroup>
          <Button
            className="w-100"
            color="primary"
            onClick={() => {
              // props.toggle();
              addInput();
            }}
          >
            <strong>&nbsp;Add &nbsp;</strong>
          </Button>
        </ModalBody>
        {/* <ModalFooter>
          <Button
            color="primary"
            onClick={() => {
              // props.toggle();
              addInput();
            }}
          >
            f=<strong>&nbsp;Add &nbsp;</strong>
          </Button> */}
        {/* <Button
            color="secondary"
            onClick={
              () => cancelModel()
              // props.toggle
            }
          >
            <strong> Cancel</strong>
          </Button> */}
        {/* </ModalFooter> */}
      </Modal>
    </div>
  );
};

export default DocumentDetailsModal;
