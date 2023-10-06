"use strict";
exports.__esModule = true;
exports.teachClass = exports.executeWork = exports.isDirector = exports.createEmployee = exports.Teacher = exports.Director = void 0;
//A class 'Director' that will implement 'DirectorInterface':
var Director = /** @class */ (function () {
    function Director() {
    }
    //function whose type is neither void, any or undefined must return a value(so i returned '')
    Director.prototype.workFromHome = function () {
        return ('Working from home');
    };
    Director.prototype.getCoffeeBreak = function () {
        return '';
    };
    Director.prototype.workDirectorTasks = function () {
        return ('Getting to director tasks');
    };
    //You can add a method not specified in the interface...
    Director.prototype.getToWork = function () {
        return ('Getting a coffee break');
    };
    return Director;
}());
exports.Director = Director;
//A class Teacher that will implement TeacherInterface
var Teacher = /** @class */ (function () {
    function Teacher() {
    }
    Teacher.prototype.workFromHome = function () {
        return ('Cannot work from home');
    };
    Teacher.prototype.getCoffeeBreak = function () {
        return ('Cannot have a break');
    };
    Teacher.prototype.workTeacherTasks = function () {
        return ('Getting to work');
    };
    return Teacher;
}());
exports.Teacher = Teacher;
/*if salary is a number and less than 500 - It should return a new Teacher.
Otherwise it should return a Director */
function createEmployee(salary) {
    // const dir = new Director();
    // const teacher = new Teacher();
    if (typeof salary === 'number' && salary < 500) {
        return new Teacher;
    }
    return new Director;
}
exports.createEmployee = createEmployee;
//USAGE: createEmployee function usage
console.log(createEmployee(200));
console.log(createEmployee(1000));
console.log(createEmployee('$500'));
//Checks if 'employee' is an instance of the 'Director' class or a subclass of 'Director'.
//it uses a union type i.e. 'employee can either be a Director or teacher type.
//If employee is an instance of Director or a subclass of Director, the expression evaluates 
//to true; otherwise, it evaluates to false.
function isDirector(employee) {
    return employee instanceof Director;
}
exports.isDirector = isDirector;
function executeWork(employee) {
    if (isDirector(employee)) {
        //I have to associate(as) the employee param with Director class to call Director's method
        //even though the check returns true that 'employee' is an instance of Director class.
        return employee.workDirectorTasks();
    }
    else {
        return employee.workTeacherTasks();
    }
}
exports.executeWork = executeWork;
//USAGE: of 'createEmployee' function as an argument to executeWork function
console.log(executeWork(createEmployee(200)));
console.log(executeWork(createEmployee(1000)));
function teachClass(todayClass) {
    if (todayClass === 'Math')
        return 'Teaching Math';
    return 'Teaching History';
}
exports.teachClass = teachClass;
console.log(teachClass('Math'));
console.log(teachClass('History'));
