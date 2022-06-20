import React, { useState } from 'react';
import './MoviesCard.css';
import { useLocation } from 'react-router-dom';
import image from '../../images/test-image.png';

export default function MoviesCard() {
  const [saved, setSaved] = useState();
  const location = useLocation();

  const hangleActive = () => {
    setSaved(!saved);
  };

  const hangleDelete = () => {
    setSaved(false);
  };

  return (
    <li className="movies-card">
      <img className="movies-card__image" src={image} alt="33 слова о дизайне" />
      <div className="movies-card__info">
        <h3 className="movies-card__heading movies-card__text">33 слова о дизайне</h3>
        <p className="movies-card__duration movies-card__text">1ч42м</p>
        {location.pathname !== '/saved-movies' ? (
          <button
            className={`movies-card__button movies-card__save-button ${saved && 'movies-card__save-button_active'}`}
            type="button"
            aria-label="Сохранить"
            onClick={hangleActive}
          />
        ) : (
          <button
            className="movies-card__button movies-card__delete-button"
            type="button"
            aria-label="Сохранить"
            onClick={hangleDelete}
          />
        )}
      </div>
    </li>
  );
}
