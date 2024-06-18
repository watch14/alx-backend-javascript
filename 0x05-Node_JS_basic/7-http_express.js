const express = require('express');
const fs = require('fs').promises;

const app = express();
const port = 1245;

app.get('/', (_req, res) => {
  res.send('Hello Holberton School!');
});

const countStudents = async (dataPath, res) => { // Added 'res' parameter to countStudents
  try {
    const data = await fs.readFile(dataPath, 'utf-8');
    const lines = data.trim().split('\n').filter(line => line.trim() !== '');

    if (lines.length <= 1) {
      console.log('Number of students: 0');
      return;
    }

    const totalStudents = lines.length - 1;
    res.write(`Number of students: ${totalStudents}\n`);

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
        res.write(`Number of students in ${field}: ${studentList.length}. List: ${studentList.join(', ')}\n`);
      }
    }
    res.end(); // End the response after sending all data
  } catch (err) {
    console.error('Error:', err.message);
    throw new Error('Cannot load the database');
  }
};

app.get('/students', (req, res) => { // Modified route handler for '/students'
  countStudents(process.argv[2], res); // Pass 'res' to countStudents
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});

module.exports = app;
