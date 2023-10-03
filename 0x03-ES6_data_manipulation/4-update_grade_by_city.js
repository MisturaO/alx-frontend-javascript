/*
Combines two objects:
    Returns an array of students for a specific city with their new grade:
    
    It should accept a list of students (from 'getListStudents'), a 'city '(String),
    and 'newGrades'(Array of “grade” objects) as parameters.
    If a student doesn’t have grade in newGrades, the final grade should be N/A.
    You must use filter and map combined.
    'newGrades' is an array of objects with this format:
    {
        studentId: 31,
        grade: 78,
    }
  */

function updateStudentGradeByCity(array, city, newGrades) {
  if (!Array.isArray) {
    return [];
  }

  const arr = array.filter((student) => student.location === city)
    .map((studentGrade) => {
      let updateGrade = null;
      // I have to loop through the newGrades array to access the grade because
      // map doesn't have the functionality to handle two arrays at the same time.
      // Then stored value in 'updateGrade'
      for (const objGrade of newGrades) {
        if (objGrade.studentId === studentGrade.id) {
          updateGrade = objGrade.grade;
          break; // stops the search when a match is found
        }
      }

      if (updateGrade !== null) {
        const newObj = {
          ...studentGrade,
          grade: updateGrade,
        };
        return newObj;
      }

      return {
        ...studentGrade,
        grade: 'N/A',
      };
    });

  return arr;
}

export default updateStudentGradeByCity;
