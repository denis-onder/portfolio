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

// FIXME Work around this solution. This is in place so Netlify can redirect the user back to home if it does not render out the correct route.
document.onreadystatechange = () => {
  if (
    // eslint-disable-next-line
    process.env.NODE_ENV !== "development" &&
    window.location.pathname !== "/"
  )
    window.location.href = "/";
};

ReactDOM.render(<App />, document.getElementById("root"));

serviceWorker.unregister();
