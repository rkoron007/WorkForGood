import React from "react";
import { Switch, Redirect } from "react-router-dom";
import { AuthRoute, ProtectedRoute } from "../util/routeUtil";
import Header from "./header/header";
import WorkerSignInContainer from "./session/containers/workerSignInContainer";
import WorkerSignUpContainer from "./session/containers/workerSignUpContainer";
import CompanySignInContainer from "./session/containers/companySignInContainer";
import companySignUpContainer from "./session/containers/companySignUpContainer";

const Routes = () => {
  return (
    <div>
      <Header />
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
