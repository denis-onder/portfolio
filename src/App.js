import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Landing from "./components/landing";
import About from "./components/about";
import Projects from "./components/projects";
import Contact from "./components/contact";

export default function App() {
  return (
    <Router>
      <nav id="nav">
        <div className="nav_logo" id="navLogo">
          <Link to="/">
            <p>
              d<span>o</span>
            </p>
          </Link>
        </div>
        <ul className="nav_links">
          <li className="nav_links_link" data-endpoint="/">
            <Link to="/" className="nav_link">
              home
            </Link>
          </li>
          <li className="nav_links_link" data-endpoint="/about">
            <Link to="/about" className="nav_link">
              about me
            </Link>
          </li>
          <li className="nav_links_link" data-endpoint="/projects">
            <Link to="/projects" className="nav_link">
              projects
            </Link>
          </li>
          <li className="nav_links_link" data-endpoint="/contact">
            <Link to="/contact" className="nav_link">
              contact
            </Link>
          </li>
        </ul>
      </nav>
      <Route exact path="/" component={Landing} />
      <Route exact path="/about" component={About} />
      <Route exact path="/projects" component={Projects} />
      <Route exact path="/contact" component={Contact} />
    </Router>
  );
}
