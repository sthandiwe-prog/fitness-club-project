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
        <li>
          <a href="#home">Home</a>
        </li>
        <li>
          <a href="#programs">Programs</a>
        </li>
        <li>
          {" "}
          <a href="#reasons">Why us</a>
        </li>
        <li>
          {" "}
          <a href="#plans">Plans</a>
        </li>
        <li>
          {" "}
          <a href="#testimonials">Testimonials</a>
        </li>
      </ul>
    </div>
  );
}
