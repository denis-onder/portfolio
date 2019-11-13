import React, { Component } from "react";
import setNavUnderline from "../utils/setNavUnderline";

export default class Contact extends Component {
  componentDidMount() {
    setNavUnderline();
  }
  render() {
    return <div id="contact"></div>;
  }
}
