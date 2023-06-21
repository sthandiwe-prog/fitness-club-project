import React from "react";
import "./Contact.css";

export default function Contact() {
  return (
    <div className="Contact">
      <div className="left-c">
        <span>
          <hr />
          <span className="stroke-text">ready to</span> level up{" "}
        </span>
        <span>
          your body <span className="stroke-text">with us?</span>{" "}
        </span>
      </div>
      <div className="right-c">
        <form>
          <input type="email" className="form" placeholder="Enter your email" />
          <button>Join now</button>
        </form>
      </div>
    </div>
  );
}
