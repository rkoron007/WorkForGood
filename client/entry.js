import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app";
import configureStore from "./store/store";

document.addEventListener("DOMContentLoaded", () => {
  let store;
  if (window.worker || window.company) {
    let asset = window.worker ? window.worker : window.company;
    let assetName = window.worker ? "workers" : "companies";
    const preloadedState = {
      entities: {
        [assetName]: { [asset.id]: asset }
      },
      session: { id: asset.id }
    };

    store = configureStore(preloadedState);
    delete window.worker || worker.company;
  } else {
    store = configureStore();
  }

  const root = document.getElementById("root");
  ReactDOM.render(<App store={store} />, root);
});
