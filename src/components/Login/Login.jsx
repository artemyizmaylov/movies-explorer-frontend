import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../Logo/Logo';
import TextInput from '../TextInput/TextInput';
import './Login.css';

export default function Login() {
  const handleSubmit = (evt) => {
    evt.preventDefault();
  };

  return (
    <div className="login">
      <div className="login__top">
        <Logo />
        <h2 className="login__heading login__text">Рады видеть!</h2>
      </div>
      <form className="login__form">
        <TextInput name="email" label="E-mail" type="email" />
        <TextInput name="password" label="Пароль" type="password" />
      </form>
      <div className="login__bottom">
        <button className="login__submit-button login__text" type="submit" onSubmit={handleSubmit}>Войти</button>
        <div className="login__question">
          <p className="login__text login__text_color_grey">Ещё не зарегистрированы?</p>
          <Link to="/signup" className="login__link login__text">Регистрация</Link>
        </div>
      </div>
    </div>
  );
}
