import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';
import Logo from '../Logo/Logo';

export default function Header() {
  return (
    <header className="header">
      <Logo />
      <nav>
        <ul className="header__links">
          <li className="header__link-item">
            <Link to="/signup" className="header__link">Регистрация</Link>
          </li>
          <li className="header__link-item header__link-item_color_green">
            <Link to="/signin" className="header__link">Войти</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
