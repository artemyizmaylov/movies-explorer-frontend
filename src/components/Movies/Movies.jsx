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

export default function Movies() {
  const [movies, setMovies] = useState(JSON.parse(localStorage.getItem('movies')) || []);
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const message = `Во время запроса произошла ошибка. 
  Возможно, проблема с соединением или сервер недоступен.
  Подождите немного и попробуйте ещё раз`;

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
    setErrorMessage('');

    const storedMovies = JSON.parse(localStorage.getItem('movies'));

    if (!storedMovies) {
      getFilms()
        .then((films) => {
          localStorage.setItem('movies', JSON.stringify(films));
          filter(query, isShort);
        })
        .catch(() => setErrorMessage(message));
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
      .catch((err) => console.log(err));
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
