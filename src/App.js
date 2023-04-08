import React, { useState, useEffect, useContext } from 'react';
import Batch from './Components/Batch';
// import * as bootstrap from 'bootstrap';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Customer from './Components/Customer';
import './style.css';
// import './App.css';
import Deals from './Components/Deals';
import LeftSidebar from './Components/LeftSidebar';
import Catalogue from './Components/Catalogue';
import Navbar from './Components/Navbar';
import Shared from './Components/Shared';
import EditProcess from './Components/EditProcess';
import EditorPage from './Components/EditorPage';
import DragandDrop from './Components/DragandDrop';
import CustomerSigma from './Components/CustomerSigma';
import SingleProduct from './Components/SingleProduct';
import Preview from './Components/Preview';
import Settings from './Components/Settings';
import Profile from './Components/Profile';
import Process from './Components/Process';
import FilesUpload from './Components/FilesUpload';
import RightSidebar from './Components/RightSidebar';
import HomePage from './Components/HomePage/HomePage';
import Login from './Components/Login';
import SignUp from './Components/SignUp';
import DocumentDetails from './Components/CreateDocument/DocumentDetails';
import DisplayDocuments from './Components/DragAndDrop/DisplayDocuments';
import SharedWithMe from './Components/SharedWithMe';
import { UserContext } from '../src/Components/UserContext';
import axios from 'axios';
import './providers/token_listener';

function App() {
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
          <Route path='/deals/:id' component={Deals} />

          {/* <Route path="/DragAndDrop" element={DragAndDrop} /> */}
          <Route path="/DisplayDocuments" element={DisplayDocuments} />
          <Route path="/SharedWithMe" element={SharedWithMe} />
          {/* <Route path="/Products" element={Products} /> */}

          {/* <Route />
        <Route />
        <Route /> */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
