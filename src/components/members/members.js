import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import Carousel from "react-bootstrap/Carousel";
import * as membersActions from "../../redux/actions/membersActions";
import { NavLink } from "react-router-dom";

const Members = (props) => {
  const [members, setMembers] = useState([]);
  const [prof_images, setImages] = useState([]);

  useEffect(() => {
    if (props.members.length === 0) {
      props.loadMembers().catch((error) => {
        alert("Loading members Failed : " + error);
      });
    } else {
      setMembers(props.members);
      let images_temp = [];
      props.members.map((member) => {
        import(`../../images/upload_members/${member.image}`)
          .then((image) => {
            images_temp = [
              ...images_temp,
              { id: post.id, image: image.default },
            ];
            setImages(images_temp);
          })
          .catch((error) => {
            console.log(error);
          });
      });
    }
  }, [props.members]);

  const findImage = (id) => {
    return (
      prof_images.find((element) => element.id === id) || {
        id: "",
        image: "",
      }
    );
  };

  return (
    <>
      {/*About the work and projects*/}
      <div className="site-section" id="works">
        <div className="container">
          <div className="row mb-5">
            <div className="col-md-7 mx-auto text-center">
              <h2 className="heading-29190">Our Projects</h2>
            </div>
          </div>
          <div className="row justify-content-center">
            {members &&
              members.map((member, index) => {
                return window.location.pathname === "/" && index > 2 ? (
                  <></>
                ) : (
                  <>
                    <div
                      className="col-lg-4 col-md-8 col-sm-12 mb-4"
                      key={index}
                    >
                      <div className="post-entry-1 h-100 post-entry-design">
                        <div className="post-entry-image">
                          {images.length !== 0 ? findImage(post.id) : <></>}

                          <Carousel>
                            {image.images.map((img, index) => {
                              return (
                                <Carousel.Item
                                  interval={4000}
                                  className="center"
                                  key={index}
                                >
                                  <img
                                    className="d-block size-img"
                                    src={img}
                                    alt="First slide"
                                  />
                                </Carousel.Item>
                              );
                            })}
                          </Carousel>
                        </div>
                        <div className="post-entry-contents">
                          <div className="post-entry-1-contents">
                            <h2>
                              <a>{post.title}</a>
                            </h2>
                            <span
                              className="meta d-inline-block mb-3"
                              style={{ width: "100%" }}
                            >
                              {post.date0}
                              <div className="float-right primary make-inline">
                                <a>{post.place}</a>
                              </div>
                            </span>
                            <p>{post.content}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </>
                );
              })}
          </div>

          {window.location.pathname === "/" ? (
            <div className="row">
              <div className="col-md-10"></div>
              <div className="col-md-2 text-center more-btn">
                <NavLink
                  exact
                  activeClassName="active"
                  to={"/work/"}
                  className="nav-link center"
                >
                  see more...
                </NavLink>
              </div>
            </div>
          ) : (
            <></>
          )}
        </div>
      </div>
      {/* END .site-section */}
    </>
  );
};

Members.propTypes = {
  loadMembers: PropTypes.func.isRequired,
  members: PropTypes.array.isRequired,
};

function mapStateToProps(state) {
  return {
    members: state.members,
  };
}
const mapDispatchToProps = {
  loadMembers: membersActions.loadMembers,
};

export default connect(mapStateToProps, mapDispatchToProps)(Members);
