// import { NavLink } from "react-router-dom";
import React, { useState, useContext, useEffect } from 'react';
import './App.css';
import Home from './Components/Home';
import axios from 'axios';

// import LoginForm from "./components/Registration/LoginForm";
// import RegistrationForm from "./components/Registration/RegistrationForm";
import Slider from './Components/Slider/Slider';

// import ReactDOM from "react-dom";
// import { UserContext } from '../src/Components/UserContext';
// import './providers/token_listener';

function App() {
  // const [userData, setUserData] = useContext(UserContext);
  // const [theUserData, setTheUserData] = useState(userData);

  // const token = localStorage.getItem('token');

  // useEffect(() => {
  //   // alert("Org Email: "+userData.email)
  //   if (axios)
  //     axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
  // }, [token]);
  return (
    <div>
      {/* <RegistrationForm/> */}
      {/* <LoginForm/> */}
      {/* <Slider /> */}
      <Home/>
      {/* <Home
        organizationName={userData.organisation_name}
        organisationEmail={theUserData.email}
      /> */}
    </div>
  );
}

export default App;
