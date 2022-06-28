import React, { useEffect, useState } from 'react';
import './Movies.css';
import Header from '../Header/Header';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Footer from '../Footer/Footer';
import Preloader from '../Preloader/Preloader';
import getFilms from '../../utils/MoviesApi';
import mainApi from '../../utils/MainApi';
import searchFilter from '../../utils/searchFilter';
import { moviesMessage, notFoundMessage } from '../../utils/constants';

export default function Movies() {
  const [movies, setMovies] = useState(JSON.parse(localStorage.getItem('movies')) || []);
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const filter = (query, isShort) => {
    const storedMovies = JSON.parse(localStorage.getItem('movies'));

    const filtered = searchFilter(storedMovies, query, isShort);
    if (filtered.length === 0) {
      setErrorMessage('Ничего не найдено');
      return;
    }

    setMovies(filtered);
  };

  const handleSearch = (query, isShort) => {
    setLoading(true);
    setErrorMessage(notFoundMessage);

    const storedMovies = JSON.parse(localStorage.getItem('movies'));

    if (!storedMovies) {
      getFilms()
        .then((films) => {
          localStorage.setItem('movies', JSON.stringify(films));
          filter(query, isShort);
        })
        .catch(() => {
          setErrorMessage(moviesMessage);
        });
    } else {
      filter(query, isShort);
    }

    setLoading(false);
  };

  useEffect(() => {
    mainApi.getFilms()
      .then((films) => {
        if (films.length > 0) {
          localStorage.setItem('savedMovies', JSON.stringify(films));
        }
      })
      .catch(() => {
        setErrorMessage(moviesMessage);
      });
  }, []);

  return (
    <div className="movies">
      <Header />
      <SearchForm handleSearch={handleSearch} />
      {loading
        ? <Preloader />
        : <MoviesCardList movies={movies} errorMessage={errorMessage} />}
      <Footer />
    </div>
  );
}
