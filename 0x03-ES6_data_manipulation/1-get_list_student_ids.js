/*
Takes one argument (an array of objects) and this array is the same
format as getListStudents from the previous task.

    If the argument is not an array, the function will return an empty array.
    Returns an array of ids from a list of objects.
*/
export default function getListStudentIds(array) {
  if (!Array.isArray(array)) {
    return [];
  }

  // Using map to get the value of the first index of the objects and return it in a list
  const arr = array.map((obj) => Object.values(obj)[0]);
  return arr;
}
