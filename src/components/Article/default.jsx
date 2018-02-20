// -- dependencies --
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
// -- app --
import CoverArt from '../CoverArt';

const Wrapper = styled.div`
    text-align: center;
`;

const Header = styled.h1`
  color: blue;
`;

const Paragraph = styled.p`
  text-align: justify;
`;

const Article = (props) => {
  const {
    photo,
    headline,
    content,
  } = props;

  return (
    <Wrapper>
      <CoverArt {...photo} />
      <Header>{headline}</Header>
      <Paragraph>{content}</Paragraph>
    </Wrapper>
  );
};

Article.propTypes = {
  photo: PropTypes.shape({
    src: PropTypes.string,
    height: PropTypes.string,
    width: PropTypes.string,
  }),
  headline: PropTypes.string,
  content: PropTypes.string,
};

Article.defaultProps = {
  photo: PropTypes.shape({
    src: '',
    height: '300px',
    width: '100%',
  }),
  headline: 'Loren Ipsum',
  content: '',
};


export default Article;
