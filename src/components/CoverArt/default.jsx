// -- dependencies --
import React from 'react';
import styled from 'styled-components';



const Holder = styled.div`
    height: ${props => props.height};
    width: ${props => props.width};
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    background-color: grey;
`;

const Img = styled.img`   
  flex-shrink: 0;
  min-width: 100%;
  min-height: 100%;
  
  
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