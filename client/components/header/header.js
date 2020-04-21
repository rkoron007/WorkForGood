import React from "react";
import Greeting from "./greeting";

const Header = () => (
  <div className="header">
    <span className="logo"></span>
    <h2 className="head-logo">Work For Good</h2>
    <Greeting />
  </div>
);

export default Header;
