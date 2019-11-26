import React from "react";
import 'bootstrap/dist/css/bootstrap.css';
import { Provider } from "react-redux";
import ReactDOM from "react-dom";
import App from "./app/App";
import store from "./app/store/store";

const rootEl = document.getElementById("root");

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  rootEl
);