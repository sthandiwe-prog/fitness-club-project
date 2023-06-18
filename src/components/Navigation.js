import React from "react";
import Logo from "../assets/logo.png";
import "./Navigation.css";

export default function Navigation() {
  return (
    <div className="Navigation">
      <div className="left-header-content">
        <img src={Logo} className="logo" alt="website logo" />
      </div>

      <ul>
        <li>Home</li>
        <li>Programs</li>
        <li>Why us</li>
        <li>Plans</li>
        <li>Testimonials</li>
      </ul>
    </div>
  );
}
