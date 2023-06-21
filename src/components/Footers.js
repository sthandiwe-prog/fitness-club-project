import React from "react";
import "./Footers.css";
import logo from "../assets/logo.png";

export default function Footers() {
  return (
    <div className="Footers">
      <hr />
      <div className="footer-details">
        <i class="fa-brands fa-github"></i>
        <i class="fa-brands fa-instagram"></i>
        <i class="fa-brands fa-linkedin"></i>
      </div>
      <div className="logo">
        {" "}
        <img src={logo} width={200} alt="website logo" />
      </div>
    </div>
  );
}
