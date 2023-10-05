/*
Creates a 'Student' interface, which is used to define the data type of each student 
object and used Vanilla javascript to render a row in the table for each 
elements(students) in the array
*/

//Student interface definition
export interface Student{
    firstName: string;
    lastName: string;
    age: number;
    location: string;
}

//Create two student objects using the interface specified above
const student1: Student = {
    firstName: 'Adele',
    lastName: 'Doyle',
    age: 32,
    location: 'Abuja',
}

const student2: Student = {
    firstName: 'Bukola',
    lastName: 'Joe',
    age: 19,
    location: 'Los Angeles',
}

//An array of the 'Student' containing the student objects
const studentsList: Student[] = [student1, student2];

//Creates a table with vanilla javascript using DOM methods
const table = document.createElement('table');
document.body.appendChild(table);

//create table head and append it to the table element
const thead = document.createElement('thead');
table.appendChild(thead);

//creates table head row and append it to the table head: displays the First Name and Location
const headerRow = document.createElement('tr');
thead.appendChild(headerRow);

//craetes header for object properties 'FirstName' and 'Location' columns(table head text)
const headerA = document.createElement('th');
headerA.textContent = 'First Name';
headerRow.appendChild(headerA);

const headerB = document.createElement('th');
headerB.textContent = 'Location';
headerRow.appendChild(headerB);

const tableBody = document.createElement('tbody');
table.appendChild(tableBody);

studentsList.forEach((student) => {//forEach method will perform the below on each arary elements.
    //creates a row in the tableBody
    const row = document.createElement('tr');

    //add first data in the row
    const data_1 = document.createElement('td');
    data_1.textContent = student.firstName;
    row.appendChild(data_1);

    //add second data in the row
    const data_2 = document.createElement('tr');
    data_2.textContent = student.location;
    row.appendChild(data_2);

    tableBody.appendChild(row);
})
