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
import { noConnectionMessage, notFoundMessage } from '../../utils/constants';

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
    setMovies(filtered);

    if (filtered.length === 0) {
      setErrorMessage(notFoundMessage);
    }
    setLoading(false);
  };

  useEffect(() => {
    mainApi.getFilms()
      .then((savedMovies) => {
        const user = localStorage.getItem('userId');
        const ownMovies = savedMovies.filter((film) => film.owner === user);
        localStorage.setItem('savedMovies', JSON.stringify(ownMovies));
      })
      .catch(() => setTooltipMessage(noConnectionMessage));
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
