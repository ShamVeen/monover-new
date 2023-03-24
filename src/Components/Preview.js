import React from 'react';
import Navbar from './Navbar';

function Preview() {
  return (
    <div>
    <Navbar/>
      <div className="main-section col-sm min-vh-100 pe-0 ps-0">
        <div className="top-header px-4">
          <div className="content-header d-flex justify-content-between align-items-center">
            <div className="d-flex justify-content-between align-items-center">
              <div className="content-header d-flex justify-content-between align-items-center me-4">
                <svg
                  className="me-2"
                  width="13"
                  height="15"
                  viewBox="0 0 13 15"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M0 1.5C0 0.671573 0.67157 0 1.5 0H9.7071L13 3.29289V13.5C13 14.3284 12.3284 15 11.5 15H1.5C0.67157 15 0 14.3284 0 13.5V1.5ZM1 6H2.5C3.32843 6 4 6.67157 4 7.5C4 8.32843 3.32843 9 2.5 9H2V11H1V6ZM9 6H12V7H10V10H11V8.5H12V11H9V6ZM6 8.61811V11H5V6H6V6.38204L7 8.38204V6H8V11H7V10.6181L6 8.61811Z"
                    fill="#3670E1"
                  />
                </svg>

                <p className="main-content-header mb-0">Screenshot1.png</p>
              </div>
              <div className="content-header-action ms-5">
                <a
                  href=""
                  className="btn btn-bordered fw-medium me-2"
                  data-bs-toggle="modal"
                  data-bs-target="#newOrder"
                >
                  <img className="me-2" src="images/icons/eye-color.svg" alt="" />
                  Color Mode
                </a>
              </div>
            </div>

            <div className="d-flex justify-content-between align-items-center">
              <div className="customer-filter">
                <div className="dropdown">
                  <button
                    className="btn btn-secondary dropdown-toggle btn-dropdown"
                    type="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Select Template
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
        {/* <!-- content --> */}
        <div className="content">
          <div className="main-content w-100 px-4">
            <div className="content-wrapper mt-5">
              <div className="row">
                <div className="col-sm invoice">
                  <img src="images/ invoice.png" className="img-fluid" alt="" />
                </div>
                <div className="col-sm invoice-form flex-start">
                  <form action="">
                    <div className="mt-3">
                      <label className="form-label">Vendor name</label>
                      <div className="d-flex align-items-center">
                        <input
                          type="text"
                          className="form-control me-4"
                          placeholder="Enter your order reference"
                          value="Stanford Plumbing & Heating"
                        />
                        <svg
                          width="25"
                          height="20"
                          viewBox="0 0 25 20"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M6.42197 1.80028C7.18832 0.874647 8.36665 0.333252 9.61489 0.333252H21.2773C22.1229 0.333252 22.906 0.689245 23.4633 1.27817C24.0171 1.86345 24.311 2.63565 24.311 3.42075V16.2458C24.311 17.0308 24.0171 17.8031 23.4633 18.3884C22.906 18.9773 22.1229 19.3333 21.2773 19.3333H9.61489C8.36665 19.3333 7.18832 18.7918 6.42197 17.8663L0.737068 10.9998C0.169025 10.3137 0.169023 9.35284 0.737068 8.66675L6.42197 1.80028ZM10.4065 5.124C10.8014 4.753 11.4416 4.753 11.8366 5.124L14.6968 7.81101L17.557 5.124C17.9519 4.753 18.5922 4.753 18.9871 5.124L19.7022 5.79575C20.0972 6.16675 20.0972 6.76826 19.7022 7.13925L16.842 9.82622L19.7022 12.5133C20.0972 12.8843 20.0972 13.4858 19.7022 13.8568L18.9871 14.5285C18.5922 14.8995 17.9519 14.8995 17.557 14.5285L14.6968 11.8416L11.8366 14.5285C11.4416 14.8995 10.8014 14.8995 10.4065 14.5285L9.6914 13.8568C9.29648 13.4858 9.29648 12.8843 9.6914 12.5133L12.5517 9.82622L9.6914 7.13925C9.29648 6.76826 9.29648 6.16675 9.6914 5.79575L10.4065 5.124Z"
                            fill="#E62E7B"
                          />
                        </svg>
                      </div>
                    </div>
                    <div className="mt-3">
                      <label className="form-label">Bill to</label>
                      <div className="d-flex align-items-center">
                        <input
                          type="text"
                          className="form-control yellow-border bg-grey me-4"
                          placeholder="Alien Smith"
                        />
                        <svg
                          width="25"
                          height="19"
                          viewBox="0 0 25 19"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M6.42197 1.46703C7.18832 0.541395 8.36665 0 9.61489 0H21.2773C22.1229 0 22.906 0.355993 23.4633 0.944917C24.0171 1.53019 24.311 2.3024 24.311 3.0875V15.9125C24.311 16.6976 24.0171 17.4698 23.4633 18.0551C22.906 18.644 22.1229 19 21.2773 19H9.61489C8.36665 19 7.18832 18.4586 6.42197 17.533L0.737068 10.6665C0.169025 9.98041 0.169023 9.01959 0.737068 8.3335L6.42197 1.46703ZM10.4065 4.79075C10.8014 4.41975 11.4416 4.41975 11.8366 4.79075L14.6968 7.47775L17.557 4.79075C17.9519 4.41975 18.5922 4.41975 18.9871 4.79075L19.7022 5.4625C20.0972 5.83349 20.0972 6.43501 19.7022 6.806L16.842 9.49297L19.7022 12.18C20.0972 12.551 20.0972 13.1526 19.7022 13.5235L18.9871 14.1953C18.5922 14.5663 17.9519 14.5663 17.557 14.1953L14.6968 11.5083L11.8366 14.1953C11.4416 14.5663 10.8014 14.5663 10.4065 14.1953L9.6914 13.5235C9.29648 13.1526 9.29648 12.551 9.6914 12.18L12.5517 9.49297L9.6914 6.806C9.29648 6.43501 9.29648 5.83349 9.6914 5.4625L10.4065 4.79075Z"
                            fill="#C3CAD9"
                          />
                        </svg>
                      </div>
                    </div>
                    <div className="mt-3">
                      <label className="form-label">Quantity</label>
                      <div className="d-flex align-items-center">
                        <input
                          type="text"
                          className="form-control danger me-4"
                          placeholder="Alien Smith"
                          value="100"
                        />
                        <svg
                          width="25"
                          height="19"
                          viewBox="0 0 25 19"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M6.42197 1.46703C7.18832 0.541395 8.36665 0 9.61489 0H21.2773C22.1229 0 22.906 0.355993 23.4633 0.944917C24.0171 1.53019 24.311 2.3024 24.311 3.0875V15.9125C24.311 16.6976 24.0171 17.4698 23.4633 18.0551C22.906 18.644 22.1229 19 21.2773 19H9.61489C8.36665 19 7.18832 18.4586 6.42197 17.533L0.737068 10.6665C0.169025 9.98041 0.169023 9.01959 0.737068 8.3335L6.42197 1.46703ZM10.4065 4.79075C10.8014 4.41975 11.4416 4.41975 11.8366 4.79075L14.6968 7.47775L17.557 4.79075C17.9519 4.41975 18.5922 4.41975 18.9871 4.79075L19.7022 5.4625C20.0972 5.83349 20.0972 6.43501 19.7022 6.806L16.842 9.49297L19.7022 12.18C20.0972 12.551 20.0972 13.1526 19.7022 13.5235L18.9871 14.1953C18.5922 14.5663 17.9519 14.5663 17.557 14.1953L14.6968 11.5083L11.8366 14.1953C11.4416 14.5663 10.8014 14.5663 10.4065 14.1953L9.6914 13.5235C9.29648 13.1526 9.29648 12.551 9.6914 12.18L12.5517 9.49297L9.6914 6.806C9.29648 6.43501 9.29648 5.83349 9.6914 5.4625L10.4065 4.79075Z"
                            fill="#C3CAD9"
                          />
                        </svg>
                      </div>
                    </div>
                    <div className="mt-3">
                      <label className="form-label">Buyer</label>
                      <div className="d-flex align-items-center">
                        <input
                          type="text"
                          className="form-control border-green me-4"
                          placeholder="Enter your order reference"
                          value="Alien smith"
                        />
                        <svg
                          width="25"
                          height="19"
                          viewBox="0 0 25 19"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M6.42197 1.46703C7.18832 0.541395 8.36665 0 9.61489 0H21.2773C22.1229 0 22.906 0.355993 23.4633 0.944917C24.0171 1.53019 24.311 2.3024 24.311 3.0875V15.9125C24.311 16.6976 24.0171 17.4698 23.4633 18.0551C22.906 18.644 22.1229 19 21.2773 19H9.61489C8.36665 19 7.18832 18.4586 6.42197 17.533L0.737068 10.6665C0.169025 9.98041 0.169023 9.01959 0.737068 8.3335L6.42197 1.46703ZM10.4065 4.79075C10.8014 4.41975 11.4416 4.41975 11.8366 4.79075L14.6968 7.47775L17.557 4.79075C17.9519 4.41975 18.5922 4.41975 18.9871 4.79075L19.7022 5.4625C20.0972 5.83349 20.0972 6.43501 19.7022 6.806L16.842 9.49297L19.7022 12.18C20.0972 12.551 20.0972 13.1526 19.7022 13.5235L18.9871 14.1953C18.5922 14.5663 17.9519 14.5663 17.557 14.1953L14.6968 11.5083L11.8366 14.1953C11.4416 14.5663 10.8014 14.5663 10.4065 14.1953L9.6914 13.5235C9.29648 13.1526 9.29648 12.551 9.6914 12.18L12.5517 9.49297L9.6914 6.806C9.29648 6.43501 9.29648 5.83349 9.6914 5.4625L10.4065 4.79075Z"
                            fill="#C3CAD9"
                          />
                        </svg>
                      </div>
                    </div>
                    <div className="mt-3">
                      <label className="form-label">Price</label>
                      <div className="d-flex align-items-center">
                        <input
                          type="text"
                          className="form-control bg-grey border-grey me-4"
                          placeholder="Enter your order reference"
                          value="$ 2,844.90"
                        />
                        <svg
                          width="25"
                          height="19"
                          viewBox="0 0 25 19"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M6.42197 1.46703C7.18832 0.541395 8.36665 0 9.61489 0H21.2773C22.1229 0 22.906 0.355993 23.4633 0.944917C24.0171 1.53019 24.311 2.3024 24.311 3.0875V15.9125C24.311 16.6976 24.0171 17.4698 23.4633 18.0551C22.906 18.644 22.1229 19 21.2773 19H9.61489C8.36665 19 7.18832 18.4586 6.42197 17.533L0.737068 10.6665C0.169025 9.98041 0.169023 9.01959 0.737068 8.3335L6.42197 1.46703ZM10.4065 4.79075C10.8014 4.41975 11.4416 4.41975 11.8366 4.79075L14.6968 7.47775L17.557 4.79075C17.9519 4.41975 18.5922 4.41975 18.9871 4.79075L19.7022 5.4625C20.0972 5.83349 20.0972 6.43501 19.7022 6.806L16.842 9.49297L19.7022 12.18C20.0972 12.551 20.0972 13.1526 19.7022 13.5235L18.9871 14.1953C18.5922 14.5663 17.9519 14.5663 17.557 14.1953L14.6968 11.5083L11.8366 14.1953C11.4416 14.5663 10.8014 14.5663 10.4065 14.1953L9.6914 13.5235C9.29648 13.1526 9.29648 12.551 9.6914 12.18L12.5517 9.49297L9.6914 6.806C9.29648 6.43501 9.29648 5.83349 9.6914 5.4625L10.4065 4.79075Z"
                            fill="#C3CAD9"
                          />
                        </svg>
                      </div>
                    </div>
                    <div className="mt-5 pt-5 pe-5">
                      <button className="big-btn btn btn-lg btn-lg btn-success">
                        <svg
                          className="me-2"
                          width="14"
                          height="14"
                          viewBox="0 0 14 14"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M10.75 0.25H1.75C0.9175 0.25 0.25 0.925 0.25 1.75V12.25C0.25 13.075 0.9175 13.75 1.75 13.75H12.25C13.075 13.75 13.75 13.075 13.75 12.25V3.25L10.75 0.25ZM7 12.25C5.755 12.25 4.75 11.245 4.75 10C4.75 8.755 5.755 7.75 7 7.75C8.245 7.75 9.25 8.755 9.25 10C9.25 11.245 8.245 12.25 7 12.25ZM9.25 4.75H1.75V1.75H9.25V4.75Z"
                            fill="white"
                          />
                        </svg>
                        Save Changes
                      </button>

                      <div className="d-flex justify-content-between align-items-center mt-4">
                        <button className="fs-15 fw-medium btn big-btn btn-lg btn-primary">
                          Export to CVS
                        </button>
                        <span className="fs-12 px-4">OR</span>
                        <button className="fs-15 fw-medium btn big-btn btn-lg btn-primary">
                          Export to XLS
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Preview;
