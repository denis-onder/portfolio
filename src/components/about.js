import React from "react";

export default function about() {
  return (
    <div id="about">
      <div className="about_title">
        hello<span className="red">!</span>
      </div>
      <div className="about_text">
        <p className="about_text--line">
          My name is Denis Onder, and I am a student / full-stack web developer
          currently located in Bosnia and Herzegovina.
        </p>
        <p className="about_text--line">
          I work almost exclusively with JavaScript technologies, both in the
          front and the back.
        </p>
        <p className="about_text--line">
          Mostly working with Node, Express, MongoDB and Postgres in the
          back-end, and React in the front-end.
        </p>
        <p className="about_text--line">
          If you'd like to get in touch, you can send me an email at
          <a rel="noopener noreferrer" href="mailto:denis_onder@protonmail.com">
            denis_onder@protonmail.com
          </a>
          if you want to talk about business, code or anything tech!.
        </p>
        <p className="about_text--line">
          If you are interested in checking out what I am currently working on,
          you can check out my
          <a
            rel="noopener noreferrer"
            href="https://github.com/denis-onder"
            target="_blank"
          >
            GitHub
          </a>
          profile!
        </p>
        <div className="about_text--outro">
          <p className="about_text--outro_line">have a beautiful day!</p>
          <p className="about_text--outro_line">
            <span className="red">-</span> denis
          </p>
        </div>
      </div>
    </div>
  );
}
