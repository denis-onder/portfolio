import React from "react";
import "../scss/about.scss";

export default function About() {
  return (
    <div id="about" className="margins">
      <h1 className="about_header">
        about <span>me</span>
      </h1>
      <div className="about_text">
        <p className="about_text_paragraph">Hello there!</p>
        <p className="about_text_paragraph">
          My name is <span>Denis Onder</span>, and I am a student and an
          aspiring web developer!
        </p>
        <p className="about_text_paragraph">
          Currently working within the MERN stack, and looking to expand my
          knowledge even further.
        </p>
        <p className="about_text_paragraph">
          Enrolled in an online software engineering bootcamp, and always
          looking for new job opportunities!
        </p>
        <p className="about_text_paragraph">
          I am available on{" "}
          <a
            href="https://github.com/denis-onder"
            className="about_text_paragraph_link"
          >
            GitHub
          </a>{" "}
          and{" "}
          <a
            href="https://linkedin.com/in/dennis-onder"
            className="about_text_paragraph_link"
          >
            LinkedIn
          </a>{" "}
          and I would always love to talk about your projects!
        </p>
      </div>
    </div>
  );
}
