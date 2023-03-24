import React from 'react';
import organization from '../images/icons/organization.svg';
import artnode from '../images/icons/artnode.svg';
import profile from '../images/icons/profile.svg';
import editprofile from '../images/icons/edit-profile.svg';
import settings from '../images/icons/settings.svg';
import logouticon from '../images/icons/logout.svg';
import bell from '../images/icons/bell.svg';
import process from '../images/icons/process.svg';

function Navbar() {
  return (
    <div>
      <header className="d-flex py-3 px-3 border-bottom">
        <div className="container-fluid d-flex justify-content-between ali-items-center">
          <div className="d-flex ali-items-center">
            <div className="logo-container md-5">
              <a href="#">
                {/* <svg width="53" height="55" viewBox="0 0 53 55" fill="none" href="http://www.w3.org/2000/svg">
                      <rect y="0.0535889" width="53" height="54.6672" fill="url(#pattern0)"/>
                      <defs>
                      <pattern id="pattern0" patternContentUnits="objectBoundingBox" width="1" height="1">
                      <use href="#image0_69_981" transform="matrix(0.00216693 0 0 0.00210084 -0.0482326 0)"/>
                      </pattern>
                      </defs>
                      </svg> */}
                <svg width="53" height="55" viewBox="0 0 53 55" fill="none">
                  <rect
                    y="0.0535889"
                    width="53"
                    height="54.6672"
                    fill="url(#pattern0)"
                  />
                  <defs>
                    <pattern
                      id="pattern0"
                      patternContentUnits="objectBoundingBox"
                      width="1"
                      height="1"
                    >
                      {/* <use xlinkHref="#image0_69_981" transform="matrix(0.00216693 0 0 0.00210084 -0.0482326 0)" /> */}
                    </pattern>
                  </defs>
                </svg>
              </a>
            </div>
            <form className="md-3 p-relative" role="search">
              <input
                type="search"
                className="form-control input-search"
                placeholder="Search Documents"
                aria-label="Search"
              />
            </form>
          </div>

          <div className="d-flex align-items-center">
            <div className="flex-shrink-0 dropdown me-5">
              <a
                href="#"
                className="dropdown-link d-block link-dark text-decoration-none dropdown-toggle"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <img
                  src={artnode}
                  alt="mdo"
                  width="32"
                  height="32"
                  className="rounded-circle"
                />{' '}
                Artnode
              </a>
              <ul className="dropdown-menu text-small shadow">
                <li>
                  <a className="dropdown-item" href="#">
                    <img src={organization} className="md-2" /> Organization
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="process.html">
                    <img src={process} className="me-2" /> Proocess
                  </a>
                </li>
              </ul>
            </div>
            <div className="flex-shrink-0 dropdown me-5">
              <a
                href="#"
                className="dropdown-link d-block link-dark text-decoration-none dropdown-toggle"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <img
                  src={profile}
                  alt="mdo"
                  width="32"
                  height="32"
                  className="rounded-circle"
                />{' '}
                Harald Erlich
              </a>
              <ul className="dropdown-menu text-small shadow">
                <li>
                  <a className="dropdown-item" href="profile.html">
                    <img src={editprofile} className="me-2" /> Edit Profile
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="settings.html">
                    <img src={settings} className="me-2" /> Account Settings
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    <img src={logouticon} className="me-2" />
                    Logout
                  </a>
                </li>
              </ul>
            </div>
            <div className="flex-shrink-0 notification-bell">
              <a
                href=""
                className=" d-flex justify-content-center align-items-center"
                style={{
                  width: '100%',
                  height: '100%',
                  display: 'inlineBlock',
                }}
              >
                <img src={bell} alt="" />
              </a>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}

export default Navbar;
