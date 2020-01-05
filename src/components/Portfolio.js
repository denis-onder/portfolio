import React from "react";
import Work from "./layout/Work";
import constants from "../constants";
import "../scss/portfolio.scss";

export default function Portfolio() {
  return (
    // FIXME Remove hardcoded test components
    <div id="portfolio">
      {constants.map(i => (
        <Work
          img={i.img}
          sourceCode={i.sourceCode}
          link={i.link}
          name={i.name}
          key={i.key}
          desc={i.desc}
        />
      ))}
    </div>
  );
}
