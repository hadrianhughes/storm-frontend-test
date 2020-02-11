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
          className={BEM('item', [item.importance])}>
          <input type="checkbox" className={BEM('checkbox')} />
          <span className={BEM('item-text')}>{item.title}</span>
        </li>
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
