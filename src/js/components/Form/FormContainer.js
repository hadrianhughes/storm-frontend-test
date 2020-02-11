import React from 'react';
import { connect } from 'react-redux';
import Form from './index';
import { setFormValue as setFormValueAction } from '../../actions';

const FormContainer = ({ value, setFormValue }) => {
  const handleChangeValue = e => setFormValue(e.target.value);

  return (
    <Form
      value={value}
      onChangeValue={handleChangeValue} />
  );
};

const mapStateToProps = state => ({
  value: state.formValue
});

const mapDispatchToProps = {
  setFormValue: setFormValueAction
};

export default connect(mapStateToProps, mapDispatchToProps)(FormContainer);
