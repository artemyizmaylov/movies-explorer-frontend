import React, { useState, useEffect, useContext } from 'react';
import './SavedMovies.css';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import SearchForm from '../SearchForm/SearchForm';
import Preloader from '../Preloader/Preloader';
import mainApi from '../../utils/MainApi';
import UserContext from '../../context/UserContext';
import searchFilter from '../../utils/searchFilter';

export default function SavedMovies() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const { currentUser } = useContext(UserContext);

  const handleSearch = (query, isShort) => {
    setLoading(true);
    setErrorMessage('');

    const filtered = searchFilter(movies, query, isShort);
    setMovies(filtered);

    if (filtered.length === 0) {
      setErrorMessage('Ничего не найдено');
    }
    setLoading(false);
  };

  useEffect(() => {
    mainApi.getFilms()
      .then((savedMovies) => {
        setMovies(savedMovies);
        localStorage.setItem('savedMovies', JSON.stringify(savedMovies));

        const ownMovies = savedMovies.filter((film) => film.owner === currentUser._id);
        setMovies(ownMovies);
      });
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
