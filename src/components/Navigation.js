import React from "react";
import { useRef } from "react";
import Logo from "../assets/logo.png";
import "./Navigation.css";

export default function Navigation() {
  const activeButton = useRef();
  function handleToggle() {
    activeButton.current.classList.toggle("show");
  }

  return (
    <div className="Navigation">
      <div className="left-header-content">
        <img src={Logo} className="logo" alt="website logo" />
      </div>

      <ul ref={activeButton}>
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
      <span>
        <i class="fa-solid fa-bars" onClick={handleToggle}></i>
      </span>
    </div>
  );
}
