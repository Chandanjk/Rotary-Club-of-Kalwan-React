import React,{ useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import ListGroup from 'react-bootstrap/ListGroup';
import panel from '../../images/panel.jpg'
import logo from '../../images/logo.png'
import LoginModal from "./login"
import { FaAlignJustify } from "react-icons/fa";


const Header = () => {
  const [show, setShow] = useState(false);
  const [page, setPage] = useState()
  const [content, setContent] = useState()
  const [modalShow, setModalShow] = React.useState(false);
  const handleClose = () => setShow(false);
  const toggleShow = () => setShow(true);

  useEffect(() => {
    setPage(window.location.pathname);
    if(window.location.pathname === "/"){
      setContent(<><div className="center" id="logo1"><img src={logo}/></div>
      <h2 className="mb-4 text-white">Rotary Club of Kalwan</h2>
      <h3 className="mb-4 text-white">Maharashtra, India</h3>
      <h5 className="mb-4 secondary responsive">District 3030    Club No. 55537</h5>
      <h5 className="mb-4 text-white"></h5>
      <h5 className="mb-4 text-white">Service Above Self</h5>
      <div className="text grey"></div></>)
    }else if(window.location.pathname === "/about/"){
      setContent(<h1 className="mb-4 text-white">About Us</h1>)
    }
  }, []);
  return (
    <>
        <div>
          <div className="site-section-cover overlay" style={{backgroundImage: `url(${panel})`}}>
            
            <Navbar bg="" className=" mb-3 container">
              <Container fluid>
                <Navbar.Brand href="#" className="site-logo font-gray-1"><b>Rotary.</b></Navbar.Brand>
                <Button variant="outline-light" onClick={toggleShow} className="me-2">
                  <FaAlignJustify />
                </Button>
                
                <Offcanvas show={show} onHide={handleClose} scroll= "true" placement="end">
                  <Offcanvas.Header closeButton>
                    <Offcanvas.Title>Rotary Kalwan</Offcanvas.Title>
                  </Offcanvas.Header>
                  <Offcanvas.Body>
                    <ListGroup>
                      <ListGroup.Item active={(page === "/")} >
                        <NavLink
                          exact
                          activeClassName="active"
                          to={"/"}
                          className="nav-link"
                        >
                          Home
                        </NavLink>
                      </ListGroup.Item>
                      <ListGroup.Item active={(page === "/about/")} >
                        <NavLink
                          exact
                          activeClassName="active"
                          to={"/about/"}
                          className="nav-link"
                        >
                          About
                        </NavLink>
                      </ListGroup.Item>
                      <ListGroup.Item active={(page === "/gallary/")}>
                        <NavLink
                          exact
                          activeClassName="active"
                          to={"/gallary/"}
                          className="nav-link"
                        >
                          Gallary
                        </NavLink>
                      </ListGroup.Item>
                      <ListGroup.Item active={(page === "/work/")}>
                        <NavLink
                          exact
                          activeClassName="active"
                          to={"/work/"}
                          className="nav-link"
                        >
                          Works
                        </NavLink>
                      </ListGroup.Item>
                      <ListGroup.Item active={(page === "/history/")}>
                        <NavLink
                          exact
                          activeClassName="active"
                          to={"/history/"}
                          className="nav-link"
                        >
                          About Kalwan
                        </NavLink>
                      </ListGroup.Item>
                      <ListGroup.Item active={(page === "/dist3030/")}>
                        <NavLink
                          exact
                          activeClassName="active"
                          to={"/"}
                          className="nav-link"
                        >
                          District 3030
                        </NavLink>
                      </ListGroup.Item>
                      <ListGroup.Item active={(page === "/myrotary/")}>
                        <a href="https://my.rotary.org/en">My Rotary</a>
                      </ListGroup.Item>
                      <ListGroup.Item>
                      <Button variant="link" onClick={() => setModalShow(true)}>
                        Login
                      </Button>
                      </ListGroup.Item>
                    </ListGroup>
                  </Offcanvas.Body>
                </Offcanvas>
              </Container>
            </Navbar>
            <LoginModal
              show={modalShow}
              onHide={() => setModalShow(false)}
            />
            <div className="container" >
              <div className="row align-items-center justify-content-center">
                <div className="col-md-7 text-center">
                  {content}
                </div>
              </div>
            </div>
          </div>
        </div>
        
      </>
  );
};


export default (Header);
