function getAttributeFromNavLink(target, attribute) {
  const { tagName: tag } = target;
  // If the event target's the actual icon, select the parent list element for link extraction
  return tag === "LI"
    ? target.getAttribute(attribute)
    : target.parentElement.getAttribute(attribute);
}

export default function({ target }) {
  const link = getAttributeFromNavLink(target, "data-link");
  window.open(link);
}
