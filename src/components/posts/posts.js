import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import Carousel from "react-bootstrap/Carousel";
import * as postsActions from "../../redux/actions/postsActions";
import { NavLink } from "react-router-dom";

const Posts = (props) => {
  const [posts, setPosts] = useState([]);
  const [images, setImages] = useState([]);
  let image = { id: "", images: [] };

  useEffect(() => {
    if (props.posts.length === 0) {
      props.loadPosts().catch((error) => {
        alert("Loading Posts Failed : " + error);
      });
    } else {
      setPosts(props.posts);
      let images_temp = [];
      props.posts.map((post) => {
        let temp = [];
        post.images.map((image) => {
          import(`../../images/upload_posts/${image}`)
            .then((image) => {
              temp = [...temp, image.default];
              let foundIndex = images_temp.findIndex(
                (element) => element.id === post.id
              );
              foundIndex !== -1
                ? images_temp.splice(foundIndex, 1)
                : console.log("");
              images_temp = [...images_temp, { id: post.id, images: temp }];
              setImages(images_temp);
            })
            .catch((error) => {
              console.log(error);
            });
        });
      });
    }
  }, [props.posts]);

  const findImage = (id) => {
    image = images.find((element) => element.id === id) || {
      id: "",
      images: [],
    };
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
            {posts &&
              posts.map((post, index) => {
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

Posts.propTypes = {
  loadPosts: PropTypes.func.isRequired,
  posts: PropTypes.array.isRequired,
};

function mapStateToProps(state) {
  return {
    posts: state.posts,
  };
}
const mapDispatchToProps = {
  loadPosts: postsActions.loadPosts,
};

export default connect(mapStateToProps, mapDispatchToProps)(Posts);
