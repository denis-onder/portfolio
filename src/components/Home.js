import React from "react";
import { Link } from "react-router-dom";
import "../scss/home.scss";

export default function Home() {
  return (
    <div id="home">
      <div id="info">
        Please note that this project is still <b>WIP</b>. Thanks!
      </div>
      <h1 className="home_name">
        denis <span>onder</span>
      </h1>
      <div className="home_text">
        <p>I'm a full-stack web developer from Bosnia and Herzegovina.</p>
        <p>Currently working within the MERN stack.</p>
      </div>
      <Link className="home_link" to="/contact">
        contact me
      </Link>
    </div>
  );
}
