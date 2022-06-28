export default function searchFilter(array, query, short) {
  const filtered = array.filter((element) => element.nameRU.includes(query));

  if (short) {
    return filtered.filter((element) => element.duration <= 40);
  }

  return filtered;
}
