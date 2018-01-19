import React from 'react';
import styled from 'styled-components';

const Div = styled.div`
    &:before {
        content: "";
        position: absolute;
        width: 100%;
        height: ${props => (props.height)}px;
        bottom: ${props => props.height}px;
        left: 0;
        background-color: ${props => props.color};
        visibility: hidden;
        transform: scaleX(0);
        transition: all 0.3s ease-in-out 0s;
    }
    &:hover:before {
      visibility: visible;
      transform: scaleX(1);
    }
`;

const underlineAnimation = (color, height) => (Component) => {
  const Wrapping = props => (
    <Div color={color} height={height}>
      <Component {...props} />
    </Div>
  );
  return Wrapping;
};

export default underlineAnimation;
