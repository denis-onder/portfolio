import React from "react";
import ReactDOM from "react-dom";
import "./scss/App.scss";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import hideLoader from "./events/hideLoader";
import revealAndCloseInfo from "./events/revealAndCloseInfo";
import setCurrentlyActiveIcon from "./events/setCurrentlyActiveIcon";

// Window listener
window.onload = () => {
  hideLoader();
  revealAndCloseInfo();
  setCurrentlyActiveIcon();
};

ReactDOM.render(<App />, document.getElementById("root"));

serviceWorker.unregister();
