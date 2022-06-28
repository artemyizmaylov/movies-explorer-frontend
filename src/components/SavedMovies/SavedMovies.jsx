import React, { useState, useEffect } from 'react';
import './SavedMovies.css';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import SearchForm from '../SearchForm/SearchForm';
import Preloader from '../Preloader/Preloader';
import mainApi from '../../utils/MainApi';
import searchFilter from '../../utils/searchFilter';

export default function SavedMovies() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleSearch = (query, isShort) => {
    setLoading(true);
    setErrorMessage('');

    const savedMovies = JSON.parse(localStorage.getItem('savedMovies'));

    const filtered = searchFilter(savedMovies, query, isShort);
    setMovies(filtered);

    if (filtered.length === 0) {
      setErrorMessage('Ничего не найдено');
    }
    setLoading(false);
  };

  useEffect(() => {
    mainApi.getFilms()
      .then((savedMovies) => {
        localStorage.setItem('savedMovies', JSON.stringify(savedMovies));
        const user = localStorage.getItem('userId');

        const ownMovies = savedMovies.filter((film) => film.owner === user);
        setMovies(ownMovies);
      })
      .catch((err) => console.log(err));
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
