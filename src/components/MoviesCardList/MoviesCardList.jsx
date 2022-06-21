import React from 'react';
import './MoviesCardList.css';
import { useLocation } from 'react-router-dom';
import MoviesCard from '../MoviesCard/MoviesCard';

export default function MoviesCardList() {
  const location = useLocation();

  return (
    <div className="movies-card-list">
      <ul className="movies-card-list__movies-container">
        <MoviesCard />
        <MoviesCard />
        <MoviesCard />
        <MoviesCard />
        <MoviesCard />
      </ul>
      {location.pathname !== '/saved-movies' && (
      <div className="movies-card-list__button-container">
        <button className="movies-card-list__more-button" type="button">Ещё</button>
      </div>
      )}
    </div>
  );
}
