import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app";
import configureStore from "./store/store";

import { signInWorker, signUpWorker } from "./actions/sessionActions";

document.addEventListener("DOMContentLoaded", () => {
  const store = configureStore();

  window.signInWorker = signInWorker;
  window.signUpWorker = signUpWorker;

  window.getState = store.getState;
  window.dispatch = store.dispatch;

  const root = document.getElementById("root");
  ReactDOM.render(<App store={store} />, root);
});
