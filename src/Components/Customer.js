import React from 'react';
import { Link } from 'react-router-dom';
import { Tab, Nav } from 'react-bootstrap';
import organization from '../images/icons/organization.svg';
import artnode from '../images/icons/artnode.svg';
import profile from '../images/icons/profile.svg';
import editprofile from '../images/icons/edit-profile.svg';
import settings from '../images/icons/settings.svg';
import logouticon from '../images/icons/logout.svg';
import bell from '../images/icons/bell.svg';
import Navbar from './Navbar';
import process from '../images/icons/process.svg';
import upload from '../images/icons/upload.svg';
import edit from '../images/icons//edit.svg';
import share from '../images/icons/share.svg';
import eye from '../images/icons/eye.svg';
import doc from '../images/icons/doc.svg';
import rightArrow from '../images/icons/right-arrow.svg';
import png from '../images/icons/png.svg';
import preview from '../images/preview.png';
import previewPlaceholder from '../images/preview-placeholder.png';
import folderIcon from '../images/icons/folder.svg';
import folderFilled from '../images/icons/folder-filled.svg';
import customerLogo from '../images/customer-logo.svg';
import Catalogue from './Catalogue';
import Shared from './Shared';
import Batch from './Batch';
import ModalforCustomerAddOrder from './Modals/ModalforCustomerAddOrder';

function Customer() {
  return (
    <div>
    <Navbar/>
      <div className="row">
        <div className="sidebar col-sm-auto sticky-top px-0">
          <div className="d-flex flex-sm-column flex-row flex-nowrap align-items-center sticky-top">
            <ul className="nav nav-pills nav-flush flex-sm-column flex-row flex-nowrap mb-auto mx-auto text-center align-items-center">
              <li className="sidebar-menu active d-flex justify-content-center align-items-center">
                <a href="" className="nav-link" title="">
                  <svg
                    width="22"
                    height="19"
                    viewBox="0 0 22 19"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M22 15.6071C22 14.7074 21.6384 13.8442 20.9935 13.2077C20.3486 12.5712 19.4741 12.2143 18.5625 12.2143C15.7396 12.2143 11.7604 12.2143 8.9375 12.2143C8.02588 12.2143 7.15137 12.5712 6.5065 13.2077C5.86162 13.8442 5.5 14.7074 5.5 15.6071C5.5 17.8424 5.5 19 5.5 19H22C22 19 22 17.8424 22 15.6071ZM4.125 16.2857H0C0 16.2857 0 15.1281 0 12.8929C0 11.9931 0.361625 11.1299 1.0065 10.4934C1.65138 9.85693 2.52588 9.5 3.4375 9.5H8.987C9.28675 10.0103 9.66763 10.469 10.1131 10.8571H8.9375C6.27962 10.8571 4.125 12.9838 4.125 15.6071V16.2857ZM13.75 2.71429C16.027 2.71429 17.875 4.53829 17.875 6.78571C17.875 9.03314 16.027 10.8571 13.75 10.8571C11.473 10.8571 9.625 9.03314 9.625 6.78571C9.625 4.53829 11.473 2.71429 13.75 2.71429ZM8.42325 8.13879C8.3655 8.1415 8.30775 8.14286 8.25 8.14286C5.973 8.14286 4.125 6.31886 4.125 4.07143C4.125 1.824 5.973 0 8.25 0C9.66075 0 10.9065 0.700286 11.6504 1.767C9.65525 2.58264 8.25 4.52336 8.25 6.78571C8.25 7.25257 8.3105 7.70721 8.42325 8.13879Z"
                      fill="#C3CAD9"
                    />
                  </svg>

                  <span className="d-block pt-2">customers</span>
                </a>
              </li>

              <li className="sidebar-menu d-flex justify-content-center align-items-center">
                <Link to="/batch" className="nav-link" title="">
                  <svg
                    width="23"
                    height="22"
                    viewBox="0 0 23 22"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M20.3557 14.693L22.9166 15.9729L11.4583 21.7021L0 15.9729L2.56093 14.693L11.4583 19.1424L20.3557 14.693ZM11.4583 10.2438L12.6717 10.8511L11.4583 11.4582L10.2449 10.8511L11.4583 10.2438Z"
                      fill="#C3CAD9"
                    />
                    <path
                      d="M20.3568 9.57019L22.9166 10.851L11.4583 16.5802L0 10.851L2.55979 9.57019L11.4583 14.0205L20.3568 9.57019Z"
                      fill="#C3CAD9"
                    />
                    <path
                      d="M11.4583 0L22.9166 5.72916L11.4583 11.4583L0 5.72916L11.4583 0Z"
                      fill="#C3CAD9"
                    />
                  </svg>

                  <span className="d-block pt-2">batch</span>
                </Link>
              </li>
              <li className="sidebar-menu d-flex justify-content-center align-items-center">
                <Link to="/catalogue" className="nav-link" title="">
                  <svg
                    width="21"
                    height="24"
                    viewBox="0 0 21 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M10.125 0L20.25 5.84567V17.537L10.125 23.3827L0 17.537V5.84567L10.125 0ZM6.74995 10.9117L6.75 18.8361L9 20.1353V12.2108L6.74995 10.9117ZM2.25 8.31375V16.238L4.49998 17.5371V9.61274L2.25 8.31375ZM14.5542 5.15526L7.93194 8.99622L10.125 10.2624L16.7625 6.43024L14.5542 5.15526ZM10.125 2.59808L3.4875 6.43024L5.6845 7.69864L12.3068 3.85773L10.125 2.59808Z"
                      fill="#C3CAD9"
                    />
                  </svg>
                  <span className="d-block pt-2">catalogue</span>
                </Link>
              </li>
              <li className="sidebar-menu d-flex justify-content-center align-items-center">
                <Link to="/shared" className="nav-link" title="">
                  <svg
                    width="23"
                    height="18"
                    viewBox="0 0 23 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M9.43116 10.7037H10.957V14.8991C10.2144 14.371 9.53321 12.8093 9.43116 10.7037ZM6.59496 10.7037C6.78223 12.4055 7.83855 13.845 9.30794 14.5778C8.76459 13.6067 8.41393 12.2594 8.34662 10.7037H6.59496ZM9.43116 9.61811H10.957V5.42271C10.2144 5.95195 9.53321 7.51362 9.43116 9.61811ZM6.59496 9.61811H8.34716C8.41393 8.06458 8.76567 6.71569 9.30849 5.7446C7.83855 6.47685 6.78223 7.91639 6.59496 9.61811ZM12.0426 14.9002C12.7852 14.3704 13.4664 12.8088 13.5685 10.7048H12.0426V14.9002ZM13.6917 5.7446C14.2351 6.71569 14.5857 8.06349 14.653 9.61811H16.4058C16.2174 7.91639 15.1611 6.47685 13.6917 5.7446ZM22.3561 2.71407V14.9616C22.3561 16.4608 21.1413 17.6756 19.642 17.6756H3.35762C1.85837 17.6756 0.643555 16.4608 0.643555 14.9616V4.78382C0.643555 3.28511 1.85837 2.06975 3.35762 2.06975H12.8992C13.1885 0.882072 14.2595 0 15.5356 0H19.6404C21.1413 0 22.3561 1.2159 22.3561 2.71407ZM17.5218 10.1609C17.5218 6.84054 14.8202 4.13895 11.4998 4.13895C8.17943 4.13895 5.47785 6.84054 5.47785 10.1609C5.47785 13.4808 8.17943 16.184 11.4998 16.184C14.8202 16.184 17.5218 13.4824 17.5218 10.1609ZM12.0426 5.42271V9.61811H13.5685C13.4664 7.51362 12.7852 5.95195 12.0426 5.42271ZM13.6917 14.5773C15.1611 13.845 16.2174 12.406 16.4047 10.7037H14.6525C14.5873 12.2584 14.2351 13.6062 13.6917 14.5773Z"
                      fill="#C3CAD9"
                    />
                  </svg>
                  <span className="d-block pt-2">shared</span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="main-section col-sm min-vh-100 pe-0">
          {/* <!-- content --> */}
          <div className="content d-flex justify-content-between">
            <div className="main-content p-4 mt-2">
              <div className="content-header d-flex justify-content-between">
                <div className="content-header d-flex justify-content-between align-items-center">
                  <svg
                    className="me-2"
                    width="24"
                    height="21"
                    viewBox="0 0 22 19"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M22 15.6071C22 14.7074 21.6384 13.8442 20.9935 13.2077C20.3486 12.5712 19.4741 12.2143 18.5625 12.2143C15.7396 12.2143 11.7604 12.2143 8.9375 12.2143C8.02588 12.2143 7.15137 12.5712 6.5065 13.2077C5.86162 13.8442 5.5 14.7074 5.5 15.6071C5.5 17.8424 5.5 19 5.5 19H22C22 19 22 17.8424 22 15.6071ZM4.125 16.2857H0C0 16.2857 0 15.1281 0 12.8929C0 11.9931 0.361625 11.1299 1.0065 10.4934C1.65138 9.85693 2.52588 9.5 3.4375 9.5H8.987C9.28675 10.0103 9.66763 10.469 10.1131 10.8571H8.9375C6.27962 10.8571 4.125 12.9838 4.125 15.6071V16.2857ZM13.75 2.71429C16.027 2.71429 17.875 4.53829 17.875 6.78571C17.875 9.03314 16.027 10.8571 13.75 10.8571C11.473 10.8571 9.625 9.03314 9.625 6.78571C9.625 4.53829 11.473 2.71429 13.75 2.71429ZM8.42325 8.13879C8.3655 8.1415 8.30775 8.14286 8.25 8.14286C5.973 8.14286 4.125 6.31886 4.125 4.07143C4.125 1.824 5.973 0 8.25 0C9.66075 0 10.9065 0.700286 11.6504 1.767C9.65525 2.58264 8.25 4.52336 8.25 6.78571C8.25 7.25257 8.3105 7.70721 8.42325 8.13879Z"
                      fill="#1353D1"
                    />
                  </svg>
                  <p className="main-content-header mb-0">Customers</p>
                </div>
                <div className="content-header-action">
                {/* <ModalforCustomerAddOrder size='lg'> */}
                <a
                    href=""
                    className="btn btn-primary me-2"
                    data-bs-toggle="modal"
                    data-bs-target="#newOrder"
                  >
                    <svg
                      className="me-3"
                      width="13"
                      height="14"
                      viewBox="0 0 12 13"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M6.59722 0.5625L6.59721 5.84026L11.875 5.84028V7.15972L6.59721 7.15971L6.59722 12.4375H5.27778L5.27776 7.15971L0 7.15972V5.84028L5.27776 5.84026L5.27778 0.5625H6.59722Z"
                        fill="white"
                      />
                    </svg>
                    Add Order
                  </a>
                  {/* </ModalforCustomerAddOrder> */}
                  <a
                    href=""
                    className="btn btn-primary"
                    data-bs-toggle="modal"
                    data-bs-target="#newCustomer"
                  >
                    <svg
                      className="me-3"
                      width="13"
                      height="14"
                      viewBox="0 0 12 13"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M6.59722 0.5625L6.59721 5.84026L11.875 5.84028V7.15972L6.59721 7.15971L6.59722 12.4375H5.27778L5.27776 7.15971L0 7.15972V5.84028L5.27776 5.84026L5.27778 0.5625H6.59722Z"
                        fill="white"
                      />
                    </svg>
                    New Customer
                  </a>
                </div>
              </div>

              <div className="content-wrapper">
                <div className="customer-filter mt-4">
                  <div className="dropdown">
                    <button
                      className="dropdown-toggle"
                      type="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      Filter by
                    </button>
                    <ul className="dropdown-menu">
                      <li>
                        <a className="dropdown-item" href="#">
                          Excel
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          Image
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          PDF
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="customer-box white box-dashed mt-3 p-4 mb-4">
                  <div className="customer-header d-flex justify-content-between">
                    <div className="customer-info">
                      <img className="me-1" src={customerLogo} alt="" />
                      <span className="me-1">Sigma</span>
                      <Link to="/customer-sigma">
                        <img src={edit} alt="" />
                      </Link>
                    </div>
                    <div className="customer-action">
                      <a href="" className="btn btn-secondary me-2">
                        <svg
                          className="me-2"
                          width="13"
                          height="14"
                          viewBox="0 0 12 13"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M6.59722 0.5625L6.59721 5.84026L11.875 5.84028V7.15972L6.59721 7.15971L6.59722 12.4375H5.27778L5.27776 7.15971L0 7.15972V5.84028L5.27776 5.84026L5.27778 0.5625H6.59722Z"
                            fill="white"
                          />
                        </svg>
                        Add Document
                      </a>
                      <a href="" className="btn btn-icon btn-secondary me-2">
                        <img src={upload} alt="" />
                      </a>
                      <a href="" className="btn btn-icon btn-primary">
                        <img src={share} alt="" />
                      </a>
                    </div>
                  </div>

                  <div className="customer-docs d-flex flex-wrap align-items-start mt-4">
                    <div className="doc-box mb-3 me-3">
                      <div className="doc-title doc-blue ps-3">
                        <span>
                          <img className="me-1" src={png} alt="" />{' '}
                          Screenshot1.png
                        </span>
                      </div>
                      <div className="doc-action d-flex justify-content-between">
                        <a className="doc-action-link py-2" href="">
                          <img src={eye} alt="" />
                        </a>
                        <a className="doc-action-link py-2" href="">
                          <img src={doc} alt="" />
                        </a>
                        <a className="doc-action-link py-2" href="">
                          <img src={rightArrow} alt="" />
                        </a>
                      </div>
                    </div>
                    <div className="doc-box mb-3 me-3">
                      <div className="doc-title doc-blue ps-3">
                        <span>
                          <img className="me-1" src={png} alt="" />{' '}
                          Screenshot1.png
                        </span>
                      </div>
                      <div className="doc-action d-flex justify-content-between">
                        <a className="doc-action-link py-2" href="">
                          <img src={eye} alt="" />
                        </a>
                        <a className="doc-action-link py-2" href="">
                          <img src={doc} alt="" />
                        </a>
                        <a className="doc-action-link py-2" href="">
                          <img src={rightArrow} alt="" />
                        </a>
                      </div>
                    </div>
                    <div className="doc-box mb-3 me-3">
                      <div className="doc-title doc-green ps-3">
                        <span>
                          <img className="me-1" src={png} alt="" />{' '}
                          Screenshot1.png
                        </span>
                      </div>
                      <div className="doc-action d-flex justify-content-between">
                        <a className="doc-action-link py-2" href="">
                          <img src={eye} alt="" />
                        </a>
                      </div>
                    </div>
                    <div className="doc-box mb-3 me-3">
                      <div className="doc-title doc-red ps-3">
                        <span>
                          <img className="me-1" src={png} alt="" />{' '}
                          Screenshot1.pdf
                        </span>
                      </div>
                      <div className="doc-action d-flex justify-content-between">
                        <a className="doc-action-link py-2" href="">
                          <img src={eye} alt="" />
                        </a>
                        <a className="doc-action-link py-2" href="">
                          <img src={doc} alt="" />
                        </a>
                        <a className="doc-action-link py-2" href="">
                          <img src={rightArrow} alt="" />
                        </a>
                      </div>
                    </div>
                    <div className="doc-box mb-3 me-3">
                      <div className="doc-title doc-red ps-3">
                        <span>
                          <img className="me-1" src={png} alt="" />{' '}
                          Screenshot1.pdf
                        </span>
                      </div>
                      <div className="doc-action d-flex justify-content-between">
                        <a className="doc-action-link py-2" href="">
                          <img src={eye} alt="" />
                        </a>
                        <a className="doc-action-link py-2" href="">
                          <img src={doc} alt="" />
                        </a>
                        <a className="doc-action-link py-2" href="">
                          <img src={rightArrow} alt="" />
                        </a>
                      </div>
                    </div>
                    <div className="doc-box mb-3 me-3">
                      <div className="doc-title doc-blue ps-3">
                        <span>
                          <img className="me-1" src={png} alt="" />{' '}
                          Screenshot1.png
                        </span>
                      </div>
                      <div className="doc-action d-flex justify-content-between">
                        <a className="doc-action-link py-2" href="">
                          <img src={eye} alt="" />
                        </a>
                        <a className="doc-action-link py-2" href="">
                          <img src={doc} alt="" />
                        </a>
                        <a className="doc-action-link py-2" href="">
                          <img src={rightArrow} alt="" />
                        </a>
                      </div>
                    </div>
                    <div className="doc-box mb-3 me-3">
                      <div className="doc-title doc-blue ps-3">
                        <span>
                          <img className="me-1" src={png} alt="" />{' '}
                          Screenshot1.png
                        </span>
                      </div>
                      <div className="doc-action d-flex justify-content-between">
                        <a className="doc-action-link py-2" href="">
                          <img src={eye} alt="" />
                        </a>
                        <a className="doc-action-link py-2" href="">
                          <img src={doc} alt="" />
                        </a>
                        <a className="doc-action-link py-2" href="">
                          <img src={rightArrow} alt="" />
                        </a>
                      </div>
                    </div>
                    <div className="doc-box mb-3 me-3">
                      <div className="doc-title doc-green ps-3">
                        <span>
                          <img className="me-1" src={png} alt="" />{' '}
                          Screenshot1.png
                        </span>
                      </div>
                      <div className="doc-action d-flex justify-content-between">
                        <a className="doc-action-link py-2" href="">
                          <img src={eye} alt="" />
                        </a>
                      </div>
                    </div>
                    <div className="doc-box mb-3 me-3">
                      <div className="doc-title doc-red ps-3">
                        <span>
                          <img className="me-1" src={png} alt="" />{' '}
                          Screenshot1.pdf
                        </span>
                      </div>
                      <div className="doc-action d-flex justify-content-between">
                        <a className="doc-action-link py-2" href="">
                          <img src={eye} alt="" />
                        </a>
                        <a className="doc-action-link py-2" href="">
                          <img src={doc} alt="" />
                        </a>
                        <a className="doc-action-link py-2" href="">
                          <img src={rightArrow} alt="" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="right-sidebar">
              <div className="panel">
                <div className="panel-header d-flex justify-content-between align-items-center p-4 py-3">
                  <div className="">
                    <h4 className="panel-title mb-0">orders</h4>
                  </div>
                  <div className="panel-action">
                    <a href="" className="btn btn-primary me-2">
                      <svg
                        className="me-3"
                        width="13"
                        height="14"
                        viewBox="0 0 12 13"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M6.59722 0.5625L6.59721 5.84026L11.875 5.84028V7.15972L6.59721 7.15971L6.59722 12.4375H5.27778L5.27776 7.15971L0 7.15972V5.84028L5.27776 5.84026L5.27778 0.5625H6.59722Z"
                          fill="white"
                        />
                      </svg>
                      Upload File
                    </a>
                  </div>
                </div>
                <div className="panel-content d-flex justify-content-between flex-wrap align-items-start px-4 pt-4 py-5">
                  <div className="panel-doc-preview p-1 mb-3">
                    <div>
                      <img className="img-fluid" src={preview} alt="" />
                    </div>
                    <a href="">
                      <img src={eye} alt="" />
                    </a>
                  </div>
                  <div className="panel-doc-preview p-1">
                    <div>
                      <img
                        className="img-fluid"
                        src={previewPlaceholder}
                        alt=""
                      />
                    </div>
                    <a href="">
                      <img src={eye} alt="" />
                    </a>
                  </div>
                  <div className="panel-doc-preview p-1">
                    <div>
                      <img
                        className="img-fluid"
                        src={previewPlaceholder}
                        alt=""
                      />
                    </div>
                    <a href="">
                      <img src={eye} alt="" />
                    </a>
                  </div>
                </div>
              </div>
              <div className="panel">
                <div className="panel-header d-flex justify-content-between align-items-center p-4 py-3">
                  <div className="">
                    <h4 className="panel-title mb-0">recently viewed</h4>
                  </div>
                  <div className="panel-action">
                    <a href="" className="btn btn-primary me-2">
                      <svg
                        className="me-3"
                        width="13"
                        height="14"
                        viewBox="0 0 12 13"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M6.59722 0.5625L6.59721 5.84026L11.875 5.84028V7.15972L6.59721 7.15971L6.59722 12.4375H5.27778L5.27776 7.15971L0 7.15972V5.84028L5.27776 5.84026L5.27778 0.5625H6.59722Z"
                          fill="white"
                        />
                      </svg>
                      Upload File
                    </a>
                  </div>
                </div>
                <div className="panel-content d-flex justify-content-between flex-wrap align-items-start px-4 pt-4 py-5">
                  <div className="panel-doc-preview p-1">
                    <div>
                      <img
                        className="img-fluid"
                        src={previewPlaceholder}
                        alt=""
                      />
                    </div>
                    <a href="">
                      <img src={eye} alt="" />
                    </a>
                  </div>
                  <div className="panel-doc-preview p-1">
                    <div>
                      <img
                        className="img-fluid"
                        src={previewPlaceholder}
                        alt=""
                      />
                    </div>
                    <a href="">
                      <img src={eye} alt="" />
                    </a>
                  </div>
                  <div className="panel-doc-preview p-1">
                    <div>
                      <img
                        className="img-fluid"
                        src={previewPlaceholder}
                        alt=""
                      />
                    </div>
                    <a href="">
                      <img src={eye} alt="" />
                    </a>
                  </div>
                </div>
              </div>
              <div className="panel">
                <div className="panel-header d-flex justify-content-between align-items-center p-4 py-3">
                  <div className="">
                    <h4 className="panel-title mb-0">folders</h4>
                  </div>
                  <div className="panel-action"></div>
                </div>
                <div className="panel-content d-flex flex-wrap align-items-start px-4 pt-4 py-5">
                  <div className="folder active d-flex flex-column align-items-center p-1 mb-3 me-3">
                    <img className="img-fluid" src={folderFilled} alt="" />
                    <span className="pt-2">Folder1</span>
                  </div>
                  <div className="folder active d-flex flex-column align-items-center p-1 mb-3 me-3">
                    <img className="img-fluid" src={folderIcon} alt="" />
                    <span className="pt-2">Folder2</span>
                  </div>
                  <div className="folder active d-flex flex-column align-items-center p-1 mb-3 me-3">
                    <img className="img-fluid" src={folderIcon} alt="" />
                    <span className="pt-2">Folder3</span>
                  </div>
                  <div className="folder active d-flex flex-column align-items-center p-1 mb-3 me-3">
                    <img className="img-fluid" src={folderIcon} alt="" />
                    <span className="pt-2">Folder4</span>
                  </div>
                  <div className="folder active d-flex flex-column align-items-center p-1 mb-3 me-3">
                    <img className="img-fluid" src={folderIcon} alt="" />
                    <span className="pt-2">Folder5</span>
                  </div>
                  <div className="folder active d-flex flex-column align-items-center p-1 mb-3 me-3">
                    <img className="img-fluid" src={folderIcon} alt="" />
                    <span className="pt-2">Folder6</span>
                  </div>
                  <div className="folder active d-flex flex-column align-items-center p-1 mb-3 me-3">
                    <img className="img-fluid" src={folderIcon} alt="" />
                    <span className="pt-2">Folder4</span>
                  </div>
                  <div className="folder active d-flex flex-column align-items-center p-1 mb-3 me-3">
                    <img className="img-fluid" src={folderIcon} alt="" />
                    <span className="pt-2">Folder5</span>
                  </div>
                  <div className="folder active d-flex flex-column align-items-center p-1 mb-3 me-3">
                    <img className="img-fluid" src={folderIcon} alt="" />
                    <span className="pt-2">Folder6</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Customer;
