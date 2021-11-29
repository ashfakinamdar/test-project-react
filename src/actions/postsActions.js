import axios from "axios";

export const GET_POSTS = "GET_POSTS";
export const GET_POSTS_SUCCESS = "GET_POSTS_SUCCESS";
export const GET_POSTS_FAILURE = "GET_POSTS_FAILURE";
export const DELETE_POSTS = "DELETE_POST";
export const DELETE_POSTS_SUCCESS = "DELETE_POST_SUCCESS";
export const DELETE_POSTS_FAILURE = "DELETE_POSTS_FAILURE";
export const getPosts = () => ({
  type: GET_POSTS,
});

export const getPostsSuccess = (posts) => ({
  type: GET_POSTS_SUCCESS,
  payload: posts,
});

export const getPostsFailure = () => ({
  type: GET_POSTS_FAILURE,
});

export const closeModal = () => ({
  type: DELETE_POSTS,
});

export const deletePostsSuccess = (id) => ({
  type: DELETE_POSTS_SUCCESS,
  payload: id,
});

export const deletePostsFailure = () => ({
  type: DELETE_POSTS_FAILURE,
});

export const fetchPosts = () => {
  return async (dispatch) => {
    dispatch(getPosts());

    try {
      const url = "https://jsonplaceholder.typicode.com/posts";

      const posts = await axios.get(url);

      dispatch(getPostsSuccess(posts.data));
    } catch (error) {
      dispatch(getPostsFailure());
    }
  };
};

export const deletePost = (id) => {
  return async (dispatch) => {
    try {
      const url = `https://jsonplaceholder.typicode.com/posts/${id}`;

      const posts = await axios.delete(url);

      dispatch(deletePostsSuccess(id));
    } catch (error) {
      dispatch(deletePostsFailure());
    }
  };
};

export const deletePostSuccess = () => {
  return async (dispatch) => {
    try {
      dispatch(closeModal());
    } catch (error) {
      dispatch(deletePostsFailure());
    }
  };
};
