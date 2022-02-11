import {
  FETCH_POST_REQUEST,
  FETCH_POST_SUCCESS,
  FETCH_POST_FAILURE,
  CREATE_POST_REQUEST,
  CREATE_POST_SUCCESS,
  CREATE_POST_FAILURE,
} from "./types";

import axios from "axios";

export const fetchPostsRequest = () => {
  return {
    type: FETCH_POST_REQUEST,
  };
};

export const fetchPostsSuccess = (posts) => {
  return {
    type: FETCH_POST_SUCCESS,
    payload: posts,
  };
};

export const fetchPostsFailure = (error) => {
  return {
    type: FETCH_POST_FAILURE,
    payload: error,
  };
};

export const fetchPosts = () => {
  return (dispatch) => {
    dispatch(fetchPostsRequest);
    axios
      .get("https://limitless-forest-49003.herokuapp.com/posts")
      .then((res) => {
        const posts = res.data;
        dispatch(fetchPostsSuccess(posts));
      })
      .catch((err) => {
        const error = err.message;
        dispatch(fetchPostsFailure(error));
      });
  };
};

export const createPostRequest = (data) => {
  return {
    type: CREATE_POST_REQUEST,
    payload: data,
  };
};

export const createPostSuccess = (data) => {
  return {
    type: CREATE_POST_SUCCESS,
    payload: data,
  };
};

export const createPostFailure = (error) => {
  return {
    type: CREATE_POST_FAILURE,
    payload: error,
  };
};

export const createPost = (data) => {
  return (dispatch) => {
    dispatch(createPostRequest(data));
    axios
      .post(`https://limitless-forest-49003.herokuapp.com/posts`, data)
      .then((res) => {
        const data = res.data;
        dispatch(createPostSuccess(data));
      })
      .catch((err) => {
        const error = err.message;
        dispatch(createPostFailure(error));
      });
  };
};

// export const readPostRequest = (id) => {
//   return {
//     type: type.READ_POST_REQUEST,
//     payload: id,
//   };
// };
// export const readPostSuccess = (data) => {
//   return {
//     type: type.READ_POST_SUCCESS,
//     payload: data,
//   };
// };

// export const readPostFailure = (error) => {
//   return {
//     type: type.READ_POST_FAILURE,
//     payload: error,
//   };
// };

// export const readPost = (id) => {
//   return (dispatch) => {
//     dispatch(readPostRequest(id));
//     axios
//       .get(`posts/ ${id} `)
//       .then((res) => {
//         const post = res.data;
//         dispatch(readPostSuccess(post));
//       })
//       .catch((err) => {
//         const error = err.message;
//         dispatch(readPostFailure(error));
//       });
//   };
// };

// export const updatePostRequest = (id, data) => {
//   return {
//     type: type.UPDATE_POST_REQUEST,
//     payload: id,
//     data,
//   };
// };
// export const updatePostSuccess = (id, data) => {
//   return {
//     type: type.UPDATE_POST_SUCCESS,
//     payload: id,
//     data,
//   };
// };

// export const updatePostFailure = (error) => {
//   return {
//     type: type.UPDATE_POST_FAILURE,
//     payload: error,
//   };
// };

// export const updatePost = (id, data) => {
//   return (dispatch) => {
//     dispatch(readPostRequest(id, data));
//     axios
//       .put(`posts/ ${id} `)
//       .then((res) => {
//         const post = res.data;
//         dispatch(updatePostSuccess(post));
//       })
//       .catch((err) => {
//         const error = err.message;
//         dispatch(updatePostFailure(error));
//       });
//   };
// };

// export const deletePostRequest = (id) => {
//   return {
//     type: type.DELETE_POST_REQUEST,
//     payload: id,
//   };
// };
// export const deletePostSuccess = (id) => {
//   return {
//     type: type.DELETE_POST_SUCCESS,
//     payload: id,
//   };
// };

// export const deletePostFailure = (error) => {
//   return {
//     type: type.DELETE_POST_FAILURE,
//     payload: error,
//   };
// };

// export const deletePost = (id) => {
//   return (dispatch) => {
//     dispatch(readPostRequest(id));
//     axios
//       .put(`posts/ ${id} `)
//       .then((res) => {
//         const post = res.data;
//         dispatch(updatePostSuccess(post));
//       })
//       .catch((err) => {
//         const error = err.message;
//         dispatch(updatePostFailure(error));
//       });
//   };
// };
