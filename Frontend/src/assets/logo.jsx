import React from "react";
import "./Logo.css";
import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <Link to="/">
    <div className="logo-container">
      <span className="bracket">&lt;</span>
      <span className="text">SyntaxHub</span>
      <span className="slash">/</span>
      <span className="bracket">&gt;</span>
      <span className="cursor"></span>
    </div>
    </Link>
  );
};

export default Logo;
