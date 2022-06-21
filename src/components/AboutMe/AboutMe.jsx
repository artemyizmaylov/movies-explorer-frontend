import React from 'react';
import './AboutMe.css';
import Portfolio from '../Portfolio/Portfolio';
import MyCard from '../MyCard/MyCard';

export default function AboutMe() {
  return (
    <section className="about-me" id="about-me">
      <h2 className="about-me__heading">Студент</h2>
      <div className="about-me__content">
        <MyCard />
        <Portfolio />
      </div>
    </section>
  );
}
