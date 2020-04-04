import React, { Component } from "react";
import { useDispatch, useSelector } from "react-redux";
import { signOut } from "../../../actions/sessionActions";
import { Link } from "react-router-dom";

export const Greeting = () => {
  const user = useSelector(
    ({ session, entities }) => entities.workers[session.id]
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
        <Link to="/signin">Sign In</Link>
        <Link to="/signup">Sign Up</Link>
      </div>
    );
  }
};

export default Greeting;
