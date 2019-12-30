import React from "react";
import { Link } from "react-router-dom";
import "../scss/home.scss";

export default function Home() {
  return (
    <div id="home">
      <h1 className="home_name">denis</h1>
      <h1 className="home_name--red">onder</h1>
      <div className="home_text">
        <p>I'm a full-stack web developer from Bosnia and Herzegovina.</p>
        <p>Currently working within the MERN stack.</p>
      </div>
      <div className="home_link" id="learnMore">
        <Link to="/contact">contact me</Link>
      </div>
    </div>
  );
}
