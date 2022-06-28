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
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const message = `Во время запроса произошла ошибка. 
  Возможно, проблема с соединением или сервер недоступен.
  Подождите немного и попробуйте ещё раз`;

  const handleSearch = (query, isShort) => {
    setLoading(true);
    setErrorMessage('');

    getFilms()
      .then((films) => {
        const filtered = searchFilter(films, query, isShort);
        setMovies(filtered);

        if (filtered.length === 0) {
          setErrorMessage('Ничего не найдено');
        }

        localStorage.setItem('movies', JSON.stringify(filtered));
      })
      .catch(() => setErrorMessage(message))
      .finally(() => setLoading(false));
  };

  useEffect(() => {
    mainApi.getFilms().then((films) => {
      if (films.length > 0) {
        localStorage.setItem('savedMovies', JSON.stringify(films));
      }
    });

    const storedMovies = JSON.parse(localStorage.getItem('movies'));

    if (storedMovies) {
      setMovies(storedMovies);
    }
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
