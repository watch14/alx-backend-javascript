const fs = require('fs');

const countStudents = (path) => {
  try {
    const data = fs.readFileSync(path, 'utf-8').trim();
    const lines = data.split('\n');

    const students = lines.filter(line => line.trim() !== '');

    if (students.length <= 1) {
      console.log('Number of students: 0');
      return;
    }

    const count = students.length - 1;
    console.log(`Number of students: ${count}`);

    const fields = {};

    for (let i = 1; i < students.length; i++) {
      const line = students[i];
      const [firstname, , , field] = line.split(',');

      if (!fields[field]) {
        fields[field] = [];
      }

      fields[field].push(firstname);
    }

    for (const field in fields) {
      const studentList = fields[field];
      console.log(`Number of students in ${field}: ${studentList.length}. List: ${studentList.join(', ')}`);
    }
  } catch (err) {
    throw new Error('Cannot load the database');
  }
};

module.exports = countStudents;
