import React from 'react';
import PropTypes from 'prop-types';
import './Heading.scss';

const Heading = ({ text, Tag = 'h1' }) => (
  <Tag className="Heading">{text}</Tag>
);

Heading.propTypes = {
  text: PropTypes.string,
  Tag: PropTypes.string
};

Heading.defaultProps = {
  text: '',
  Tag: 'h1'
};

export default Heading;
