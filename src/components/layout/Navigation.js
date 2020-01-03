import React from "react";
import { Link } from "react-router-dom";
import setCurrentlyActiveIcon from "../../events/setCurrentlyActiveIcon";
import "../../scss/navigation.scss";

function getAttributeFromNavLink(target, attribute) {
  const { tagName: tag } = target;
  // If the event target's the actual icon, select the parent list element for link extraction
  return tag === "LI"
    ? target.getAttribute(attribute)
    : target.parentElement.getAttribute(attribute);
}

function redirect({ target }) {
  const link = getAttributeFromNavLink(target, "data-link");
  window.open(link);
}

export default function Navigation() {
  return (
    <nav id="navigation">
      {/* Logo */}
      <div className="navigation_logo">
        <p className="temp_logo">
          d<span>o</span>
        </p>
      </div>
      {/* Navigation Icons */}
      <ul className="navigation_icons">
        <Link to="/">
          <li
            id="/"
            className="navigation_icons_icon navigation_icons_icon--link"
            onClick={() => setCurrentlyActiveIcon("/")}
          >
            <i className="fas fa-home"></i>
          </li>
        </Link>
        <Link to="/about">
          <li
            id="/about"
            className="navigation_icons_icon navigation_icons_icon--link"
            onClick={() => setCurrentlyActiveIcon("/about")}
          >
            <i className="fas fa-user"></i>
          </li>
        </Link>
        <Link to="/portfolio">
          <li
            id="/portfolio"
            className="navigation_icons_icon navigation_icons_icon--link"
            onClick={() => setCurrentlyActiveIcon("/portfolio")}
          >
            <i className="fas fa-laptop-code"></i>
          </li>
        </Link>
        <Link to="/contact">
          <li
            id="/contact"
            className="navigation_icons_icon navigation_icons_icon--link"
            onClick={() => setCurrentlyActiveIcon("/contact")}
          >
            <i className="fas fa-envelope"></i>
          </li>
        </Link>
      </ul>
      {/* Social Media Icons */}
      <ul className="navigation_icons">
        <li
          className="navigation_icons_icon navigation_icons_icon--github"
          data-link="https://github.com/denis-onder"
          data-text="GitHub"
          onClick={redirect}
        >
          <i className="fab fa-github"></i>
        </li>
        <li
          className="navigation_icons_icon navigation_icons_icon--linkedin"
          onClick={redirect}
          data-link="https://linkedin.com/in/dennis-onder"
        >
          <i className="fab fa-linkedin"></i>
        </li>
        <li
          className="navigation_icons_icon navigation_icons_icon--reddit"
          onClick={redirect}
          data-link="https://reddit.com/u/ShadowpathHD"
        >
          <i className="fab fa-reddit"></i>
        </li>
      </ul>
    </nav>
  );
}
