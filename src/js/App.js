import React, { Fragment } from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducer from './reducer';
import Heading from './components/Heading';
import TodoList from './components/TodoList/TodoListContainer';

const store = createStore(reducer);

const App = () => (
  <Provider store={store}>
    <Heading text="Todo List" />
    <TodoList />
  </Provider>
);

export default App;
