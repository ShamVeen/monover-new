import React, { useState } from 'react';
import SvgComponent from './SvgComponent';
import { url } from '../GlobalUrl';
import axios from 'axios';
import { Button, Modal, ModalBody, ModalFooter } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';

const SignUp = () => {
  var navigate = useNavigate;
  const [register, setRegister] = useState({
    first_name: '',
    email: '',
    // organisation_name: "",
    password: '',
  });
  const [error, setError] = useState({
    first_nameError: '',
    emailError: '',
    // organisation_nameError: "",
    passwordError: '',
  });

  const [email, setEmail] = useState('');
  const [emailBlured, setEmailBlured] = useState(false);
  const [password, setPassword] = useState('');
  const [passwordBlured, setPasswordBlured] = useState(false);
  const [msg, setMsg] = useState('');
  const [emailBorderColor, setEmailBorderColor] = useState('#f7f7fa');
  const [first_nameBorderColor, setFirst_nameBorderColor] = useState('#f7f7fa');
  const [passwordBorderColor, setPasswordBorderColor] = useState('#f7f7fa');
  const [visible, setVisible] = useState(false);
  const [modal, setModal] = useState(false);

  async function callApi() {
    // console.log("REG",register);
    if (register.first_name === '') {
      setMsg('Enter first name');
      setModal(true);
    } else if (register.last_name === '') {
      setMsg('Enter last name');
      setModal(true);
    } else if (register.email === '') {
      setMsg('Enter email');
      setModal(true);
    } else if (register.password === '') {
      setMsg('Enter password');
      setModal(true);
    } else {
      if (
        error.first_nameError === '' &&
        error.emailError === '' &&
        error.passwordError === ''
      ) {
        axios.defaults.headers.common['Authorization'] = ``;
        await axios
          .post(url + '/api/user/', register)
          .then((res) => {
            // console.log("res", res);
            // console.log("res.data",res.data);
            console.log('yuyytttttxttztztztzztzt', res);
            if (res.data.message) {
              // return <Redirect to="/login-form"/>
              // console.log("res",res);
              if (res.status === 200) {
                // alert(res.data.message);
                setMsg(res.data.message);
                if (
                  res.data.message === 'A user with the email already exist!'
                ) {
                  // setVerify(false)
                  setModal(true);
                  // console.log(res.data.message);
                } else {
                  // setVerify(true)
                  setModal(true);
                }
              }
            }
            // console.log("Status", res.status);
          })
          .catch((error) => {
            console.log('Registration-Error', error);
          });
      }
    }
  }

  // async function verificationEmailApi(){
  //   await axios.post(`${url}/api/email/verification/refresh/`,{"email":register.email})
  //   .then(res=>{
  //     //console.log(res);
  //     setMsg(res.data.message);
  //   })
  //     .catch(error=>{
  //     console.log(error);
  //   })

  // }

  const toggle = () => {
    setModal(!modal);
    // console.log(msg);
    if (
      msg ==
      'chirag jain is successfully registered. Please verify your e-mail before logging in.'
    ) {
      navigate('/login');
    } else {
      // history.push("/login-form")
    }
  };

  // const show_password = (e) => {
  //   setVisible(!visible);
  //   // if(e.target.checked){
  //   //     setVisible(true);
  //   // }
  //   // else{
  //   //   setVisible(false);

  //   // }
  // };

  const first_name_Handler = (e) => {
    setRegister((prev) => {
      return { ...prev, first_name: e.target.value };
    });

    if (e.target.value.length === 0) {
      setError((prev) => {
        return { ...prev, first_nameError: '*Enter first name' };
      });
      setFirst_nameBorderColor('1px solid red');
    } else if (!/^[a-zA-Z]+$/.test(e.target.value)) {
      setError((prev) => {
        return {
          ...prev,
          first_nameError: '*First name can only contain letters',
        };
      });
      setFirst_nameBorderColor('1px solid red');
    } else {
      setError((prev) => {
        return { ...prev, first_nameError: '' };
      });
      setFirst_nameBorderColor('#f7f7fa');
    }
  };

  // const last_name_Handler = (e) => {
  //   // console.log(e.target.value);
  //   setRegister((prev) => {
  //     return { ...prev, last_name: e.target.value };
  //   });

  //   if (e.target.value.length === 0) {
  //     setError((prev) => {
  //       return { ...prev, last_nameError: '*Enter last name' };
  //     });
  //     setLast_nameBorderColor('1px solid red');
  //   } else if (!/^[a-zA-Z]+$/.test(e.target.value)) {
  //     setError((prev) => {
  //       return {
  //         ...prev,
  //         last_nameError: '*Last name can only contain letters',
  //       };
  //     });
  //     setLast_nameBorderColor('1px solid red');
  //   } else {
  //     setError((prev) => {
  //       return { ...prev, last_nameError: '' };
  //     });
  //     setLast_nameBorderColor('#f7f7fa');
  //   }
  // };
  const email_Handler = (e) => {
    // console.log(e.target.value);
    setRegister((prev) => {
      return { ...prev, email: e.target.value };
    });

    var emailRegex = '^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+[.]+[a-zA-Z]+$';

    const check = (mailID) => {
      if (mailID.match(emailRegex)) {
        return true;
      } else {
        return false;
      }
    };

    if (e.target.value.length === 0) {
      setError((prev) => {
        return { ...prev, emailError: '*Enter email' };
      });
      setEmailBorderColor('1px solid red');
    } else if (!check(e.target.value)) {
      setError((prev) => {
        return { ...prev, emailError: '*Not a valid email address' };
      });
      setEmailBorderColor('1px solid red');
    } else {
      setError((prev) => {
        return { ...prev, emailError: '' };
      });
      setEmailBorderColor('#f7f7fa');
    }
  };
  // const Organisation_Handler = (e) => {
  //   console.log(e.target.value);
  //   setRegister((prev) => {
  //     return { ...prev, organisation_name: e.target.value };
  //   });

  //   if (e.target.value.length === 0) {
  //     setError((prev) => {
  //       return { ...prev, organisation_nameError: "*Enter organisation name" };
  //     });
  //     setOrganisation_nameBorderColor("1px solid red");
  //   } else {
  //     setError((prev) => {
  //       return { ...prev, organisation_nameError: "" };
  //     });
  //     setOrganisation_nameBorderColor("#f7f7fa");
  //   }
  // };
  const password_Handler = (e) => {
    // console.log(e.target.value);
    setRegister((prev) => {
      return { ...prev, password: e.target.value };
    });

    var passwordRegex =
      '^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$';

    const check = (password) => {
      if (password.match(passwordRegex)) {
        return true;
      } else {
        return false;
      }
    };

    if (e.target.value.length === 0) {
      setError((prev) => {
        return { ...prev, passwordError: '*Enter password' };
      });
      setPasswordBorderColor('1px solid red');
    } else if (!check(e.target.value)) {
      setError((prev) => {
        return {
          ...prev,
          passwordError:
            '*Password must contain minimum eight characters, at least one uppercase letter, one lowercase letter, one number and one special character',
        };
      });
      setPasswordBorderColor('1px solid red');
    } else {
      setError((prev) => {
        return { ...prev, passwordError: '' };
      });
      setPasswordBorderColor('#f7f7fa');
    }
  };

  // console.log("formdatails", register);

  /*-------------------- BUTTON CLICKED --------------------*/

  const handleSubmit = () => {
    if (
      register.first_name === '' ||
      register.last_name === '' ||
      register.email === '' ||
      // register.organisation_name === "" ||
      register.password === ''
    ) {
      setMsg('Please fill all details');
    }
    callApi();
  };

  return (
    <div>
      <div className="container">
        <nav className="navbar navbar-expand-lg">
          <a className="navbar-brand" href="#">
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
            <ul className="navbar-nav">
              <li className="nav-item nav-item2">
                <a className="login" href="/login">
                  Login
                </a>
              </li>
            </ul>
          </div>
          <span className="navbar-text">
            <a className="login" href="/login">
              Login
            </a>
          </span>
        </nav>
      </div>
      <div className="login">
        {' '}
        <h3>Signup</h3>{' '}
        <div className="container mt-5">
          <div className="row d-flex justify-content-center">
            <div className="col-md-6">
              <div className="card px-5 py-5" id="form1">
                <div className="form-data" v-if="!submitted">
                  {/* <div className="forms-inputs mb-4">
                    {' '}
                    <span>Username</span>
                    <input
                      type="text"
                      className="form-control"
                      value={register.first_name}
                      name="first_name"
                      placeholder="First Name"
                      onChange={first_name_Handler}
                      style={{ border: first_nameBorderColor }}
                    />
                  </div> */}
                  {/* <div className="forms-inputs mb-4">
                    {' '}
                    <span>Last Name</span>
                    <input
                      type="text"
                      className="lastNameInput"
                      value={register.last_name}
                      name="last_name"
                      placeholder="Last Name"
                      onChange={last_name_Handler}
                      style={{ border: last_nameBorderColor }}
                    />
                  </div> */}
                  <div className="forms-inputs mb-4">
                    {' '}
                    <span>Email</span>
                    {/* <input
                      autocomplete="off"
                      type="text"
                      v-model="email"
                      v-bind:className="{'form-control':true, 'is-invalid' : !validEmail(email) && emailBlured}"
                      v-on:blur="emailBlured = true"
                    /> */}
                    <input
                      // autoComplete="off"
                      type="email"
                      value={register.email}
                      // className={`form-control ${
                      //   !validEmail(email) && emailBlured ? 'is-invalid' : ''
                      // }`}
                      className="form-control"
                      onChange={email_Handler}
                    />
                    <div className="invalid-feedback">
                      A valid email is required!
                    </div>
                  </div>
                  <div className="forms-inputs mb-4">
                    {' '}
                    <span>Password</span>
                    {/* <input
                      autocomplete="off"
                      type="password"
                      v-model="password"
                      v-bind:className="{'form-control':true, 'is-invalid' : !validPassword(password) && passwordBlured}"
                      v-on:blur="passwordBlured = true"
                    /> */}
                    <input
                      // autoComplete="off"
                      type={visible ? 'text' : 'password'}
                      value={register.password}
                      // className={`form-control ${
                      //   passwordBlured && !validPassword(password)
                      //     ? 'is-invalid'
                      //     : ''
                      // }`}
                      className="form-control"
                      placeholder="Password"
                      onChange={password_Handler}
                    />
                    <div className="invalid-feedback">
                      Password must be 8 character!
                    </div>
                  </div>
                  
                  <div className="mb-3">
                    <Link to="/customer">
                      <button
                        className="btn btn-dark w-100"
                        // onClick={() => handleSubmit()}
                      >
                        SignUp
                      </button>{' '}
                    </Link>
                  </div>
                </div>
                <div className="success-data" v-else></div>
              </div>
            </div>
          </div>
        </div>{' '}
      </div>
      <Modal isOpen={modal} toggle={toggle}>
        <ModalBody>{msg}</ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={toggle} style={{ fontSize: '12px' }}>
            Okay
          </Button>
          {/* {verify && <Button color="primary" onClick={()=>{toggle();verificationEmailApi();}} style={{fontSize:"12px"}}>
                Resend Verification email
              </Button>} */}
        </ModalFooter>
      </Modal>
      <footer>
        <div className="container">
          <div className="row">
            <div className="col">
              <SvgComponent />
              {/* 
    <svg
     xmlns="http://www.w3.org/2000/svg"
     xmlns:xlink="http://www.w3.org/1999/xlink"
     width="292px" height="98px"    width="auto" height="auto" viewBox="0 0 292px 98px">
    <image  x="0px" y="0px" width="292px" height="98px"  xlink:href="data:img/png;base64,iVBORw0KGgoAAAANSUhEUgAAASQAAABiCAMAAADOUV4bAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAYFBMVEX///8AAABRrukTU9E2cOF+pfJ4wfEumd4Lgc7///////////////////////////////////////////////////////////9Rrumq2fh4wfE2cOETU9Eumd5+pfILgc441EcAAAAAF3RSTlMAAAAAAAAAAAARRCJmd1Uzmcy77t2Iql2mveUAAAABYktHRACIBR1IAAAAB3RJTUUH5wMFASkswLeSRwAABIFJREFUeNrt2m1jmyAQB/C4dmtB8QGjbusevv+3XExy3IEcoU3b0PX+7xLU6E9AwOx2sSzXZfcpIkiCJEiCVFIESZAESZBKiiAJkiAJUkkRJEESJEEqKYIkSIIkSCVFkMpGql41Smv13H20rsmngpAaQ0MvzC9pO3o5ftl5X1fa9sPpdKypua39PVQDu4zWdMUh2eAI+wnuZlgy9nhRNvLbBgD39Fur41vTPep+9L4fmsKRDpkUB2HVRSRlt4e7gGS2JUNXOtIyKA5i7C4gqWFbMCeRYnsc0pSOtFgOYtmrNFIfI08hdSNTOJWOtGgO6dxEOKQaNS30xHWqT2Lq0ZqmOCR7fNy4M54R4lQyww0fKdJgSdbedoL96+Mja39qoNN5Czg82WPGc5+N1s1Eev2uNCRzGie5yo8Q597V3XJNkPBx53foAzzZ+5GOHDQePPjmzHp8OLr2ZwtFqlq4iyFSpUbymUNa/H0O6lUSyTXEBr/DFqgLRYLL1Bsk7/MFpKmKZoPUwXkbuhncjmX+P5HOPYrXyBJIMEKy8e24y7k1EjS3etvckI9Hcv3wVOcg2SV+HOi9mfZ2Y6QOqkLFdtx0oNnTmdix18VTGUx9EWnBX/MCNczsvsRyJVLskFlIvT6kcUPBnkCsJe00kpL4OMmrAyenJo0Eo6o5RIK+qt99f6dkIQVhB5NjnUYKBtCjSSHBZxMiQRWzJSNNHAQ8qlmkSgfTDKuuQoo2tx+Yny7Ra39y+YW5e2lz88I2qRF6WB6pqoPp26CuQYrmWqSXdtyRJrIp2Rt3vQmkA9Pk9Uz9xT6pD42wTyoTaTDsmhG54dzTzXFMpNXVHBJUmH2IBA9JUxbSaRrb0gELDgFseLXsOImktRvcDdKwOfApMNxqy0Iy2xcBiAS134ZlKSRcW3JP+A0SLBoE7c0tuKgPhOQut30WEgyanC0/d/MPBBWMm7uViQS3dgz6qxiS3hyBR3JjT2+y5x6P3LJbmUhunjD5ZRGknqx67C/1STiNGV0lVW7+t+fOuVAkt3rhvwgwmqY+1wJYPwPZhkeqcPXWNutu9LHILSddi3T/RkjhokZ0NG5cS1lXYg1s49poDIl9D8AOkg7BS3+KefzGxIqf3gzJ9R4mhdTHv04g0XUDP4Niz7lYJLiYUfFIOn6xSSROKWFULpJz6RM1SW8bD31uRZHcGpaXKfUGt1wkV000j1SpsMHRRQAGqVJTeKRh/Y2PiOTmCmv74ZAOQypDKsbsjxEYpGCnZT4NBwpCwlSvlboxs7W9aZ/zB6WuMev7ygn//VMk0seJIAlSEUhfb33+7x2cbOAE5ZsrvcPiPxhBEiRBEiRBEqSyI0iCJEg3RXrACNIanHfgH0PItOTh1udXRAQpI4KUEUHKiCBlRJAyIkgZEaSMCFJG8E/Gf10eyZAbtrv/dC8CYnkkSJFiQVojSBkRpIwIUkYEKSOClBFByoggZSSKdIcRpBWJBJHIP9zvMbc+17JCkW59LsVGkDIiSBkRpIwIUkYEKSOClBFBysjnQPoHsnbSJWBBfwoAAAAASUVORK5CYII=" />
    </svg> */}
            </div>
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
              <ul className="social">
                <li>
                  <a href="#">
                    {/* <svg
                      xmlns="http://www.w3.org/2000/svg"
                      xmlns:xlink="http://www.w3.org/1999/xlink"
                      width="auto"
                      height="auto"
                      viewBox="0 0 72px 72px"
                      style="width:30px;"
                    >
                      <image
                        x="0px"
                        y="0px"
                        width="72px"
                        height="72px"
                        style="width:30px;"
                        xlink:href="data:img/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEgAAABICAQAAAD/5HvMAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAAmJLR0QA/4ePzL8AAAAHdElNRQfnAwUBLycBP+xJAAAEeUlEQVRo3tWaTWgbRxTHf5KFIDhIxhE5JBQaubbTFlwHAhG69FBTaG2QFexDLibQQw6pj03iQi5pKG3d5OTcegjy0W1TSByX4EMLtdCttkka26llQ5MeilpHwbGoIXo97K6+Iml2Rx/Z/ueg2Zn33vz1Znbm7cx4BC34iTBAH8cJEyJolmbJkGaNDVZJsa9j2OOYUA/jDBHlgEIuR5JF5th0aF/sp4CckyVxiiU5JwH7rdgVDMm0ZB2TsZCVaQk1j1CnXJFdbTIWduWKdDaDUEweN0zGwmOJNUYoKLNNI2NhVoK6hAYl3XQ6IiJpGdQhNCZ7LaEjIrInY04JTUq+ZXRERPIy6YTQpZaSsXDJLqHJttARkWpeqjZ2WttZpci/PJYq17JBkspVqpnIEWW59uIa5FeOtZEOwBYnyBYfvWWVM22nA8eYKXsuWyReFWLVxlAn6xxtu38MPKGf50a22GUXlXR2uMpJDuFxkA5xkqvsKCwf5WJll4WUAcZt6bIX0VRJXXJbYX3XipcslWklnQ5tOgjSoaQ0XUoooIgGdxrwTtFLO3XbyBqBrjGGzhCo28c3eOpwmL7PdiH9AsBTbtTVCHCmOIZUofspx/4YLdHeNstOKVpZsjzUQ1Txf7cc+kfPSpQe47UfV5r6y3Hj/1YpU384jhuEhpry/8uR09IaAi9+ZYe1D1H8PiItCTfuEy/k92xrHSDiY6Dhxj2c4C3gN5bJm2UZftCyNeCjr0E6cb7iDTO/xQW+bchaH3JP1Kg933z6kuxndeZqNe555Hd6bHQKwFnOms/bZm6YO1Wkx/gOgG8KnrvJTaBLuerDpo+QbXe+zrtmbsX8/bKq3Od8jwB/85FZ8pPtNkLewu6XE/wMwHHerlrbxzsApDQsB70aSvDEbLgW+kukHEKPkIF8zZoXgDXy2kLoCACPatY/LJFyTCiroRUBYJ37Neg8KJFyhqyXjIZa3OyOT6rWXgDAU7J42EfGS1pDrZcYAD9WoTRlzk0xejUsp72saajBNQ4C8DXDZgcBPGCYLwA4yDUtu2s+NrQUwyQY5wVwl7u8ST+wbg5m6CBBWMvuho9VLUWIM8cEuwA8LFAxvJPQGj8Aq15SmtEdxFlhtGK28TDKijadHCkf+yR5T9NAmFs84hYp/gSOECGuNZQtJNn3AYvahAB6zde8GVg0Zuo5peBhQDdwL2r6lXJzBqFNkgpB441Z0Ca0UGKlNpJsWmtZQiE6AsAqU1p0psw3eUQhlwBrjzHAH3W/7rOE+QeAAT5w9JWSY8Gk0026buz1jNd4hu3tmPmGt2PmFS2UbcfY2bCal25tOt1KOoUNK5/psAzXuVzX+R+SZoY7pB0d7voJM8LHykD5uhV1uHjT8znnXxEdOG/RoeKso/nnh3YwW/usw3VHC1lON7BA6CDH6fKovvKrY5kJNG9faECYKD8L4v9wgIe47ojT8JKrDoER1x2TI667SIC47qqFkVx1GcVILruugxkvuehCk5XacuXLdZfinBMy0LJrg/8BnEUUjla6nLoAAAAASUVORK5CYII="
                      />
                    </svg> */}
                    <SvgComponent />
                  </a>
                </li>
                <li>
                  <a href="#">
                    {/* <svg
                      xmlns="http://www.w3.org/2000/svg"
                      xmlns:xlink="http://www.w3.org/1999/xlink"
                      width="72px"
                      height="72px"
                      viewBox="0 0 72px 72px"
                      style="width:30px;"
                    >
                      <image
                        x="0px"
                        y="0px"
                        width="72px"
                        height="72px"
                        style="width:30px;"
                        xlink:href="data:img/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEgAAABICAQAAAD/5HvMAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAAmJLR0QA/4ePzL8AAAAHdElNRQfnAwUBMghVgr0MAAADoUlEQVRo3tWaz0sUYRjHPzuZZcZu0dZFgtQyIQijBLFLlESHQCiF6iARQkF6KjCICIIgWOhkQRQdEpKQ/oBA6dRihyikHya4drAfhw0cUReMfDqMM+476e4728zO9J3LvD/2nQ/v8+48z7zvExNKUiUt7KeBRupIkliuNcmSYZwJxhhlsZSBY56B6umkjVaqivTLkWaYISY9ji/6V1wuyivxqldyUeL6T9HtmJSUmJ5hbJmSkqR/QNVyS+ZKhrE1J7ek2g+gdpn+Zxhb09L+b0AJGfANxtaAJEoFapKM7zgiIhlpKgWoQxYCwRERWZAOr0C9shQYjojIkvR6AboWKIyta7pAvWXBEZHVZmm1tROssfK19PdacvuyJtJFvZSfytHKu7Wda4K31JYRB2CKA5grRUNp7C87DtTSr5QVJxGW2ldbQ9V8pqbs82PpK3uZt25XTNZXECfDeXaylWYeBABUQ5/bZMmCAcYnxSFeCsBoc3a8ZD8kpWtjQWIyFgBSKh8oXiQadAcM/QEAmVaga62hs8QL2nijq1wRwDqKc3ZlUXcV6XxSKa3nRABANoUg9UWnMyuNjrnWyb0ADGapXqgAOouyb+MND3nJAnu4wMFA5gegkzsxgWGOBfYIbxqhLSaVzJTVvxdSji0VtGjg/OJpXmkzp5fvXvBD6XeO9QC85jXfELZziMPLdTqqogXp0VhsM8pbaJdTf8T1fpoRkUdS6/qUuu7hc6HHoMHHKV+kg26mlDqT2zTzVXOEBoNGH4Fu8HzV+g8ct715ETUa1PkI9HjNlo/c1BqhziDpI9CvAm33+akxQtJwdr/8UQXdDPKMq2x2teTWMKeqBFprX/dftkFGnLb3ssXVekbnUYYGtb6ucNS535cXBVp6rzOEv0DnlVKHq/W7HpCp001TO5TSbiqV8m+NEUyDrI9Abm3y/IusQSZAIO/KGIyHzaBo3GAibAZFEwZjYTMoGjMYJRc2haMcowaLpMPmcJRm0QCGw+ZwNGy9qYfC5nA0ZAFNRsRoaSZtX/YkbJYVCgtokNmwaZhlENDcjimHUuqWXpIvVIc4P/Pssty8HQ9luRsiDty1o44Ib3rOczms6eFy3lebEob7f36oo4G1zzoid7RgcqrMvj/HKTWqd391vKOLErMvSpDQpZ4F8T8c4EXwiDOCh8ARPCZHIpdIYO0PRirVwj5njFAyinVFLF3HuiKV0GRfZUn5ilxSnHcgS4GlDf4BKzJtObM2uwIAAAAASUVORK5CYII="
                      />
                    </svg> */}
                    <SvgComponent />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <p className="copy">© 2023 Presto. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default SignUp;
