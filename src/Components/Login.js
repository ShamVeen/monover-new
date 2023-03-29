import React, { useState } from 'react';
// import './Login.css';
import SvgComponent from './SvgComponent';
import axios from 'axios';
import { url } from '../GlobalUrl';
import { useNavigate } from 'react-router-dom';
import SvgFooterLinkedIn from './HomePageSvg/SvgFooterLinkedIn';
import SvgFooterInsta from './HomePageSvg/SvgFooterInsta';
import FooterPrestoLogo from './HomePageSvg/FooterPrestoLogo';
import { Link } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [emailBlured, setEmailBlured] = useState(false);
  const [password, setPassword] = useState('');
  const [passwordBlured, setPasswordBlured] = useState(false);
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [passBorderColor, setPassBorderColor] = useState('#f7f7fa');
  const [emailBorderColor, setEmailBorderColor] = useState('#f7f7fa');
  const [visible, setVisible] = useState(false);
  const [msg, setMsg] = useState('');
  const [verify, setVerify] = useState(false);

  const [modal, setModal] = useState(false);

  const validEmail = (email) => {
    // implement email validation logic
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleEmailBlur = () => {
    setEmailBlured(true);
  };

  function handlePasswordChange(event) {
    setPassword(event.target.value);
  }

  function handlePasswordBlur() {
    setPasswordBlured(true);
  }

  function validPassword(password) {
    // add password validation logic here
    return true;
  }

  const toggle = () => {
    setModal(!modal);
    if (msg === 'Login Successful!') {
      window.location.replace('/review');
    }
  };

  async function verificationEmailApi() {
    setVerify(false);

    await axios
      .post(`${url}/api/email/verification/refresh/`, { email: email })
      .then((res) => {
        //console.log(res);
        setMsg(res.data.message);
        setVerify(false);
      })
      .catch((error) => {
        console.log(error);
        setVerify(false);
      });
  }

  async function callApi() {
    // console.log("DATA", email, password);
    axios.defaults.headers.common['Authorization'] = ``;
    await axios
      .post(url + '/api/token/', { email, password })
      .then((res) => {
        localStorage.setItem('token', res.data.access);
        localStorage.setItem('refresh_token', res.data.refresh);
        const token = localStorage.getItem('token');
        axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;

        if (res.status == 203) {
          // alert("Please verify your email!");
          setMsg('Please verify your email!');
          setModal(true);
          setVerify(true);
        }

        if (res.status === 200) {
          setMsg('Login Successful!');
          window.location.replace('/customer');
          // setModal(true)
          // alert("Login Successful!");
        }
      })
      .catch((error) => {
        // console.log(error.response);
        console.log(error);
        if (error && error.response && error.response.status === 401) {
          // alert(error.response.data.detail);
          setMsg('Invalid email or password');
          localStorage.setItem('token', null);
          axios.defaults.headers.common['Authorization'] = ``;
          setModal(true);
        }
      });
  }

  const show_password = () => {
    setVisible(!visible);
    // if(e.target.checked){
    //     setVisible(true);
    // }
    // else{
    //   setVisible(false);

    // }
  };

  const handleEmail = (e) => {
    // console.log(e.target.value);
    setEmail(e.target.value);

    var emailRegex = '^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+[.]+[a-zA-Z]+$';

    const check = (mailID) => {
      if (mailID.match(emailRegex)) {
        return true;
      } else {
        return false;
      }
    };

    if (e.target.value.length === 0) {
      setEmailError('*Enter email address');
      setEmailBorderColor('1px solid red');
    } else if (!check(e.target.value)) {
      setEmailError('Not a valid email address');
      setEmailBorderColor('1px solid red');
    } else {
      setEmailError('');
      setEmailBorderColor('#f7f7fa');
    }
  };

  const handlePassword = (e) => {
    // console.log(e.target.value);
    setPassword(e.target.value);
    // console.log("LEN", e.target.value.length);

    if (e.target.value.length === 0) {
      setPasswordError('*Enter Password');
      setPassBorderColor('1px solid red');
    } else {
      setPasswordError('');
      setPassBorderColor('#f7f7fa');
    }
  };

  // console.log("URL", url);

  /*-------------------- BUTTON CLICKED --------------------*/

  const handleSubmit = () => {
    // e.preventDefault();
    console.log('tytytyt', email, password);
    if (email === '' || password === '') {
      setMsg('');
      setMsg('Please fill all the details');
      setModal(true);
      setVerify(false);
    } else {
      callApi();
    }
  };

  return (
    <div>
      <div className="home-page">
        <div className="container">
          <nav className="navbar navbar-expand-lg">
            <a className="navbar-brand-home" href="/">
              <SvgComponent />
              {/* <svg
     xmlns="http://www.w3.org/2000/svg"
     xmlns:xlink="http://www.w3.org/1999/xlink"
     width="auto" height="auto" viewBox="0 0 292px 98px">
    <image  x="0px" y="0px" width="292px" height="98px"  xlink:href="data:img/png;base64,iVBORw0KGgoAAAANSUhEUgAAASQAAABiCAMAAADOUV4bAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAY1BMVEX///8AAABRrukTU9E2cOF+pfJ4wfEumd4Lgc4NIUgNIUgNIUgNIUgNIUgNIUgNIUgNIUgNIUgNIUgNIUgNIUgNIUgNIUj///8NIUhRrumq2fh4wfE2cOETU9Eumd5+pfILgc4XabPdAAAAF3RSTlMAAAAAAAAAAAARRCJmd1Uzmcy77t2Iql2mveUAAAABYktHRACIBR1IAAAAB3RJTUUH5wMEDy4IAdeqPgAABH9JREFUeNrt2m2DmjgQB3C53V6bQHgIQmlv79rv/ykr6mQmIYPZ2tbZ2/m/0wjCjzzr4ZDL5/tyeBdRJEVSJEWSFEVSJEVSJElRJEVSJEWSFEVSJEVSJElRJEVSJEWSFEWSjVT90hhrzWuPsbYmrwQhNY6G3lhc0nb0duKy67GhtO2H5Rzvau7T8RGmgUNG7zpxSH6Jc5zgaaYlY483lZatcQB4pO96m/80PaLux+j9oRGOdMpkOAhvbiIZvz3dDSS3LRk66UjLYDiIsbuBZIZtwbyLlDvilEY60uI5iOVo9pH6HPkeUjcyhZN0pMVySNcmwiHVqOmhJ673+iSmHp3rkjgkfx5uwhXPCHEpmeGBjxRp8CRrbzvB8fV5yDpeGuh0/QScnhwxI8rsrG0m0ut30pDcZZ4UKj9CXHvX8MgtQcLhLu7QBxjZ+5HOHCyePHnnynoeHEP780KRqhaeYopUmZG85pCW+JiTerWLFBpig+9hC7RCkeA27QYpen0Daaqy2SB1y0aVPI5l/n8iXXuUqJHtIMEMyec/twhFguZWb5tbSZ8U+uGpLkHyS/480Hsz7e3BSB1UhYrtuOlEs6crsXOvi2PT4OqbSAt+WxSoYe7wVy53IuVOWYTU21OaMBXsCcRa0k4jKcnPk6I6cHFq9pFgVjWnSNBX9YcvfyhFSEnYyeRY7yMlE+jR7SHBa5ciQRXzkpEmDgKGahapsskyw5u7kLLN7Svmn5Dsvb+E/It5+tnmFoVtUiP0sDxSVSfLt8Hcg5TNvUg/23Fnmsim5OjC/e4gnZimqGfqb/ZJfWqEfZJMpMGxe0bkgXOjW+CYSKurOSSoMMcUCQZJJwvpsoxt6YQFpwA+vVt2nkTS+g3uBmnYnPgSmG61spDc9ocARILa79OyPSTcWwoj/AYJNg2S9hY2XMwbQgq3274KCSZNwZZfu8UnggrGrd1kIsGjHZP+KodkN2fgkcLcM1rsheGR23aTiRTWCVNclkHqya7H8VafhMuYMVRSE9Z/R+6ahSKF3Yv4hwBnaeprLYD9M5BteKQKd299sx5Gh0VuO+lepOffhJRuamRn4y60lHUn1sFnQhvNIbG/A7CTpFPw1l9yHv9hcsUvvw0p9B5uD6nPv72DRPcN4gyGvWaxSHAzo+GRbP5md5E4pR0juUjBpd+pSXbbeOi4lUUKe1hRpr1fcOUihWpieaTKpA2ObgIwSJWZ0jMN63e8RaSwVljbD4d0mlI5UjHmeI7AICUHLfNlOiAICVP9qtSNm73vXfuaPyh1jVt/r5zw3z8ikd5OFEmRRCB9ePT1/+ngYgMXKH+H0ics/oZRJEVSJEVSJEWSHUVSJEV6KNJHjCKtwXUH/jGELEs+Pvr6RESRCqJIBVGkgihSQRSpIIpUEEUqiCIVBP9k/D3kE5lyw+ee390PAbl8IkiZYkVao0gFUaSCKFJBFKkgilQQRSqIIhUki/SEUaQViQSRyD/cnzGPvlZZoUiPvhaxUaSCKFJBFKkgilQQRSqIIhVEkQryPpB+ALZs5JwMHZboAAAAAElFTkSuQmCC" />
    </svg> */}
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="nav-item-home-home">
                <li className="nav-item-home nav-item2">
                  <a className="login" href="#">
                    Signup
                  </a>
                </li>
              </ul>
            </div>
            <span className="navbar-text-home">
              <a className="login" href="/signup">
                Signup
              
              </a>
            </span>
          </nav>
        </div>
        <div className="login">
          {' '}
          <h3>Login</h3>{' '}
          <div className="container mt-5">
            <div className="row d-flex justify-content-center">
              <div className="col-md-6">
                <div className="card px-5 py-5" id="form1">
                  <div className="form-data" v-if="!submitted">
                    <div className="forms-inputs mb-4">
                      {' '}
                      <span>Email or username</span>
                      {/* <input autocomplete="off" type="text" v-model="email" v-bind:className="{'form-control':true, 'is-invalid' : !validEmail(email) && emailBlured}" v-on:blur="emailBlured = true"/> */}
                      <input
                        autoComplete="off"
                        type="text"
                        value={email}
                        className={`form-control ${
                          !validEmail(email) && emailBlured ? 'is-invalid' : ''
                        }`}
                        onChange={handleEmailChange}
                        onBlur={handleEmailBlur}
                      />
                      <div className="invalid-feedback">
                        A valid email is required!
                      </div>
                    </div>
                    <div className="forms-inputs mb-4">
                      {' '}
                      <span>Password</span>
                      {/* <input autocomplete="off" type="password" v-model="password" v-bind:className="{'form-control':true, 'is-invalid' : !validPassword(password) && passwordBlured}" v-on:blur="passwordBlured = true"/> */}
                      <input
                        autoComplete="off"
                        type="password"
                        value={password}
                        className={`form-control ${
                          passwordBlured && !validPassword(password)
                            ? 'is-invalid'
                            : ''
                        }`}
                        onChange={handlePasswordChange}
                        onBlur={handlePasswordBlur}
                      />
                      <div className="invalid-feedback">
                        Password must be 8 character!
                      </div>
                    </div>
                    <div className="mb-3">
                      {' '}
                      <Link to="/customer">
                        {' '}
                        <button
                          // onClick={handleSubmit}
                          className="btn btn-dark w-100"
                        >
                          Login
                        </button>
                      </Link>{' '}
                    </div>
                  </div>
                  <div className="success-data" v-else></div>
                </div>
              </div>
            </div>
          </div>{' '}
        </div>
        <footer>
          <div className="container">
            <div className="row">
              <a className="col" href="/">
                <FooterPrestoLogo />
              </a>
              <div className="col">
                <ul>
                  <li>
                    <a href="#">Features</a>
                  </li>
                  <li>
                    <a href="#">How it works</a>
                  </li>
                  <li>
                    <a href="#">Pricing</a>
                  </li>
                  <li>
                    <a href="#">Blog</a>
                  </li>
                </ul>
              </div>
              <div className="col">
                <ul>
                  <li>
                    <a href="#">Terms of use</a>
                  </li>
                  <li>
                    <a href="#">Privacy</a>
                  </li>
                </ul>
              </div>

              <div className="col">
                <ul>
                  <li>
                    <a href="#">Signup</a>
                  </li>
                  <li>
                    <a href="#">Login</a>
                  </li>
                </ul>
              </div>
              <div className="col">
                <ul
                  className="social"
                  style={{ display: 'flex', justifyContent: 'left' }}
                >
                  <li>
                    <a href="#">
                      <SvgFooterInsta />{' '}
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <SvgFooterLinkedIn />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <p className="copy">© 2023 Presto. All rights reserved.</p>
        </footer>
      </div>
    </div>
  );
};

export default Login;
