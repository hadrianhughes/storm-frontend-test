import React from 'react';
import PropTypes from 'prop-types';
import { createBEM } from '../../utils';
import './TodoList.scss';

const BEM = createBEM('List');

const TodoList = ({ items, onChangeDone }) => (
  <section className={BEM()}>
    {
      items.length > 0 ?
        <ul className={BEM('list')}>
          {
            items.map(item =>
              <li
                key={item.id}
                className={BEM('item', [item.importance])}>
                <input
                  type="checkbox"
                  onChange={onChangeDone}
                  checked={item.isDone === 'true'}
                  className={BEM('checkbox')}
                  id={item.id} />
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
  ),
  onChangeDone: PropTypes.func
};

TodoList.defaultProps = {
  items: []
};

export default TodoList;
