import React from "react";

export default function nav() {
  return (
    <nav id="nav">
      <div className="nav_logo" id="navLogo">
        <a href="./">
          <p>
            d<span>o</span>
          </p>
        </a>
      </div>
      <ul className="nav_links">
        <li>
          <a href="/" className="nav_link">
            home
          </a>
        </li>
        <li>
          <a href="/about" className="nav_link">
            about me
          </a>
        </li>
        <li>
          <a href="/projects" className="nav_link">
            projects
          </a>
        </li>
        <li>
          <a href="/contact" className="nav_link">
            contact
          </a>
        </li>
      </ul>
    </nav>
  );
}
