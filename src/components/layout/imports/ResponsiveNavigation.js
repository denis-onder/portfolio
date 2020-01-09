import React from "react";

function openModal() {
  document
    .getElementById("navigation_modal")
    .classList.add("navigation_modal--open");
}

export default function ResponsiveNavigation() {
  return (
    <nav id="navigation_responsive">
      {/* Logo */}
      <div className="navigation_logo">
        <p className="temp_logo">
          d<span>o</span>
        </p>
      </div>
      {/* Icon */}
      <ul className="navigation_icons">
        <li className="navigation_icons_icon" onClick={openModal}>
          <i className="fas fa-bars"></i>
        </li>
      </ul>
    </nav>
  );
}
