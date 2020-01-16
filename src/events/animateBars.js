function generateLinesAndBars() {
  const container = document.getElementById("container");
  // Reset the container
  container.innerHTML = "";
  container.style.display = "flex";
  // Generate an arbitraty amount of lines
  const numberOfLines = Math.floor(Math.random() * (70 - 25 + 1)) + 25;
  for (let i = 0; i < numberOfLines; i++) {
    const line = document.createElement("div");
    line.classList.add("container_line");
    // Generate a random amount of bars
    const numberOfBars = Math.floor(Math.random() * 5);
    for (let j = 0; j < numberOfBars; j++) {
      const bar = document.createElement("div");
      bar.classList.add("bar");
      const innerBar = document.createElement("div");
      innerBar.classList.add("inner_bar");
      bar.appendChild(innerBar);
      line.appendChild(bar);
    }
    container.appendChild(line);
  }
}

export default async () => {
  await generateLinesAndBars();
  const containerLine = document.querySelectorAll(".container_line");

  function animateBar({ firstChild }) {
    firstChild.classList.add("show");
    firstChild.style.backgroundColor =
      Math.floor(Math.random() * 100) < 75 && "#ccc";
  }

  // Get children of a line
  function handleChildren(line) {
    const bars = Array.from(line.children);
    if (bars.length === 1) {
      bars[0].style.width = "100%";
      bars[0].style.backgroundColor = "#ccc !important";
    } else {
      // Generate random numbers to represent the width of each bar.
      const numbers = bars.map(_ => Math.random() * (100 / bars.length));
      bars.forEach((bar, i) => (bar.style.width = `${numbers[i]}%`));
    }
    bars.forEach(animateBar);
  }
  containerLine.forEach(handleChildren);
};
