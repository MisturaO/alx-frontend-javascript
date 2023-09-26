export default function appendToEachArrayValue (array, appendString) {
  const newArray = [];
  for (const idx of array) {
    array = appendString + idx;
    newArray.push(array);
  }

  return newArray;
}
