import React, { useContext, useEffect, useState } from 'react';
import './MoviesCard.css';
import { useLocation } from 'react-router-dom';
import mainApi from '../../utils/MainApi';
import TooltipContext from '../../context/TooltipContext';
import { noConnectionMessage } from '../../utils/constants';

export default function MoviesCard({ movie }) {
  const [saved, setSaved] = useState(false);
  const [mainId, setMainId] = useState(movie._id);
  const location = useLocation();

  const { setTooltipMessage } = useContext(TooltipContext);

  const handleSetSaved = () => {
    const newMovie = {};
    const { image, id } = movie;

    Object.assign(newMovie, movie);

    delete newMovie.id;
    delete newMovie.created_at;
    delete newMovie.updated_at;

    if (!newMovie.nameEN) {
      newMovie.nameEN = '...';
    }

    if (!newMovie.country) {
      newMovie.country = '...';
    }

    if (!saved) {
      mainApi.saveFilm({
        ...newMovie,
        image: `https://api.nomoreparties.co/${image.url}`,
        thumbnail: `https://api.nomoreparties.co/${image.formats.thumbnail.url}`,
        movieId: id,
      })
        .then((savedMovie) => {
          setSaved(true);
          setMainId(savedMovie._id);

          let savedMovies = JSON.parse(localStorage.getItem('savedMovies'));

          if (!savedMovies) {
            savedMovies = [];
          }

          savedMovies.push(savedMovie);
          localStorage.setItem('savedMovies', JSON.stringify(savedMovies));
        })
        .catch(() => setTooltipMessage(noConnectionMessage));
    } else {
      mainApi.deleteFilm(mainId)
        .then((res) => {
          setSaved(false);
          setMainId(movie._id);

          const savedMovies = JSON.parse(localStorage.getItem('savedMovies'));
          const index = savedMovies.forEach((film, i) => {
            if (film._id === res._id) {
              return i;
            }
            return null;
          });

          savedMovies.pop(index);
          localStorage.setItem('savedMovies', JSON.stringify(savedMovies));
        })
        .catch(() => setTooltipMessage(noConnectionMessage));
    }
  };

  const handleDelete = (evt) => {
    mainApi.deleteFilm(movie._id)
      .then((res) => {
        if (location.pathname === '/saved-movies') {
          evt.target.closest('.movies-card').remove();
        }

        setSaved(false);

        const savedMovies = JSON.parse(localStorage.getItem('savedMovies'));
        const index = savedMovies.forEach((film, i) => {
          if (film._id === res._id) {
            return i;
          }
          return null;
        });

        savedMovies.pop(index);
        localStorage.setItem('savedMovies', JSON.stringify(savedMovies));
      })
      .catch(() => setTooltipMessage(noConnectionMessage));
  };

  useEffect(() => {
    const savedMovies = JSON.parse(localStorage.getItem('savedMovies'));

    if (savedMovies) {
      savedMovies.forEach((savedMovie) => {
        if (savedMovie.movieId === movie.id) {
          setSaved(true);
          setMainId(savedMovie._id);
        }
      });
    }
  }, []);

  return (
    <li className="movies-card">
      <a href={movie.trailerLink} target="_blank" rel="noreferrer">
        <img
          className="movies-card__image"
          src={location.pathname === '/movies'
            ? `https://api.nomoreparties.co/${movie.image.url}`
            : movie.image}
          alt={movie.image.name}
        />
      </a>
      <div className="movies-card__info">
        <h3 className="movies-card__heading movies-card__text">{movie.nameRU}</h3>
        <p className="movies-card__duration movies-card__text">
          {`${Math.floor(movie.duration / 60)}ч${movie.duration % 60}м`}
        </p>
        {location.pathname !== '/saved-movies' ? (
          <button
            className={`movies-card__button movies-card__save-button ${saved && 'movies-card__save-button_active'}`}
            type="button"
            aria-label="Сохранить"
            onClick={handleSetSaved}
          />
        ) : (
          <button
            className="movies-card__button movies-card__delete-button"
            type="button"
            aria-label="Сохранить"
            onClick={handleDelete}
          />
        )}
      </div>
    </li>
  );
}
