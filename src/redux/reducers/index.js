import { combineReducers } from "redux";
import user from "./loginReducer";
import posts from "./postsReducer";
import members from "./membersReducer";

const rootReducer = combineReducers({
  user: user,
  posts: posts,
  members: members,
});

export default rootReducer;
