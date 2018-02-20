// -- dependencies --
import React from 'react';
import PropTypes from 'prop-types';


const Button = ({ text }) => (<button>{text}</button>);

Button.propTypes = {
  text: PropTypes.string,
};

Button.defaultProps = {
  text: '',
};


export default Button;
