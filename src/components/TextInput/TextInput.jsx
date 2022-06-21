import React, { useState } from 'react';
import './TextInput.css';

export default function TextInput({ name, label, type }) {
  const [message, setMessage] = useState();

  const handleChange = (evt) => {
    setMessage(evt.target.validationMessage);
  };

  return (
    <label className="text-input" htmlFor={name}>
      <span className="text-input__name text-input__text">{label}</span>
      <input
        className="text-input__input text-input__text"
        name={name}
        type={type}
        onChange={handleChange}
        minLength={4}
        required
      />
      <span className="text-input__error text-input__text">{message}</span>
    </label>
  );
}
