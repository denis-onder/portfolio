import React from "react";
import "../../scss/work.scss";

export default function Work({ img, name, desc, sourceCode, link }) {
  return (
    <div
      className="work"
      style={{
        background: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${img}) no-repeat center`
      }}
    >
      <div className="work_overlay">
        <div className="work_overlay_wrapper">
          <p className="work_text">{name}</p>
          {desc ? <p className="work_text">{desc}</p> : false}
          <div className="work_links">
            <a href={sourceCode} className="work_link">
              Source Code
            </a>
            {link ? (
              <a href={link} className="work_link">
                Live Link
              </a>
            ) : (
              false
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
