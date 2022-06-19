import React from 'react';
import './NavTab.css';

export default function NavTab() {
  return (
    <nav className="nav-tab">
      <ul className="nav-tab__links">
        <li className="nav-tab__link-item">
          <a className="nav-tab__link" href="#about-project">О проекте</a>
        </li>
        <li className="nav-tab__link-item">
          <a className="nav-tab__link" href="#techs">Технологии</a>
        </li>
        <li className="nav-tab__link-item">
          <a className="nav-tab__link" href="#about-me">Студент</a>
        </li>
      </ul>
    </nav>
  );
}
