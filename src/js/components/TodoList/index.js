import React from 'react';
import PropTypes from 'prop-types';

const TodoList = ({ items }) => (
  <ul className="List">
    {
      items.map(item =>
        <li key={item.id} className="List__item">{item.title}</li>
      )
    }
  </ul>
);

TodoList.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      title: PropTypes.string,
      importance: PropTypes.number
    })
  )
};

TodoList.defaultProps = {
  items: []
};

export default TodoList;
