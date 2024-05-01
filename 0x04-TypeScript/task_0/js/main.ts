interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

const student1: Student {
  firstName: 'Monji';
  lastName: 'Zarga';
  age: 51;
  location: 'Parisienne';
}

const student2: Student {
  firstName: 'Marwa';
  lastName: 'Chefei';
  age: 30;
  location: 'Jandouba';
}

const studentsList: Student[] = [student1, student2];

const renderTable = (students: Student[]) => {
  const table = document.createElement('table');
  const tbody = document.createElement('tbody');

  students.forEach(student => {
    const row = document.createElement('tr');
    const firstNameCell = document.createElement('td');
    const locationCell = document.createElement('td');

    firstNameCell.textContent = student.firstName;
    locationCell.textContent = student.location;

    row.appendChild(firstNameCell);
    row.appendChild(locationCell);
    tbody.appendChild(row);
  });

  table.appendChild(tbody);
  document.body.appendChild(table);
};

renderTable(studentsList);
