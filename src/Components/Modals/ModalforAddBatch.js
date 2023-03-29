import React, { useState, Fragment } from 'react';
import { Modal, Button } from 'react-bootstrap';
import PlusSvg from '../HomePageSvg/PlusSvg';
// import {PlusIcon} from '../HomePageSvg/PlusIcon.svg';

const ModalforAddBatch = ({ name }) => {
  const [show, setShow] = useState(false);

  const handleClose = () => {
    setShow(false);
  };

  return (
    <Fragment>
      <Button className="text-capitalize" onClick={() => setShow(true)}>
        <PlusSvg /> {name || 'Add Batch'}
      </Button>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title> Add Batch</Modal.Title>
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
                <label className="form-label">Batch Title</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter your batch name"
                />
              </div>
            </div>
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Create Batch
          </Button>
        </Modal.Footer>
      </Modal>
    </Fragment>
  );
};

export default ModalforAddBatch;
