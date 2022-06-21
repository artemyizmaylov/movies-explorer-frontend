import React from 'react';
import Header from '../Header/Header';
import './Profile.css';

export default function Profile() {
  return (
    <div className="profile">
      <Header />
      <div className="profile__content">
        <h2 className="profile__heading profile__text profile__text_marked">Привет, Виталий!</h2>
        <ul className="profile__info">
          <li className="profile__info-item">
            <p className="profile__text profile__text_marked">Имя</p>
            <p className="profile__text">Виталий</p>
          </li>
          <li className="profile__info-item">
            <p className="profile__text profile__text_marked">E-mail</p>
            <p className="profile__text">pochta@yandex.ru</p>
          </li>
        </ul>
        <ul className="profile__buttons">
          <li className="profile__button-item">
            <button className="profile__button profile__text" type="button">Редактировать</button>
          </li>
          <li className="profile__button-item">
            <button className="profile__button profile__text profile__text_color_red" type="button">Выйти из аккаунта</button>
          </li>
        </ul>
      </div>
    </div>
  );
}
