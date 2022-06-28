import React, { useEffect, useState } from 'react';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';
import './SearchForm.css';

export default function SearchForm({ handleSearch }) {
  const [inputValue, setInputValue] = useState(localStorage.getItem('query') || '');
  const [shorts, setShorts] = useState(JSON.parse(localStorage.getItem('shorts')) || false);

  const [placeholderContent, setPlaceholderContent] = useState('Фильм');
  const [error, setError] = useState(false);

  const handleInput = (evt) => {
    setInputValue(evt.target.value);
  };

  const handleCheckbox = () => {
    setShorts(!shorts);
    handleSearch(inputValue, !shorts);
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();

    if (!inputValue) {
      setError(true);
      setPlaceholderContent('Нужно ввести ключевое слово');
      evt.target.elements['search-query'].focus();
      return;
    }

    setError(false);
    setPlaceholderContent('Фильм');

    localStorage.setItem('query', inputValue);

    handleSearch(inputValue, shorts);
  };

  useEffect(() => {
    localStorage.setItem('shorts', shorts);
  }, [shorts]);

  useEffect(() => {
    if (inputValue) {
      handleSearch(inputValue, shorts);
    }
  }, []);

  return (
    <form className="search-form" name="search" onSubmit={handleSubmit} noValidate>
      <div className="search-form__container">
        <label className="search-form__label" htmlFor="search-query">
          <div className="search-form__icon" htmlFor="search-query" />
          <input
            className={`search-form__input ${error && 'search-form__input_error'} search-form__text`}
            id="search-query"
            name="search-query"
            type="text"
            placeholder={placeholderContent}
            onChange={handleInput}
            value={inputValue}
            required
          />
        </label>
        <button className="search-form__button" type="submit" aria-label="Искать" />
      </div>
      <label className="search-form__checkbox" htmlFor="shorts">
        <FilterCheckbox
          value={shorts}
          onChange={handleCheckbox}
        />
        <span className="search-form__text">Короткометражки</span>
      </label>
    </form>
  );
}
