import React from 'react';
import PropTypes from 'prop-types';
import { createBEM } from '../../utils';
import './TodoList.scss';

const BEM = createBEM('List');

const TodoList = ({ items }) => (
  <section>
    {
      items.length > 0 ?
        <ul className={BEM()}>
          {
            items.map(item =>
              <li
                key={item.id}
                className={BEM('item', [item.importance])}>
                <input type="checkbox" className={BEM('checkbox')} id={item.id} />
                <label className={BEM('item-text')} htmlFor={item.id}>{item.title}</label>
              </li>
            )
          }
        </ul>
        :
        <p className={BEM('loader')}>Loading</p>
    }
  </section>
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
