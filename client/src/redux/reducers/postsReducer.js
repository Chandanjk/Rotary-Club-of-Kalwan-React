import * as types from "../actions/actionTypes";
import initialState from "./initialState";

export default function postsReducer(state = initialState.posts, action) {
  switch (action.type) {
    case types.LOAD_POSTS_SUCCESS:
      return action.posts;
    case types.UPDATE_POST_SUCCESS:
      return state.map((post) =>
        post._id === action.post._id ? action.post : post
      );
    case types.CREATE_POST_SUCCESS:
      return [...state, { ...action.post }];
    case types.DELETE_POST_SUCCESS:
      return state.filter((post) => post._id != action.post._id);
    default:
      return state;
  }
}
