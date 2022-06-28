import React, { useContext, useEffect } from 'react';
import './Profile.css';
import { useNavigate } from 'react-router-dom';
import Header from '../Header/Header';
import mainApi from '../../utils/MainApi';
import useFormWithValidation from '../../utils/useFormWithValidation';
import UserContext from '../../context/UserContext';

export default function Profile() {
  const form = useFormWithValidation();
  const navigate = useNavigate();
  const { currentUser, setCurrentUser } = useContext(UserContext);

  const handleSignuot = () => {
    mainApi.logout()
      .then(() => {
        setCurrentUser({});
        localStorage.clear();
        navigate('/');
      })
      .catch((err) => console.log(err));
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    mainApi.patchUser(form.values)
      .then((user) => setCurrentUser(user))
      .then(() => form.resetForm())
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    form.setValues({ name: currentUser.name, email: currentUser.email });
  }, [currentUser]);

  return (
    <div className="profile">
      <Header />
      <div className="profile__content">
        <h2 className="profile__heading profile__text profile__text_marked">
          {`Привет, ${currentUser.name}!`}
        </h2>
        <form
          className="profile__info"
          id="profile"
          name="profile"
          onSubmit={handleSubmit}
        >
          <div className="profile__info-item">
            <p className="profile__text profile__text_marked">Имя</p>
            <input
              className="profile__text profile__input"
              type="text"
              name="name"
              value={form.values.name || ''}
              onChange={form.handleChange}
              pattern="^[a-zA-Zа-яА-Я\s-]+$"
              required
            />
          </div>
          <div className="profile__info-item">
            <p className="profile__text profile__text_marked">E-mail</p>
            <input
              className="profile__text profile__input"
              type="email"
              name="email"
              value={form.values.email || ''}
              onChange={form.handleChange}
              pattern="^[\w]+@[a-zA-Z]+\.[a-zA-Z]{1,3}$"
              required
            />
          </div>
        </form>
        <ul className="profile__buttons">
          <li className="profile__button-item">
            <button
              className={`profile__button ${!form.isValid && 'profile__button_disabled'} profile__text`}
              type="submit"
              form="profile"
              disabled={!form.isValid}
            >
              Редактировать
            </button>
          </li>
          <li className="profile__button-item">
            <button
              className="profile__button profile__text profile__text_color_red"
              type="button"
              onClick={handleSignuot}
            >
              Выйти из аккаунта
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
}
