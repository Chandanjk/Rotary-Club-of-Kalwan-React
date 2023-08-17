import React,{ useState } from "react";
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import PropTypes from "prop-types";
import * as loginActions from "../../redux/actions/loginActions";
import * as loginApi from "../../api/loginApi";
import { connect } from "react-redux";
import { toast } from "react-toastify";

const LoginModal = (props) => {
    const [stateData, setStateData] = useState({
        username: "",
        password: "",
        loggedIn: false,
        error: "",
      });

    const handleChange = (event) => {
        setStateData({ ...stateData, [event.target.name]: event.target.value });
      };

    const handleLogin = (event) => {
        event.preventDefault();
        loginApi
          .getLoginDetails()
          .then((users) => {
            let user = users.find(
              (user) =>
                user.username === stateData.username &&
                user.password === stateData.password
            );
            if (Object.entries(user).length !== 0) {
              console.log("Login Success");
              toast.success("Login Success");
              props.actions.updateUserDetail(user.role, user.firstName);
              setStateData({ ...stateData, loggedIn: true });
            }
          })
          .catch((error) => {
            toast.error("Login Failed : Please Enter Valid Credentials");
            console.log("Login Failed : " + error);
          });
      };
    

    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Login
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <Form onSubmit={handleLogin}>
                <Form.Group className="mb-3" controlId="validationCustom01">
                    <FloatingLabel
                        controlId="floatingInput"
                        label="UserName"
                        className="mb-3"
                    >
                        <Form.Control required type="text" name="username" placeholder="username" onChange={handleChange}/>
                    </FloatingLabel>
                </Form.Group>
                <Form.Group className="mb-3" controlId="validationCustom01">
                    <FloatingLabel controlId="floatingPassword" label="Password">
                        <Form.Control required type="password" name="password" placeholder="Password" onChange={handleChange}/>
                    </FloatingLabel>
                </Form.Group>
                <Button onClick={props.onHide}>Close</Button>
                <Button type="submit">Login</Button>
            </Form>
        </Modal.Body>
      </Modal>
    );
  }

  LoginModal.propTypes = {
    onHide: PropTypes.func.isRequired,
    user: PropTypes.object.isRequired,
    actions: PropTypes.object.isRequired,
  };

  function mapStateToProps(state) {
    return {
      user: state.user,
    };
  }
  function mapDispatchToProps(dispatch) {
    return {
      actions: {
        updateUserDetail: ( username) =>
          dispatch(
            loginActions.updateUserDetail(username, "Login-Attempt")
          ),
        
      },
    };
  }

export default connect(mapStateToProps, mapDispatchToProps)(LoginModal);
