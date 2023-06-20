import React from "react";
import { plansData } from "../data/plansData";
import whiteTick from "../assets/whiteTick.png";
import rightArrow from "../assets/rightArrow.png";
import "./Plans.css";
export default function Plans() {
  return (
    <div className="Plans">
      <div className="heading">
        <span className="stroke-text"> ready to start </span>
        <span> your journey now </span>
        <span className="stroke-text"> with us </span>
      </div>
      <div className="plans-details">
        {plansData.map((plan) => (
          <div className="plans-content">
            <div>{plan.icon}</div>
            <div>
              <span> {plan.name} </span>
              <span> ${plan.price} </span>
              <span className="features">
                {" "}
                <img src={whiteTick} className="tick" alt="tick" />
                {plan.features[0]}{" "}
              </span>
              <span className="bigger-plan-set">
                <img src={whiteTick} className="tick" alt="tick" />
                {plan.features[1]}
              </span>
              <span>
                <img src={whiteTick} className="tick" alt="tick" />
                {plan.features[2]}
              </span>
              <span>
                See more benefits{" "}
                <img src={rightArrow} width="11px" alt="right arrow" />{" "}
              </span>
              <span>
                {" "}
                <button className="btn btn-default w-100 ">Join now</button>
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
