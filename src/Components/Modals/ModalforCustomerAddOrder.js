import React, { useState, Fragment } from "react";
import { Modal, Button } from "react-bootstrap";

const ModalforCustomerAddOrder = ({name}) => {
    const [show, setShow] = useState(false);

    const handleClose = () => {
        setShow(false);
      };

  return (
    <Fragment>
    <Button className="text-capitalize" onClick={() => setShow(true)}>
      {name || "Add Order"}
    </Button>
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title> Add Order</Modal.Title>
      </Modal.Header>
      <Modal.Body>
      <form action="/" method="post" class="w-100" enctype="multipart/form-data">
                    <div class="modal-body">
                        <div class="mt-3">
                            <label class="form-label">Order Title</label>
                            <input type="text" class="form-control" placeholder="Enter your order reference" />
                        </div>
                        <div class="mt-4">
                            <label class="form-label">Customer</label>
                            <select title="Select Customer" class="customer-select selectpicker">
                                <option data-icon="glyphicon glyphicon-eye-open">Sigma</option>
                                <option data-icon="glyphicon glyphicon-fire">Prometheus</option>
                                <option data-icon="glyphicon glyphicon-fire">New customer</option>
                            </select>
                        </div>
                    </div>
                    <div class="modal-footer d-flex">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
                        <button type="submit" class="btn btn-primary">Add Order</button>
                    </div>
                </form>
      </Modal.Body>
      {/* <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
        <Button variant="primary" onClick={handleClose}>
          Submit
        </Button>
      </Modal.Footer> */}
    </Modal>
  </Fragment>
  )
}

export default ModalforCustomerAddOrder