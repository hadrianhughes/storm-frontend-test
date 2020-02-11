import React, { useEffect, useState } from 'react';
import TodoList from './index';

const TodoListContainer = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch('http://localhost:4000/api/task')
      .then(response => response.json())
      .then(result => {
        if (result) {
          setItems(result);
        }
      });
  }, []);

  const handleDone = e => {
    const { id, checked } = e.target;

    fetch(`http://localhost:4000/api/task/${id}`, {
      method: 'PATCH',
      body: JSON.stringify({ isDone: String(checked) }),
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(response => response.json())
      .then(result => {
        if (result && result.isDone === String(checked)) {
          setItems(
            items.reduce((acc, item) => [
              ...acc,
              item.id === id ? { ...item, isDone: String(checked) } : item
            ], [])
          );
        }
      });
  };

  return (
    <TodoList
      items={items}
      onChangeDone={handleDone} />
  );
};

export default TodoListContainer;
