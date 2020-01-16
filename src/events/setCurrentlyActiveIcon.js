import animateBars from "./animateBars";

function handleAnimation() {
  const loader = document.getElementById("animation_loader");
  const root = document.getElementById("root_wrapper");
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
  const currentlyActive = document.getElementById(
    path ? path : window.location.pathname
  );
  // Remove active class from all icons
  icons.forEach(icon => icon.classList.remove("active"));
  // Add active class to currently active icon
  currentlyActive.classList.add("active");
  // Close modal if open
  document
    .getElementById("navigation_modal")
    .classList.remove("navigation_modal--open");
  handleAnimation();
  // If the current path's /about, run the bars animation
  if (path === "/about") {
    setTimeout(() => {
      animateBars();
    }, 2000);
  }
};
