import React from "react";
import Work from "./layout/Work";
import "../scss/portfolio.scss";

export default function Portfolio() {
  return (
    // FIXME Remove hardcoded test components
    <div id="portfolio">
      <Work
        img="http://www.jennybeaumont.com/wp-content/uploads/2015/03/placeholder.gif"
        sourceCode="https://github.com/denis-onder/portfolio"
        name="Test 1"
        key="1"
      />
      <Work
        img="http://www.jennybeaumont.com/wp-content/uploads/2015/03/placeholder.gif"
        sourceCode="https://github.com/denis-onder/portfolio"
        link="https://denisonder.xyz/"
        name="Test 2"
        key="2"
      />
      <Work
        img="http://www.jennybeaumont.com/wp-content/uploads/2015/03/placeholder.gif"
        sourceCode="https://github.com/denis-onder/portfolio"
        name="Test 3"
        key="3"
      />
      <Work
        img="http://www.jennybeaumont.com/wp-content/uploads/2015/03/placeholder.gif"
        sourceCode="https://github.com/denis-onder/portfolio"
        link="https://denisonder.xyz/"
        name="Test 4"
        key="4"
      />
    </div>
  );
}
