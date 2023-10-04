/*
Create a function named 'setFromArray' that returns a Set from an array:
It accepts an argument (Array, of any kind of element).
*/

export default function setFromArray(array) {
  const newSet = new Set(array);
  return newSet;
}
