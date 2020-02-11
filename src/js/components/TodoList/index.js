import React from 'react';
import PropTypes from 'prop-types';
import { createBEM } from '../../utils';
import './TodoList.scss';

const BEM = createBEM('List');

const TodoList = ({ items }) => (
  <ul className={BEM()}>
    {
      items.map(item =>
        <li
          key={item.id}
          className={BEM('item', [item.importance])}>{item.title}</li>
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
