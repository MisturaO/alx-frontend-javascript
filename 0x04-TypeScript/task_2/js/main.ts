//DirectorInterface interface with the 3 expected methods:
export interface DirectorInterface{
    workFromHome(): string;
    getCoffeeBreak(): string;
    workDirectorTasks(): string;
}

//TeacherInterface interface with the 3 expected methods:
export interface TeacherInterface{
    workFromHome(): string;
    getCoffeeBreak(): string;
    workTeacherTasks():string;
}

//A class 'Director' that will implement 'DirectorInterface':
export class Director implements DirectorInterface{
    //function whose type is neither void, any or undefined must return a value(so i returned '')
    workFromHome(): string {
        return ('Working from home');
    }
    getCoffeeBreak(): string {
        return '';
    }
    workDirectorTasks(): string {
        return ('Getting to director tasks');
    }

    //You can add a method not specified in the interface...
    getToWork(){
        return ('Getting a coffee break');
    }

    // getName(){
    //     return 'Director';
    // }
}


//A class Teacher that will implement TeacherInterface
export class Teacher implements TeacherInterface{
    workFromHome(): string{
        return('Cannot work from home')
    }
    getCoffeeBreak(): string{
        return('Cannot have a break')
    }
    workTeacherTasks():string{
        return('Getting to work');
    }

    // getName(){
    //     return 'Teacher';
    // }
}

/*if salary is a number and less than 500 - It should return a new Teacher. 
Otherwise it should return a Director */
export function createEmployee(salary: string | number): (Director | Teacher){
    // const dir = new Director();
    // const teacher = new Teacher();

    if(typeof salary === 'number' && salary < 500){
        return new Teacher;
    }
    return new Director;
}


//USAGE: createEmployee function usage
console.log(createEmployee(200));
console.log(createEmployee(1000));
console.log(createEmployee('$500'));


//Checks if 'employee' is an instance of the 'Director' class or a subclass of 'Director'.
//it uses a union type i.e. 'employee can either be a Director or teacher type.
//If employee is an instance of Director or a subclass of Director, the expression evaluates 
//to true; otherwise, it evaluates to false.
export function isDirector(employee: (Director | Teacher)){
    return employee instanceof Director;
}

export function executeWork(employee: (Director | Teacher)){
    if(isDirector(employee)){
        //I have to associate(as) the employee param with Director class to call Director's method
        //even though the check returns true that 'employee' is an instance of Director class.
        return (employee as Director).workDirectorTasks();
    }else{
        return (employee as Teacher).workTeacherTasks();
    }
}

//USAGE: of 'createEmployee' function as an argument to executeWork function
console.log(executeWork(createEmployee(200)));
console.log(executeWork(createEmployee(1000)));


/*Defines a string literal type(i.e. variable) named 'Subjects' allowing a variable 
to have the value 'Math' or 'History' only. This means variable 'Subjects' can only 
have values 'Math' or 'History', any other won't be valid*/
export type Subjects = ('Math' | 'History');

/*The data type of function 'teachClass' parameter is 'Subjects' and that means 'todayClass' 
can only have the values 'Math' and 'History, and the function's return type is 'string' because
it returns a string value*/
export function teachClass(todayClass: Subjects): string{
    if(todayClass === 'Math') return 'Teaching Math';
    return 'Teaching History';
}

console.log(teachClass('Math'));
console.log(teachClass('History'));
