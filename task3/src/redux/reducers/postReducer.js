import {
  FETCH_POSTS_REQUEST,
  FETCH_POSTS_SUCCESS,
  FETCH_POSTS_FAILURE,
  ADD_POST,
} from "../actionTypes/postActionTypes.js";

const initialState = {
  loading: false,
  posts: [],
  error: "",
};

const postsReducer = (state = initialState, action) => {
  switch (action.type) {
    // Start fetching posts
    case FETCH_POSTS_REQUEST:
      return { ...state, loading: true };

    //Fetching posts successfully
    case FETCH_POSTS_SUCCESS:
      return { loading: false, posts: action.payload, error: "" };

    // Fetching posts failed
    case FETCH_POSTS_FAILURE:
      return { loading: false, posts: [], error: action.payload };

    // Add post
    case ADD_POST:
      return { ...state, posts: [...state.posts, action.payload] };
    default:
      return state;
  }
};

export default postsReducer;
