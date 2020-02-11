import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import TodoList from './index';
import { API_ENDPOINT } from '../../config';
import {
  changeDone as changeDoneAction,
  setItems as setItemsAction
} from '../../actions';

const TodoListContainer = ({ items, changeDone, setItems }) => {
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

  return (
    <TodoList
      items={items}
      onChangeDone={handleDone} />
  );
};

const mapStateToProps = state => ({
  items: state.items
});

const mapDispatchToProps = {
  changeDone: changeDoneAction,
  setItems: setItemsAction
};

export default connect(mapStateToProps, mapDispatchToProps)(TodoListContainer);
