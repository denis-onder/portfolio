import animateBars from "./animateBars";

function handleAnimation() {
  const root = document.getElementById("root_wrapper");
  const loader = document.getElementById("animation_loader");
  root.style.opacity = 0;
  loader.style.transform = "translateX(0)";
  loader.lastChild.firstChild.classList.add("show");
  setTimeout(() => {
    root.style.opacity = 1;
    loader.style.transform = "translateX(100%)";
    loader.lastChild.firstChild.classList.remove("show");
  }, 2000);
}

export default (path = false) => {
  const icons = Array.from(
    document.getElementsByClassName("navigation_icons_icon--link")
  );
  const currentPath = path ? path : window.location.pathname;
  const currentlyActive = document.getElementById(currentPath);
  // Early return if the class is already active
  if (currentlyActive.classList.contains("active")) return;
  // Remove active class from all icons
  icons.forEach(icon => icon.classList.remove("active"));
  // Add active class to currently active icon
  currentlyActive.classList.add("active");
  // Close modal if open
  document
    .getElementById("navigation_modal")
    .classList.remove("navigation_modal--open");
  if (path) handleAnimation();
  // Disable vertical navigation spans
  const spans = document.getElementById("vertical_navigation").children;
  spans[1].style.backgroundColor = currentPath === "/" ? "gray" : "red";
  spans[0].style.backgroundColor = currentPath === "/contact" ? "gray" : "red";
  // If the current path's /about, run the bars animation
  if (currentPath === "/about") {
    setTimeout(() => {
      animateBars();
    }, 2000); // 2 seconds is the amount of time it takes for the loader to reset
  }
};
