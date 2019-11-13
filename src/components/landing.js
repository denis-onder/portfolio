import React, { Component } from "react";
import setNavUnderline from "../utils/setNavUnderline";

export default class Landing extends Component {
  componentDidMount() {
    setNavUnderline();
  }
  render() {
    return (
      <div id="hero">
        <h1 className="hero_name">denis</h1>
        <h1 className="hero_name--red">onder</h1>
        <div className="hero_text">
          <p>I'm a full-stack web developer from Bosnia and Herzegovina.</p>
          <p>Currently working within the MERN stack.</p>
        </div>
        <div className="hero_link" id="learnMore">
          <a href="/about">
            <p>learn more</p>
            <i className="fas fa-arrow-right"></i>
          </a>
        </div>
        <div className="hero_social">
          <ul>
            <li>
              <a
                href="https://github.com/denis-onder"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-github-square fa-2x"></i>github
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/dennis-onder/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-linkedin fa-2x"></i>linkedin
              </a>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}
