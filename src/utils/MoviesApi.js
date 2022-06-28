import { moviesApiUrl } from './constants';

export default function getFilms() {
  return fetch(moviesApiUrl, { method: 'GET' }).then((res) => res.json());
}
