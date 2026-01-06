import React from "react";
import "./Logo.css";

const Logo = () => {
  return (
    <div className="logo-container">
      <span className="bracket">&lt;</span>
      <span className="text">SyntaxHub</span>
      <span className="slash">/</span>
      <span className="bracket">&gt;</span>
      <span className="cursor"></span>
    </div>
  );
};

export default Logo;
