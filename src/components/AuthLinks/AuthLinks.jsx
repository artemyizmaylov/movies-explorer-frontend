import React from 'react';
import { Link } from 'react-router-dom';
import './AuthLinks.css';

export default function AuthLinks() {
  return (
    <nav>
      <ul className="auth-links">
        <li className="auth-links__link-item">
          <Link to="/movies" className="auth-links__link account__link_marked">Фильмы</Link>
        </li>
        <li className="auth-links__link-item">
          <Link to="/saved-movies" className="auth-links__link">Сохранённые фильмы</Link>
        </li>
        <li className="auth-links__link-item account">
          <Link to="/profile" className="account__link account__link_marked">
            <p className="account__text">Аккаунт</p>
            <div className="account__icon" />
          </Link>
        </li>
      </ul>
    </nav>
  );
}
