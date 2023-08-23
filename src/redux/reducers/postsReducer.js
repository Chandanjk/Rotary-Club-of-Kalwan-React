import * as types from "../actions/actionTypes";
import initialState from "./initialState";

export default function postsReducer(
  state = initialState.posts,
  action
) {
  switch (action.type) {
    case types.LOAD_POSTS_SUCCESS:
      return action.posts;
    case types.UPDATE_POST_SUCCESS:
      return state.map((post) =>
        post.id === action.post.id ? action.post : post
      );
    case types.CREATE_POST_SUCCESS:
      return [...state, { ...action.post }];
    default:
      return state;
  }
}
