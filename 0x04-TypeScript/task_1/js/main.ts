/*Attempts to modify the raedonly attributes after initialization(in the object 
using the interface) will result in TypeScript compilation errors.
     This ensures that certain attributes of the interface are immutable once 
     the object is created, and helps to enforce data integrity and preventing 
     accidental modification of critical data.
the '?' defies a optional property*/
//Teacher interface definition
export interface Teacher {
    readonly firstName: string; //should only be modifiable when initialized in obj using the iterf.
    readonly lastName: string; //only be modifiable when initialized in obj using the iterface.
    fullTimeEmployee: boolean; //Should always be defined in the object using the interface.
    yearsOfExperience?: number;//this attribute is optional. You can decide to or not define it.
    location: string;//This attribute should always be defined in the object using the interface.
    //index[] signature to add any attr not specified in this interface, in the obj refrencing it
    [key: string]: boolean | string | number | any;
}

//interface named 'Directors' that extends Teacher.
export interface Directors extends Teacher{
    numberOfReports: number;
}

export interface printTeacherFunction{
    (firstName: string, lastName: string): string;
}

//Function var with interface(referencing interface with anonymous function improves readability)
export const printTeacher: printTeacherFunction = (firstName, lastName) => {
    const firstLetter = firstName[0];
    return `${firstLetter} ${lastName}`;
}

console.log(printTeacher("John", "Doe"))

//A class (StudentClass) referencing Teacher typescript interface
export class StudentClass implements Teacher {
    //All the interface properties(non otpional) the class implements must be referenced.
    firstName: string;
    lastName: string;
    fullTimeEmployee: boolean;
    location: string;

    //The properties we need to be init with our objects(class instances) can be constructed here.
    constructor(firstName: string, lastName: string){
        this.firstName = firstName;
        this.lastName = lastName;
    }

    //class methods
    workOnHomework(){
        return('Currently working');
    }

    displayName(){
        return this.firstName;
    }
}