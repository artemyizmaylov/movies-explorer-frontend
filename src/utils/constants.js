// http://localhost:3001/signup
// https://api.favorite-movies.nomoredomains.xyz
export const mainApiUrl = 'http://localhost:3000';
export const moviesApiUrl = 'https://api.nomoreparties.co/beatfilm-movies';
export const namePattern = /^[a-zA-Zа-яА-Я\s-]+$/;
export const emailPattern = /^[\w]+@[a-zA-Z]+\.[a-zA-Z]{1,3}$/;

export const noConnectionMessage = 'Нет соединения с сервером';
export const notFoundMessage = 'Ничего не найдено';
export const emailExistMessage = 'Email уже зарегистрирован';
export const successUpdateMessage = 'Данные успешно обновлены';
export const moviesMessage = `Во время запроса произошла ошибка. 
  Возможно, проблема с соединением или сервер недоступен.
  Подождите немного и попробуйте ещё раз`;
