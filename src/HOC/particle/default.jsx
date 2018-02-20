import React from 'react';
import Particles from 'react-particles-js';

const particleAnimation = particleParams => (Component) => {
  const Wrapping = props => (
    <div>
      <Component {...props} />
      <Particles
        params={particleParams}
        style={{ position: 'absolute' }}
      />
    </div>
  );
  return Wrapping;
};

export default particleAnimation;
