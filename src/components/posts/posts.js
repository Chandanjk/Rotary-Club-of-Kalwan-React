import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import Carousel from "react-bootstrap/Carousel";
import Button from "react-bootstrap/Button";
import * as postsActions from "../../redux/actions/postsActions";
import { NavLink } from "react-router-dom";
import UpdatePostModal from "./updatePost";
import { toast } from "react-toastify";
import DeleteItemModal from "../common/deleteItem";
import CreatePostModal from "./createPost";

const Posts = (props) => {
  const [posts, setPosts] = useState([]);
  const [images, setImages] = useState([]);
  const [modalShow, setModalShow] = useState(false);
  const [modal1Show, setModal1Show] = useState(false);
  const [show, setShow] = useState(false);
  const [stateData, setStateData] = useState({
    id: "",
    title: "",
    date0: "",
    place: "",
    content: "",
    images: [],
  });
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

  const changeHandler = (event) => {
    setStateData({ ...stateData, [event.target.name]: event.target.value });
  };

  const fileChangeHandler = (event) => {
    // Update the state
    setStateData({ ...stateData, images: [...event.target.files] });
  };

  const createHandler = (event) => {
    event.preventDefault();
    const data = {
      id: null,
      images: stateData.images,
      title: stateData.title,
      date0: stateData.date0,
      place: stateData.place,
      content: stateData.content,
    };

    // Create an object of formData
    //const formData = new FormData();

    // Update the formData object
    //formData.append("myFile", stateData.images, stateData.images[0].name);

    // Details of the uploaded file
    //console.log(stateData.images);

    // Request made to the backend api
    // Send formData object
    //axios.post("api/uploadfile", formData);

    console.log(data);
    props
      .createPost(data)
      .then(() => {
        console.log("Post Added");
        toast.success("Post Added Successfully");
        setStateData({
          id: "",
          title: "",
          date0: "",
          place: "",
          content: "",
          images: [],
        });
        setModal1Show(false);
      })
      .catch((error) => {
        console.log("Failed : " + error);
        toast.error("Post Addition Failed");
      });
  };

  const updateHandler = (event) => {
    event.preventDefault();
    const post_to_update = posts.find(
      (post) => post.id === Number(stateData.id)
    );
    const data = {
      ...post_to_update,
      title: stateData.title,
      date0: stateData.date0,
      place: stateData.place,
      content: stateData.content,
    };
    console.log("data : ");
    console.log(data);
    props
      .updatePost(data)
      .then(() => {
        console.log("Post Updated");
        toast.success("Post Updated Successfully");
        setStateData({
          id: "",
          title: "",
          date0: "",
          place: "",
          content: "",
          images: [],
        });
        setModalShow(false);
      })
      .catch((error) => {
        console.log("Failed : " + error);
        toast.error("Post Updation Failed");
      });
  };

  const deleteHandler = () => {
    const post_to_delete = posts.find(
      (post) => post.id === Number(stateData.id)
    );
    props
      .deletePost(post_to_delete)
      .then(() => {
        console.log("Post Deleted");
        toast.success("Post Deleted Succenssfully");
        setStateData({
          id: "",
          title: "",
          date0: "",
          place: "",
          content: "",
          images: [],
        });
        setShow(false);
      })
      .catch((error) => {
        console.log("Failed : " + error);
        toast.error("Post Deletion Failed");
      });
  };

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
          <Button
            variant="success"
            onClick={() => {
              setStateData({
                id: "",
                title: "",
                date0: "",
                place: "",
                content: "",
                images: [],
              });
              setModal1Show(true);
            }}
          >
            Add Post
          </Button>
          <CreatePostModal
            modalShow={modal1Show}
            onHide={() => setModal1Show(false)}
            post={stateData}
            changeHandler={changeHandler}
            submitHandler={createHandler}
            fileChangeHandler={fileChangeHandler}
          />
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
                        <Button
                          variant="danger"
                          onClick={() => {
                            setStateData({
                              id: post.id,
                              images: post.images,
                              title: post.title,
                              date0: post.date0,
                              place: post.place,
                              content: post.content,
                            });
                            setModalShow(true);
                          }}
                          className="make-inline half-width"
                        >
                          Update
                        </Button>
                        <UpdatePostModal
                          modalShow={modalShow}
                          onHide={() => setModalShow(false)}
                          post={stateData}
                          submitHandler={updateHandler}
                          changeHandler={changeHandler}
                        />
                        <Button
                          variant="danger"
                          onClick={() => {
                            setStateData({
                              id: post.id,
                              images: post.images,
                              title: post.title,
                              date0: post.date0,
                              place: post.place,
                              content: post.content,
                            });
                            setShow(true);
                          }}
                          className="make-inline half-width"
                        >
                          Delete
                        </Button>
                        <DeleteItemModal
                          show={show}
                          onHide={() => setShow(false)}
                          deleteHandler={deleteHandler}
                        />
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
  updatePost: PropTypes.func.isRequired,
  deletePost: PropTypes.func.isRequired,
  createPost: PropTypes.func.isRequired,
  posts: PropTypes.array.isRequired,
};

function mapStateToProps(state) {
  return {
    posts: state.posts,
  };
}
const mapDispatchToProps = {
  loadPosts: postsActions.loadPosts,
  updatePost: postsActions.updatePost,
  deletePost: postsActions.deletePost,
  createPost: postsActions.createPost,
};

export default connect(mapStateToProps, mapDispatchToProps)(Posts);
