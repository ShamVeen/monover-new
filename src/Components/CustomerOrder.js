import React from 'react';

function CustomerOrder() {
  return (
    <div>
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
                    fill="#C3CAD9"
                  />
                </svg>
                <p className="main-content-header mb-0">
                  Customers <span className="color-grey">/</span>
                  <span className="color-grey"> Sigma</span>
                </p>
              </div>
              <div className="content-header-action"></div>
            </div>

            <div className="content-wrapper">
              <div className="customer-header border-bottom-grey d-flex justify-content-between align-items-center mt-3 py-3">
                <div className="customer-info">
                  <img className="me-1" src="images/customer-logo.png" alt="" />
                  <span className="me-1">Sigma</span>
                  <a href="">
                    <img src="images/icons/edit.svg" alt="" />
                  </a>
                  <span className="color-grey">(4 Orders)</span>
                </div>
                <div className="customer-action">
                  <a href="" className="toggle-right-sidebar">
                    <img src="images/icons/sidebar-collapse.svg" alt="" />
                  </a>
                </div>
              </div>

              <div className="order-box my-4">
                <div className="order-header d-flex justify-content-between align-items-center border-bottom-grey p-4">
                  <div className="order-info d-flex justify-content-between align-items-center">
                    <h4 className="order-title m-0 me-4">Order 11234</h4>
                    <span className="order-status status-inprogress">
                      In Progress
                    </span>
                  </div>
                  <div className="order-action">
                    <a href="" className="pe-2">
                      <img src="images/icons/filter.svg" alt="" />
                    </a>
                    <span className="color-grey pe-2">Type : </span>
                    <span className="order-type pe-2">Purchase</span>
                  </div>
                </div>
                <div className="order-content">
                  <table className="order-table w-100">
                    <tbody>
                      <tr className="">
                        <td>Step 1</td>
                        <td className="fw-semi-bold">Purchase Order</td>
                        <td className="order-step-status">
                          <span className="dot status-done-bg me-1"></span>
                          <span className="status-done">Done</span>
                        </td>
                        <td>
                          <div>
                            <img
                              src="images/icons/profile-icon-small.svg"
                              alt=""
                            />
                            <span className="fw-semi-bold">Sandra Bullock</span>
                          </div>
                          <span className="color-grey ps-3">Sales Manager</span>
                        </td>
                        <td></td>
                      </tr>
                      <tr className="bg-orange">
                        <td>Step 2</td>
                        <td className="fw-semi-bold">ASN</td>
                        <td className="order-step-status">
                          <span className="dot status-progress-bg me-1"></span>{' '}
                          In Progress
                        </td>
                        <td>
                          <div>
                            <img
                              src="images/icons/profile-icon-small.svg"
                              alt=""
                            />
                            <span className="fw-semi-bold">Derrel Patrick</span>
                          </div>
                          <span className="color-grey ps-3">Sales Manager</span>
                        </td>
                        <td></td>
                      </tr>
                      <tr className="bg-blue">
                        <td>Step 3</td>
                        <td className="fw-semi-bold">Shipping</td>
                        <td className="order-step-status">
                          <span className="dot status-hold-bg me-1"></span> In
                          hold
                        </td>
                        <td>
                          <div>
                            <img
                              src="images/icons/profile-icon-small.svg"
                              alt=""
                            />
                            <span className="fw-semi-bold">Steve Anderson</span>
                          </div>
                          <span className="color-grey ps-3">Sales Manager</span>
                        </td>
                        <td></td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div className="order-footer border-top-grey p-4">
                  <a href="" className="btn btn-primary me-2">
                    Complete task
                    <svg
                      width="13"
                      height="8"
                      viewBox="0 0 13 8"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M12.3536 4.35355C12.5488 4.15829 12.5488 3.84171 12.3536 3.64645L9.17157 0.464466C8.97631 0.269204 8.65973 0.269204 8.46447 0.464466C8.2692 0.659728 8.2692 0.976311 8.46447 1.17157L11.2929 4L8.46447 6.82843C8.2692 7.02369 8.2692 7.34027 8.46447 7.53553C8.65973 7.7308 8.97631 7.7308 9.17157 7.53553L12.3536 4.35355ZM0 4.5H12V3.5H0V4.5Z"
                        fill="white"
                      />
                    </svg>
                  </a>
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
                        fill-rule="evenodd"
                        clip-rule="evenodd"
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
                    <img
                      className="img-fluid"
                      src="images/preview.png"
                      alt=""
                    />
                  </div>
                  <a href="">
                    <img src="images/icons/eye.svg" alt="" />
                  </a>
                </div>
                <div className="panel-doc-preview p-1">
                  <div>
                    <img
                      className="img-fluid"
                      src="images/preview-placeholder.png"
                      alt=""
                    />
                  </div>
                  <a href="">
                    <img src="images/icons/eye.svg" alt="" />
                  </a>
                </div>
                <div className="panel-doc-preview p-1">
                  <div>
                    <img
                      className="img-fluid"
                      src="images/preview-placeholder.png"
                      alt=""
                    />
                  </div>
                  <a href="">
                    <img src="images/icons/eye.svg" alt="" />
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
                        fill-rule="evenodd"
                        clip-rule="evenodd"
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
                      src="images/preview-placeholder.png"
                      alt=""
                    />
                  </div>
                  <a href="">
                    <img src="images/icons/eye.svg" alt="" />
                  </a>
                </div>
                <div className="panel-doc-preview p-1">
                  <div>
                    <img
                      className="img-fluid"
                      src="images/preview-placeholder.png"
                      alt=""
                    />
                  </div>
                  <a href="">
                    <img src="images/icons/eye.svg" alt="" />
                  </a>
                </div>
                <div className="panel-doc-preview p-1">
                  <div>
                    <img
                      className="img-fluid"
                      src="images/preview-placeholder.png"
                      alt=""
                    />
                  </div>
                  <a href="">
                    <img src="images/icons/eye.svg" alt="" />
                  </a>
                </div>
              </div>
            </div>
            <div className="panel">
              <div className="panel-header d-flex justify-content-between align-items-center p-4 py-3">
                <div className="">
                  <h4 className="panel-title mb-0">folders</h4>
                </div>
              </div>
              {/* <div className="panel-content d-flex flex-wrap align-items-start px-4 pt-4 py-5">
                                <div className="folder active d-flex flex-column align-items-center p-1 mb-3 me-3">
                                    <img className="img-fluid" src="images/icons/folder-filled.svg" alt="">
                                    <span className="pt-2">Folder1</span>
                                </div>
                                <div className="folder active d-flex flex-column align-items-center p-1 mb-3 me-3">
                                    <img className="img-fluid" src="images/icons/folder.svg" alt="">
                                    <span className="pt-2">Folder2</span>
                                </div>
                                <div className="folder active d-flex flex-column align-items-center p-1 mb-3 me-3">
                                    <img className="img-fluid" src="images/icons/folder.svg" alt="">
                                    <span className="pt-2">Folder3</span>
                                </div>
                                <div className="folder active d-flex flex-column align-items-center p-1 mb-3 me-3">
                                    <img className="img-fluid" src="images/icons/folder.svg" alt="">
                                    <span className="pt-2">Folder4</span>
                                </div>
                                <div className="folder active d-flex flex-column align-items-center p-1 mb-3 me-3">
                                    <img className="img-fluid" src="images/icons/folder.svg" alt="">
                                    <span className="pt-2">Folder5</span>
                                </div>
                                <div className="folder active d-flex flex-column align-items-center p-1 mb-3 me-3">
                                    <img className="img-fluid" src="images/icons/folder.svg" alt="">
                                    <span className="pt-2">Folder6</span>
                                </div>
                                <div className="folder active d-flex flex-column align-items-center p-1 mb-3 me-3">
                                    <img className="img-fluid" src="images/icons/folder.svg" alt="">
                                    <span className="pt-2">Folder4</span>
                                </div>
                                <div className="folder active d-flex flex-column align-items-center p-1 mb-3 me-3">
                                    <img className="img-fluid" src="images/icons/folder.svg" alt="">
                                    <span className="pt-2">Folder5</span>
                                </div>
                                <div className="folder active d-flex flex-column align-items-center p-1 mb-3 me-3">
                                    <img className="img-fluid" src="images/icons/folder.svg" alt="">
                                    <span className="pt-2">Folder6</span>
                                </div>
                            </div> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CustomerOrder;
