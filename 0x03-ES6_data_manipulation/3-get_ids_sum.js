/*
Returns the sum of all the student ids:
    It should accept a list of students (from getListStudents) as a parameter.
    You must use the reduce function on the array.
 */

function getStudentIdsSum(array) {
  if (!Array.isArray(array)) {
    return [];
  }

  // Created a new list for the values of all id's in the list of objects.
  const arr = array.map((obj) => Object.values(obj)[0])
    .reduce((accumulator, currentValue) => accumulator + currentValue, 0); // sum up the values

  return arr;
}

export default getStudentIdsSum;
