import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Heading from '../Heading';
import TodoList from '../TodoList/TodoListContainer';
import Button from '../Button';
import { createBEM } from '../../utils';
import { setFormOpen as setFormOpenAction } from '../../actions';
import './Layout.scss';

const BEM = createBEM('Layout');

const Layout = ({ formOpen, setFormOpen }) => (
  <div className={BEM()}>
    <header className={BEM('header')}>
      <Heading text="Todo List" />
      <Button
        text={formOpen ? 'Close form' : 'Add item'}
        closeVariant={formOpen}
        onClick={() => setFormOpen(!formOpen)} />
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
  formOpen: state.formOpen
});

const mapDispatchToProps = {
  setFormOpen: setFormOpenAction
};

export default connect(mapStateToProps, mapDispatchToProps)(Layout);
