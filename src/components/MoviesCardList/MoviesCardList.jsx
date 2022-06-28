import React, { useEffect, useState } from 'react';
import './MoviesCardList.css';
import { useLocation } from 'react-router-dom';
import MoviesCard from '../MoviesCard/MoviesCard';

export default function MoviesCardList({ movies, errorMessage }) {
  const [maxMovies, setMaxMovies] = useState(0);
  const [step, setStep] = useState(0);
  const location = useLocation();

  const showMoreMovies = () => {
    setMaxMovies(maxMovies + step);
  };

  const setCardsTemplate = () => {
    const width = window.innerWidth;

    if (location.pathname === '/saved-movies') {
      setMaxMovies(movies.length);
      return;
    }

    if (width >= 1280) {
      setMaxMovies(12);
      setStep(4);
    } else if (width >= 990) {
      setMaxMovies(9);
      setStep(3);
    } else if (width >= 630) {
      setMaxMovies(8);
      setStep(2);
    } else {
      setMaxMovies(5);
      setStep(2);
    }
  };

  useEffect(() => {
    setCardsTemplate();

    window.addEventListener('resize', () => {
      setTimeout(() => {
        setCardsTemplate();
      }, 500);
    });
  }, []);

  return (
    <div className="movies-card-list">
      {errorMessage
        ? <p className="movies-card-list__error-message">{errorMessage}</p>
        : (
          <ul className="movies-card-list__movies-container">
            {movies.map((movie, index) => {
              if (index < maxMovies) {
                return (
                  <MoviesCard
                    key={movie.id || movie.movieId}
                    movie={movie}
                  />
                );
              }
              return null;
            })}
          </ul>
        )}
      {movies.length > maxMovies && location.pathname !== '/saved-movies' && (
      <div className="movies-card-list__button-container">
        <button
          className="movies-card-list__more-button"
          type="button"
          onClick={showMoreMovies}
        >
          Ещё
        </button>
      </div>
      )}

    </div>
  );
}
