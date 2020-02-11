import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Form from './index';
import {
  setFormValue as setFormValueAction,
  setFormImportance as setFormImportanceAction
} from '../../actions';

const FormContainer = ({
  value,
  setFormValue,
  importance,
  setFormImportance
}) => {
  const handleChangeValue = e => setFormValue(e.target.value);
  const handleChangeImportance = value => () => setFormImportance(value);

  const handleKeyDown = e => {
    // On press enter
    if (e.keyCode === 13) {
      console.log('submit');
    }
  };

  return (
    <Form
      value={value}
      onChangeValue={handleChangeValue}
      importance={importance}
      onChangeImportance={handleChangeImportance}
      onKeyDown={handleKeyDown} />
  );
};

FormContainer.propTypes = {
  value: PropTypes.string,
  setFormValue: PropTypes.func,
  importance: PropTypes.oneOf([0, 1, 2]),
  setFormImportance: PropTypes.func
};

FormContainer.defaultProps = {
  value: '',
  setFormValue: () => {},
  importance: 0,
  setFormImportance: () => {}
};

const mapStateToProps = state => ({
  value: state.formValue,
  importance: state.formImportance
});

const mapDispatchToProps = {
  setFormValue: setFormValueAction,
  setFormImportance: setFormImportanceAction
};

export default connect(mapStateToProps, mapDispatchToProps)(FormContainer);
