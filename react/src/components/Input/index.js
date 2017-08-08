// @flow
import React from 'react';

type Props = {
  input: Object,
  label?: string, //eslint-disable-line
  type?: string,  //eslint-disable-line
  placeholder?: string,   //eslint-disable-line
  style?: Object, //eslint-disable-line
  meta: Object,
}

const Input = ({ input, label, type, placeholder, style, meta }: Props) => (
  <div style={{ marginBottom: '1rem' }}>
    {label && <label htmlFor={input.name}>{label}</label>}
    <input
      {...input}
      type={type}
      placeholder={placeholder}
      className="form-control"
      style={style && style}
    />
    {meta.touched && meta.error &&
      <div style={{ fontSize: '85%', color: 'rgb(255,59,48)' }}>{meta.error}</div>
    }
  </div>);

export default Input;
