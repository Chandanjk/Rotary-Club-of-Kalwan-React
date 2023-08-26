import * as types from "./actionTypes";
import * as postsApi from "../../api/postsApi";

export function loadPostsSuccess(posts) {
  return { type: types.LOAD_POSTS_SUCCESS, posts: posts };
}

export function updatePostSuccess(post) {
  return { type: types.UPDATE_POST_SUCCESS, post: post };
}

export function createPostSuccess(post) {
  return { type: types.CREATE_POST_SUCCESS, post: post };
}

export function deletePostSuccess(post) {
  return { type: types.DELETE_POST_SUCCESS, post: post };
}

//thunk definition
export function loadPosts() {
  return function (dispatch) {
    return postsApi
      .getPosts()
      .then((posts) => {
        dispatch(loadPostsSuccess(posts));
      })
      .catch((error) => {
        throw error;
      });
  };
}

export function updatePost(data) {
  return function (dispatch) {
    return postsApi
      .updatePosts(data)
      .then((updatedpost) => {
        dispatch(updatePostSuccess(updatedpost));
      })
      .catch((error) => {
        throw error;
      });
  };
}

export function createPost(data) {
  return function (dispatch) {
    return postsApi
      .addPost(data)
      .then((createdpost) => {
        console.log("createPost : ");
        console.log(createdpost);
        dispatch(createPostSuccess(createdpost));
      })
      .catch((error) => {
        throw error;
      });
  };
}

export function deletePost(post) {
  return function (dispatch) {
    return postsApi
      .deletePost(post.id)
      .then(() => {
        dispatch(deletePostSuccess(post));
      })
      .catch((error) => {
        throw error;
      });
  };
}
