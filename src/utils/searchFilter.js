function getShorts(array) {
  return array.filter((element) => element.duration <= 40);
}

export default function searchFilter(array, query, isShort) {
  let newArray = array;

  if (isShort) {
    newArray = getShorts(array);
  }

  return newArray.filter((element) => element.nameRU.includes(query));
}
