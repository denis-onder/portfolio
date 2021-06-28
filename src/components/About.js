import React, { Fragment } from "react";
import setTitle from "../events/setTitle";
import "../scss/about.scss";
import CodeBars from "./layout/CodeBars";
import setCurrentlyActiveIcon from "../events/setCurrentlyActiveIcon";
import { Link } from "react-router-dom";

export default function About() {
  setTitle("about");
  return (
    <Fragment>
      <div id="about" className="margins">
        <h1 className="about_header">
          about <span>me</span>
        </h1>
        <div className="about_text">
          <p className="about_text_paragraph">
            Hi, my name is <span>Denis Onder</span>, and I am a software developer!
          </p>
          <p className="about_text_paragraph">
            I’m passionate about building software, and I am always striving to
            go above and beyond to ensure I get the job done.
          </p>
          <p className="about_text_paragraph">
            I’ve been programming for over five years now. It started out as a hobby that turned into a career. I love it because
            it gives me the chance to build pieces of software that might have
            an impact on people's lives!
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
          <p className="about_text_paragraph">
            You can also email me at{" "}
            <a
              href="mailto:denis_onder@protonmail.com"
              className="about_text_paragraph_link"
            >
              denis_onder@protonmail.com
            </a>
            .
          </p>
          <p className="about_text_paragraph">
            Or better yet, you can email me directly using the{" "}
            <Link to="/contact">
              <span
                style={{ cursor: "pointer" }}
                onClick={() => setCurrentlyActiveIcon("/contact")}
              >
                contact
              </span>{" "}
            </Link>
            form!
          </p>
          <p className="about_text_paragraph">
            Looking forward to talking with you!
          </p>
        </div>
      </div>
      <CodeBars />
    </Fragment>
  );
}
