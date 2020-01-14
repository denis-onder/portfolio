import React from "react";
import { Link } from "react-router-dom";
import "../scss/home.scss";
import setCurrentlyActiveIcon from "../events/setCurrentlyActiveIcon";
import setTitle from "../events/setTitle";

export default function Home() {
  setTitle("home");
  return (
    <div id="home">
      <h1 className="home_name">
        denis <span>onder</span>
      </h1>
      <div className="home_text">
        <p>I'm a full-stack web developer from Bosnia and Herzegovina.</p>
        <p>Currently working within the MERN stack.</p>
      </div>
      <Link
        className="home_link"
        to="/contact"
        onClick={() => setCurrentlyActiveIcon("/contact")}
      >
        contact me
      </Link>
    </div>
  );
}
