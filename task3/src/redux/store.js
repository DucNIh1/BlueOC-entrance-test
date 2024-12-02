// src/redux/store.js
import { createStore, applyMiddleware } from "redux";
import { thunk } from "redux-thunk";
import postsReducer from "./reducers/postReducer.js";

const store = createStore(postsReducer, applyMiddleware(thunk));

export default store;
