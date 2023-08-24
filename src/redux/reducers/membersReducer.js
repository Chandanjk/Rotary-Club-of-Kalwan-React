import * as types from "../actions/actionTypes";
import initialState from "./initialState";

export default function membersReducer(state = initialState.members, action) {
  switch (action.type) {
    case types.LOAD_MEMBERS_SUCCESS:
      return action.members;
    case types.UPDATE_MEMBER_SUCCESS:
      return state.map((member) =>
        member.id === action.member.id ? action.member : member
      );
    case types.CREATE_MEMBER_SUCCESS:
      return [...state, { ...action.member }];
    default:
      return state;
  }
}
