import React from 'react';
import './MoviesCardList.css';
import MoviesCard from '../MoviesCard/MoviesCard';

export default function MoviesCardList() {
  return (
    <div className="movies-card-list">
      <ul className="movies-card-list__movies-container">
        <MoviesCard />
        <MoviesCard />
        <MoviesCard />
      </ul>
      <div className="movies-card-list__button-container">
        <button className="movies-card-list__more-button" type="button">Ещё</button>
      </div>
    </div>
  );
}
