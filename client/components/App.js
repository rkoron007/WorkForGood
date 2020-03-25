import React from "react";
import { Provider } from "react-redux";
import { HashRouter } from "react-router-dom";
import Routes from "./routes";

const App = ({ store }) => (
  <Provider store={store}>
    <HashRouter>
      <Routes />
    </HashRouter>
  </Provider>
);

export default App;
