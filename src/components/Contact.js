import React, { useState } from "react";
import "../scss/contact.scss";

// eslint-disable-next-line
const emailRegex = /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/;

const isInputInvalid = ({ name, email, message }) => {
  const errors = {};
  if (!name || name.length === 0) errors.invalidName = "Name is not valid.";
  if (!email || email.length === 0 || !emailRegex.test(email))
    errors.invalidEmail = "Email is not valid.";
  if (!message || message.length === 0)
    errors.invalidMessage = "Message is not valid.";
  if (Object.keys(errors).length > 0) return errors;
  return false;
};

function setOutput(errors = false) {
  let msg = "";
  const output = document.getElementById("form_output");
  if (errors) {
    Object.keys(errors).map(v => (msg += `<p>${errors[v]}</p>`));
  } else {
    msg = "Email sent successfully!";
  }
  output.innerHTML = msg;
  setTimeout(() => (output.innerHTML = ""), 3000);
}

export default function Contact() {
  // State
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  // Input handler
  const handleInput = ({ keyCode, target }) => {
    const { name, value } = target;
    if (keyCode !== 13) {
      // Rule set
      if (name === "name") setName(value);
      if (name === "email") setEmail(value);
      if (name === "message") setMessage(value);
    }
  };
  // Send Email
  function sendEmail(e) {
    e.preventDefault();
    // Check if the input is valid
    const inputErrors = isInputInvalid({ name, email, message });
    if (inputErrors) return setOutput(inputErrors);
    // Send email
    const url = "https://powerful-anchorage-14818.herokuapp.com/mail";
    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        sender: email,
        name,
        text: message
      })
    }).then(() => setOutput());
    // Clear inputs
    [setName, setEmail, setMessage].forEach(f => f(""));
  }
  return (
    <div id="contact">
      <div className="contact_form">
        <h1>contact</h1>
        <form onSubmit={sendEmail}>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="name: "
            onKeyDown={handleInput}
          />
          <input
            type="text"
            name="email"
            id="email"
            placeholder="email: "
            onKeyDown={handleInput}
          />
          <textarea
            rows="15"
            name="message"
            id="message"
            placeholder="message: "
            onKeyDown={handleInput}
          ></textarea>
          <button type="submit">send</button>
        </form>
      </div>
      <div id="form_output"></div>
    </div>
  );
}
