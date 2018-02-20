import React from 'react';
import Particles from 'react-particles-js';

const particleAnimation = particleParams => (Component) => {
  const Wrapping = props => (
    <div>
      <Particles
        params={particleParams}
        style={{ position: 'absolute' }}
      />
      <Component {...props} />
    </div>
  );
  return Wrapping;
};

export default particleAnimation;
