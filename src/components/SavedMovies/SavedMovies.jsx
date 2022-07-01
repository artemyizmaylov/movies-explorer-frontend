import React, { useState, useEffect, useContext } from 'react';
import './SavedMovies.css';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import SearchForm from '../SearchForm/SearchForm';
import Preloader from '../Preloader/Preloader';
import mainApi from '../../utils/MainApi';
import searchFilter from '../../utils/searchFilter';
import TooltipContext from '../../context/TooltipContext';
import { NO_CONNECTION_MESSAGE, NOT_FOUND_MESSAGE } from '../../utils/constants';

export default function SavedMovies() {
  const [movies, setMovies] = useState(JSON.parse(localStorage.getItem('savedMovies')) || []);
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const { setTooltipMessage } = useContext(TooltipContext);

  const handleSearch = (query, isShort) => {
    setLoading(true);
    setErrorMessage('');

    const savedMovies = JSON.parse(localStorage.getItem('savedMovies'));

    const filtered = searchFilter(savedMovies, query, isShort);

    if (filtered.length === 0) {
      setErrorMessage(NOT_FOUND_MESSAGE);
    }

    setMovies(filtered);
    setLoading(false);
  };

  useEffect(() => {
    setLoading(true);

    mainApi.getFilms()
      .then((savedMovies) => {
        const user = localStorage.getItem('userId');
        const ownMovies = savedMovies.filter((film) => film.owner === user);
        localStorage.setItem('savedMovies', JSON.stringify(ownMovies));
        setLoading(false);
      })
      .catch(() => setTooltipMessage(NO_CONNECTION_MESSAGE));
  }, []);

  return (
    <div className="saved-movies">
      <Header />
      <SearchForm
        handleSearch={handleSearch}
      />
      {loading
        ? <Preloader />
        : <MoviesCardList movies={movies} errorMessage={errorMessage} />}
      <Footer />
    </div>
  );
}
