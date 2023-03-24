import React, { useEffect } from 'react';
import * as bootstrap from 'bootstrap';

function EditorPage() {
  useEffect(() => {
    const tooltipTriggerList = document.querySelectorAll(
      '[data-bs-toggle="tooltip"]'
    );
    const tooltipList = [...tooltipTriggerList].map(
      (tooltipTriggerEl) => new bootstrap.Tooltip(tooltipTriggerEl)
    );
    document.querySelectorAll('#excelTable td div').forEach((div) => {
      div.setAttribute('contenteditable', 'true');
    });
  }, []);

  function handleXlsFunctionKeyPress(event) {
    console.log(event.target.value);
    const stra = event.target.value;
    document.querySelector('.theone:last-child').innerHTML = stra;
  }

  function handleTdKeyPress(event) {
    const stra2 = event.target.textContent;
    document.querySelector('.xls-function').value = stra2;
  }

  function handleTdClick(event) {
    const inx = event.target.cellIndex;
    const hdr = event.target.closest('table').querySelectorAll('th')[
      inx
    ].textContent;
    const hdr2 =
      event.target.parentElement.querySelectorAll('td')[0].textContent;
    document.querySelector('.shower').textContent = hdr + hdr2;
    document.querySelectorAll('.theone').forEach((el) => {
      el.classList.remove('theone');
    });
    event.target.children[0].classList.add('theone');
    document.querySelector('.xls-function').value = event.target.textContent;
  }
  return (
    <div>
      <div className="container-fluid">
        <div className="row">
          <div className="sidebar col-sm-auto sticky-top px-0 d-none">
            <div className="d-flex flex-sm-column flex-row flex-nowrap align-items-center sticky-top">
              <ul className="nav nav-pills nav-flush flex-sm-column flex-row flex-nowrap mb-auto mx-auto text-center align-items-center">
                <li className="sidebar-menu d-flex justify-content-center align-items-center">
                  <a href="#" className="nav-link" title="">
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
                <li className="sidebar-menu active d-flex justify-content-center align-items-center">
                  <a href="#" className="nav-link" title="">
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
                  </a>
                </li>
                <li className="sidebar-menu d-flex justify-content-center align-items-center">
                  <a href="#" className="nav-link" title="">
                    <svg
                      width="21"
                      height="24"
                      viewBox="0 0 21 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M10.125 0L20.25 5.84567V17.537L10.125 23.3827L0 17.537V5.84567L10.125 0ZM6.74995 10.9117L6.75 18.8361L9 20.1353V12.2108L6.74995 10.9117ZM2.25 8.31375V16.238L4.49998 17.5371V9.61274L2.25 8.31375ZM14.5542 5.15526L7.93194 8.99622L10.125 10.2624L16.7625 6.43024L14.5542 5.15526ZM10.125 2.59808L3.4875 6.43024L5.6845 7.69864L12.3068 3.85773L10.125 2.59808Z"
                        fill="#C3CAD9"
                      />
                    </svg>
                    <span className="d-block pt-2">catalogue</span>
                  </a>
                </li>
                <li className="sidebar-menu d-flex justify-content-center align-items-center">
                  <a href="#" className="nav-link" title="">
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
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="main-section editor col-sm min-vh-100 pe-0 ps-0">
            <div className="top-header px-4">
              <div className="content-header d-flex justify-content-between align-items-center">
                <div className="d-flex justify-content-between align-items-center">
                  <div className="content-header d-flex justify-content-between align-items-center me-5">
                    <svg
                      className="me-2"
                      width="11"
                      height="12"
                      viewBox="0 0 11 12"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M0 1.2C0 0.537258 0.537256 0 1.2 0H7.76568L10.4 2.63431V10.8C10.4 11.4627 9.86272 12 9.2 12H1.2C0.537256 12 0 11.4627 0 10.8V1.2ZM1.6 5.83431V4.8H0.8V6.16569L1.43431 6.8L0.8 7.43431V8.8H1.6V7.76569L2 7.36569L2.4 7.76569V8.8H3.2V7.43431L2.56569 6.8L3.2 6.16569V4.8H2.4V5.83431L2 6.23431L1.6 5.83431ZM4 4.8H4.8V8H6.4V8.8H4V4.8ZM9.6 4.8H7.2V7.2H8.8V8H7.2V8.8H9.6V6.4H8V5.6H9.6V4.8Z"
                        fill="#22732E"
                      />
                    </svg>
                    <p className="main-content-header fs-16 fw-bold mb-0">
                      Alt.xls
                    </p>
                  </div>

                  <h4 className="editor-header-title my-0 ms-5 me-2">
                    TEMPLATE
                  </h4>
                  <div className="dropdown me-2">
                    <button
                      className="btn dropdown-toggle btn-dropdown editor-header-dropdown-btn"
                      type="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      Purchase order
                    </button>
                    <ul className="dropdown-menu">
                      <li>
                        <a className="dropdown-item" href="#">
                          Template 1
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          Template 2
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          Template 3
                        </a>
                      </li>
                    </ul>
                  </div>
                  <button className="btn editor-header-order-btn">
                    Order Automatically
                  </button>
                </div>

                <div className="d-flex justify-content-between align-items-center">
                  <div className="customer-filter">
                    <button className="btn btn-success">
                      <svg
                        className="me-2"
                        width="12"
                        height="12"
                        viewBox="0 0 12 12"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M9.33333 0H1.33333C0.593333 0 0 0.6 0 1.33333V10.6667C0 11.4 0.593333 12 1.33333 12H10.6667C11.4 12 12 11.4 12 10.6667V2.66667L9.33333 0ZM6 10.6667C4.89333 10.6667 4 9.77333 4 8.66667C4 7.56 4.89333 6.66667 6 6.66667C7.10667 6.66667 8 7.56 8 8.66667C8 9.77333 7.10667 10.6667 6 10.6667ZM8 4H1.33333V1.33333H8V4Z"
                          fill="white"
                        />
                      </svg>
                      Save Template
                    </button>
                  </div>
                  <div className="action-buttons-list ms-5">
                    <ul className="list-unstyled m-0 d-flex justify-content-between align-items-center">
                      <li className="action-button d-flex justify-content-center align-items-center">
                        <a
                          href=""
                          data-bs-toggle="tooltip"
                          data-bs-placement="bottom"
                          data-bs-custom-class="custom-tooltip"
                          data-bs-title="CLIENT"
                        >
                          <svg
                            width="18"
                            height="21"
                            viewBox="0 0 18 21"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M9 10C11.7614 10 14 7.76142 14 5C14 2.23858 11.7614 0 9 0C6.23858 0 4 2.23858 4 5C4 7.76142 6.23858 10 9 10Z"
                              fill="#C3CAD9"
                            />
                            <path
                              d="M9.00002 13C4.0396 13 0 16.36 0 20.5C0 20.78 0.217821 21 0.495048 21H17.505C17.7822 21 18 20.78 18 20.5C18 16.36 13.9604 13 9.00002 13Z"
                              fill="#C3CAD9"
                            />
                          </svg>
                        </a>
                      </li>
                      <li className="action-button">
                        <a
                          href=""
                          data-bs-toggle="tooltip"
                          data-bs-placement="bottom"
                          data-bs-custom-class="custom-tooltip"
                          data-bs-title="DELETE"
                        >
                          <svg
                            width="20"
                            height="19"
                            viewBox="0 0 20 19"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M3.755 17.3689L2 5.7H18L16.245 17.3689C16.1769 17.8216 15.9391 18.2358 15.5754 18.5354C15.2117 18.8351 14.7464 19 14.265 19H5.735C5.25358 19 4.7883 18.8351 4.42458 18.5354C4.06086 18.2358 3.82312 17.8216 3.755 17.3689ZM19 1.9H14V0.95C14 0.698044 13.8946 0.456408 13.7071 0.278249C13.5196 0.100089 13.2652 0 13 0H7C6.73478 0 6.48043 0.100089 6.29289 0.278249C6.10536 0.456408 6 0.698044 6 0.95V1.9H1C0.734784 1.9 0.48043 2.00009 0.292893 2.17825C0.105357 2.35641 0 2.59804 0 2.85C0 3.10196 0.105357 3.34359 0.292893 3.52175C0.48043 3.69991 0.734784 3.8 1 3.8H19C19.2652 3.8 19.5196 3.69991 19.7071 3.52175C19.8946 3.34359 20 3.10196 20 2.85C20 2.59804 19.8946 2.35641 19.7071 2.17825C19.5196 2.00009 19.2652 1.9 19 1.9Z"
                              fill="#C3CAD9"
                            />
                          </svg>
                        </a>
                      </li>
                      <li className="action-button">
                        <a
                          href=""
                          data-bs-toggle="tooltip"
                          data-bs-placement="bottom"
                          data-bs-custom-class="custom-tooltip"
                          data-bs-title="SHARE"
                        >
                          <svg
                            width="17"
                            height="18"
                            viewBox="0 0 17 18"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M12.1227 12.5429L5.69076 8.82935L4.98242 10.0563L11.4144 13.7697L12.1227 12.5429Z"
                              fill="#C3CAD9"
                            />
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M12.1227 4.73736L5.69076 8.45092L4.98242 7.22399L11.4144 3.5105L12.1227 4.73736Z"
                              fill="#C3CAD9"
                            />
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M14.025 5.95C15.668 5.95 17 4.61805 17 2.975C17 1.33195 15.668 0 14.025 0C12.382 0 11.05 1.33195 11.05 2.975C11.05 4.61805 12.382 5.95 14.025 5.95ZM5.95 8.63599C5.95 10.279 4.61805 11.611 2.975 11.611C1.33195 11.611 0 10.279 0 8.63599C0 6.99294 1.33195 5.66102 2.975 5.66102C4.61805 5.66102 5.95 6.99294 5.95 8.63599ZM17 14.3048C17 12.6618 15.668 11.3298 14.025 11.3298C12.382 11.3298 11.05 12.6618 11.05 14.3048C11.05 15.9479 12.382 17.2798 14.025 17.2798C15.668 17.2798 17 15.9479 17 14.3048Z"
                              fill="#C3CAD9"
                            />
                          </svg>
                        </a>
                      </li>
                      <li className="action-button">
                        <a
                          href=""
                          data-bs-toggle="tooltip"
                          data-bs-placement="bottom"
                          data-bs-custom-class="custom-tooltip"
                          data-bs-title="PRODUCT"
                        >
                          <svg
                            width="23"
                            height="20"
                            viewBox="0 0 23 20"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M19.6354 2.77083C20.7211 2.77083 21.6078 3.62253 21.6639 4.69421L21.6667 4.80208L21.6672 9.03054C20.5171 8.00103 18.9983 7.375 17.3333 7.375C13.7435 7.375 10.8333 10.2851 10.8333 13.875C10.8333 15.0592 11.15 16.1694 11.7032 17.1256L2.03125 17.125C0.94561 17.125 0.0588934 16.2733 0.00281558 15.2016L0 15.0937V6.29112L7.47697 6.29167L7.59941 6.28798C8.12766 6.25612 8.62293 6.01911 8.97913 5.62772L9.05881 5.53468L11.2845 2.77083H19.6354ZM17.3333 8.45833C20.3249 8.45833 22.75 10.8835 22.75 13.875C22.75 16.8665 20.3249 19.2917 17.3333 19.2917C14.3418 19.2917 11.9167 16.8665 11.9167 13.875C11.9167 10.8835 14.3418 8.45833 17.3333 8.45833ZM17.3328 10.9685L17.2722 11.0094L17.2212 11.0545L17.1761 11.1055C17.0246 11.3003 17.0246 11.5747 17.1761 11.7695L17.2212 11.8205L18.7335 13.3333H14.625L14.5618 13.337C14.3132 13.3659 14.1159 13.5632 14.087 13.8118L14.0833 13.875L14.087 13.9382C14.1159 14.1868 14.3132 14.3841 14.5618 14.413L14.625 14.4167H18.7335L17.2212 15.9295L17.1761 15.9805C17.0109 16.193 17.0259 16.5003 17.2212 16.6955C17.4164 16.8908 17.7237 16.9058 17.9362 16.7406L17.9872 16.6955L20.4247 14.258L20.4647 14.2125L20.4911 14.1775L20.5157 14.1373L20.5326 14.1042L20.5564 14.0441L20.5685 14.0015L20.5796 13.9386L20.5833 13.875L20.5817 13.8338L20.5724 13.7662L20.5565 13.7061L20.5448 13.6739L20.5158 13.6128L20.491 13.5725L20.4681 13.5409L20.4471 13.5158L20.4247 13.492L17.9872 11.0545L17.9362 11.0094C17.7608 10.8731 17.521 10.8595 17.3328 10.9685ZM7.07453 0.875C7.52554 0.875 7.9625 1.02506 8.31741 1.29963L8.41211 1.37758L9.73592 2.53575L8.00425 4.68517L7.95309 4.74182C7.84508 4.84866 7.70414 4.91611 7.55318 4.9332L7.47697 4.9375L0 4.93696V2.90625C0 1.82061 0.851696 0.933894 1.92337 0.877816L2.03125 0.875H7.07453Z"
                              fill="#C3CAD9"
                            />
                          </svg>
                        </a>
                      </li>
                      <li className="action-button">
                        <a
                          href=""
                          data-bs-toggle="tooltip"
                          data-bs-placement="bottom"
                          data-bs-title="COPY"
                        >
                          <svg
                            width="19"
                            height="21"
                            viewBox="0 0 19 21"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M8.02086 0.21875C5.63266 0.21875 3.71875 2.18982 3.71875 4.59375H9.47914C11.8674 4.59375 13.7812 6.56482 13.7812 8.96875V16.4062H13.8541C16.2424 16.4062 18.1562 14.4352 18.1562 12.0312V4.59375C18.1562 2.18982 16.2424 0.21875 13.8541 0.21875H8.02086Z"
                              fill="#C3CAD9"
                            />
                            <path
                              d="M0 8.96875C0 6.91494 1.63229 5.25 3.64584 5.25H9.47914C11.4927 5.25 13.125 6.91494 13.125 8.96875V16.4062C13.125 18.46 11.4927 20.125 9.47914 20.125H3.64584C1.63229 20.125 0 18.46 0 16.4062V8.96875Z"
                              fill="#C3CAD9"
                            />
                          </svg>
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="ms-5">
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
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M6.59722 0.5625L6.59721 5.84026L11.875 5.84028V7.15972L6.59721 7.15971L6.59722 12.4375H5.27778L5.27776 7.15971L0 7.15972V5.84028L5.27776 5.84026L5.27778 0.5625H6.59722Z"
                          fill="white"
                        />
                      </svg>
                      Add Field
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="table-header">
              <div className="editor-action-buttons-list border-bottom-grey">
                <ul className="list-unstyled m-0 d-flex align-items-center">
                  <li className="action-button d-flex justify-content-center align-items-center">
                    <a
                      href=""
                      data-bs-toggle="tooltip"
                      data-bs-placement="bottom"
                      data-bs-custom-class="custom-tooltip"
                      data-bs-title="UNDO"
                    >
                      <svg
                        width="14"
                        height="16"
                        viewBox="0 0 14 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M7.48925 12.4245V15.1967C10.7676 15.1967 13.4346 12.5297 13.4346 9.25134C13.4346 5.97318 10.7676 3.30616 7.48925 3.30616H5.30667L6.65245 1.96038L4.69228 0L0 4.69221L4.69221 9.38427L6.65238 7.42403L5.30667 6.07832H7.48925C9.23894 6.07832 10.6623 7.50172 10.6623 9.25134C10.6623 11.0009 9.23894 12.4245 7.48925 12.4245Z"
                          fill="#C3CAD9"
                        />
                      </svg>
                    </a>
                  </li>
                  <li className="action-button">
                    <a
                      href=""
                      data-bs-toggle="tooltip"
                      data-bs-placement="bottom"
                      data-bs-custom-class="custom-tooltip"
                      data-bs-title="REDO"
                    >
                      <svg
                        width="15"
                        height="15"
                        viewBox="0 0 15 15"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M7.56391 1.93494L8.89227 3.26331H6.73794C3.50214 3.26331 0.869629 5.89581 0.869629 9.13162C0.869629 12.3675 3.50221 14.9999 6.73794 14.9999V12.2636C5.01096 12.2636 3.60598 10.8585 3.60598 9.13162C3.60598 7.40464 5.01096 5.99966 6.73794 5.99966H8.89227L7.56398 7.32795L9.49879 9.26283L14.1303 4.63148L9.49885 0L7.56391 1.93494Z"
                          fill="#C3CAD9"
                        />
                      </svg>
                    </a>
                  </li>
                  <li className="action-button">
                    <a
                      href=""
                      data-bs-toggle="tooltip"
                      data-bs-placement="bottom"
                      data-bs-custom-class="custom-tooltip"
                      data-bs-title="PRINT"
                    >
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M14.9998 6H4.99984C3.42849 6 2.64281 6 2.15466 6.48816C1.6665 6.97631 1.6665 7.76198 1.6665 9.33333V11.8333C1.6665 12.2262 1.6665 12.4226 1.78855 12.5447C1.91058 12.6667 2.107 12.6667 2.49984 12.6667H6.4165C6.53435 12.6667 6.59328 12.6667 6.6299 12.6301C6.6665 12.5934 6.6665 12.5345 6.6665 12.4167V12.25C6.6665 11.4643 6.6665 11.0715 6.91058 10.8274C7.15466 10.5833 7.5475 10.5833 8.33317 10.5833H11.6665C12.4522 10.5833 12.845 10.5833 13.0891 10.8274C13.3332 11.0715 13.3332 11.4643 13.3332 12.25V12.4167C13.3332 12.5345 13.3332 12.5934 13.3698 12.6301C13.4064 12.6667 13.4653 12.6667 13.5832 12.6667H16.6665C17.4522 12.6667 17.845 12.6667 18.0891 12.4226C18.3332 12.1785 18.3332 11.7857 18.3332 11V9.33333C18.3332 7.76198 18.3332 6.97631 17.845 6.48816C17.3568 6 16.5712 6 14.9998 6Z"
                          fill="#C3CAD9"
                        />
                        <path
                          d="M5.8335 4.44927C5.8335 3.87271 5.8335 3.58442 5.97001 3.37629C6.03265 3.28077 6.11427 3.19916 6.20979 3.13652C6.41792 3 6.7062 3 7.28277 3H12.7176C13.2942 3 13.5824 3 13.7906 3.13652C13.8861 3.19916 13.9677 3.28077 14.0303 3.37629C14.1668 3.58442 14.1668 3.87271 14.1668 4.44927C14.1668 4.53576 14.1668 4.579 14.1463 4.61022C14.137 4.62455 14.1247 4.63679 14.1104 4.64619C14.0792 4.66667 14.0359 4.66667 13.9494 4.66667H6.05089C5.9644 4.66667 5.92116 4.66667 5.88994 4.64619C5.87561 4.63679 5.86337 4.62455 5.85397 4.61022C5.8335 4.579 5.8335 4.53576 5.8335 4.44927Z"
                          fill="#C3CAD9"
                        />
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M4.1665 17.9474V11.8332C4.1665 11.0475 4.1665 10.6547 4.41058 10.4106C4.65466 10.1665 5.0475 10.1665 5.83317 10.1665H14.1665C14.9522 10.1665 15.345 10.1665 15.5891 10.4106C15.8332 10.6547 15.8332 11.0475 15.8332 11.8332V17.9474C15.8332 18.2008 15.8332 18.3274 15.7503 18.39C15.6674 18.4525 15.5457 18.4177 15.3021 18.3481L13.031 17.6992C12.9741 17.6829 12.9457 17.6748 12.9165 17.6748C12.8873 17.6748 12.8589 17.6829 12.802 17.6992L10.1143 18.4672C10.0574 18.4833 10.029 18.4915 9.99984 18.4915C9.97067 18.4915 9.94225 18.4833 9.88534 18.4672L7.19764 17.6992C7.14078 17.6829 7.11235 17.6748 7.08317 17.6748C7.054 17.6748 7.02556 17.6829 6.9687 17.6992L4.69764 18.3481C4.45406 18.4177 4.33225 18.4525 4.24938 18.39C4.1665 18.3274 4.1665 18.2008 4.1665 17.9474ZM7.49984 12.6665C7.49984 12.2063 7.87294 11.8332 8.33317 11.8332H10.8332C11.2934 11.8332 11.6665 12.2063 11.6665 12.6665C11.6665 13.1268 11.2934 13.4998 10.8332 13.4998H8.33317C7.87294 13.4998 7.49984 13.1268 7.49984 12.6665ZM8.33317 14.3332C7.87294 14.3332 7.49984 14.7063 7.49984 15.1665C7.49984 15.6268 7.87294 15.9998 8.33317 15.9998H12.0832C12.5434 15.9998 12.9165 15.6268 12.9165 15.1665C12.9165 14.7063 12.5434 14.3332 12.0832 14.3332H8.33317Z"
                          fill="#C3CAD9"
                        />
                      </svg>
                    </a>
                  </li>
                  <li className="border-right-grey border-left-grey ms-5">
                    <select className="selectpicker">
                      <option>Helvetica</option>
                      <option>Lato</option>
                      <option>Robotto</option>
                    </select>
                  </li>
                  <li className="border-right-grey">
                    <select className="selectpicker font-size-picker">
                      <option>10</option>
                      <option>12</option>
                      <option>14</option>
                      <option>16</option>
                      <option>20</option>
                      <option>24</option>
                    </select>
                  </li>
                  <li className="action-button">
                    <a
                      href=""
                      data-bs-toggle="tooltip"
                      data-bs-placement="bottom"
                      data-bs-custom-class="custom-tooltip"
                      data-bs-title="BOLD"
                    >
                      <svg
                        width="11"
                        height="11"
                        viewBox="0 0 11 11"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M0 0V0.891788H1.38042V10.1087H0V11H5.99866C7.71867 11 8.98119 10.7424 9.78587 10.2267C10.5953 9.71093 11 8.9077 11 7.8173C11 7.01177 10.711 6.36579 10.1328 5.87951C9.55455 5.39323 8.72339 5.09849 7.63924 4.99532C8.53548 4.89709 9.20999 4.65651 9.66293 4.2734C10.1207 3.8903 10.3496 3.37199 10.3496 2.7187C10.3496 1.81 10.0195 1.12998 9.3594 0.678113C8.69928 0.226233 7.7115 9.16667e-06 6.39607 0H0ZM4.16316 0.891788H5.10997C5.9628 0.891788 6.58188 1.03649 6.96736 1.32628C7.35763 1.61606 7.55297 2.08018 7.55298 2.71871C7.55298 3.35234 7.35299 3.82406 6.95306 4.1335C6.55311 4.43803 5.93875 4.59035 5.10998 4.59034H4.16316V0.891788ZM4.16316 5.47453H5.19669C6.10737 5.47453 6.78659 5.66851 7.23469 6.05653C7.68279 6.44458 7.90701 7.03143 7.90702 7.8173C7.90702 8.5983 7.68513 9.1757 7.24185 9.54901C6.79856 9.92231 6.11702 10.1087 5.1967 10.1087H4.16316V5.47453Z"
                          fill="#C3CAD9"
                        />
                      </svg>
                    </a>
                  </li>
                  <li className="action-button">
                    <a
                      href=""
                      data-bs-toggle="tooltip"
                      data-bs-placement="bottom"
                      data-bs-custom-class="custom-tooltip"
                      data-bs-title="ITALIC"
                    >
                      <svg
                        width="10"
                        height="11"
                        viewBox="0 0 10 11"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M2.5 0H10L9.5 1.83333H7L5 9.16667H8L7.5 11H0L0.5 9.16667H3L5 1.83333H2L2.5 0Z"
                          fill="#C3CAD9"
                        />
                      </svg>
                    </a>
                  </li>
                  <li className="action-button">
                    <a
                      href=""
                      data-bs-toggle="tooltip"
                      data-bs-placement="bottom"
                      data-bs-custom-class="custom-tooltip"
                      data-bs-title="STRIKE"
                    >
                      <svg
                        width="9"
                        height="14"
                        viewBox="0 0 9 14"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M0.433175 0V7.16309C0.433175 8.30534 0.77705 9.22083 1.46652 9.9103C2.16628 10.5895 3.17528 10.9286 4.49247 10.9286C5.36716 10.9286 6.1077 10.7692 6.71484 10.4502C7.33228 10.1209 7.79605 9.67396 8.10477 9.10798C8.41349 8.542 8.56682 7.89372 8.56682 7.16309V0H6.29799V7.05511C6.29799 7.77545 6.14943 8.31464 5.851 8.6748C5.56287 9.02468 5.1099 9.19964 4.49247 9.19964C3.87503 9.19964 3.42206 9.02468 3.13393 8.6748C2.84579 8.31464 2.70201 7.77545 2.70201 7.05511V0H0.433175ZM0 12.2155V13.5013H9V12.2155H0Z"
                          fill="#C3CAD9"
                        />
                      </svg>
                    </a>
                  </li>
                  <li className="action-button ms-10">
                    <a
                      href=""
                      className="border-left-grey"
                      data-bs-toggle="tooltip"
                      data-bs-placement="bottom"
                      data-bs-custom-class="custom-tooltip"
                      data-bs-title="CURENCY"
                    >
                      <span>$</span>
                    </a>
                  </li>
                  <li className="action-button">
                    <a
                      href=""
                      data-bs-toggle="tooltip"
                      data-bs-placement="bottom"
                      data-bs-custom-class="custom-tooltip"
                      data-bs-title="PERCENTAGE"
                    >
                      <span>%</span>
                    </a>
                  </li>
                  <li className="action-button">
                    <a
                      href=""
                      data-bs-toggle="tooltip"
                      data-bs-placement="bottom"
                      data-bs-custom-class="custom-tooltip"
                      data-bs-title=".0 DECIMAL"
                    >
                      <span>.0</span>
                    </a>
                  </li>
                  <li className="action-button">
                    <a
                      href=""
                      data-bs-toggle="tooltip"
                      data-bs-placement="bottom"
                      data-bs-custom-class="custom-tooltip"
                      data-bs-title=".00 DECIMAL"
                    >
                      <span>.00</span>
                    </a>
                  </li>
                </ul>
                <div id="xls-functions">
                  <div className="shower">A1</div> <p className="shower2">FX</p>
                  <input className="xls-function" placeholder="" />
                </div>
              </div>
            </div>
            {/* <!-- content --> */}
            <div className="content">
              <div className="main-content w-100">
                <div className="content-wrapper">
                  <table
                    className="table table-bordered excel-table"
                    id="excelTable"
                  >
                    <thead>
                      <tr>
                        <th></th>
                        <th>A</th>
                        <th>B</th>
                        <th>C</th>
                        <th>D</th>
                        <th>E</th>
                        <th>F</th>
                        <th>G</th>
                        <th>H</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>1</td>
                        <td>
                          <div className="theone" contenteditable="false"></div>
                        </td>
                        <td>
                          <div contenteditable="false"></div>
                        </td>
                        <td>
                          <div contenteditable="false"></div>
                        </td>
                        <td>
                          <div contenteditable="false"></div>
                        </td>
                        <td>
                          <div contenteditable="false"></div>
                        </td>
                        <td>
                          <div contenteditable="false"></div>
                        </td>
                        <td>
                          <div contenteditable="false"></div>
                        </td>
                        <td>
                          <div contenteditable="false"></div>
                        </td>
                      </tr>
                      <tr>
                        <td>2</td>
                        <td>
                          <div contenteditable="false"></div>
                        </td>
                        <td>
                          <div contenteditable="false"></div>
                        </td>
                        <td>
                          <div contenteditable="false"></div>
                        </td>
                        <td>
                          <div contenteditable="false"></div>
                        </td>
                        <td>
                          <div contenteditable="false"></div>
                        </td>
                        <td>
                          <div contenteditable="false"></div>
                        </td>
                        <td>
                          <div contenteditable="false"></div>
                        </td>
                        <td>
                          <div contenteditable="false"></div>
                        </td>
                      </tr>
                      <tr>
                        <td>3</td>
                        <td>
                          <div contenteditable="false"></div>
                        </td>
                        <td>
                          <div contenteditable="false"></div>
                        </td>
                        <td>
                          <div contenteditable="false"></div>
                        </td>
                        <td>
                          <div contenteditable="false"></div>
                        </td>
                        <td>
                          <div contenteditable="false"></div>
                        </td>
                        <td>
                          <div contenteditable="false"></div>
                        </td>
                        <td>
                          <div contenteditable="false"></div>
                        </td>
                        <td>
                          <div contenteditable="false"></div>
                        </td>
                      </tr>
                      <tr>
                        <td>4</td>
                        <td>
                          <div contenteditable="false"></div>
                        </td>
                        <td>
                          <div contenteditable="false"></div>
                        </td>
                        <td>
                          <div contenteditable="false"></div>
                        </td>
                        <td>
                          <div contenteditable="false"></div>
                        </td>
                        <td>
                          <div contenteditable="false"></div>
                        </td>
                        <td>
                          <div contenteditable="false"></div>
                        </td>
                        <td>
                          <div contenteditable="false"></div>
                        </td>
                        <td>
                          <div contenteditable="false"></div>
                        </td>
                      </tr>
                      <tr>
                        <td>5</td>
                        <td>
                          <div contenteditable="false"></div>
                        </td>
                        <td>
                          <div contenteditable="false"></div>
                        </td>
                        <td>
                          <div contenteditable="false"></div>
                        </td>
                        <td>
                          <div contenteditable="false"></div>
                        </td>
                        <td>
                          <div contenteditable="false"></div>
                        </td>
                        <td>
                          <div contenteditable="false"></div>
                        </td>
                        <td>
                          <div contenteditable="false"></div>
                        </td>
                        <td>
                          <div contenteditable="false"></div>
                        </td>
                      </tr>
                      <tr>
                        <td>6</td>
                        <td>
                          <div contenteditable="false"></div>
                        </td>
                        <td>
                          <div contenteditable="false"></div>
                        </td>
                        <td>
                          <div contenteditable="false"></div>
                        </td>
                        <td>
                          <div contenteditable="false"></div>
                        </td>
                        <td>
                          <div contenteditable="false"></div>
                        </td>
                        <td>
                          <div contenteditable="false"></div>
                        </td>
                        <td>
                          <div contenteditable="false"></div>
                        </td>
                        <td>
                          <div contenteditable="false"></div>
                        </td>
                      </tr>
                      <tr>
                        <td>7</td>
                        <td>
                          <div contenteditable="false"></div>
                        </td>
                        <td>
                          <div contenteditable="false"></div>
                        </td>
                        <td>
                          <div contenteditable="false"></div>
                        </td>
                        <td>
                          <div contenteditable="false"></div>
                        </td>
                        <td>
                          <div contenteditable="false"></div>
                        </td>
                        <td>
                          <div contenteditable="false"></div>
                        </td>
                        <td>
                          <div contenteditable="false"></div>
                        </td>
                        <td>
                          <div contenteditable="false"></div>
                        </td>
                      </tr>
                      <tr>
                        <td>8</td>
                        <td>
                          <div contenteditable="false"></div>
                        </td>
                        <td>
                          <div contenteditable="false"></div>
                        </td>
                        <td>
                          <div contenteditable="false"></div>
                        </td>
                        <td>
                          <div contenteditable="false"></div>
                        </td>
                        <td>
                          <div contenteditable="false"></div>
                        </td>
                        <td>
                          <div contenteditable="false"></div>
                        </td>
                        <td>
                          <div contenteditable="false"></div>
                        </td>
                        <td>
                          <div contenteditable="false"></div>
                        </td>
                      </tr>
                      <tr>
                        <td>9</td>
                        <td>
                          <div contenteditable="false"></div>
                        </td>
                        <td>
                          <div contenteditable="false"></div>
                        </td>
                        <td>
                          <div contenteditable="false"></div>
                        </td>
                        <td>
                          <div contenteditable="false"></div>
                        </td>
                        <td>
                          <div contenteditable="false"></div>
                        </td>
                        <td>
                          <div contenteditable="false"></div>
                        </td>
                        <td>
                          <div contenteditable="false"></div>
                        </td>
                        <td>
                          <div contenteditable="false"></div>
                        </td>
                      </tr>
                      <tr>
                        <td>10</td>
                        <td>
                          <div contenteditable="false"></div>
                        </td>
                        <td>
                          <div contenteditable="false"></div>
                        </td>
                        <td>
                          <div contenteditable="false"></div>
                        </td>
                        <td>
                          <div contenteditable="false"></div>
                        </td>
                        <td>
                          <div contenteditable="false"></div>
                        </td>
                        <td>
                          <div contenteditable="false"></div>
                        </td>
                        <td>
                          <div contenteditable="false"></div>
                        </td>
                        <td>
                          <div contenteditable="false"></div>
                        </td>
                      </tr>
                      <tr>
                        <td>11</td>
                        <td>
                          <div contenteditable="false"></div>
                        </td>
                        <td>
                          <div contenteditable="false"></div>
                        </td>
                        <td>
                          <div contenteditable="false"></div>
                        </td>
                        <td>
                          <div contenteditable="false"></div>
                        </td>
                        <td>
                          <div contenteditable="false"></div>
                        </td>
                        <td>
                          <div contenteditable="false"></div>
                        </td>
                        <td>
                          <div contenteditable="false"></div>
                        </td>
                        <td>
                          <div contenteditable="false"></div>
                        </td>
                      </tr>
                      <tr>
                        <td>12</td>
                        <td>
                          <div contenteditable="false"></div>
                        </td>
                        <td>
                          <div contenteditable="false"></div>
                        </td>
                        <td>
                          <div contenteditable="false"></div>
                        </td>
                        <td>
                          <div contenteditable="false"></div>
                        </td>
                        <td>
                          <div contenteditable="false"></div>
                        </td>
                        <td>
                          <div contenteditable="false"></div>
                        </td>
                        <td>
                          <div contenteditable="false"></div>
                        </td>
                        <td>
                          <div contenteditable="false"></div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EditorPage;
