export default () => {
  const links = Array.from(
    document.getElementsByClassName("navigation_icons_icon--link")
  );
  links.forEach(link =>
    link.addEventListener("click", () => console.log(link))
  );
};
