import React from "react";
import Navigation from "./Navigation";
import "./Hero.css";
import Heart from "../assets/heart.png";
import Heros from "../assets/hero_image.png";
import Hero_back from "../assets/hero_image_back.png";

export default function Hero() {
  return (
    <div className="Hero" id="home">
      <div className="left-header-content">
        <Navigation />
        <div className="moto">
          <div></div>
          <span>the best fitness club in the town</span>
        </div>
        <div className="header-text">
          <div>
            <span className="stroke-text">shape </span>
            <span>your</span>
          </div>
          <div>
            <span>ideal </span>
            <span>body</span>
          </div>
          <div>
            <span>
              In here we will help you to shape and build your ideal body and
              live up your life to fullest
            </span>
          </div>
        </div>
        <div className="figures">
          <div>
            {" "}
            <span>+ 140</span>
            <span>expert coaches</span>
          </div>
          <div>
            {" "}
            <span>+ 978</span>
            <span>members joined</span>
          </div>
          <div>
            {" "}
            <span>+ 50</span>
            <span>fitness programs</span>
          </div>
        </div>
        <div className="header-buttons">
          <button>Get Started</button>
          <button>Learn More</button>
        </div>
      </div>
      <div className="right-header-content">
        <button className="header-button">Join Now</button>
        <div className="heart-rate">
          <div>
            {" "}
            <img src={Heart} alt="heart" />
          </div>
          <div>
            <span>heart rate</span>
            <span>116 bpm</span>
          </div>
        </div>
        <div className="gym-logo">
          <img src={Heros} alt="gymic" />
          <img src={Hero_back} alt="web design" />
          <div className="calories-content">
            <div>
              <span>
                calories <br /> burned
              </span>
              <span>
                {" "}
                <i class="fa-solid fa-chart-simple"></i> 220 kcal
              </span>
            </div>
          </div>
        </div>
        <div className="the-best-ad">the best fitness club!</div>
      </div>
    </div>
  );
}
