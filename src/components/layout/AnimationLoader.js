import React from "react";
import "../../scss/animated_loader.scss";

export default function AnimationLoader() {
  return (
    <div id="animation_loader">
      <p>
        d<span>o</span>
      </p>
      <span className="outer_bar">
        <div className="inner_bar"></div>
      </span>
    </div>
  );
}
