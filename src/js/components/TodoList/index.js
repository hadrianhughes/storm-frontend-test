import React from 'react';
import PropTypes from 'prop-types';
import { createBEM, sortByImportance } from '../../utils';
import './TodoList.scss';

const BEM = createBEM('List');

const TodoList = ({
  items,
  onChangeDone,
  loading,
  onDelete
}) => (
  <section className={BEM()}>
    {(() => {
      if (loading) {
        return <p className={BEM('loader')}>Loading</p>;
      }

      if (items.length === 0) {
        return <p className={BEM('no-items')}>No items to show</p>;
      }

      return (
        <ul className={BEM('list')}>
          {
            items
              .sort(sortByImportance)
              .map(item =>
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
                  <button className={BEM('delete')} onClick={onDelete(item.id)}>Delete</button>
                </li>
            )
          }
        </ul>
      );
    })()}
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
  onChangeDone: PropTypes.func,
  loading: PropTypes.bool,
  onDelete: PropTypes.func
};

TodoList.defaultProps = {
  items: [],
  onChangeDone: () => {},
  loading: true,
  onDelete: () => {}
};

export default TodoList;
