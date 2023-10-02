function getListStudents() {
  const arr = [
    { id: 1, firstName: 'Guillaume', location: 'San Francisco' },
    { id: 2, firstName: 'James', location: 'Columbia' },
    { id: 5, firstName: 'Serena', location: 'San Francisco' },
  ];

  // return arr; // This also works

  // I pushed into this new array because for...of loop will onl return the first element in the arr
  const newArr = [];
  for (const i of arr) {
    newArr.push(i);
  }
  return newArr;
}

export default getListStudents;
