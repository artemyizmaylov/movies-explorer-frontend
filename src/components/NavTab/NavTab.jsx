import React from 'react';
import './NavTab.css';

export default function NavTab() {
  return (
    <nav className="NavTab">
      <ul className="NavTab__links">
        <li className="NavTab__link-item">
          <a className="NavTab__link" href="/">О проекте</a>
        </li>
        <li className="NavTab__link-item">
          <a className="NavTab__link" href="/">Технологии</a>
        </li>
        <li className="NavTab__link-item">
          <a className="NavTab__link" href="/">Студент</a>
        </li>
      </ul>
    </nav>
  );
}
