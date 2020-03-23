import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import {
  signUpWorker,
  signUpCompany,
  signOut,
  signInWorker
} from "./util/sessionApiUtil";
// import configureStore from "./store/store";

document.addEventListener("DOMContentLoaded", () => {
  // const store = configureStore();
  window.signUpWorker = signUpWorker;
  window.signUpCompany = signUpCompany;
  window.signOut = signOut;
  window.signInWorker = signInWorker;
  const root = document.getElementById("root");
  ReactDOM.render(<App />, root);
});
