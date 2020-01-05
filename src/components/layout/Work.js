import React from "react";

export default function Work({ img, name, sourceCode, link }) {
  return (
    <div className="work" style={{ backgroundImage: `url(${img})` }}>
      <p className="work_name">{name}</p>
      <a href={sourceCode} className="work_link">
        Source Code
      </a>
      {link ? (
        <a href={link} className="work_link">
          Live Link
        </a>
      ) : (
        ""
      )}
    </div>
  );
}
