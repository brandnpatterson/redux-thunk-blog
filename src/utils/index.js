export const objectify = (arr, id) => {
  const obj = {};

  arr.map(i => !obj[i.id] && (obj[i.id] = i));

  return obj;
};
