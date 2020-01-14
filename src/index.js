import React from "react";
import ReactDOM from "react-dom";
import "./scss/App.scss";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import hideLoader from "./events/hideLoader";
import revealAndCloseInfo from "./events/revealAndCloseInfo";

// Window listener
window.onload = () => {
  hideLoader();
  revealAndCloseInfo();
  document.getElementById(window.location.pathname).classList.add("active");
};

ReactDOM.render(<App />, document.getElementById("root"));

serviceWorker.unregister();
