// -- dependencies --
import React from 'react';
import { storiesOf, setAddon } from '@storybook/react';
import { host } from 'storybook-host';
import JSXAddon from 'storybook-addon-jsx';
import { withNotes } from '@storybook/addon-notes';
// -- app --
import particleAnimation from './default';


const Element = () => (
  <div style={{
        height: '300px',
        width: '300px',
        backgroundColor: '#6699ff',
    }}
  />
);

const particleParams1 = {
  particles: {
    number: {
      value: 67,
      density: {
        enable: true,
        value_area: 600,
      },
    },
    color: {
      value: '#ffffff',
    },
    shape: {
      type: 'circle',
      stroke: {
        width: 0,
        color: '#000000',
      },
      polygon: {
        nb_sides: 5,
      },
      image: {
        src: 'img/github.svg',
        width: 100,
        height: 100,
      },
    },
    opacity: {
      value: 0.5,
      random: false,
      anim: {
        enable: false,
        speed: 7.672327672327672,
        opacity_min: 0.1,
        sync: false,
      },
    },
    size: {
      value: 3,
      random: true,
      anim: {
        enable: false,
        speed: 40,
        size_min: 0.1,
        sync: false,
      },
    },
    line_linked: {
      enable: true,
      distance: 150,
      color: '#ffffff',
      opacity: 0.4,
      width: 1,
    },
    move: {
      enable: true,
      speed: 4,
      direction: 'right',
      random: false,
      straight: false,
      out_mode: 'out',
      bounce: false,
      attract: {
        enable: false,
        rotateX: 600,
        rotateY: 1420.4657549380909,
      },
    },
  },
  interactivity: {
    detect_on: 'canvas',
    events: {
      onhover: {
        enable: true,
        mode: 'grab',
      },
      onclick: {
        enable: false,
        mode: 'push',
      },
      resize: true,
    },
    modes: {
      grab: {
        distance: 243.62316369040352,
        line_linked: {
          opacity: 1,
        },
      },
      bubble: {
        distance: 400,
        size: 40,
        duration: 2,
        opacity: 8,
        speed: 3,
      },
      repulse: {
        distance: 200,
        duration: 0.4,
      },
      push: {
        particles_nb: 4,
      },
      remove: {
        particles_nb: 2,
      },
    },
  },
};
const particleParams2 = {
  particles: {
    number: {
      value: 66,
      density: {
        enable: true,
        value_area: 800,
      },
    },
    color: {
      value: '#02030c',
    },
    shape: {
      type: 'circle',
      stroke: {
        width: 12,
        color: '#e30808',
      },
      polygon: {
        nb_sides: 4,
      },
      image: {
        src: '',
        width: 100,
        height: 100,
      },
    },
    opacity: {
      value: 0.5129459670609773,
      random: false,
      anim: {
        enable: false,
        speed: 1,
        opacity_min: 0.1,
        sync: false,
      },
    },
    size: {
      value: 0,
      random: true,
      anim: {
        enable: false,
        speed: 40,
        size_min: 0.1,
        sync: false,
      },
    },
    line_linked: {
      enable: true,
      distance: 150,
      color: '#ffffff',
      opacity: 0.4,
      width: 1,
    },
    move: {
      enable: true,
      speed: 3.206824121731046,
      direction: 'right',
      random: false,
      straight: false,
      out_mode: 'out',
      bounce: false,
      attract: {
        enable: false,
        rotateX: 600,
        rotateY: 1200,
      },
    },
  },
  interactivity: {
    detect_on: 'canvas',
    events: {
      onhover: {
        enable: true,
        mode: 'grab',
      },
      onclick: {
        enable: false,
        mode: 'push',
      },
      resize: true,
    },
    modes: {
      grab: {
        distance: 227.77222777222775,
        line_linked: {
          opacity: 1,
        },
      },
      bubble: {
        distance: 400,
        size: 40,
        duration: 2,
        opacity: 8,
        speed: 3,
      },
      repulse: {
        distance: 183.8161838161838,
        duration: 0.4,
      },
      push: {
        particles_nb: 4,
      },
      remove: {
        particles_nb: 2,
      },
    },
  },
  retina_detect: true,
};


const ParticlesOverElement1 = particleAnimation(particleParams1)(Element);
const ParticlesOverElement2 = particleAnimation(particleParams2)(Element);

setAddon(JSXAddon);

storiesOf('Animations/Particles', module)
  .addDecorator(host({
    title: 'Particle animation',
    align: 'center middle',
  }))
  .addWithJSX(
    'config1',
    withNotes('Particles animation over blue element, implemented following https://www.npmjs.com/package/react-particles-js')(() => <ParticlesOverElement1 />),
  )
  .addWithJSX(
    'config2',
    withNotes('Particles animation over blue element, implemented following https://www.npmjs.com/package/react-particles-js')(() => <ParticlesOverElement2 />),
  );
