import React from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import PropTypes from "prop-types";

const UpdatePostModal = (props) => {
  return (
    <Modal
      show={props.modalShow}
      onHide={props.onHide}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Update Post
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={props.submitHandler}>
          <Form.Group className="mb-3" controlId="validationCustom01">
            <FloatingLabel
              controlId="floatingInput"
              label="Title"
              className="mb-3"
            >
              <Form.Control
                required
                type="text"
                name="title"
                placeholder="title"
                value={props.post.title}
                onChange={props.changeHandler}
              />
            </FloatingLabel>
          </Form.Group>
          <Form.Group className="mb-3" controlId="validationCustom01">
            <FloatingLabel
              controlId="floatingInput"
              label="Date"
              className="mb-3"
            >
              <Form.Control
                required
                type="text"
                name="date0"
                placeholder="date"
                value={props.post.date0}
                onChange={props.changeHandler}
              />
            </FloatingLabel>
          </Form.Group>
          <Form.Group className="mb-3" controlId="validationCustom01">
            <FloatingLabel
              controlId="floatingInput"
              label="Place"
              className="mb-3"
            >
              <Form.Control
                required
                type="text"
                name="place"
                placeholder="place"
                value={props.post.place}
                onChange={props.changeHandler}
              />
            </FloatingLabel>
          </Form.Group>
          <Form.Group className="mb-3" controlId="validationCustom01">
            <FloatingLabel
              controlId="floatingInput"
              label="Content"
              className="mb-3"
            >
              <Form.Control
                required
                type="text"
                name="content"
                placeholder="content"
                value={props.post.content}
                onChange={props.changeHandler}
              />
            </FloatingLabel>
          </Form.Group>
          <Button variant="link" onClick={props.onHide}>
            Close
          </Button>
          <Button variant="link" type="submit">
            Update
          </Button>
        </Form>
      </Modal.Body>
    </Modal>
  );
};

UpdatePostModal.propTypes = {
  onHide: PropTypes.func.isRequired,
  modalShow: PropTypes.bool.isRequired,
  changeHandler: PropTypes.func.isRequired,
  submitHandler: PropTypes.func.isRequired,
  post: PropTypes.object.isRequired,
};

export default UpdatePostModal;
