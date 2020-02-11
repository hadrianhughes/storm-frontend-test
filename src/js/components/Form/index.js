import React from 'react';
import PropTypes from 'prop-types';
import { createBEM } from '../../utils';
import Button from '../Button';
import './Form.scss';

const BEM = createBEM('Form');

const Form = ({
  value,
  onChangeValue,
  importance,
  onChangeImportance,
  onKeyDown,
  onSubmit
}) => (
  <section className={BEM()}>
    <input
      type="text"
      className={BEM('input')}
      value={value}
      onChange={onChangeValue}
      onKeyDown={onKeyDown} />
    <div className={BEM('buttons')}>
      <button
        onClick={onChangeImportance(0)}
        className={BEM('button', [0, importance === 0 ? 'selected' : null])}>Most important</button>
      <button
        onClick={onChangeImportance(1)}
        className={BEM('button', [1, importance === 1 ? 'selected' : null])}>Semi important</button>
      <button
        onClick={onChangeImportance(2)}
        className={BEM('button', [2, importance === 2 ? 'selected' : null])}>Least important</button>
    </div>
    <Button text="Submit" onClick={onSubmit} variant="no-icon" />
  </section>
);

Form.propTypes = {
  value: PropTypes.string,
  onChangeValue: PropTypes.func,
  importance: PropTypes.oneOf([0, 1, 2]),
  onChangeImportance: PropTypes.func,
  onKeyDown: PropTypes.func,
  onSubmit: PropTypes.func
};

Form.defaultProps = {
  value: '',
  onChangeValue: () => {},
  importance: 0,
  onChangeImportance: () => {},
  onKeyDown: () => {},
  onSubmit: () => {}
};

export default Form;
