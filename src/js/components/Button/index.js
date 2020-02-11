import React from 'react';
import PropTypes from 'prop-types';
import './Button.scss';

const Button = ({ text, onClick }) => (
  <button className="Button" onClick={onClick}>{text}</button>
);

Button.propTypes = {
  text: PropTypes.string,
  onClick: PropTypes.func
};

Button.defaultProps = {
  text: '',
  onClick: () => {}
};

export default Button;
