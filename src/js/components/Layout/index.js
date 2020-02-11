import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Heading from '../Heading';
import TodoList from '../TodoList/TodoListContainer';
import Button from '../Button';
import { createBEM } from '../../utils';
import './Layout.scss';

const BEM = createBEM('Layout');

const Layout = ({ formVisible }) => (
  <div className={BEM()}>
    <header className={BEM('header')}>
      <Heading text="Todo List" />
      <Button text="Add item" onClick={() => console.log('clicked')} />
    </header>
    <TodoList />
  </div>
);

Layout.propTypes = {
  formVisible: PropTypes.bool
};

Layout.defaultProps = {
  formVisible: false
};

const mapStateToProps = state => ({
  formVisible: state.formVisible
});

export default connect(mapStateToProps)(Layout);
