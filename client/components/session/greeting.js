import React, { Component } from "react";
import { useDispatch, useSelector } from "react-redux";
import { signOut } from "../../actions/sessionActions";
import { Link } from "react-router-dom";

export const Greeting = () => {
  // if we have a user logged in pass that user to our selector
  // regardless is they are company or worker
  const user = useSelector(({ session, entities }) =>
    entities.workers[session.id]
      ? entities.workers[session.id]
      : entities.companies[session.id]
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
        <div className="company-auth-links">
          <h2>For Companies</h2>
          <Link to="/signin-company">Sign In</Link>
          <Link to="/signup-company">Sign Up</Link>
        </div>
        <div className="worker-auth-links">
          <h2>For Workers</h2>
          <Link to="/signin-worker">Sign In</Link>
          <Link to="/signup-worker">Sign Up</Link>
        </div>
      </div>
    );
  }
};

export default Greeting;
