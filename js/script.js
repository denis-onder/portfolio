const _redirectToAbout = () => {
  window.location.href = '/about.html';
};

const _redirectToHome = () => {
  window.location.href = '/';
}

const navTagUnderline = () => {
  const tags = document.getElementsByClassName('nav_link');
  // Split url string
  const urlString = window.location.href.split('/');
  // Loop through strings
  for (let i = 0; i < urlString.length; i++) {
    // Check if current iteration matches with one of the tag href attributes
    for (let j = 0; j < tags.length; j++) {
      // Remove any active classes
      tags[j].classList.remove('nav_link--active');
      if (`/${urlString[i]}` === tags[j].getAttribute('href').replace('.', '')) {
        tags[j].classList.add('nav_link--active');
        return;
      }
    }
  };
};

navTagUnderline();
document.getElementById('navLogo').addEventListener('click', _redirectToHome);

if (document.getElementById('learnMore')) {
  document.getElementById('learnMore').addEventListener('click', _redirectToAbout);
}
