// -- dependencies --
import React from 'react';
import styled from 'styled-components';

/*
display: flex;
  align-items: center;
  justify-content: center;

* */

const Holder = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  
  height: ${props => props.height};
  width: ${props => props.width};
  background-color: grey;
  overflow: hidden;
`;

const Img = styled.img`   
  width: 100%;
  transition: .5s ease-out;
  filter: grayscale(60%);
  
  :hover {
    transition: .5s ease-in;
    filter: grayscale(10%);
  }
`;


const CoverArt = ({src, height, width}) => (
    <Holder height={height} width={width} >
        <Img src={src} />
    </Holder>
);

export default CoverArt;