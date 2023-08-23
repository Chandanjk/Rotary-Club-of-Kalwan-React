import { combineReducers } from "redux";
import user from "./loginReducer";
import posts from "./postsReducer"

const rootReducer = combineReducers({
    user: user,
    posts: posts,
});

export default rootReducer;
