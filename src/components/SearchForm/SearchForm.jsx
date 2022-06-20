import React, { useState } from 'react';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';
import './SearchForm.css';

export default function SearchForm() {
  const [shorts, setShorts] = useState(false);

  const checkboxHandler = () => {
    setShorts(!shorts);
  };

  const submitHandler = (evt) => {
    evt.preventDefault();
  };

  return (
    <form className="search-form" name="search" onSubmit={submitHandler}>
      <div className="search-form__container">
        <label className="search-form__label" htmlFor="search-query">
          <div className="search-form__icon" htmlFor="search-query" />
          <input className="search-form__input search-form__text" name="search-query" id="search-query" type="text" placeholder="Фильм" />
        </label>
        <button className="search-form__button" type="submit" aria-label="Искать" />
      </div>
      <label className="search-form__checkbox" htmlFor="shorts">
        <FilterCheckbox value={shorts} handler={checkboxHandler} />
        <span className="search-form__text">Короткометражки</span>
      </label>
    </form>
  );
}
