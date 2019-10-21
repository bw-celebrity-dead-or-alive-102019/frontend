import React from "react";
import ReactDOM from "react-dom";
import { createStore, applyMiddleware } from "redux";
import { reducer } from "reducers";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import logger from "redux-logger";
import "css/index.css";
import App from "./App";

const store = createStore(reducer, applyMiddleware(thunk, logger));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
