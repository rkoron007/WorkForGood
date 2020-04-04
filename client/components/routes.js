import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Greetings from "./worker/greeting/workerGreeting";
import CompanyGreeting from "./worker/greeting/companyGreeting";
import WorkerSignInContainer from "./session/workerSignInContainer";
import WorkerSignUpContainer from "./session/workerSignUpContainer";
import CompanySignInContainer from "./session/companySignUpContainer";

const Routes = () => {
  return (
    <div>
      <Greetings />
      <CompanyGreeting />
      <Route exact path="/signin-worker" component={WorkerSignInContainer} />
      <Route exact path="/signin-company" component={CompanySignInContainer} />
      <Route exact path="/signup" component={WorkerSignUpContainer} />
    </div>
  );
};

export default Routes;
