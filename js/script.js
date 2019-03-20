const redirectToAbout = () => {
  window.location.href = '/about';
};

const navTagUnderline = () => {
  const tags = document.getElementsByClassName('nav_link');
  const urlLocation = `/${window.location.href.split('/')[3].replace('.html', '')}`;
  // Remove class from all tags
  for (let i = 0; i < tags.length; i++) {
    tags[i].classList.remove('nav_link--active');
  }
  // Check if the page is on the landing page
  if (urlLocation === '/index') {
    tags[0].classList.add('nav_link--active');
  } else {
    for (let i = 0; i < tags.length; i++) {
      if (tags[i].getAttribute('href') === urlLocation) {
        tags[i].classList.add('nav_link--active');
      }
    }
  }
};

navTagUnderline();
document.getElementById('learnMore').addEventListener('click', redirectToAbout);