import React, { Fragment } from 'react';
import Heading from './components/Heading';
import TodoList from './components/TodoList/TodoListContainer';

const App = () => (
  <Fragment>
    <Heading text="Todo List" />
    <TodoList />
  </Fragment>
);

export default App;
