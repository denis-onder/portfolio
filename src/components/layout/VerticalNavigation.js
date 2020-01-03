import React from "react";
import setCurrentlyActiveIcon from "../../events/setCurrentlyActiveIcon";
import { useHistory } from "react-router-dom";
import "../../scss/vertical_navigation.scss";

const paths = ["/", "/about", "/portfolio", "/contact"];
let currentPath = paths.indexOf(window.location.pathname);

function redirectToView(history, direction) {
  currentPath = paths.indexOf(window.location.pathname);
  if (direction === "next" && currentPath < paths.length - 1) currentPath += 1;
  if (direction === "prev" && currentPath > 0) currentPath -= 1;
  setCurrentlyActiveIcon(paths[currentPath]);
  history.push(paths[currentPath]);
}

export default function VerticalNavigation() {
  let history = useHistory();
  return (
    <div id="vertical_navigation">
      <span onClick={() => redirectToView(history, "next")}>
        <i className="fas fa-angle-double-down"></i>
      </span>
      <span onClick={() => redirectToView(history, "prev")}>
        <i className="fas fa-angle-double-up"></i>
      </span>
    </div>
  );
}
