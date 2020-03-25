import React, { Component } from "react";
import { Link } from "react-router-dom";

const Greeting = ({ user, logout }) => {
  if (user) {
    return <h1>Hello {user.email}</h1>;
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
