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

    setItems(
      items.reduce((acc, item) => [
        ...acc,
        item.id === id ? { ...item, isDone: String(checked) } : item
      ], [])
    );
  };

  return (
    <TodoList
      items={items}
      onChangeDone={handleDone} />
  );
};

export default TodoListContainer;
