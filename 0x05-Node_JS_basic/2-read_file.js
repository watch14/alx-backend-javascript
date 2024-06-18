const fs = require('fs');

const countStudents = (path) => {
  try {
    // Read the file synchronously
    const data = fs.readFileSync(path, 'utf-8').trim();
    const lines = data.split('\n');

    // Filter out empty lines
    const students = lines.filter(line => line.trim() !== '');

    // If only header or no lines present
    if (students.length <= 1) {
      console.log('Number of students: 0');
      return;
    }

    // Log total number of students, excluding the header
    const count = students.length - 1;
    console.log(`Number of students: ${count}`);

    const fields = {};

    // Iterate over student data, starting from the second line
    for (let i = 1; i < students.length; i++) {
      const line = students[i];
      const [firstname, , , field] = line.split(',');

      if (!fields[field]) {
        fields[field] = [];
      }

      fields[field].push(firstname);
    }

    // Log number of students in each field along with their names
    for (const field in fields) {
      const studentList = fields[field];
      console.log(`Number of students in ${field}: ${studentList.length}. List: ${studentList.join(', ')}`);
    }
  } catch (err) {
    throw new Error('Cannot load the database');
  }
};

module.exports = countStudents;
