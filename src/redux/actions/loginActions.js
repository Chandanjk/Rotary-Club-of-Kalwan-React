import * as types from "./actionTypes";

export function updateUserDetail(username, token) {
  return {
    type: types.UPDATE_USER_DETAILS_SUCCESS,
    user: { username: username, token: token },
  };
}
export function removeUserDetail() {
  return {
    type: types.REMOVE_USER_DETAILS_SUCCESS,
  };
}
