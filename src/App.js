import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Landing from "./components/landing";
import About from "./components/about";
import Projects from "./components/projects";
import Contact from "./components/contact";
import Nav from "./components/layout/nav";

function App() {
  return (
    <React.Fragment>
      <Nav />
      <Router>
        <Route exact path="/" component={Landing} />
        <Route exact path="/about" component={About} />
        <Route exact path="/projects" component={Projects} />
        <Route exact path="/contact" component={Contact} />
      </Router>
    </React.Fragment>
  );
}

export default App;
