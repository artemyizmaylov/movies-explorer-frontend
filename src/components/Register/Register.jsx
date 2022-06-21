import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../Logo/Logo';
import TextInput from '../TextInput/TextInput';
import './Register.css';

export default function Register() {
  const handleSubmit = (evt) => {
    evt.preventDefault();
  };

  return (
    <div className="register">
      <div className="register__top">
        <Logo />
        <h2 className="register__heading register__text">Добро пожаловать!</h2>
      </div>
      <form className="register__form">
        <TextInput name="name" label="Имя" type="text" />
        <TextInput name="email" label="E-mail" type="email" />
        <TextInput name="password" label="Пароль" type="password" />
      </form>
      <div className="register__bottom">
        <button className="register__submit-button register__text" type="submit" onSubmit={handleSubmit}>Зарегистрироваться</button>
        <div className="register__question">
          <p className="register__text register__text_color_grey">Уже зарегистрированы?</p>
          <Link to="/signin" className="register__link register__text">Войти</Link>
        </div>
      </div>
    </div>
  );
}
