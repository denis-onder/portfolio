import React from 'react';
import { Link } from 'react-router-dom';
import '../scss/home.scss';
import setCurrentlyActiveIcon from '../events/setCurrentlyActiveIcon';
import setTitle from '../events/setTitle';
import Particles from 'react-particles-js';

export default function Home() {
  const companyURL = 'https://capeannenterprises.com/';
  const redirectToCompanyPage = () => (window.location = companyURL);

  setTitle('home');
  return (
    <div id="home">
      <Particles
        params={{
          particles: {
            number: {
              value: 60,
              density: {
                enable: true,
                value_area: 1500,
              },
            },
            line_linked: {
              enable: true,
              opacity: 0.02,
            },
            move: {
              direction: 'right',
              speed: 0.05,
            },
            size: {
              value: 1,
            },
            opacity: {
              anim: {
                enable: true,
                speed: 1,
                opacity_min: 0.05,
              },
            },
          },
          interactivity: {
            events: {
              onhover: {
                enable: true,
                mode: 'grab',
              },
            },
            modes: {
              grab: {
                distance: 75,
              },
            },
          },
          retina_detect: true,
        }}
      />
      <h1 className="home_name">
        denis <span>onder</span>
      </h1>
      <div className="home_text">
        <p>I'm a software developer from Bosnia and Herzegovina.</p>
        <p>
          Currently working at{' '}
          <span onClick={redirectToCompanyPage}>Cape Ann Enterprises</span>.
        </p>
      </div>
      <Link
        className="home_link"
        to="/contact"
        onClick={() => setCurrentlyActiveIcon('/contact')}
      >
        contact me
      </Link>
    </div>
  );
}
