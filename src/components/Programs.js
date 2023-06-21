import React from "react";

import rightArrow from "../assets/rightArrow.png";
import { programsData } from "../data/programsData";
import "./Programs.css";
export default function Programs() {
  return (
    <div className="Programs" id="programs">
      <div className="programs-headings">
        <span className="stroke-text">explore</span>
        <span>programs</span>
        <span className="stroke-text">to shape you</span>
      </div>
      <div className="programs-content">
        {programsData.map((program) => (
          <div className="category">
            {program.image}
            <span className="program-heading">{program.heading}</span>
            <span>{program.details}</span>
            <div className="join-now">
              {" "}
              <span>Join now</span>
              <span>
                <img src={rightArrow} className="arrow" alt="right arrow" />
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
