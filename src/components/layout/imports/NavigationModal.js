import React from "react";
import redirect from "../../../helpers/redirect";
import setCurrentlyActiveIcon from "../../../events/setCurrentlyActiveIcon";
import { Link } from "react-router-dom";

function closeModal() {
  document
    .getElementById("navigation_modal")
    .classList.remove("navigation_modal--open");
}

export default function NavigationModal() {
  return (
    <div id="navigation_modal" className="navigation_modal">
      <i className="fas fa-times" id="close_modal" onClick={closeModal}></i>
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
        <hr />

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
      </ul>
    </div>
  );
}
