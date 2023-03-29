import React, { useState, Fragment } from 'react';
import { Modal, Button } from 'react-bootstrap';
import PlusSvg from '../HomePageSvg/PlusSvg';
// import {PlusIcon} from '../HomePageSvg/PlusIcon.svg';

const ModalforCustomerAddOrder = ({ name }) => {
  const [show, setShow] = useState(false);

  const handleClose = () => {
    setShow(false);
  };

  return (
    <Fragment>
      <Button className="text-capitalize" onClick={() => setShow(true)} style={{height: '40px'}}>
        <PlusSvg /> {name || 'Add Order'}
      </Button>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title> Add Order</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form
            action="/"
            method="post"
            className="w-100"
            enctype="multipart/form-data"
          >
            <div className="modal-body">
              <div className="mt-3">
                <label className="form-label">Order Title</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter your order reference"
                />
              </div>
              <div className="mt-4">
                <label className="form-label">Customer</label>

                <div className="dropdown">
                  <button
                    className="btn btn dropdown-toggle"
                    type="button"
                    id="dropdownMenuButton"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                    style={{width: '100%'}}
                  >
                    Select Customer
                  </button>
                  <div
                    className="dropdown-menu"
                    aria-labelledby="dropdownMenuButton"
                  >
                    <a className="dropdown-item" href="#">
                      Sigma
                    </a>
                    <a className="dropdown-item" href="#">
                      Prometheus
                    </a>
                    <a className="dropdown-item" href="#">
                      New customer
                    </a>
                  </div>
                </div>
                {/* <select
                  title="Select Customer"
                  className="customer-select selectpicker"
                >
                  <option data-icon="glyphicon glyphicon-eye-open">
                    Sigma
                  </option>
                  <option data-icon="glyphicon glyphicon-fire">
                    Prometheus
                  </option>
                  <option data-icon="glyphicon glyphicon-fire">
                    New customer
                  </option>
                </select> */}
              </div>
            </div>
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Add Order
          </Button>
        </Modal.Footer>
      </Modal>
    </Fragment>
  );
};

export default ModalforCustomerAddOrder;
