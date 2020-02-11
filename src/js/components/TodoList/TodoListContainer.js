import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import TodoList from './index';
import { API_ENDPOINT } from '../../config';
import {
  changeDone as changeDoneAction,
  setItems as setItemsAction,
  deleteItem as deleteItemAction
} from '../../actions';

const TodoListContainer = ({
  items,
  changeDone,
  setItems,
  loading,
  deleteItem
}) => {
  useEffect(() => {
    fetch(`${API_ENDPOINT}/task`)
      .then(response => response.json())
      .then(result => {
        if (result) {
          setItems(result);
        }
      });
  }, []);

  const handleDone = e => {
    const { id, checked } = e.target;

    fetch(`${API_ENDPOINT}/task/${id}`, {
      method: 'PATCH',
      body: JSON.stringify({ isDone: String(checked) }),
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(response => response.json())
      .then(result => {
        if (result && result.isDone === String(checked)) {
          changeDone(id, checked);
        }
      });
  };

  const handleDelete = id => () => {
    fetch(`${API_ENDPOINT}/task/${id}`, {
      method: 'DELETE'
    })
      .then(response => response.json())
      .then(result => {
        if (result === true) {
          deleteItem(id);
        }
      });
  };

  return (
    <TodoList
      items={items}
      onChangeDone={handleDone}
      loading={loading}
      onDelete={handleDelete} />
  );
};

TodoListContainer.propTypes = {
  items: PropTypes.array,
  changeDone: PropTypes.func,
  setItems: PropTypes.func,
  loading: PropTypes.bool,
  setLoading: PropTypes.func,
  deleteItem: PropTypes.func
};

TodoListContainer.defaultProps = {
  items: [],
  changeDone: () => {},
  setItems: () => {},
  loading: true,
  setLoading: () => {},
  deleteItem: () => {}
};

const mapStateToProps = state => ({
  items: state.items,
  loading: state.loading
});

const mapDispatchToProps = {
  changeDone: changeDoneAction,
  setItems: setItemsAction,
  deleteItem: deleteItemAction
};

export default connect(mapStateToProps, mapDispatchToProps)(TodoListContainer);
