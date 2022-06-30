import { MOVIES_API_URL } from './constants';

export default function getFilms() {
  return fetch(MOVIES_API_URL, { method: 'GET' })
    .then((res) => (res.ok ? res.json() : Promise.reject(res)));
}
