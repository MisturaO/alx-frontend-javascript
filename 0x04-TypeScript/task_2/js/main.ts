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

    getName(){
        return 'Director';
    }
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

    getName(){
        return 'Teacher';
    }
}

/*if salary is a number and less than 500 - It should return a new Teacher. 
Otherwise it should return a Director */
export function createEmployee(salary: string | number){
    const dir = new Director();
    const teacher = new Teacher();

    if(typeof salary === 'number' && salary < 500){
        return teacher.getName();
    }
    return dir.getName();
}


//USAGE: createEmployee function usage
console.log(createEmployee(200));
console.log(createEmployee(1000));
console.log(createEmployee('$500'));
