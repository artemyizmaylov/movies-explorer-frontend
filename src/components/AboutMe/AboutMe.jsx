// TODO: fix year of birth, write biography

import React from 'react';
import './AboutMe.css';
import photo from '../../images/myphoto.jpeg';
import Portfolio from '../Portfolio/Portfolio';

export default function AboutMe() {
  return (
    <section className="about-me" id="about-me">
      <h2 className="about-me__heading">Студент</h2>
      <section className="about-me__card my-card">
        <img className="my-card__photo" src={photo} alt="Мое фото" />
        <h3 className="my-card__heading my-card__text">Артемий</h3>
        <h4 className="my-card__subheading my-card__text">
          {`Фронтенд-разработчик, ${new Date().getFullYear() - 1994} лет`}
        </h4>
        <p className="my-card__description my-card__text">
          Я родился и живу в Саратове, закончил факультет экономики СГУ. У меня есть жена
          и дочь. Я люблю слушать музыку, а ещё увлекаюсь бегом. Недавно начал кодить.
          С 2015 года работал в компании «СКБ Контур».
          После того, как прошёл курс по веб-разработке,
          начал заниматься фриланс-заказами и ушёл с постоянной работы.
        </p>
        <ul className="my-card__links">
          <li className="my-card__link-item">
            <a className="my-card__link my-card__text" href="/">Facebook</a>
          </li>
          <li className="my-card__link-item">
            <a className="my-card__link my-card__text" href="/">Github</a>
          </li>
        </ul>
      </section>
      <Portfolio />
    </section>
  );
}
