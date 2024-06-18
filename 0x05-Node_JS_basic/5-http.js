const http = require('http');
const fs = require('fs').promises;

const app = http.createServer(async (req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');

  if (req.url === '/') {
    res.end('Hello Holberton School!');
  } else if (req.url === '/students') {
    try {
      const dataPath = process.argv[2]; // Assuming database file path is passed as argument
      const data = await fs.readFile(dataPath, 'utf-8');
      const lines = data.trim().split('\n').filter(line => line.trim() !== '');

      if (lines.length === 0) {
        res.end('No students found in the database.');
        return;
      }

      const students = [];
      const fields = {};

      for (let i = 0; i < lines.length; i++) {
        const parts = lines[i].split(',');
        if (parts.length >= 4) {
          const firstname = parts[0].trim();
          const field = parts[3].trim();
          students.push({ firstname, field });

          if (!fields[field]) {
            fields[field] = [];
          }
          fields[field].push(firstname);
        }
      }

      let response = 'This is the list of our students\n';

      response += `Number of students: ${students.length}\n`;

      for (const field in fields) {
        if (Object.hasOwnProperty.call(fields, field)) {
          const studentList = fields[field];
          response += `Number of students in ${field}: ${studentList.length}. List: ${studentList.join(', ')}\n`;
        }
      }

      res.end(response);
    } catch (err) {
      console.error('Error:', err.message);
      res.statusCode = 500;
      res.end('Internal Server Error');
    }
  } else {
    res.statusCode = 404;
    res.end('Not Found');
  }
});

app.listen(1245, () => {
  console.log('Server running at http://localhost:1245/');
});

module.exports = app;
