import React, { useState } from "react";

import "./Testimonials.css";
import { testimonialsData } from "../data/testimonialsData";
export default function Testimonials() {
  const [selected, setSelected] = useState(0);
  const testimonialLength = testimonialsData.length;
  function leftArrow() {
    if (selected === 0) {
      setSelected(testimonialLength - 1);
    } else {
      setSelected(function previous(prev) {
        return prev - 1;
      });
    }
  }

  function rightArrow() {
    if (selected === testimonialLength - 1) {
      setSelected(0);
    } else {
      setSelected(function foward(prev) {
        return prev + 1;
      });
    }
  }
  return (
    <div className="Testimonials">
      <div className="left-t">
        <div className="testimonials-content">
          <span>testimonials</span>
          <span className="stroke-text">what they </span>
          <span>say about us</span>
          <span> {testimonialsData[selected].review}</span>
          <span className="mt-3">
            {testimonialsData[selected].name}{" "}
            <span className="status">
              {" "}
              - {testimonialsData[selected].status}
            </span>
          </span>
        </div>
      </div>
      <div className="right-t">
        <img src={testimonialsData[selected].image} alt="testimonial" />
        <div className="arrows">
          <div></div>
          <div></div>
          <span>
            {" "}
            <i className="fa-solid fa-arrow-left" onClick={leftArrow}></i>
          </span>
          <span>
            <i className="fa-solid fa-arrow-right" onClick={rightArrow}></i>
          </span>
        </div>
      </div>
    </div>
  );
}
