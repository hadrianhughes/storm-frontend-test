import React from 'react';
import PropTypes from 'prop-types';
import { createBEM } from '../../utils';
import './Form.scss';

const BEM = createBEM('Form');

const Form = ({ value, onChangeValue }) => (
  <section className={BEM()}>
    <input
      type="text"
      className={BEM('input')}
      value={value}
      onChange={onChangeValue} />
    <div className={BEM('buttons')}>
      <button className={BEM('button', [0])}>Most important</button>
      <button className={BEM('button', [1])}>Semi important</button>
      <button className={BEM('button', [2])}>Least important</button>
    </div>
  </section>
);

Form.propTypes = {
  value: PropTypes.string,
  onChangeValue: PropTypes.func
};

Form.defaultProps = {
  value: '',
  onChangeValue: () => {}
};

export default Form;
