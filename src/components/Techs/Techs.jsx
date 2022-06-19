import React from 'react';
import './Techs.css';

export default function Techs() {
  return (
    <section className="techs" id="techs">
      <h2 className="techs__heading techs__text">Технологии</h2>
      <div className="techs__section">
        <h3 className="techs__subheading techs__text">7 технологий</h3>
        <p className="techs__paragraph techs__text">На курсе веб-разработки мы освоили технологии, которые применили в дипломном проекте.</p>
      </div>
      <ul className="techs__cards">
        <li className="techs__card"><p className="techs__text techs__paragraph">HTML</p></li>
        <li className="techs__card"><p className="techs__text techs__paragraph">CSS</p></li>
        <li className="techs__card"><p className="techs__text techs__paragraph">JS</p></li>
        <li className="techs__card"><p className="techs__text techs__paragraph">React</p></li>
        <li className="techs__card"><p className="techs__text techs__paragraph">Git</p></li>
        <li className="techs__card"><p className="techs__text techs__paragraph">Express.js</p></li>
        <li className="techs__card"><p className="techs__text techs__paragraph">mongoDB</p></li>
      </ul>
    </section>
  );
}
