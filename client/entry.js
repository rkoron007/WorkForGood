import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import configureStore from "./store/store";

document.addEventListener("DOMContentLoaded", () => {
  const store = configureStore();

  window.getState = store.getState;
  window.dispatch = store.dispatch;
  // const store = configureStore();
  const root = document.getElementById("root");
  ReactDOM.render(<App />, root);
});
