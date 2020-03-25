import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import GreetingsContainer from "./greeting/greetingContainer";

const Routes = () => {
  return (
    <div>
      <GreetingsContainer />
      <h1>Hello!</h1>
    </div>
  );
};

export default Routes;
