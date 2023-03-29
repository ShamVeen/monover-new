import React, { useState, Fragment } from 'react';
import { Modal, Button } from 'react-bootstrap';
import PlusSvg from '../HomePageSvg/PlusSvg';
import SvgAddCustomer from '../HomePageSvg/SvgAddCustomer';

const ModalforNewCustomer = ({ name }) => {
  const [show, setShow] = useState(false);

  const handleClose = () => {
    setShow(false);
  };

  return (
    <Fragment>
      <Button
        className="text-capitalize"
        onClick={() => setShow(true)}
        style={{ height: '35px', marginLeft: '10px' }}
      >
        <PlusSvg /> {name || 'New Customer'}
      </Button>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title> Add Customer</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {/* <div
            className="modal modal-lg fade presto-modal"
            id="newCustomer"
            tabindex="-1"
            aria-labelledby="newCustomer"
            aria-hidden="true"
          > */}
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
              <div className="modal-header">
                {/* <h1 className="modal-title mx-auto" id="newCustomer">
                    Add Customer
                  </h1> */}
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div className="modal-body">
                <form action="" className="w-100">
                  <div className="d-flex align-items-center flex-column">
                    <p className="modal-body-form-text">
                    
                      Add profile picture <span>(optional)</span>
                    </p>
                    <label
                      className="profile-pic-label d-flex justify-content-center align-items-center"
                      for="profilePic"
                    >
                      <span className="profile-pic-plus-icon">
                        <SvgAddCustomer />
                      </span>
                    </label>
                    <input
                      type="file"
                      className="hiddenInput"
                      name=""
                      id="profilePic"
                    />
                    <span className="pt-2 file-name"></span>
                  </div>
                  <div className="mt-3">
                    <label className="form-label">Customer Name</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Name here"
                    />
                  </div>
                </form>
              </div>
              {/* <div className="modal-footer d-flex">
                  <button
                    type="button"
                    className="btn btn-secondary"
                    data-bs-dismiss="modal"
                  >
                    Cancel
                  </button>
                  <button type="button" className="btn btn-primary">
                    Add Customer
                  </button>
                </div> */}
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Add Customer
          </Button>
        </Modal.Footer>
      </Modal>
    </Fragment>
  );
};

export default ModalforNewCustomer;
