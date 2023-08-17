import * as types from "./actionTypes";

export function updateUserDetail(userName, token) {
  return {
    type: types.UPDATE_USER_DETAILS_SUCCESS,
    user: { userName: userName, token: token },
  };
}
export function removeUserDetail() {
  return {
    type: types.REMOVE_USER_DETAILS_SUCCESS,
  };
}
