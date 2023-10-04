/*
Remove a value(startString)from each of the strings in the set
*/

export default function cleanSet(set, startString) {
  if (typeof set !== 'object'
    || typeof startString !== 'string'
    || startString.length === 0) {
    return '';
  }

  const newList = [];

  for (const item of set) {
    if (item && item.startsWith(startString)) {
      const newString = item.slice(startString.length);
      newList.push(newString);
    }
  }
  return newList.join('-');
}
