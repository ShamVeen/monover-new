import React, { useState, useEffect, useContext } from 'react';
import Batch from './Batch';
// import * as bootstrap from 'bootstrap';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Customer from './Customer';
import '../style.css';
// import './Home.css';
import Deals from './Deals';
import LeftSidebar from './LeftSidebar';
import Catalogue from './Catalogue';
import Navbar from './Navbar';
import Shared from './Shared';
import EditProcess from './EditProcess';
import EditorPage from './EditorPage';
import DragandDrop from './DragandDrop';
import CustomerSigma from './CustomerSigma';
import SingleProduct from './SingleProduct';
import Preview from './Preview';
import Settings from './Settings';
import Profile from './Profile';
import Process from './Process';
import FilesUpload from './FilesUpload';
import RightSidebar from './RightSidebar';
import HomePage from './HomePage/HomePage';
import Login from './Login';
import SignUp from './SignUp';
import DocumentDetails from './CreateDocument/DocumentDetails';
import DisplayDocuments from './DragAndDrop/DisplayDocuments';
import SharedWithMe from './SharedWithMe';
import Excel from './Excel';
import Excel2 from './Excel2';

import axios from 'axios';
import '../providers/token_listener';

function Home() {
  // const [userData, setUserData] = useContext(UserContext);
  // const [theUserData, setTheUserData] = useState(userData);

  // const token = localStorage.getItem('token');

  // useEffect(() => {
  //   if (axios)
  //     axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
  // }, [token]);
  return (
    <div className="App">
      {/* <Navbar/> */}
      {/* <HomePage/> */}
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />

          <Route path="/customer" element={<Customer />} />
          <Route path="/batch" element={<Batch />} />
          <Route path="/catalogue" element={<Catalogue />} />
          <Route path="/shared" element={<Shared />} />
          <Route path="/edit-process" element={<EditProcess />} />
          <Route path="/editor-page" element={<EditorPage />} />
          <Route path="/drag-drop" element={<DragandDrop />} />
          <Route path="/customer-sigma" element={<CustomerSigma />} />
          <Route path="/single-product" element={<SingleProduct />} />
          <Route path="/preview" element={<Preview />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/process" element={<Process />} />
          <Route path="/files-upload" element={<FilesUpload />} />
          <Route path="/right-side-bar" element={<RightSidebar />} />
          <Route path="left-side-bar" element={<LeftSidebar />} />
          <Route
            path="/document-details/:document_id/(shared)?/:shared?"
            element={DocumentDetails}
          />
          <Route path="/deals/:id" component={Deals} />

          {/* <Route path="/DragAndDrop" element={DragAndDrop} /> */}
          <Route path="/DisplayDocuments" element={DisplayDocuments} />
          <Route path="/SharedWithMe" element={SharedWithMe} />
          {/* <Route path="/Products" element={Products} /> */}

          {/* <Route exact path="/excel/:id" component={Excel} /> */}
{/* 
          <Route
            exact
            path="/subproject/:sub_project_id/:sub_project_name/excel"
            component={Excel2}
          /> */}
          {/* <Route />
        <Route />
        <Route /> */}
        </Routes>
      </Router>
    </div>
  );
}

export default Home;
