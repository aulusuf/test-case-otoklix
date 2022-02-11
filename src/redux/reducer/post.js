import {
  CREATE_POST_REQUEST,
  CREATE_POST_SUCCESS,
  CREATE_POST_FAILURE,
} from "../types";

const initialState = {
  loading: false,
  data: [],
  error: "",
};

export const createPost = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_POST_REQUEST:
      return {
        loading: true,
      };
    case CREATE_POST_SUCCESS:
      return {
        loading: false,
        data: action.payload,
        error: "",
      };
    case CREATE_POST_FAILURE:
      return {
        loading: false,
        data: [],
        error: action.payload,
      };
    default:
      return state;
  }
};
export default createPost;
