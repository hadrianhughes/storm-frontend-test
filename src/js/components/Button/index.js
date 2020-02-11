import React from 'react';
import PropTypes from 'prop-types';
import './Button.scss';

const Button = ({ text, onClick, variant }) => (
  <button className={`Button ${variant ? `Button--${variant}` : ''}`} onClick={onClick}>{text}</button>
);

Button.propTypes = {
  text: PropTypes.string,
  onClick: PropTypes.func,
  variant: PropTypes.string
};

Button.defaultProps = {
  text: '',
  onClick: () => {},
  variant: ''
};

export default Button;
