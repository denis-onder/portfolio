export default () => {
  const links = Array.from(document.getElementsByClassName("nav_links_link"));
  // Remove existing underlines
  links.forEach(l => l.firstChild.classList.remove("nav_link--active"));
  // Add classlist to underline corresponding to the current path
  links.forEach(l => {
    if (l.getAttribute("data-endpoint") === window.location.pathname)
      l.firstChild.classList.add("nav_link--active");
  });
};
