import React, { Component } from "react";
import { useDispatch, useSelector } from "react-redux";
import { signOut } from "../../../actions/sessionActions";
import { Link } from "react-router-dom";

export const CompanyGreeting = () => {
  const user = useSelector(
    ({ session, entities }) => entities.companies[session.id]
  );
  const dispatch = useDispatch();

  if (user) {
    return (
      <div>
        <h1>Hello {user.email}</h1>
        <button onClick={() => dispatch(signOut())}>Sign Out</button>
      </div>
    );
  } else {
    return (
      <div>
        <Link to="/signin-worker">Sign In Worker</Link>
        <Link to="/signin-company">Sign In Company</Link>
        <Link to="/signup">Sign Up</Link>
      </div>
    );
  }
};

export default CompanyGreeting;
