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
};
