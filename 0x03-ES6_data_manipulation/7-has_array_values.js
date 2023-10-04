export default function hasValuesFromArray(set, array) {
  /* .every() iterates through the array and use a callback function to
    check for a condition(here we use the 'Set' object method .has() to check
    if all the elements in the array exist within the set.)
    */
  return array.every((arr) => set.has(arr));
}
