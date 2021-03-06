import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Form from './index';
import { apiSubmit } from '../../api';
import {
  setFormValue as setFormValueAction,
  setFormImportance as setFormImportanceAction,
  addItem as addItemAction
} from '../../actions';

const FormContainer = ({
  value,
  setFormValue,
  importance,
  setFormImportance,
  addItem
}) => {
  const handleChangeValue = e => setFormValue(e.target.value);
  const handleChangeImportance = value => () => setFormImportance(value);

  const handleSubmit = () =>
    apiSubmit(value, importance)
      .then(addItem);

  const handleKeyDown = e => {
    // On press enter
    if (e.keyCode === 13) {
      handleSubmit();
    }
  };

  return (
    <Form
      value={value}
      onChangeValue={handleChangeValue}
      importance={importance}
      onChangeImportance={handleChangeImportance}
      onKeyDown={handleKeyDown}
      onSubmit={handleSubmit} />
  );
};

FormContainer.propTypes = {
  value: PropTypes.string,
  setFormValue: PropTypes.func,
  importance: PropTypes.oneOf([0, 1, 2]),
  setFormImportance: PropTypes.func,
  addItem: PropTypes.func
};

FormContainer.defaultProps = {
  value: '',
  setFormValue: () => {},
  importance: 0,
  setFormImportance: () => {},
  addItem: () => {}
};

const mapStateToProps = state => ({
  value: state.formValue,
  importance: state.formImportance
});

const mapDispatchToProps = {
  setFormValue: setFormValueAction,
  setFormImportance: setFormImportanceAction,
  addItem: addItemAction
};

export default connect(mapStateToProps, mapDispatchToProps)(FormContainer);
