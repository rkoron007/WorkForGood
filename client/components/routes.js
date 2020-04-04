import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Greetings from "./worker/greeting/workerGreeting";

const Routes = () => {
  return (
    <div>
      <Greetings />
      <h1>Hello!</h1>
    </div>
  );
};

export default Routes;
