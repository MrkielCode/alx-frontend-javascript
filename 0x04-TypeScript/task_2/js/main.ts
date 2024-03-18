interface DirectorInterface {
    workFromHome(): string;
    getCoffeeBreak(): string;
    workDirectorTasks(): string;
}

interface TeacherInterface {
    workFromHome(): string;
    getCoffeeBreak(): string;
    workTeacherTasks(): string;
}

class Director implements DirectorInterface {
    workFromHome(): string {
        return 'Working from home';
    }

    getCoffeeBreak(): string {
        return 'Getting a coffee break';
    }

    workDirectorTasks(): string {
        return 'Getting to director tasks';
    }
}

class Teacher implements TeacherInterface {
    workFromHome(): string {
        return 'Cannot work from home';
    }

    getCoffeeBreak(): string {
        return 'Cannot have a break'
    }

    workTeacherTasks(): string {
        return 'Getting to work';
    }
}


function createEmployee(salary: number | string): Director | Teacher {
    if (typeof salary === 'number' && salary < 500) {
      return new Teacher();
    } else {
      return new Director();
    }
}

console.log(createEmployee(200))
console.log(createEmployee(1000)); 
console.log(createEmployee('$500')); 


type Employee = Teacher | Director;


function isDirector(employee: Employee): employee is Director{
    return employee instanceof Director;
}

function executeWork(employee: Employee): void {
    if(isDirector(employee)){
        console.log(employee.workDirectorTasks());
    } else {
        console.log(employee.workTeacherTasks());
    }
}

executeWork(createEmployee(200));
executeWork(createEmployee(1000));

type Subject = 'Math' | 'History';

function teachClass(todayClass: Subject): string{
    if (todayClass === 'Math') {
        return 'Teaching Math'
    } else {
        return 'Teaching History'
    }
}

console.log(teachClass('Math'));
console.log(teachClass('History'));