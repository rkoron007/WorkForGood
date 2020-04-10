import React from "react";
import { Switch, Redirect } from "react-router-dom";
import { AuthRoute, ProtectedRoute } from "../util/routeUtil";
import Greeting from "./session/greeting";
import WorkerSignInContainer from "./session/workerSignInContainer";
import WorkerSignUpContainer from "./session/workerSignUpContainer";
import CompanySignInContainer from "./session/CompanySignInContainer";
import companySignUpContainer from "./session/companySignUpContainer";

const Routes = () => {
  return (
    <div>
      <Greeting />
      <AuthRoute
        exact
        path="/signin-worker"
        component={WorkerSignInContainer}
      />
      <AuthRoute
        exact
        path="/signup-worker"
        component={WorkerSignUpContainer}
      />
      <AuthRoute
        exact
        path="/signin-company"
        component={CompanySignInContainer}
      />
      <AuthRoute
        exact
        path="/signup-company"
        component={companySignUpContainer}
      />
    </div>
  );
};

export default Routes;
