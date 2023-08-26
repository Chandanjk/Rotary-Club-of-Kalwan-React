import React from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import PropTypes from "prop-types";

const CreatePostModal = (props) => {
  return (
    <Modal
      show={props.modalShow}
      onHide={props.onHide}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">Add Post</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={props.submitHandler}>
          <Form.Group className="mb-3" controlId="validationCustom01">
            <FloatingLabel controlId="floatingInput" label="" className="mb-3">
              <Form.Control
                required
                type="file"
                multiple
                accept="image/gif, image/jpeg, image/png"
                onChange={props.fileChangeHandler}
              />
              {props.post.images.length != 0 ? (
                <div>
                  <h5>Files Selected</h5>
                  <ul>
                    {props.post.images.map((file, index) => (
                      <li key={index}>File Name: {file.name}</li>
                    ))}
                  </ul>
                </div>
              ) : (
                <div>
                  <br />
                  <h5>Choose before Pressing the Upload button</h5>
                </div>
              )}
            </FloatingLabel>
          </Form.Group>

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
            Add
          </Button>
        </Form>
      </Modal.Body>
    </Modal>
  );
};

CreatePostModal.propTypes = {
  onHide: PropTypes.func.isRequired,
  modalShow: PropTypes.bool.isRequired,
  changeHandler: PropTypes.func.isRequired,
  submitHandler: PropTypes.func.isRequired,
  fileChangeHandler: PropTypes.func.isRequired,
  post: PropTypes.object.isRequired,
};

export default CreatePostModal;
