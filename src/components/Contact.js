import React, { useState } from "react";
import "../scss/contact.scss";

export default function Contact() {
  const [email, setEmail] = useState("test");
  return (
    <div id="contact">
      <div className="contact_form">
        <h1>contact</h1>
        <form onSubmit={e => console.log(e)}>
          <input type="text" placeholder="name: " />
          <input type="text" placeholder="email: " />
          <textarea rows="15" placeholder="message: "></textarea>
          <button
            type="submit"
            onClick={e => {
              e.preventDefault();
              console.log(email);
            }}
          >
            send
          </button>
        </form>
      </div>
    </div>
  );
}
