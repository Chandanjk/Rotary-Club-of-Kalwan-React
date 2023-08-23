import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import * as postsActions from "../../redux/actions/postsActions";
import Carousel from "react-bootstrap/Carousel";

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
                : console.log("foundindex : " + foundIndex);
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
                return (
                  <div className="col-lg-4 col-md-6 mb-4" key={index}>
                    <div className="post-entry-1 h-100 post-entry-design">
                      <div className="post-entry-image">
                        {images.length !== 0 ? findImage(post.id) : <></>}
                        <Carousel>
                          {image.images.length >= 1 ? (
                            <Carousel.Item interval={1000}>
                              <img
                                className="d-block size-max"
                                style={{ height: "232px" }}
                                src={image.images[0]}
                                alt="First slide"
                              />
                              <Carousel.Caption>
                                <p>
                                  <b>1</b>
                                </p>
                              </Carousel.Caption>
                            </Carousel.Item>
                          ) : (
                            <></>
                          )}
                          {image.images.length >= 2 ? (
                            <Carousel.Item interval={1000}>
                              <img
                                className="d-block size-max"
                                style={{ height: "232px" }}
                                src={image.images[1]}
                                alt="Second slide"
                              />
                              <Carousel.Caption>
                                <p>
                                  <b>2</b>
                                </p>
                              </Carousel.Caption>
                            </Carousel.Item>
                          ) : (
                            <Carousel.Item interval={0}>
                              <img
                                className="d-block size-max"
                                style={{ height: "232px" }}
                                src=""
                                alt="Second slide"
                              />
                            </Carousel.Item>
                          )}
                          {image.images.length >= 3 ? (
                            <Carousel.Item interval={1000}>
                              <img
                                className="d-block size-max"
                                style={{ height: "232px" }}
                                src={image.images[2]}
                                alt="Third slide"
                              />
                              <Carousel.Caption>
                                <p>
                                  <b>3</b>
                                </p>
                              </Carousel.Caption>
                            </Carousel.Item>
                          ) : (
                            <Carousel.Item interval={0}>
                              <img
                                className="d-block size-max"
                                style={{ height: "232px" }}
                                src=""
                                alt="Third slide"
                              />
                            </Carousel.Item>
                          )}
                          {image.images.length >= 4 ? (
                            <Carousel.Item interval={1000}>
                              <img
                                className="d-block size-max"
                                style={{ height: "232px" }}
                                src={image.images[3]}
                                alt="Fourth slide"
                              />
                              <Carousel.Caption>
                                <p>
                                  <b>4</b>
                                </p>
                              </Carousel.Caption>
                            </Carousel.Item>
                          ) : (
                            <Carousel.Item interval={0}>
                              <img
                                className="d-block size-max"
                                style={{ height: "232px" }}
                                src=""
                                alt="Fourth slide"
                              />
                            </Carousel.Item>
                          )}
                          {image.images.length >= 5 ? (
                            <Carousel.Item interval={1000}>
                              <img
                                className="d-block size-max"
                                style={{ height: "232px" }}
                                src={image.images[4]}
                                alt="Fifth slide"
                              />
                              <Carousel.Caption>
                                <p>
                                  <b>5</b>
                                </p>
                              </Carousel.Caption>
                            </Carousel.Item>
                          ) : (
                            <Carousel.Item interval={-1}>
                              <img
                                className="d-block size-max"
                                style={{ height: "232px" }}
                                src=""
                                alt="Fifth slide"
                              />
                            </Carousel.Item>
                          )}
                        </Carousel>
                      </div>
                      <div
                        className="post-entry-1-contents"
                        style={{
                          zIndex: "2",
                          position: "relative",
                          overflow: "scroll",
                        }}
                      >
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
                );
              })}
          </div>

          <div className="row">
            <div className="col-md-10"></div>
            <div className="col-md-2 text-center more-btn">
              <a href="#">see more...</a>
            </div>
          </div>
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
