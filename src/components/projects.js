import React, { Component } from "react";
import setNavUnderline from "../utils/setNavUnderline";

export default class Projects extends Component {
  componentDidMount() {
    setNavUnderline();
  }

  render() {
    return (
      <div id="portfolio">
        <h1>
          projects<span>:</span>
        </h1>
        <div className="project_output">
          <div className="project_window">
            <i className="fas fa-chevron-left fa-2x"></i>
            <div id="project_window_output">
              <img
                src="https://via.placeholder.com/400x200.png"
                alt="img"
                id="project_image"
                className="project_image"
              />
            </div>
            <i className="fas fa-chevron-right fa-2x"></i>
          </div>
          <div className="project_output_text">
            <h4 id="project_name" className="project_name">
              Test Project
            </h4>
            <p id="project_description" className="project_description">
              A description for the test project
            </p>
            <div className="project_tags">
              <span className="project_tag">Node</span>
              <span className="project_tag">Express</span>
              <span className="project_tag">React</span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
