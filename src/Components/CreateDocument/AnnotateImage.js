import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { url } from '../../GlobalUrl'
import Top from '../Top'
import ScreenTop from '../mobileComp/ScreenTop'
import BBoxAnnotator, { EntryType } from 'react-bbox-annotator'
import { useNavigate } from 'react-router'
import {
  IoMdArrowRoundBack,
  
} from 'react-icons/io5';
import {
  FaTimes
} from 'react-icons/fa';
import {
  AiFillDelete,
  AiFillBoxPlot,
} from 'react-icons/ai';
import {
  MdLabelOff,
  MdLabelImportant,
} from 'react-icons/md';
import {
  BsArrowUpCircle
} from 'react-icons/bs';
import { IconButton } from '@mui/material';
import { CgAddR } from 'react-icons/cg';
import { AiOutlineArrowRight } from 'react-icons/ai'

import DocumentDetailsModal from './DocumentDetailsModal'
import { Button } from 'react-bootstrap'
import { ToastContainer, toast } from 'react-toastify'
import { OverlayTrigger, Tooltip } from 'react-bootstrap'
import { useRef } from 'react'
import ClientModal from './ClientModel5'
import '../../App.css'
import DraDragResizeContainer from 'react-drag-resize'
import { Resizable } from 're-resizable'
import {
  ReactPictureAnnotation,
  defaultShapeStyle
} from 'react-picture-annotation'
import Boundingbox from 'react-bounding-box'
// import { Draggable, Droppable } from "react-beautiful-dnd";

import { Draggable, Droppable } from 'react-beautiful-dnd'

// import preprocessImage from './Preprocess';
import Tesseract from 'tesseract.js'
import { waitFor } from '@testing-library/react'
//
const url1 = 'https://653a-150-107-179-168.ngrok.io '
//
const Boundingparams = {
  options: {
    colors: {
      normal: 'rgb(0, 0, 0)',
      selected: 'rgb(255,0,0)',
      unselected: 'rgb(0,0,0)'
    },
    style: {
      maxWidth: '100%',
      maxHeight: '90vh'
    }
    //showLabels: false
  }
}
// import axios from "axios"
// import './App.css';
const AnnotateImage = ({ match }) => {
  // ---------------split array in two-two parts-------------------------
  function chunkArrayInGroups(arr, size) {
    var result = []
    for (var i = 0; i < arr.length; i += size)
      result.push(arr.slice(i, i + size))
    return result
  }
  // ----------------------------------------
  const [apiGod, setapiGod] = useState(null)
  const docId = match.params.id
  const navigate = useNavigate()
  const [combineArray, setcombineArray] = useState([])
  const [fields, setFields] = useState([])
  const [imagePath, setImagePath] = useState(null)
  const [docName, setDocName] = useState(null)
  const [modal, setModal] = useState(false)
  const [modaled, setModaled] = useState(false)
  const [entry, setEntry] = useState()
  const [MyDoc, setMyDoc] = useState()

  const [toggleAdvance, settoggleAdvance] = useState(false)
  //
  // const [inputHeight,setinputHeight] = useState(50)
  // const [inputWidth,setinputWidth] = useState(250)
  //

  const [optionsVal, setoptionsVal] = useState(null)
  //
  //
  const koo = []
  const koo1 = []
  //   --------
  const [field, setField] = useState([])

  let map1 = []
  let map2 = []
  const token = localStorage.getItem('token')
  // console.log(token);
  // alert(JSON.stringify(token))

  // console.log(JSON.stringify(token));
  // console.log(token);
  const [image, setImage] = useState({ bytes: '' })
  const [text, setText] = useState('')
  const canvasRef = useRef(null)
  const imageRef = useRef(null)

  const [docForm, setDocForm] = useState([])
  const [ofAnno, setofAnno] = useState([])

  const [showClientModal, setShowClientModal] = useState(false)
  const handleClose = () => setShowClientModal(false)
  const [showForm, setshowForm] = useState(true)
  const [expenseAll, setexpenseAll] = useState([])
  const [showLabelDoc, setshowLabelDoc] = useState(false)
  //
  const [finalBoxArray, setFinalBoxArray] = useState([])
  const [loading, setloading] = useState(false)
  const [imageDimensions, setImageDimensions] = useState({})
  const [labelToggle, setlabelToggle] = useState(false)
  //
  const showLabelToggle = () => {
    setlabelToggle(!labelToggle)
  }
  //
  let imageUrl
  //
  let boxArray = []
  let boxArray1 = []
  const docArray = []
  //
  useEffect(async () => {
    await axios
      .get(url + `/api/document/${docId}/`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`
        }
      })
      .then(async (res) => {
        imageUrl = await res.data.file
        await setImageSize(setImageDimensions, imageUrl)
      })
      .catch((err) => console.log(err))
  }, [])
  //
  const aiFillOnClick = (e) => {
    e.preventDefault()
    setshowLabelDoc(!showLabelDoc)
  }
  //

  //

  //
  const handleChange = (event) => {
    setImage(event.target.files[0])
  }
  // style of resizable componet
  const reStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  }
  //
  const showFormOnClick = () => {
    setshowForm(!showForm)
  }

  // style of resizable componet end
  const handleClick = async () => {
    var formData = new FormData()
    formData.append('image', imagePath)

    await axios
      .post('http://34.93.209.224:8000/api/image-ocr/', formData, {
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json'
        }
      })
      .then((res) => {
        let text = res.data.text.alert(JSON.stringify(text))
        setText(text)

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
        // setLoading(false)
        alert('Error !')
      })
  }

  const handledata = () => {
    return text.map((item, index) => {
      return (
        <div
          key={index}
          style={{
            border: '0.5px solid #dfe6e9',
            borderRadius: 5,
            display: 'flex',
            flexDirection: 'column',
            margin: 10
          }}
        >
          {item}
        </div>
      )
    })
  }

  const toggle = () => setModal(!modal)
  const toggl = () => setModaled(!modaled)
  //
  //
  const setImageSize = (setImageDimensions, imageUrl) => {
    console.log(imageUrl)
    const img = new Image()
    img.src = imageUrl
    img.onload = async () => {
      await setImageDimensions({
        height: img.height,
        width: img.width
      })
    }
  }
  //

  //   const handleDragEnd = (e) => {
  //     if (!e.destination) return;
  //     let tempData = Array.from(input);
  //     let [source_data] = tempData.splice(e.source.index, 1);
  //     tempData.splice(e.destination.index, 0, source_data);
  //     setInput(tempData);
  //   };

  const [isDragging, setIsDragging] = useState(false);





  // const dragItem = useRef()
  // const dragOverItem = useRef()
  // const [inputData, setInputData] = useState(false)

  const dragStart = (e) => {

    setIsDragging(true);
    const data = JSON.parse({...docForm});
    e.dataTransfer.setDocForm("text/plain", data);
    // dragItem.current = position
    console.log(e.target.innerHTML)
  }

  const dragEnter = (e) => {
    setIsDragging(false);
    e.dataTransfer.clearData();
    // dragOverItem.current = position
    // console.log(e.target.innerHTML)
  }

  const drop = (e) => {
    const copyListItems = [...docForm]
    // const dragItemContent = copyListItems[dragItem.current]
    // copyListItems.splice(dragItem.current, 1)
    // copyListItems.splice(dragOverItem.current, 0, dragItemContent)
    // dragItem.current = null
    // dragOverItem.current = null
    setIsDragging(copyListItems)
  }

  //
  const getBoundingBoxLine = () => {
    for (
      let i = 0;
      i < MyDoc.document_content?.ExpenseDocuments[0].SummaryFields.length;
      i++
    ) {
      let boundingArray = []
      let docObject = new Object()
      //
      let boundingArray1 = []
      let docObject1 = new Object()
      //
      docObject.left =
        MyDoc.document_content?.ExpenseDocuments[0].SummaryFields[i]
          .ValueDetection.Geometry.BoundingBox.Left * imageDimensions.width
      docObject.top =
        MyDoc.document_content?.ExpenseDocuments[0].SummaryFields[i]
          .ValueDetection.Geometry.BoundingBox.Top * imageDimensions.height
      docObject.width =
        MyDoc.document_content?.ExpenseDocuments[0].SummaryFields[i]
          .ValueDetection.Geometry.BoundingBox.Width * imageDimensions.width
      docObject.height =
        MyDoc.document_content?.ExpenseDocuments[0].SummaryFields[i]
          .ValueDetection.Geometry.BoundingBox.Height * imageDimensions.height
      boundingArray.push(docObject)
      boxArray.push(boundingArray)
      //

      docObject1.left =
        MyDoc.document_content?.ExpenseDocuments[0].SummaryFields[i]
          .LabelDetection?.Geometry.BoundingBox.Left * imageDimensions.width
      docObject1.top =
        MyDoc.document_content?.ExpenseDocuments[0].SummaryFields[i]
          .LabelDetection?.Geometry.BoundingBox.Top * imageDimensions.height
      docObject1.width =
        MyDoc.document_content?.ExpenseDocuments[0].SummaryFields[i]
          .LabelDetection?.Geometry?.BoundingBox.Width * imageDimensions.width
      docObject1.height =
        MyDoc.document_content?.ExpenseDocuments[0].SummaryFields[i]
          .LabelDetection?.Geometry.BoundingBox.Height * imageDimensions.height
      boundingArray1.push(docObject1)
      boxArray1.push(boundingArray1)
    }
    map1 = boxArray.map((t) => t[0])
    for (let i = 0; i < map1.length; i++) {
      let soo = []
      soo.push(map1[i].left)
      soo.push(map1[i].top)
      soo.push(map1[i].width)
      soo.push(map1[i].height)
      koo.push(soo)
    }

    //
    map2 = boxArray1.map((t) => t[0])
    for (let i = 0; i < map2.length; i++) {
      let soo = []
      soo.push(map2[i].left)
      soo.push(map2[i].top)
      soo.push(map2[i].width)
      soo.push(map2[i].height)
      koo1.push(soo)
    }

    //
    let newTemp = koo.concat(koo1)
    console.log(newTemp)
    setFinalBoxArray(newTemp)
  }
  //
  const moveUp = (e, index) => {
    e.preventDefault()
    if (index > 0) {
      let el = [...docForm]
      const prev = el[index - 1]
      el[index - 1] = el[index]
      el[index] = prev
      setDocForm(el)
    }
  }
  //
  const moveDown = (e, index) => {
    e.preventDefault()
    if (index < docForm.length) {
      let el = [...docForm]
      const next = el[index]
      el[index] = el[index + 1]
      el[index + 1] = next
      setDocForm(el)
    }
  }

  async function documentDetailsApi() {
    await axios
      .get(url + `/api/document/${docId}/`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`
        }
      })
      .then(async (res) => {
        setloading(true)
        setapiGod(res)
        setImagePath(res.data.file)

        setDocForm(Object.entries(res.data.document_content.SummaryFields))
        setDocName(res.data.document_name)
        await setMyDoc(res.data)
        const myDoc = res.data
        //
        if (myDoc.document_content?.ExpenseDocuments) {
          for (
            let i = 0;
            i <
            myDoc.document_content?.ExpenseDocuments[0].LineItemGroups[0]
              .LineItems.length;
            i++
          ) {
            let docObject = new Object()
            for (
              let j = 0;
              j <
              myDoc.document_content?.ExpenseDocuments[0].LineItemGroups[0]
                .LineItems[i].LineItemExpenseFields.length -
                1;
              j++
            ) {
              if (
                myDoc.document_content?.ExpenseDocuments[0].LineItemGroups[0]
                  .LineItems[i].LineItemExpenseFields[j].Type.Text === 'ITEM'
              ) {
                docObject.name =
                  myDoc.document_content?.ExpenseDocuments[0].LineItemGroups[0].LineItems[
                    i
                  ].LineItemExpenseFields[j].ValueDetection.Text
              } else if (
                myDoc.document_content?.ExpenseDocuments[0].LineItemGroups[0]
                  .LineItems[i].LineItemExpenseFields[j].Type.Text ===
                'QUANTITY'
              ) {
                docObject.stock =
                  myDoc.document_content?.ExpenseDocuments[0].LineItemGroups[0].LineItems[
                    i
                  ].LineItemExpenseFields[j].ValueDetection.Text
              } else if (
                myDoc.document_content?.ExpenseDocuments[0].LineItemGroups[0]
                  .LineItems[i].LineItemExpenseFields[j].Type.Text === 'PRICE'
              ) {
                docObject.price =
                  myDoc.document_content?.ExpenseDocuments[0].LineItemGroups[0].LineItems[
                    i
                  ].LineItemExpenseFields[j].ValueDetection.Text
              }
            }
            docArray.push(docObject)
          }
          setFormArray(docArray)
          setDocForm(Object.entries(myDoc.document_content?.SummaryFields))
        } else if (myDoc.document_content === null || !myDoc.document_content) {
          setDocForm(null)
        } else {
          setDocForm(Object.entries(myDoc.document_content))
        }
        //
        setloading(false)
      })
      .catch((err) => {
        console.log(err)
      })
  }
  //

  //

  //
  useEffect(() => {
    if (labelToggle) {
      getBoundingBoxLine()
    } else if (!labelToggle) {
      setFinalBoxArray()
    }
  }, [labelToggle])

  const handleDocumentContent = (index, event) => {
    let newArr = [...fields]
    newArr[index][1] = event.target.value
    setFields(newArr)
  }

  const handleDocument = (index, event) => {
    let newArr = [...docForm]
    newArr[index][1] = event.target.value
    setDocForm(newArr)
  }

  async function documentUpdate2Api() {
    let arrPush = {}
    combineArray.map((elem) => {
      let keysArr = [elem[0]]
      let valuesArr = [elem[1]]
      let result = Object.assign.apply(
        {},
        keysArr.map((v, i) => ({ [v]: valuesArr[i] }))
      )
      arrPush = { ...arrPush, ...result }
    })
    //
    console.log(arrPush)
    let arrPush1 = {}
    docForm.map((elem) => {
      let keyArr = [elem[0]]
      let valuesArr = [elem[1]]
      let result = Object.assign.apply(
        {},
        keyArr.map((v, i) => ({ [v]: valuesArr[i] }))
      )
      arrPush1 = { ...arrPush1, ...result }
    })

    //
    const anArr = Object.keys(arrPush).length === 0 ? arrPush1 : arrPush

    apiGod.data.document_content.SummaryFields = anArr

    apiGod.data.document_content.ExpenseDocuments[0].SummaryFields =
      apiGod.data.document_content.ExpenseDocuments[0].SummaryFields.concat(
        expenseAll
      )

    // console.log(apiGod.data.document_content.ExpenseDocuments[0].SummaryFields)
    await axios
      .patch(
        `${url}/api/document/${docId}/`,
        { document_content: apiGod.data.document_content },
        {
          headers: { Authorization: `Bearer ${token}` }
        }
      )
      .then((res) => {
        toast.success('fields are added Successfully', {
          position: 'top-center',
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined
        })
      })
      .catch((err) => {
        console.log('patch req err', err)
        setMsg('Form Not updated')
      })
  }
  const [formArray, setFormArray] = useState(null)
  const [msg, setMsg] = useState('')
  async function documentUpdateApi() {
    await axios
      .patch(
        url + `/api/document/${docId}/`,
        JSON.stringify({ document_content: formArray, SummaryFields: docForm }),
        {
          headers: { Authorization: `Bearer ${token}` }
        }
      )
      .then((res) => {
        console.log('PATCH RESPONSE', res)
        // alert("Form updated successfully");
        // setMsg("Form updated successfully");
      })
      .catch((err) => {
        console.log('trytrytrytrytrytry', err)
        setMsg('Form Not updated')
      })
    //
    console.log(expenseAll)
    apiGod.data.document_content.ExpenseDocuments.SummaryFields = expenseAll
    //
    await axios
      .patch(
        url + `/api/documents/${docId}`,
        {
          document_content:
            apiGod.data.document_content.ExpenseDocuments.SummaryFields
        },
        {
          headers: { Authorization: `Bearer ${token}` }
        }
      )
      .then((res) => {
        console.log(res)
      })
      .catch((err) => {
        console.log(err)
      })

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
    // console.log(e)
    e.map((element) => {
      if (element.label == 'L') {
        toggl()
        settoggleAdvance(true)
      } else if (element.label == 'V') {
        toggl()
        settoggleAdvance(false)
      }
    })
  }
  //
  // save as temlplate
  const saveAsTemplate = async (e) => {
    e.preventDefault()
    let arrPush1 = {}
    docForm.map((elem) => {
      let keyArr = [elem[0]]
      let valuesArr = [elem[1]]
      let result = Object.assign.apply(
        {},
        keyArr.map((v, i) => ({ [v]: valuesArr[i] }))
      )
      arrPush1 = { ...arrPush1, ...result }
    })
    //
    apiGod.data.document_content.SummaryFields = arrPush1
    //
    const request1 = await axios.patch(
      `${url}/api/document/${docId}/`,
      { document_content: apiGod.data.document_content },
      {
        headers: { Authorization: `Bearer ${token}` }
      }
    )
    //
    const request2 = await axios.post(
      `${url}/api/document-as-template/`,
      {
        current_document_id: docId
      },
      {
        headers: { Authorization: `Bearer ${token}` }
      }
    )
    //
    axios
      .all([request1, request2])
      .then(
        axios.spread((...responses) => {
          toast.success('Fields and Template Added Successfully', {
            position: 'top-center',
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined
          })
        })
      )
      .catch((err) => {
        console.log('patch req err', err)
        setMsg('Form Not updated')
      })
    //
  }
  // save as template
  // element onresize
  // const onResize = (event, {element, size, handle} )=>{
  //   setinputHeight(size)
  //   setinputWidth(size)
  // }

  //   --3-----------------------------------------------------------------------------------------

  //   --------------------array 2 properties convert------------------------------------------------------
  //
  // anno all satets and functions end
  const [annoPageSize, setannoPageSize] = useState({
    width: imageDimensions.width,
    height: imageDimensions.height
  })

  // const onResize = () => {
  //   setannoPageSize({ width:annoPageSize.width, height: annoPageSize.height });
  // };

  // anno all satets and functions end
  //
  useEffect(() => {
    setcombineArray([...docForm, ...chunkArrayInGroups(field, 2)])
    console.log('effect runs')
    // window.addEventListener("resize", onResize);
    // return () => window.removeEventListener("resize", onResize);
  }, [field])
  //
  //
  const undoImCross = (e, ind) => {
    console.log(ind)
    e.preventDefault()

    let newfield = field.filter((item, index) => index !== ind)
    setField(newfield)
  }
  //
  const undoImCrossDoc = (e, ind) => {
    console.log(ind)
    e.preventDefault()

    let newfield = docForm.filter((item, index) => index !== ind)
    setDocForm(newfield)
  }

  // box annotor image  onchange function
  // const boxOnChange = data => console.log(data);
  //   const boxOnChange = (e) =>{
  //       handleshow(e);

  //       console.log(e)

  //       const height = e.map(a => a.height);
  //       const width = e.map(a => a.width);
  //       const top =  e.map(a => a.top);
  //       const left =  e.map(a => a.left);
  //       const label =  e.map(a => a.label);

  //      // set coordinates
  //       setEntry({
  //         height: height[0],
  //         width: width[0],
  //         top: top[0],
  //         left: left[0],
  //         label: label[0],
  //       })
  // }
  //
  const onSelect = (e, selectedId) => {
    console.log('onselct', selectedId, 'e', e)
  }

  // //
  // const handleshow = (e) => {
  //   // console.log(e)
  //   e.map((element) => {
  //       if (element.label == "L")
  //       {
  //         toggl();
  //         settoggleAdvance(true);
  //       }
  //       else if (element.label == "V")
  //       {
  //         toggl();
  //         settoggleAdvance(false);
  //       }
  //   });

  // };
  //
  // const allowPopUp = () =>{
  //   if (optionsVal === "lable")
  //   {
  //     toggl();
  //     settoggleAdvance(true);
  //   }
  //   else if (optionsVal == "value")
  //   {
  //       toggl();
  //       settoggleAdvance(false);
  //   }
  // }
  //
  const dropOnChange = (e) => {
    setoptionsVal(e.target.value)
    console.log(optionsVal)
    if (e.target.value === 'label') {
      toggl()
      settoggleAdvance(true)
    } else if (e.target.value == 'value') {
      toggl()
      settoggleAdvance(false)
    }
  }
  //
  const boxOnChange = (data) => {
    console.log('onChnage', data)
    setofAnno(data)
  }
  //
  useEffect(() => {
    documentDetailsApi()
  }, [])

  //
  const deleteAnnoBox = (e) => console.log('deleete')

  //
  return (
    <>
      <div style={{ width: '100%', height: '100%' }}>
        <ScreenTop />
        <Top />
        <ToastContainer />

        <div className='ml-5 mt-2'>
          <div className='mb-4 p-2 shadow border rounded d-flex flex-row align-items-center justify-content-between mr-5'>
            <>
              <IconButton
                style={{
                  background: 'black',
                  padding: '8px',
                  borderRadius: '50%',
                  marginRight: '25px'
                }}
                onClick={() => navigate.goBack()}
              >
                <IoMdArrowRoundBack size={30} color='white' />
              </IconButton>
              <h2>{docName}</h2>
            </>
            {/*  */}
            {/* <OverlayTrigger
                      placement={"top"}
                      overlay={<Tooltip>{showForm?'Hide form list': 'Show form list'}</Tooltip>}
                    >
                      <IconButton className="pl-3 pr-2" onClick={showFormOnClick}>
                        <FaWpforms color='black' size={25} />
                      </IconButton>
            </OverlayTrigger> */}
            {/*  */}
            <OverlayTrigger
              placement={'top'}
              overlay={
                <Tooltip>
                  {showForm ? 'Hide form list' : 'Show form list'}
                </Tooltip>
              }
            >
              <IconButton onClick={(e) => aiFillOnClick(e)}>
                <CgAddR size={25} color='black' />
              </IconButton>
            </OverlayTrigger>
          </div>
        </div>

        <div className='container-fluid'>
          <div className='row'>
            <div className='col-lg-12'>
              <span className='d-flex align-items-center'>
                <h5 className='text-secondary'>
                  <AiOutlineArrowRight /> Add Bounding boxes for Labels & Values
                  {!showLabelDoc && (
                    <OverlayTrigger
                      placement={'top'}
                      overlay={
                        <Tooltip>
                          {labelToggle ? 'Hide Label ' : 'Show Label'}
                        </Tooltip>
                      }
                    >
                      <IconButton
                        className='pl-3 pr-2'
                        onClick={(e) => showLabelToggle(e)}
                      >
                        {labelToggle ? (
                          <MdLabelOff color='black' size={25} />
                        ) : (
                          <MdLabelImportant color='black' size={25} />
                        )}
                      </IconButton>
                    </OverlayTrigger>
                  )}
                </h5>
                {/* <OverlayTrigger
                          placement={"top"}
                          overlay={<Tooltip>{showLabelDoc?'Show Labeled Doc': 'Add Label-Doc'}</Tooltip>}
                        >
                        <IconButton className="pl-3 pr-2" onClick={(e)=>aiFillOnClick(e)}>
                          <AiFillBoxPlot color='black' size={25} />
                        </IconButton>
                       </OverlayTrigger> */}
                {/* <span  onClick={(e)=>aiFillOnClick(e)}>
                         <AiFillBoxPlot
                           className="aiFillBox"/>
                         </span> */}
              </span>
            </div>
          </div>
          <div className='row'>
            <div className='col-lg-5 p-0'>
              {loading ? (
                <div className='d-flex justify-content-center align-items-center'>
                  <div className='align-items-center'>loading...</div>
                </div>
              ) : showLabelDoc ? (
                <ReactPictureAnnotation
                  annotationStyle={{
                    ...defaultShapeStyle,
                    shapeStrokeStyle: toggleAdvance ? 'green' : 'blue',
                    transformerBackground: toggleAdvance ? 'green' : 'blue',
                    lineWidth: 0.5,
                    fontBackground: '#9f82ff'
                  }}
                  scrollSpeed={0}
                  onSelect={onSelect}
                  image={imagePath}
                  onChange={(e) => boxOnChange(e)}
                  width={imageDimensions.width}
                  height={imageDimensions.height}
                  inputElement={(value, onChange, onDelete) => (
                    <div className='d-flex align-items-center'>
                      <select
                        defaultValue={'select an item'}
                        onChange={(e) => dropOnChange(e)}
                      >
                        <option value='select an item' disabled>
                          Select An item
                        </option>
                        <option value='label'>Label</option>
                        <option value='value'>value</option>
                      </select>
                      <AiFillDelete
                        color='#000'
                        size='18px'
                        className='ms-1 ml-1 align-items-center dltBtn'
                        onClick={onDelete}
                      />
                    </div>
                  )}
                ></ReactPictureAnnotation>
              ) : (
                <Boundingbox
                  boxes={finalBoxArray}
                  options={Boundingparams.options}
                  image={imagePath}
                ></Boundingbox>
              )}

              {}
            </div>

            <div className='col-lg-7 '>
              <div className='bool'>
                {fields &&
                  fields.map((f, index) => (
                    <div className='Det_inputField pl20' key={index}>
                      <label
                        style={{ fontWeight: 'bold' }}
                        className='Det_inputLabel d-flex flex-row'
                      >
                        <div className='mr-3 '>{f[0]}</div>
                      </label>
                      <div className='d-flex flex-row'>
                        <input
                          style={{
                            border: '1px solid #e8e8e8',
                            backgroundColor: '#e8e8e8',
                            borderRadius: '12px',
                            fontSize: ' 16px',
                            padding: '10px 14px',
                            width: '85%'
                          }}
                          type='text'
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
                          <FaTimes color='red' />
                        </IconButton>
                      </div>
                    </div>
                  ))}
                {fields.length > 0 && (
                  <Button
                    onClick={() => {
                      documentUpdateApi()
                    }}
                    className='w-100 mt-5'
                  >
                    Save Changes
                  </Button>
                )}
              </div>

              <div
              // style={{ width: "40rem" }}
              // style={{ marginLeft: "20px", marginTop: "32px" }}
              >
                <div className='row pl20'>
                  {field &&
                    field.map((f, index) => (
                      <div className='col-lg-6 mb-2 ' key={index}>
                        {index % 2 == 0 ? (
                          <div className='col-lg-6 mb-2'>
                            <label
                              style={{ marginLeft: '0px', fontWeight: 'bold' }}
                              className=' '
                            >
                              <div className='mr-3'>
                                {f}
                                {/* <span className="ml-2 ">
                                  <ImCross 
                                  color="red"
                                  onClick={e=>undoImCross(e,index)}
                                  className="imcross"
                                  />
                              </span> */}
                              </div>
                            </label>
                          </div>
                        ) : (
                          <div className=' col-lg-6 mb-2'>
                            {/* <DraDragResizeContainer
                            > */}
                            <div className='d-flex '>
                              <input
                                style={{
                                  border: '1px solid #e8e8e8',
                                  backgroundColor: '#e8e8e8',
                                  borderRadius: '12px',
                                  fontSize: ' 16px',
                                  padding: '10px 14px'
                                }}
                                type='text'
                                name={f}
                                value={f}
                                key={f}
                                // onChange={(e) => handleDocument(index, e)}
                              />

                              {/*                             
                            <span className="ml-2">
                                  <ImCross 
                                  color="red"
                                  onClick={e=>undoImCross(e,index)}
                                  className="imcross"
                                  />
                              </span> */}
                            </div>
                          </div>
                        )}
                      </div>
                    ))}
                </div>
                {/*  */}
                {showForm && (
                  <div className='row pl20'>
                    {docForm &&
                      docForm.map(([key, value], index) => {
                        return (
                          <>
                            <div className='col-lg-6 mb-2 ' key={index}>
                              {/*  */}
                              <label
                                style={{
                                  marginLeft: '0px',
                                  fontWeight: 'bold'
                                }}
                                className=' '
                              >
                                <div className='mr-3'>
                                  {key}
                                  {/* <span className="ml-2 ">
                                      <ImCross 
                                      color="red"
                                      onClick={e=>undoImCrossDoc(e,index)}
                                      className="imcross"
                                      />
                                  </span> */}
                                </div>
                              </label>
                              {/*  */}
                            </div>
                            {/*  */}
                            <div className='col-lg-6 mb-2'>
                              <div className='d-flex '>
                                {/* 
                           <Draggable>


<input
   style={{
       border: "1px solid #e8e8e8",
       backgroundColor: "#e8e8e8",
       borderRadius: "12px",
       fontSize: " 16px",
       padding: "10px 14px",
      
   }}
   type="text"
   name={value}
   value={value}
   is_draggable={true}
                                 
                                 onClick={e=>moveUp(e,index)}



   onChange={(e) => handleDocument(index, e)}
   />

</Draggable> */}

                                {/* <DragDropContext onDragEnd={handleDragEnd}>
        <table className="table borderd">
          <thead>
            <tr>
              <th />
              <th>Username</th>
              <th>Age</th>
              <th>Gender</th>
            </tr>
          </thead>
          <Droppable droppableId="droppable-1">
            {(provider) => (
              <tbody
                className="text-capitalize"
                ref={provider.innerRef}
                {...provider.droppableProps}
              >
                {docForm.map((input, index) => (
                  <Draggable
                    key={input}
                    draggableId={input}
                    index={index}
                  >
                    {(provider) => (
                      <div {...provider.draggableProps} ref={provider.innerRef}>
                        <div {...provider.dragHandleProps}>
                        <input
   style={{
       border: "1px solid #e8e8e8",
       backgroundColor: "#e8e8e8",
       borderRadius: "12px",
       fontSize: " 16px",
       padding: "10px 14px",
      
   }}
   type="text"
   name={value}
   value={value}
   is_draggable={true}
                                 keys={index}
                                 onDrag={e=>moveUp(e,index)}


   onChange={(e) => handleDocument(index, e)}
   />

                          </div>
                        
                      </div>
                    )}
                  </Draggable>
                ))}
                {provider.placeholder}
              </tbody>
            )}
          </Droppable>
        </table>
      </DragDropContext>

 */}

                                <input
                                  // onDragStart={e => dragStart(e, index)}
                                  // onDragEnter={e => dragEnter(e, index)}
                                  onDragStart={e => moveUp(e, index)}
                                  onDragEnter={e =>moveDown(e, index)}
                                  onDragEnd={e => drop(e, index)}
                                  draggable
                                  style={{
                                    border: '1px solid #e8e8e8',
                                    backgroundColor: '#e8e8e8',
                                    borderRadius: '12px',
                                    fontSize: ' 16px',
                                    padding: '10px 14px'
                                  }}
                                  type='text'
                                  name={value}
                                  value={value}
                                  keys={index}
                                  // onClick={e=>moveUp(e,index)}

                                  onChange={(e) => handleDocument(index, e)}
                                />

                                {/*                             
                                <span className="ml-2">
                                  <span className="d-flex"> 
                                  {
                                    index ===0 ? ' ' :
                                    <BsArrowUpCircle
                                    color="black"
                                    onClick={e=>moveUp(e,index)}
                                   size = ' 25'
                                   style={{cursor:'pointer'}}
                                    
                                    />
                                  }
                                  { docForm.length-1 ===index ? '':
                                    <BsArrowDownCircle
                                    color="black"
                                    onClick={e=>moveDown(e,index)}
                                    className=" ml-1"
                                    size='25'
                                    style={{cursor:'pointer'}}
                                    />
                                  }
                                  </span>
                                </span> */}
                              </div>
                            </div>
                          </>
                        )
                      })}
                  </div>
                )}
                {/*  */}

                <>
                  <div className='pl20'>
                    <Button
                      onClick={() => {
                        documentUpdate2Api()
                      }}
                      className='w-100 mt-5'
                    >
                      Save Changes
                    </Button>
                    <div className='w-100 text-center '>
                      <Button
                        className='w-100 '
                        style={{ margin: '1rem auto' }}
                        onClick={(e) => saveAsTemplate(e)}
                      >
                        Save As Template
                      </Button>
                    </div>
                    {/*  */}

                    <Button
                      className='w-100 mb-4'
                      onClick={() => navigate.goBack()}
                    >
                      Go Back
                    </Button>
                  </div>
                </>
              </div>
            </div>
          </div>
        </div>
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
        ofAnno={ofAnno}
        expenseAll={expenseAll}
        setexpenseAll={setexpenseAll}
        imageDimensions={imageDimensions}
      />
      <ToastContainer newestOnTop style={{ zIndex: '999999999999999999999' }} />
    </>
  )
}

export default AnnotateImage
