const navTagUnderline = () => {
  const tags = document.getElementsByClassName('nav_link');
  // Split url string
  const urlString = window.location.href.split('/');
  // Get the HTML file name
  const fileName = `/${urlString[urlString.length - 1]}`;
  // Loop through tags
  for (let i = 0; i < tags.length; i++) {
    let currentTagValue = tags[i].getAttribute('href').replace('.', '');
    if (currentTagValue === fileName) {
      tags[i].classList.add('nav_link--active');
      return;
    }
  }
};

navTagUnderline();
