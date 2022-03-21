import React from "react";
import { render } from "react-dom";
import App from "../client/App";
import { Provider } from "react-redux";
import store from "../store/store";
import { HashRouter as Router } from "react-router-dom";

render(
  <Router>
    <Provider store={store}>
      <App />
    </Provider>
  </Router>,
  document.querySelector("#root")
);
