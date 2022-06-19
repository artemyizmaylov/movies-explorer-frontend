import React from 'react';
import './AboutProject.css';

export default function AboutProject() {
  return (
    <section className="about-project" id="about-project">
      <h2 className="about-project__text about-project__heading ">О проекте</h2>
      <div className="about-project__section">
        <h3 className="about-project__text about-project__subheading">Дипломный проект включал 5 этапов</h3>
        <p className="about-project__text">
          Составление плана, работу над бэкендом, вёрстку,
          добавление функциональности и финальные доработки.
        </p>
      </div>
      <div className="about-project__section">
        <h3 className="about-project__text about-project__subheading">На выполнение диплома ушло 5 недель</h3>
        <p className="about-project__text">
          У каждого этапа был мягкий и жёсткий дедлайн,
          которые нужно было соблюдать, чтобы успешно защититься.
        </p>
      </div>
      <table className="about-project__table">
        <tbody className="table">
          <tr className="table__row">
            <td className="table__data table__data_color_green about-project__text">1 неделя</td>
            <td className="table__data table__data_color_grey about-project__text">4 недели</td>
          </tr>
          <tr className="table__row">
            <td className="table__data about-project__text about-project__text_color_grey">Back-end</td>
            <td className="table__data about-project__text about-project__text_color_grey">Front-end</td>
          </tr>
        </tbody>
      </table>
    </section>
  );
}
