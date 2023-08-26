import React from "react";
import Button from "react-bootstrap/Button";
import Alert from "react-bootstrap/Alert";
import Modal from "react-bootstrap/Modal";
import PropTypes from "prop-types";

const DeleteItemModal = (props) => {
  return (
    <Modal
      show={props.show}
      onHide={props.onHide}
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Alert variant="danger" onClose={props.onHide} dismissible>
        <Alert.Heading>Are you sure you want to Delete this?</Alert.Heading>
        <p>Once you delete this item, you will not be able to recover it!</p>
        <hr />
        <div className="d-flex justify-content-end">
          <Button onClick={props.deleteHandler} variant="outline-success">
            Delete
          </Button>
        </div>
      </Alert>
    </Modal>
  );
};

DeleteItemModal.propTypes = {
  onHide: PropTypes.func.isRequired,
  show: PropTypes.bool.isRequired,
  deleteHandler: PropTypes.func.isRequired,
};

export default DeleteItemModal;
