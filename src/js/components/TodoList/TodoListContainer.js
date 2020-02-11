import React, { useEffect, useState } from 'react';
import TodoList from './index';

const TodoListContainer = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch('http://localhost:4000/api/task')
      .then(response => response.json())
      .then(result => {
        if (result) {
          console.log(result);
          setItems(result);
        }
      });
  }, []);

  return (
    <TodoList items={items} />
  );
};

export default TodoListContainer;
