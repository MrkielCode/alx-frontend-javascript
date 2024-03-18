interface Teacher {
    firstName: string;
    lastName: string;
    fullTimeEmployee: boolean;
    yearOfExperinece?: number;
    location: string;
    [key: string]: any;
}

interface Directors extends Teacher {
    numberOfReports: number;
}

interface printTeacherFunction {
    (firstName: string, lastName: string): string;
  }

const teacher3: Teacher = {
    firstName: 'John',
    fullTimeEmployee: false,
    lastName: 'Doe',
    location: 'London',
    contract: false,
};

console.log(teacher3);

const director1: Directors = {
    firstName: 'John',
    lastName: 'Doe',
    location: 'London',
    fullTimeEmployee: true,
    numberOfReports: 17,
};

console.log(director1);


const printTeacher: printTeacherFunction = (firstName: string, lastName:string) => {
    return `${firstName.slice(0, 1).toUpperCase()}. ${lastName}`;
}

console.log(printTeacher('john', 'Doe'));


interface StudentClassInterface {
    lastName: string;
    firstName: string;
}

interface StudentClassConstructor {
    new (firstName: string, lastName:string): StudentClassInterface;
}
class StudentClass implements StudentClassInterface{

    lastName: string;
    firstName: string;

    constructor(lastName: string, firstName:string){
        this.firstName = firstName;
        this.lastName = lastName;
    }

    workOnHomework(): string{
        return 'Currently working';
    }

    displayName(): string{
        return this.firstName
    }
}

const student = new StudentClass('john', 'doe');
console.log(student.workOnHomework())
console.log(student.displayName())
console.log(student);