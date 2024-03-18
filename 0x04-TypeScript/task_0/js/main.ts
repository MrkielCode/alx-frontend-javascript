interface Student {
    firstName: string;
    lastName: string;
    age: number;
    location: string;
}

const student1: Student = {
    firstName: 'john',
    lastName: 'Doe',
    age: 26,
    location: 'Aba'
};

const student2: Student = {
    firstName: 'Smith',
    lastName: 'joe',
    age: 30,
    location: '30'
}

const studentsList: Student[] = [student1, student2];


const renderTable = (students: Student[]) => {
    const table = document.createElement('table');
    const headerRow = table.insertRow();
    const header1 = document.createElement('th');
    const header2 = document.createElement('th');
    header1.textContent = 'First Name';
    header2.textContent = 'Last Name';
    headerRow.append(header1);
    headerRow.append(header2);

    students.forEach(student => {
        const row = table.insertRow()
        const cell1 = row.insertCell()
        const cell2 = row.insertCell()
        cell1.textContent = student.firstName;
        cell2.textContent = student.location;
        row.appendChild(cell1);
        row.appendChild(cell2);
    });

    document.body.appendChild(table);
}

renderTable(studentsList);