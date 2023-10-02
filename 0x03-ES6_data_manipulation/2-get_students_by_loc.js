/*
This function filters out some values from a list of objects.
Returns an array of objects who are located in a specific city:
    It should accept a list of students (from getListStudents object)
    and a city (string) as parameters.

    You must use the filter function on the array.
    */

export default function getStudentsByLocation(array, city) {
  // location is the key to the stdent city inside the array passed to the param
  const filteredCity = array.filter((student) => student.location === city);
  return filteredCity;
}
