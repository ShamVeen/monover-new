import React, { useState, useEffect } from 'react'
import './Review.css'
import axios from 'axios'
import { url } from '../GlobalUrl'
import ScreenTop from './mobileComp/ScreenTop'
import Loader from './Loader'
import FilePreview from './DragAndDrop/FilePreview2'
// import FilePreviewBatch from './DragAndDrop/FilePreviewBatch'

import Top from './Top'
import { useHistory } from 'react-router'
import logo from '../images/landing/icon.svg'
import {
  Container,
  Tooltip,
  OverlayTrigger,
  Row,
  Col,
  Modal
} from 'react-bootstrap'
import {
  getAllDocuments,
  addDocument,
  getFolders,
  getPreviousDocuments
} from '../api/review'
import Share from './Share'
import Grid from '@material-ui/core/Grid'
import '../App.css'
import SubprojectModal from './DragAndDrop/subprojectModal'
import moment from 'moment'
import ClientEditModel from './comps/ClientEditModal'
import ReviewDisplay from './DragAndDrop/ReviewDisplay'
import { Droppable, Draggable } from 'react-drag-and-drop'
import {
  FaChevronDown,
  SiMicrosoftexcel,
  BiSort,
  BiMenuAltLeft,
  AiOutlineEdit,
  AiOutlineFolderAdd,
  GrDocumentUpload
} from 'react-icons/all'
import { Link } from 'react-router-dom'
import AddFolder2 from '../images/folder-add2.png'
import sharedFolder from '../images/shared-folder.png'

// import fileDisplay from '../images/fileDisplay.png';
// import gridIcon from '../images/gridIcon.png';
// import batch from '../images/batch.png';
import ClientModal from './comps/ClientModal'
import Excel from './Excel'
import { BsUpload } from 'react-icons/bs'
import ClientDropModal from './DragAndDrop/ClientDropModal'
import { toast } from 'react-toastify'
import ClientDropModal1 from './DragAndDrop/ClientDropModal1'
import ClientDropModal2 from './DragAndDrop/ClientDropModal2'
import ViewListIcon from '@material-ui/icons/ViewList'
import { MdCalendarViewMonth } from 'react-icons/all'
import FilePreviews from './DragAndDrop/FilePreviews'

const Review = () => {
  const history = useHistory()
  const [clients, setClients] = useState([])
  const [clientsNum, setClientsNum] = useState([])
  const [documents, setDocuments] = useState([])
  const [loading, setLoading] = useState(false)
  const [showClientModal, setShowClientModal] = useState(false)
  const handleClose = () => setShowClientModal(false)
  const [is_folders_loading, set_folders_loading] = useState(true)
  const [folder, setFolder] = useState([])
  const [modelStatus, setModal] = useState(false)
  //
  const [subProjectModal, setSubProjectModal] = useState(false)
  const [documentByDate, setdocumentByDate] = useState()
  //
  const [data, setData] = useState([])

  const [commonModal, setCommonModal] = useState(false)
  const [clientName, setclientName] = useState('')
  const [showEditClient, setshowEditClient] = useState(false)
  const [editClientNames, seteditClientNames] = useState('')
  const [editClientId, seteditClientId] = useState()
  const [clientDropBool, setclientDropBool] = useState(false)
  const [clientDropBool1, setclientDropBool1] = useState(false)
  const [clientDropBool2, setclientDropBool2] = useState(false)
  const [onDropData, setonDropData] = useState({})
  const [onDropData1, setonDropData1] = useState({})
  const [onDropData2, setonDropData2] = useState({})
  const [loadings, setloadings] = useState(false)

  const [active, setActive] = useState(false)
  const [file, setFile] = useState()
  const [draggedFiles, setDraggedFiles] = useState({})
  const [dragActive, setDragActive] = useState(false)
  const [choosedFolder, setChoosedFolder] = useState(null)
  const [selectedFiles, setSelectedFiles] = useState([])

  //
  const handleCloseClient = () => setshowEditClient(false)
  //

  const setModelStatus = (status, prj_id, prj_name) => {
    setModal({ status: status, projectId: prj_id, prj_name: prj_name })
  }

  const fetchClients = async () => {
    setloadings(true)
    const { data } = await axios.get(url + '/api/all-project', {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`
      }
    })
    setClients(data)
    setloadings(false)
    // alert(data)
  }
  //
  const fetchNumFiles = async () => {
    const { data } = await axios.get(url + '/api/doc-num/', {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`
      }
    })
    console.log(data)
    setClientsNum(data)
    // alert(data)
  }

  //

  const onCheck = (file, folder) => {
    if (folder) {
      const folderId = folder.id
      setDraggedFiles((prevState) => ({
        ...prevState,
        [folderId.toString()]: [
          ...(folderId in draggedFiles ? draggedFiles[folderId] : []),
          data.filter((item) => item.id === file.id)[0]
        ]
      }))
      setData(data.filter((item) => item.id !== file.id))
      if (selectedFiles.includes(file.id)) {
        handleSelectFile(false, file.id)
      }
    }
  }
  //
  const handleSelectFile = (checked, fileId) => {
    const existingFiles = JSON.parse(JSON.stringify(selectedFiles))
    if (checked) existingFiles.push(fileId)
    else {
      const index = existingFiles.indexOf(fileId)
      existingFiles.splice(index, 1)
    }
    setSelectedFiles(existingFiles)
  }

  //
  async function subProjectListApi() {
    //  setLoading(true);
    //  if (projectId) {
    set_folders_loading(true)
    await axios
      // .get(url + "/api/filter/sub/project/", {
      .get(url + '/api/cu-subproject/', {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`
        }
      })
      .then((res) => {
        // console.log("subprojectList", res.data)
        setCommonModal(true)
        setFolder(res.data)

        const promises = res.data.map((sub_project) => {
          return load_previous_documents({ sub_project_id: sub_project.id })
        })
        return Promise.all(promises)
      })
      .then((data) => {
        // console.log(data);
        const obj = data.reduce((init, item) => {
          return {
            ...init,
            [item.sub_project_id]: item.documents
          }
        }, {})
        // setDraggedFiles({
        //   ...draggedFiles,
        //   ...obj,
        // });
        set_folders_loading(false)
      })
      .catch((error) => {
        //  setLoading(false);
        console.log(error)
      })
    //  }
  }

  //

  async function subProjectListApi2() {
    await getFolders()
      .then((response) => {
        setFolder(response.data)
        const promises = response.data.map((sub_project) => {
          return load_previous_documents({ sub_project_id: sub_project.id })
        })
        return Promise.all(promises)
      })
      .then((data) => {
        const obj = data.reduce((init, item) => {
          return {
            ...init,
            [item.sub_project_id]: item.documents
          }
        }, {})
        setDraggedFiles({
          ...draggedFiles,
          ...obj
        })
      })
      .catch((error) => {
        console.log(error)
      })
  }

  //
  const handleDrag = function (e) {
    e.preventDefault()
    e.stopPropagation()
    if (e.type === 'dragenter' || e.type === 'dragover') {
      setDragActive(true)
    } else if (e.type === 'dragleave') {
      setDragActive(false)
    }
  }

  //
  const subProjectToggle = (clientName, clientId) => {
    seteditClientId(clientId)
    setclientName(clientName)
    setSubProjectModal(!subProjectModal)
  }
  //
  const load_previous_documents = ({ sub_project_id }) => {
    return axios
      .get(url + `/api/subproject/${sub_project_id}/document/`)
      .then((res) => {
        return {
          sub_project_id: sub_project_id,
          documents: res.data
        }
      })
      .catch((err) => {
        throw err
      })
  }
  //
  //

  //
  const editClientName = (id, name) => {
    console.log(id, name)
    seteditClientId(id)
    seteditClientNames(name)
    setshowEditClient((prev) => !prev)
  }
  //
  const [array, setArray] = useState([2, 5, 8, 12, 15, 18])
  const handlepush = (id) => {
    history.push({ pathname: '/productlist' })
  }
  //
  const arrDown = (e) => {
    e.preventDefault()
  }
  //
  const clientDropdown = async (e) => {
    console.log(e.target.value)
  }
  //

  const handleMostRecent = async (e) => {
    let currentValue = e.target.value
    if (currentValue === 'mostrecent') {
      const { data } = await axios.get(url + '/api/all-project/', {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`
        }
      })

      setClients(data)
    }
    if (currentValue === 'date') {
      const { data } = await axios.get(url + '/api/project-date/', {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`
        }
      })

      setClients(data)
    }
    if (currentValue === 'size') {
      const { data } = await axios.get(url + '/api/size-project/', {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`
        }
      })

      setClients(data)
    }
    if (currentValue === 'alpha') {
      const { data } = await axios.get(url + '/api/project-alphabet/', {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`
        }
      })

      setClients(data)
    }
  }

  const groupBy = async (e) => {
    setdocumentByDate(e.target.value)
    console.log(e.target.value)
    if (e.target.value === 'document-type') {
      const { data } = await axios.get(url + '/api/group-documents/', {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`
        }
      })
      console.log(data)
      setClients(data)
    } else if (e.target.value === 'document-date') {
      const { data } = await axios.get(url + '/api/group-date/', {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`
        }
      })
      setClients(data)
    } else {
      const { data } = await axios.get(url + '/api/all-project', {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`
        }
      })
      setClients(data)
    }
  }
  //
  const groupByBadge = async (e) => {
    console.log(e.target.value)
  }
  //
  useEffect(() => {
    setLoading(false)
    subProjectListApi()
    fetchNumFiles()
  }, [])
  //
  useEffect(() => {
    fetchClients()
  }, [])

  //

  const hideModel = () => {
    setModal(false)
  }
  //
  const onDrop1 = ({ file }, folder, c) => {
    const b = file.split(',')

    if (b[1] === 'subfolder') {
      setonDropData({ file: b[0], folder: c })
      setclientDropBool(true)
    } else {
      setonDropData2({ file: b[0], folder: folder })
      setclientDropBool2(true)
    }
  }
  //
  const onDrop = ({ file }, folder) => {
    let c = file.split(',')
    if (file.length > 20) {
      const b = file.split(',')
      setonDropData1({ file: b[0], folder: folder })
      setclientDropBool1(true)
    } else {
      setonDropData({ file: c[0], folder: folder })
      setclientDropBool(true)
    }
  }
  //
  const clientDropToggle = () => {
    setclientDropBool(!clientDropBool)
    setonDropData()
  }
  //
  const clientDropToggle1 = () => {
    setclientDropBool1(!clientDropBool1)
    setonDropData1()
  }
  //
  const clientDropToggle2 = () => {
    setclientDropBool2(!clientDropBool2)
    setonDropData2()
  }
  //
  const addDropFolder = async () => {
    const a = onDropData.folder.sub_project.map(
      (item) => item.id == onDropData.file
    )
    //  console.log(a[0])
    if (onDropData.folder.sub_project.length > 0 && a[0]) {
      setclientDropBool(!clientDropBool)
      toast.warning('Subfolder already exist')
      setonDropData()
    } else {
      try {
        await axios
          .post(url + `/api/add-subfolder/${onDropData.folder.id}/`, {
            sub_project_id: onDropData.file
          })
          .then((res) => {
            setClients(res.data)
            toast.success('sub folder added')
          })
      } catch (err) {
        // console.log(err)
        toast.error(err)
      }
      setclientDropBool(!clientDropBool)
    }
  }
  //
  const addDropFolder1 = async () => {
    console.log(onDropData1)
    const a = onDropData1.folder.documents.map(
      (item) => item.id == onDropData1.file
    )

    if (onDropData1.folder.documents.length > 0 && a[0]) {
      setclientDropBool1(!clientDropBool1)
      toast.warning('Subfolder already exist')
      setonDropData1()
    } else {
      try {
        await axios
          .post(url + `/api/add-doc/${onDropData1.folder.id}/`, {
            document_id: onDropData1.file
          })
          .then((res) => {
            console.log(res.data)
            toast.success('Documents added')
          })
      } catch (err) {
        console.log(err)
        toast.error(err)
      }
      setclientDropBool1(!clientDropBool1)
    }
  }
  //
  const addDropFolder2 = async () => {
    console.log(onDropData2)
    const a = onDropData2.folder.documents.map(
      (item) => item.id == onDropData2.file
    )

    if (onDropData2.folder.documents.length > 0 && a[0]) {
      setclientDropBool2(!clientDropBool2)
      toast.warning('Document already exist')
      setonDropData2()
    } else {
      /// api integration
      try {
        await axios
          .post(`${url}/api/move/document/`, {
            subproject_id: onDropData2.folder.id,
            document_id: onDropData2.file
          })
          .then((res) => {
            toast.success('Document added')
          })
      } catch (err) {
        console.log(err)
        toast.error(err)
      }
      setclientDropBool2(!clientDropBool2)
    }
  }

  function handleOnFileUpload(event) {
    setFile(event.target.files[0])
  }

  const handleClick = () => {
    setActive(!active)
  }
  //
  //
  return (
    <div className='mained'>
      {modelStatus ? (
        <Row>
          <Col md={12}>
            <Modal
              onHide={hideModel}
              size='xl'
              show={modelStatus.status}
              style={{
                width: '100%'
              }}
            >
              <Modal.Header closeButton onClick={(ev) => hideModel(ev)}>
                <Modal.Title> Subprojects </Modal.Title>
              </Modal.Header>

              <Modal.Body
                style={{
                  width: '100%'
                }}
              >
                <Excel
                  dataDeal={modelStatus.projectId}
                  subfolder={modelStatus.prj_name}
                ></Excel>
              </Modal.Body>
            </Modal>
          </Col>
          /////////////////////////////
        </Row>
      ) : (
        ''
      )}
      <ScreenTop />
      <Top />

      {/* {loadings && <Loader />} */}
      {/* </div> */}
      <Container style={{ maxWidth: '98.4%' }}>
        <Row>
          <Col>
            <div style={{ marginTop: '30px' }}>
              <div
                className=''
                style={{ display: 'flex', flexDirection: 'row' }}
              >
                <div>
                  <OverlayTrigger
                    placement={'top'}
                    overlay={<Tooltip>Add Customer</Tooltip>}
                  >
                    <img
                      alt='folder-icon-add'
                      // className="c-pointer"
                      src={AddFolder2}
                      style={{
                        width: '52px',
                        cursor: 'pointer',
                        height: '52px',
                        fontWeight: 800
                      }}
                      onClick={() => {
                        setShowClientModal((prev) => !prev)
                      }}
                    />
                  </OverlayTrigger>
                  {/* <div>b</div> */}
                  <p className='text-center'>
                    <b style={{ fontSize: 11, fontWeight: 700 }}>
                      New Customer
                    </b>
                  </p>
                </div>
                {/* Batch */}
                {/* <div className="" style={{ marginLeft: '32px' }}> */}
                {/* <Link
                    to="/catalogue"
                    style={{ color: 'inherit', textDecoration: 'none' }}
                  >
                    <OverlayTrigger
                      placement={'top'} */}

                <div className='' style={{ marginLeft: '32px' }}>
                  <Link
                    to='/catalogue'
                    style={{ color: 'inherit', textDecoration: 'none' }}
                  >
                    <OverlayTrigger
                      placement={'top'}
                      overlay={<Tooltip>Catalog</Tooltip>}
                    >
                      <img
                        alt='shared-folder'
                        src={logo}
                        style={{
                          width: '52px',
                          cursor: 'pointer',
                          height: '52px'
                        }}
                      />
                    </OverlayTrigger>
                    <p className='text-center'>
                      <b style={{ fontSize: 11, fontWeight: 700 }}>Catalog</b>
                    </p>
                  </Link>
                </div>
                {/*  */}
                <div className='' style={{ marginLeft: '32px' }}>
                  <Link
                    to='/SharedWithMe'
                    style={{ color: 'inherit', textDecoration: 'none' }}
                  >
                    <OverlayTrigger
                      placement={'top'}
                      overlay={<Tooltip>Shared With Me</Tooltip>}
                    >
                      <img
                        alt='shared-folder'
                        // className="c-pointer"
                        src={sharedFolder}
                        style={{
                          width: '52px',
                          cursor: 'pointer',
                          height: '52px'
                        }}
                      />
                    </OverlayTrigger>
                    <p className='text-center'>
                      <b style={{ fontSize: 11, fontWeight: 700 }}>
                        Shared With Me
                      </b>
                    </p>
                  </Link>
                </div>

                <div style={{ marginLeft: '36rem', marginTop: '25px' }}>
                  {/*  */}
                  {/* <div
                  // className="d-flex flex-end"
                  // style={{ borderRadius: '5px' }}
                > */}
                  {/* 
                <div
                    className=""
                    style={{ marginLeft: '42rem', marginRight: '20px' }}> */}
                  {/* <img
                      className="grid-icon"
                      onClick={handleClick}
                      alt="grid-display"
                      // className="c-pointer"
                      src={gridIcon}
                      style={{
                        backgroundColor: active ? 'blue' : 'white',
                        width: active ? '50px' : '30px',
                        cursor: 'pointer',
                        height: active ? '40px' : '23px',
                        // color: 'black',
                        borderRadius: active ? '15%' : '0%',
                      }}
                    />

                    <img
                      alt="file-display"
                      // className="c-pointer"
                      src={fileDisplay}
                      style={{
                        width: '30px',
                        cursor: 'pointer',
                        height: '32px',
                      }}
                    /> */}
                  {/* </div> */}

                  <div>
                    <MdCalendarViewMonth
                      // onClick={() => history.push(`/alldeals/${projectId}`)}

                      style={{
                        cursor: 'pointer',
                        // marginTop: '1px',
                        fontSize: 35,
                        color: '#b2bec3'
                      }}
                    />
                    <ViewListIcon
                      // onClick={() => history.push(`/alldealstwo/${projectId}`)}

                      style={{
                        cursor: 'pointer',
                        // marginTop: '1px',
                        fontSize: 35,
                        // color: '#b2bec3',
                        color: 'blue'
                      }}
                    />
                    {/* </div> */}

                    {/* </div> */}
                    {/*  */}
                  </div>
                </div>
              </div>
              {/* group */}
            </div>
            <div className='row'>
              <div className='col-lg-8'>
                {clients.length === 0 && documents.length === 0 && (
                  <h3 className='m-5 text-center'>No Documents</h3>
                )}

                {clients.map((client, i) => (
                  <React.Fragment key={i}>
                    {client.sub_project.length === 0 ? (
                      <Droppable
                        key={client.id}
                        types={['file']}
                        onDrop={(file) => onDrop(file, client)}
                      >
                        <div
                          key={client.id}
                          className='bz-card'
                          style={{
                            minHeight: '1rem',
                            height: '250px',
                            marginBottom: '30px',
                            marginTop: '23px',
                            width: '100%',
                            borderRadius: '12px'
                          }}
                        >
                          <div className='d-flex flex-row justify-content-between flex-row'>
                            <div className='d-flex align-items-center'>
                              <h4
                                style={{
                                  fontWeight: 'bold',
                                  margin: '10px',
                                  fontSize: 23,
                                  cursor: 'pointer',
                                  textTransform: 'capitalize'
                                }}
                                onClick={() =>
                                  history.push(`/alldeals/${client.id}`)
                                }
                              >
                                {documentByDate === 'document-date'
                                  ? moment(client.date_created).format(
                                      'DD/MM/YYYY'
                                    )
                                  : client.project_name &&
                                    documentByDate === 'document-type'
                                  ? client.doc_type
                                  : client.project_name}

                                {client['document_length'] ? (
                                  <span className='ml-1'>
                                    {client.document_length == 0
                                      ? `(File :${client.document_length})`
                                      : `(File: ${client.document_length})`}
                                  </span>
                                ) : (
                                  ''
                                )}
                                {/* {client.project_name} */}
                              </h4>
                              {documentByDate === 'document-date' ? (
                                ''
                              ) : (
                                  <AiOutlineEdit
                                    className='ml-2 cursor-pointer'
                                    size={'25px'}
                                    role='button'
                                    onClick={(e) =>
                                      editClientName(
                                        client.id,
                                        client.project_name
                                      )
                                    }
                                  />
                                ) && documentByDate === 'document-type' ? (
                                ''
                              ) : (
                                <AiOutlineEdit
                                  className='ml-2 cursor-pointer'
                                  size={'25px'}
                                  role='button'
                                  onClick={(e) =>
                                    editClientName(
                                      client.id,
                                      client.project_name
                                    )
                                  }
                                />
                              )}
                              {/* <AiOutlineEdit
                    className="ml-2 cursor-pointer"
                    size={'25px'}
                    role='button'
                    onClick={e=>editClientName(client.id,client.project_name)}
                   /> */}
                            </div>
                            <div
                              className='align-items-center'
                              style={{ display: 'flex', flexDirection: 'row' }}
                            >
                              {/* <div className="mr-2"> Select file</div> */}
                              {/*  */}

                              {/*  */}
                              <div
                                onClick={() => {
                                  subProjectToggle(
                                    client.project_name,
                                    client.id
                                  )
                                }}
                                className='uploadButton'
                              >
                                <OverlayTrigger
                                  placement='top'
                                  overlay={<Tooltip>Add Orders</Tooltip>}
                                >
                                  <AiOutlineFolderAdd className='fs30' />
                                </OverlayTrigger>
                              </div>
                              {/*  */}
                              {/* <Link to="DragAndDrop"> */}
                              <div className='uploadButton'>
                                <OverlayTrigger
                                  placement={'top'}
                                  overlay={<Tooltip>Upload</Tooltip>}
                                >
                                  <BsUpload />
                                </OverlayTrigger>
                              </div>
                              {/* </Link> */}
                              {/*  */}
                              <OverlayTrigger
                                placement={'top'}
                                overlay={<Tooltip>Catalog</Tooltip>}
                              >
                                <img
                                  src={logo}
                                  style={{ cursor: 'pointer' }}
                                  onClick={() =>
                                    history.push(`/productlist/${client.id}`, {
                                      client
                                    })
                                  }
                                  item='folder'
                                  id={client.id}
                                  width='21px'
                                ></img>
                              </OverlayTrigger>
                              {/* <GrHost size={23} onClick={()=>handlepush()} item='folder' id={client.id} /> */}

                              <Share size={23} item='folder' id={client.id} />
                            </div>
                          </div>
                          <Grid container>
                            <Grid item xs={12}>
                              <div className='d-flex justify-content-between'>
                                {client.sub_project.length === 0 && (
                                  <div>
                                    {/*  */}
                                    {/* <Link to="DragAndDrop"> */}
                                    <div className='uploadButton'>
                                      <OverlayTrigger
                                        placement={'top'}
                                        overlay={<Tooltip>Upload</Tooltip>}
                                      >
                                        <GrDocumentUpload
                                          type='file'
                                          onChange={handleOnFileUpload}
                                        />
                                      </OverlayTrigger>
                                    </div>
                                    {/* </Link> */}
                                    {/*  */}
                                  </div>
                                )}
                                {client.sub_project.map((deal, index) => (
                                  <React.Fragment key={index}>
                                    {index <= 2 ? (
                                      <>
                                        <div
                                          key={deal.id}
                                          className='pr-2  reviewcard'
                                        >
                                          <div>
                                            {deal.documents.map(
                                              (doc, index) => {
                                                return (
                                                  <div key={doc.id}>
                                                    <Droppable
                                                      key={client.id}
                                                      types={['file']}
                                                      onDrop={(file) =>
                                                        onDrop1(
                                                          file,
                                                          deal,
                                                          client
                                                        )
                                                      }
                                                    >
                                                      <>
                                                        <div
                                                          style={{
                                                            marginTop: '8px'
                                                          }}
                                                        >
                                                          {' '}
                                                          <FilePreview
                                                            file={doc}
                                                            is_draggable={true}
                                                            keys={index}
                                                          />{' '}
                                                        </div>

                                                        <div
                                                          style={{
                                                            marginTop: '8px',
                                                            display: 'inline'
                                                          }}
                                                        >
                                                          {' '}
                                                          <FilePreview
                                                            file={doc}
                                                            is_draggable={true}
                                                            keys={index}
                                                          />{' '}
                                                        </div>
                                                      </>
                                                    </Droppable>
                                                  </div>
                                                )
                                              }
                                            )}

                                            <p
                                              className='text-center'
                                              style={{ fontWeight: 649 }}
                                            >
                                              {deal.sub_project_name}

                                              {deal.documents.length > 2 && (
                                                <>
                                                  <span
                                                    className='text-primary'
                                                    style={{
                                                      cursor: 'pointer',
                                                      fontWeight: 'bold',
                                                      marginLeft: '10px'
                                                    }}
                                                    onClick={() =>
                                                      history.push(
                                                        `/deals/${deal.id}`,
                                                        {
                                                          client: client
                                                        }
                                                      )
                                                    }
                                                  >
                                                    (Show More)
                                                  </span>
                                                </>
                                              )}
                                              <br />

                                              <SiMicrosoftexcel
                                                size={23}
                                                item='folder'
                                                style={{
                                                  cursor: 'pointer',
                                                  marginLeft: '5px'
                                                }}
                                                onClick={() => {
                                                  setModelStatus(
                                                    true,
                                                    deal.id,
                                                    deal.sub_project_name
                                                  )
                                                }}
                                              />
                                            </p>
                                          </div>{' '}
                                        </div>
                                      </>
                                    ) : (
                                      <></>
                                    )}
                                  </React.Fragment>
                                ))}
                              </div>
                            </Grid>
                          </Grid>
                        </div>
                      </Droppable>
                    ) : (
                      <Droppable
                        key={client.id}
                        types={['file']}
                        onDrop={(file) => onDrop(file, client)}
                      >
                        <div
                          key={client.id}
                          className='bz-card relative'
                          style={{
                            minHeight: '1rem',
                            height: '250px',
                            marginBottom: '30px',
                            marginTop: '23px',
                            width: '100%',
                            borderRadius: '12px'
                          }}
                        >
                          <div className='d-flex flex-row justify-content-between flex-row'>
                            <div className='d-flex align-items-center'>
                              <h4
                                style={{
                                  fontWeight: 'bold',
                                  margin: '10px',
                                  fontSize: 23,
                                  cursor: 'pointer',
                                  textTransform: 'capitalize'
                                }}
                                onClick={() =>
                                  history.push(`/alldeals/${client.id}`)
                                }
                              >
                                {documentByDate === 'document-date'
                                  ? moment(client.date_created).format(
                                      'DD/MM/YYYY'
                                    )
                                  : client.project_name &&
                                    documentByDate === 'document-type'
                                  ? client.doc_type
                                  : client.project_name}

                                {client['document_length'] ? (
                                  <span className='ml-1'>
                                    {client.document_length == 0
                                      ? `(File :${client.document_length})`
                                      : `(File: ${client.document_length})`}
                                  </span>
                                ) : (
                                  ''
                                )}
                                {/* {client.project_name} */}
                              </h4>
                              {documentByDate === 'document-date' ? (
                                ''
                              ) : (
                                  <AiOutlineEdit
                                    className='ml-2 cursor-pointer'
                                    size={'25px'}
                                    role='button'
                                    onClick={(e) =>
                                      editClientName(
                                        client.id,
                                        client.project_name
                                      )
                                    }
                                  />
                                ) && documentByDate === 'document-type' ? (
                                ''
                              ) : (
                                <AiOutlineEdit
                                  className='ml-2 cursor-pointer'
                                  size={'25px'}
                                  role='button'
                                  onClick={(e) =>
                                    editClientName(
                                      client.id,
                                      client.project_name
                                    )
                                  }
                                />
                              )}
                              {/* <AiOutlineEdit
                    className="ml-2 cursor-pointer"
                    size={'25px'}
                    role='button'
                    onClick={e=>editClientName(client.id,client.project_name)}
                   /> */}
                            </div>
                            <div
                              className='align-items-center'
                              style={{ display: 'flex', flexDirection: 'row' }}
                            >
                              {/* <div className="mr-2"> Select file</div> */}
                              {/*  */}

                              {/*  */}
                              <div
                                onClick={() => {
                                  subProjectToggle(
                                    client.project_name,
                                    client.id
                                  )
                                }}
                                className='uploadButton'
                              >
                                <OverlayTrigger
                                  placement='top'
                                  overlay={<Tooltip>Add Orders</Tooltip>}
                                >
                                  <AiOutlineFolderAdd className='fs30' />
                                </OverlayTrigger>
                              </div>
                              {/*  */}
                              {/* <Link to="DragAndDrop"> */}
                              <div className='uploadButton'>
                                <OverlayTrigger
                                  placement={'top'}
                                  overlay={<Tooltip>Upload</Tooltip>}
                                  type='file'
                                  onChange={handleOnFileUpload}
                                >
                                  <BsUpload />
                                </OverlayTrigger>
                              </div>
                              {/* </Link> */}
                              {/*  */}
                              <OverlayTrigger
                                placement={'top'}
                                overlay={<Tooltip>Catalog</Tooltip>}
                              >
                                <img
                                  src={logo}
                                  style={{ cursor: 'pointer' }}
                                  onClick={() =>
                                    history.push(`/productlist/${client.id}`, {
                                      client
                                    })
                                  }
                                  item='folder'
                                  id={client.id}
                                  width='21px'
                                ></img>
                              </OverlayTrigger>
                              {/* <GrHost size={23} onClick={()=>handlepush()} item='folder' id={client.id} /> */}

                              <Share size={23} item='folder' id={client.id} />
                            </div>
                          </div>

                          <Grid container>
                            <Grid item xs={12}>
                              <div className='d-flex justify-content-between'>
                                {client.sub_project.length === 0 && (
                                  <div>
                                    {/*  */}
                                    {/* <Link to="DragAndDrop"> */}
                                    <div className='uploadButton'>
                                      <OverlayTrigger
                                        placement={'top'}
                                        overlay={<Tooltip>Upload</Tooltip>}
                                      >
                                        <GrDocumentUpload />
                                      </OverlayTrigger>
                                    </div>
                                    {/* </Link> */}
                                    {/*  */}
                                  </div>
                                )}
                                {client.sub_project.map((deal, index) => (
                                  <React.Fragment key={index}>
                                    {index <= 2 ? (
                                      <>
                                        <div
                                          key={deal.id}
                                          className='pr-2  reviewcard'
                                        >
                                          <div>
                                            {deal.documents.map(
                                              (doc, index) => {
                                                return (
                                                  <div key={doc.id}>
                                                    <Droppable
                                                      key={client.id}
                                                      types={['file']}
                                                      onDrop={(file) =>
                                                        onDrop1(
                                                          file,
                                                          deal,
                                                          client
                                                        )
                                                      }
                                                    >
                                                      <>
                                                        <div
                                                          style={{
                                                            marginTop: '8px'
                                                          }}
                                                        >
                                                          {/* {data.length &&
                                                            data.map(
                                                              (file, i) => {
                                                                return ( */}
                                                          {/* <Draggable
                                                            className='section-draggable'
                                                            // key={i}
                                                            type='file'
                                                            // data={[
                                                            //   [file.id],
                                                            //   [file.file]
                                                            // ]}
                                                          > */}

                                                         
                                                                    <Draggable
                                                                     
                                                                    >
                                                                      
                                                                        {' '}
                                                                        <FilePreview
                                                                          file={
                                                                            doc
                                                                          }
                                                                          is_draggable={
                                                                            true
                                                                          }
                                                                          keys={
                                                                            index
                                                                          }
                                                                          // choosedFolder={
                                                                          //   choosedFolder
                                                                          // }
                                                                        />
                                                                    </Draggable>
                                                                
                                                        </div>
                                                      </>
                                                    </Droppable>
                                                  </div>
                                                )
                                              }
                                            )}

                                            <p
                                              className='text-center'
                                              style={{ fontWeight: 649 }}
                                            >
                                              {deal.sub_project_name}

                                              {deal.documents.length > 2 && (
                                                <>
                                                  <span
                                                    className='text-primary'
                                                    style={{
                                                      cursor: 'pointer',
                                                      fontWeight: 'bold',
                                                      marginLeft: '10px'
                                                    }}
                                                    onClick={() =>
                                                      history.push(
                                                        `/deals/${deal.id}`,
                                                        {
                                                          client: client
                                                        }
                                                      )
                                                    }
                                                  >
                                                    (Show More)
                                                  </span>
                                                </>
                                              )}
                                              <br />

                                              <SiMicrosoftexcel
                                                size={23}
                                                item='folder'
                                                style={{
                                                  cursor: 'pointer',
                                                  marginLeft: '5px'
                                                }}
                                                onClick={() => {
                                                  setModelStatus(
                                                    true,
                                                    deal.id,
                                                    deal.sub_project_name
                                                  )
                                                }}
                                              />
                                            </p>
                                          </div>
                                        </div>
                                      </>
                                    ) : (
                                      <></>
                                    )}
                                    {index > 2 && (
                                      <p
                                        onClick={() =>
                                          history.push(`/alldeals/${client.id}`)
                                        }
                                        className='allOrderstext'
                                      >
                                        All Orders
                                      </p>
                                    )}
                                  </React.Fragment>
                                ))}
                              </div>
                            </Grid>
                          </Grid>
                        </div>
                      </Droppable>
                    )}
                  </React.Fragment>
                ))}
              </div>
              <div className='col-lg-4'>
                <div
                  style={{
                    minHeight: '1rem',
                    height: 'auto',
                    marginBottom: '30px',
                    marginTop: '23px',
                    width: '100%',
                    borderRadius: '12px'
                  }}
                >
                  <ReviewDisplay
                    groupBy={groupBy}
                    handleMostRecent={handleMostRecent}
                  />
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
      <ClientModal
        show={showClientModal}
        handleClose={handleClose}
        fetchClients={fetchClients}
      />

      {/*  */}
      {showEditClient && (
        <ClientEditModel
          show={showEditClient}
          handleClose={handleCloseClient}
          editClientName={editClientNames}
          editClientId={editClientId}
          fetchClients={fetchClients}
        />
      )}
      {/*  */}
      {subProjectModal && (
        <SubprojectModal
          toggle={subProjectToggle}
          modal={subProjectModal}
          clients={clients}
          subProjectListApi={subProjectListApi}
          fetchClients={fetchClients}
          clientName={clientName}
          editClientId={editClientId}
        />
      )}
      {clientDropBool && (
        <ClientDropModal
          modal={clientDropBool}
          toggle={clientDropToggle}
          onDropData={onDropData}
          addDropFolder={addDropFolder}
        />
      )}
      {clientDropBool1 && (
        <ClientDropModal1
          modal={clientDropBool1}
          toggle={clientDropToggle1}
          onDropData={onDropData1}
          addDropFolder={addDropFolder1}
        />
      )}
      {clientDropBool2 && (
        <ClientDropModal2
          modal={clientDropBool2}
          toggle={clientDropToggle2}
          onDropData={onDropData2}
          addDropFolder={addDropFolder2}
        />
      )}
      {/* 
      {batchDropBool && (
        <BatchModal2
          modal={clientDropBool2}
          toggle={clientDropToggle2}
          onDropData={onDropData2}
          addDropFolder={addDropFolder2}
        />
      )} */}
      {/*  */}
    </div>
  )
}

export default Review
