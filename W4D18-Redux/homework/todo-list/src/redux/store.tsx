// src/store.js
import { createStore, applyMiddleware, compose } from "redux";
import { thunk } from "redux-thunk";
import rootReducer from "./rootReducer";

// const initialState = {};

// Use Redux DevTools extension if available
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  rootReducer,
  // initialState,
  composeEnhancers(applyMiddleware(thunk))
);

export default store;
