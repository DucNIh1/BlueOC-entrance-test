import axios from "axios";

import {
  FETCH_POSTS_REQUEST,
  FETCH_POSTS_SUCCESS,
  FETCH_POSTS_FAILURE,
  ADD_POST,
} from "../actionTypes/postActionTypes.js";

export const fetchPostsRequest = () => ({ type: FETCH_POSTS_REQUEST });

export const fetchPostsSuccess = (posts) => ({
  type: FETCH_POSTS_SUCCESS,
  payload: posts,
});

export const fetchPostsFailure = (error) => ({
  type: FETCH_POSTS_FAILURE,
  payload: error,
});

export const addPost = (post) => ({ type: ADD_POST, payload: post });

export const fetchPosts = () => async (dispatch) => {
  dispatch(fetchPostsRequest()); // setLoading = true
  try {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/posts"
    );
    dispatch(fetchPostsSuccess(response.data));
  } catch (error) {
    dispatch(fetchPostsFailure(error.message)); // set error
  }
};
