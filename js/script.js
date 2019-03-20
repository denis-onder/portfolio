const _redirectToAbout = () => {
  window.location.href = '/about.html';
};

const _redirectToHome = () => {
  window.location.href = '/index.html';
}

const navTagUnderline = () => {
  const tags = document.getElementsByClassName('nav_link');
  const urlLocation = `/${window.location.href.split('/')[3]}`;
  // Remove class from all tags
  for (let i = 0; i < tags.length; i++) {
    tags[i].classList.remove('nav_link--active');
  }
  // Check if the page is on the landing page
  if (urlLocation === '/index') {
    tags[0].classList.add('nav_link--active');
  } else {
    for (let i = 0; i < tags.length; i++) {
      const attrLocation = tags[i].getAttribute('href').replace('.', '');
      if (attrLocation === urlLocation) {
        tags[i].classList.add('nav_link--active');
      }
    }
  }
};

navTagUnderline();
document.getElementById('navLogo').addEventListener('click', _redirectToHome);

if (document.getElementById('learnMore')) {
  document.getElementById('learnMore').addEventListener('click', _redirectToAbout);
}
