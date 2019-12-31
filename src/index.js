import React from "react";
import ReactDOM from "react-dom";
import "./scss/App.scss";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import revealAndCloseInfo from "./events/revealAndCloseInfo";

// Window listener
window.onload = () => {
  revealAndCloseInfo();
};

ReactDOM.render(<App />, document.getElementById("root"));

serviceWorker.unregister();
