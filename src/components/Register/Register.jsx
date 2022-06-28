import React, { useState, useContext } from 'react';
import './Register.css';
import { Link, useNavigate } from 'react-router-dom';
import Logo from '../Logo/Logo';
import TextInput from '../TextInput/TextInput';
import useFormWithValidation from '../../utils/useFormWithValidation';
import mainApi from '../../utils/MainApi';
import UserContext from '../../context/UserContext';

export default function Register() {
  const form = useFormWithValidation();
  const navigate = useNavigate();
  const [registerError, setRegisterError] = useState('');

  const { setCurrentUser } = useContext(UserContext);

  const handleSubmit = (evt) => {
    evt.preventDefault();

    mainApi.register(form.values)
      .then((user) => mainApi.login({ email: user.email, password: form.values.password }))
      .then(() => mainApi.getUser())
      .then((user) => setCurrentUser(user))
      .then(() => navigate('/movies'))
      .catch((err) => err.json().then((data) => setRegisterError(data.message)));
  };

  return (
    <div className="register">
      <div className="register__top">
        <Logo />
        <h2 className="register__heading register__text">Добро пожаловать!</h2>
      </div>
      <form
        className="register__form"
        id="register"
        name="register"
        onSubmit={handleSubmit}
        noValidate
      >
        <TextInput
          name="name"
          label="Имя"
          type="text"
          pattern="^[a-zA-Zа-яА-Я\s-]+$"
          value={form.values.name || ''}
          onChange={form.handleChange}
          errorMessage={form.errors.name}
        />
        <TextInput
          name="email"
          label="E-mail"
          type="email"
          pattern="^[\w]+@[a-zA-Z]+\.[a-zA-Z]{1,3}$"
          value={form.values.email || ''}
          onChange={form.handleChange}
          errorMessage={form.errors.email}
        />
        <TextInput
          name="password"
          label="Пароль"
          type="password"
          value={form.values.password || ''}
          onChange={form.handleChange}
          errorMessage={form.errors.password}
        />
      </form>

      <div className="register__bottom">
        <p className="register__text register__text_color_red">{registerError}</p>
        <button
          className={`register__submit-button ${!form.isValid && 'register__submit-button_disabled'} register__text`}
          type="submit"
          form="register"
          disabled={!form.isValid}
        >
          Зарегистрироваться
        </button>
        <div className="register__question">
          <p className="register__text register__text_color_grey">Уже зарегистрированы?</p>
          <Link to="/signin" className="register__link register__text">Войти</Link>
        </div>
      </div>
    </div>
  );
}
