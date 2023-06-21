import React from "react";
import image1 from "../assets/image1.png";
import image2 from "../assets/image2.png";
import image3 from "../assets/image3.png";
import image4 from "../assets/image4.png";
import tick from "../assets/tick.png";
import nike from "../assets/nike.png";
import nb from "../assets/nb.png";
import adidas from "../assets/adidas.png";
import "./Reasons.css";

export default function Reasons() {
  return (
    <div className="Reasons" id="reasons">
      <div className="left-r">
        {" "}
        <img src={image1} className="image1" alt="gymic-image1" />{" "}
        <img src={image2} className="image2" alt="gymic-image2" />{" "}
        <img src={image3} className="image3" alt="gymic-image3" />{" "}
        <img src={image4} className="image4" alt="gymic-image4" />
      </div>
      <div className="right-r">
        <div className="details">
          <span className="heading">some resons</span>
          <div>
            <span className="stroke-text">why</span> <span> choose us?</span>
          </div>
          <div>
            <span>
              {" "}
              <img src={tick} className="tick" alt="tick" />{" "}
              <p>OVER 140+ EXPERT COACHS</p>
            </span>
            <span>
              <img src={tick} className="tick" alt="tick" />{" "}
              <p>TRAIN SMARTER AND FASTER THAN BEFORE</p>
            </span>
            <span>
              <img src={tick} className="tick" alt="tick" />{" "}
              <p>1 FREE PROGRAM FOR NEW MEMBER</p>
            </span>
            <span>
              <img src={tick} className="tick" alt="tick" />
              <p> RELIABLE PARTNERS</p>
            </span>
          </div>
          <div>our partners</div>
          <div>
            <span>
              {" "}
              <img src={nb} alt="newbalance logo" />{" "}
            </span>
            <span>
              <img src={adidas} alt="adidas logo" />
            </span>
            <span>
              <img src={nike} alt="nike logo" />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
