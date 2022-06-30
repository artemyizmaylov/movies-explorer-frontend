import { MAX_SHORTS_DURATION } from './constants';

export default function searchFilter(array, query, short) {
  if (array.length === 0 || !array) {
    return [];
  }

  const filtered = array.filter((element) => element.nameRU
    .toLowerCase()
    .includes(query.toLowerCase()));

  if (short) {
    return filtered.filter((element) => element.duration <= MAX_SHORTS_DURATION);
  }

  return filtered;
}
