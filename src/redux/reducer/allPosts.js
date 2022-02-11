import {
  FETCH_POST_REQUEST,
  FETCH_POST_SUCCESS,
  FETCH_POST_FAILURE,
} from "../types";

const initialState = {
  loading: false,
  posts: [],
  error: "",
};

export const allPosts = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_POST_REQUEST:
      return {
        loading: true,
      };
    case FETCH_POST_SUCCESS:
      return {
        loading: false,
        posts: action.payload,
        error: "",
      };
    case FETCH_POST_FAILURE:
      return {
        loading: false,
        posts: [],
        error: action.payload,
      };
    default:
      return state;
  }
};
export default allPosts;
