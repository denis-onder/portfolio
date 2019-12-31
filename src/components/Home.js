import React from "react";
import { Link } from "react-router-dom";
import "../scss/home.scss";

// Show and hide info tag
function revealAndCloseInfo() {
  const info = document.getElementById("info");
  // Revealing function
  function reveal() {
    // Remove the class, set the opacity back to default and then reveal the box by adding the 'reveal' class
    info.classList.remove("reveal");
    info.style.opacity = "1";
    info.classList.add("reveal");
    setTimeout(close, 3000);
  }
  // Closing function
  function close() {
    info.style.opacity = "0";
  }
  // Code goes here
  reveal();
}

window.onload = revealAndCloseInfo;

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
