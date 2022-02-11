import { combineReducers } from "redux";

import allPosts from "./reducer/allPosts";
import post from "./reducer/post";

const rootReducer = combineReducers({
  post: allPosts,
  data: post,
});

export default rootReducer;
