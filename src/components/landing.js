import React from "react";

export default function landing() {
  return (
    <div id="hero">
      <h1 class="hero_name">denis</h1>
      <h1 class="hero_name--red">onder</h1>
      <div class="hero_text">
        <p>I'm a full-stack web developer from Bosnia and Herzegovina.</p>
        <p>Currently working within the MERN stack.</p>
      </div>
      <div class="hero_link" id="learnMore">
        <a href="./about.html">
          <p>learn more</p>
          <i class="fas fa-arrow-right"></i>
        </a>
      </div>
      <div class="hero_social">
        <ul>
          <li>
            <a
              href="https://github.com/denis-onder"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i class="fab fa-github-square fa-2x"></i>github
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/dennis-onder/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i class="fab fa-linkedin fa-2x"></i>linkedin
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
