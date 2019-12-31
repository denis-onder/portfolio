export default () => {
  const info = document.getElementById("info");
  // Revealing function
  function reveal() {
    // Remove the class, set the opacity back to default and then reveal the box by adding the 'reveal' class
    info.classList.remove("reveal");
    info.style.opacity = "1";
    info.classList.add("reveal");
    setTimeout(close, 3000);
  }
  // Closing function
  function close() {
    info.style.opacity = "0";
  }
  // Code goes here
  if (info) reveal();
};
