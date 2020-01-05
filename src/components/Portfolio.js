import React from "react";
import Work from "./layout/Work";
import constants from "../constants";
import "../scss/portfolio.scss";

export default function Portfolio() {
  return (
    // FIXME Remove hardcoded test components
    <div id="portfolio">
      <Work
        img={constants[0].img}
        sourceCode={constants[0].sourceCode}
        link={constants[0].link}
        name={constants[0].name}
        key={constants[0].key}
        desc={constants[0].desc}
      />
    </div>
  );
}
