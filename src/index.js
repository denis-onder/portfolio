import React from "react";
import ReactDOM from "react-dom";
import "./scss/App.scss";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import revealAndCloseInfo from "./events/revealAndCloseInfo";
import hideLoader from "./events/hideLoader";

// Window listener
window.onload = () => {
  hideLoader();
  revealAndCloseInfo();
};

ReactDOM.render(<App />, document.getElementById("root"));

serviceWorker.unregister();
