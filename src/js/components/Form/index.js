import React from 'react';
import { createBEM } from '../../utils';
import './Form.scss';

const BEM = createBEM('Form');

const Form = () => (
  <section className={BEM()}>
    <input type="text" className={BEM('input')} />
    <div className={BEM('buttons')}>
      <button className={BEM('button', [0])}>Most important</button>
      <button className={BEM('button', [1])}>Semi important</button>
      <button className={BEM('button', [2])}>Least important</button>
    </div>
  </section>
);

export default Form;
