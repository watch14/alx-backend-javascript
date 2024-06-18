const fs = require('fs').promises;

const countStudents = async (dataPath) => {
  try {
    const data = await fs.readFile(dataPath, 'utf-8');
    const lines = data.trim().split('\n').filter(line => line.trim() !== '');

    if (lines.length <= 1) {
      console.log('Number of students: 0');
      return;
    }

    const totalStudents = lines.length - 1;
    console.log(`Number of students: ${totalStudents}`);

    const fields = {};

    for (let i = 1; i < lines.length; i++) {
      const [firstname, , , field] = lines[i].split(',');
      if (!fields[field]) {
        fields[field] = [];
      }
      fields[field].push(firstname);
    }

    for (const field in fields) {
      if (Object.hasOwnProperty.call(fields, field)) {
        const studentList = fields[field];
        console.log(`Number of students in ${field}: ${studentList.length}. List: ${studentList.join(', ')}`);
      }
    }
  } catch (err) {
    console.error('Error:', err.message);
    throw new Error('Cannot load the database');
  }
};

module.exports = countStudents;
