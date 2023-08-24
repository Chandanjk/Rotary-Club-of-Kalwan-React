import * as types from "./actionTypes";
import * as membersApi from "../../api/membersApi";

export function loadMembersSuccess(members) {
  return { type: types.LOAD_MEMBERS_SUCCESS, members: members };
}

export function updateMembersSuccess(member) {
  return { type: types.UPDATE_MEMBER_SUCCESS, member: member };
}

export function createMembersSuccess(member) {
  return { type: types.CREATE_MEMBER_SUCCESS, member: member };
}

//thunk definition
export function loadMembers() {
  return function (dispatch) {
    return membersApi
      .getMembers()
      .then((members) => {
        dispatch(loadMembersSuccess(members));
      })
      .catch((error) => {
        throw error;
      });
  };
}

export function updateMember(data) {
  return function (dispatch) {
    return membersApi
      .updateMembers(data)
      .then((member) => {
        dispatch(updatePostSuccess(member));
      })
      .catch((error) => {
        throw error;
      });
  };
}

export function createMember(data) {
  return function (dispatch) {
    return membersApi
      .addMember(data)
      .then((createdmember) => {
        dispatch(createPostSuccess(createdmember));
      })
      .catch((error) => {
        throw error;
      });
  };
}
