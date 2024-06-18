const http = require('http');
const fs = require('fs').promises;

const app = http.createServer(async (req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');

  if (req.url === '/') {
    res.end('Hello Holberton School!');
  } else if (req.url === '/students') {
    const database = process.argv[2];
    if (!database) {
      res.statusCode = 400;
      res.end('Error: Database file not provided');
      return;
    }

    try {
      const data = await fs.readFile(database, 'utf-8');
      const lines = data.trim().split('\n').filter(line => line.trim() !== '');

      if (lines.length <= 1) {
        res.write('This is the list of our students\n');
        res.end('Number of students: 0');
        return;
      }

      const students = [];
      const csStudents = [];
      const sweStudents = [];

      for (let i = 1; i < lines.length; i++) {
        const [firstname, , , field] = lines[i].split(',');
        students.push(firstname);
        if (field === 'CS') {
          csStudents.push(firstname);
        } else if (field === 'SWE') {
          sweStudents.push(firstname);
        }
      }

      res.write('This is the list of our students\n');
      res.write(`Number of students: ${students.length}\n`);
      res.write(`Number of students in CS: ${csStudents.length}. List: ${csStudents.join(', ')}\n`);
      res.end(`Number of students in SWE: ${sweStudents.length}. List: ${sweStudents.join(', ')}`);
    } catch (err) {
      res.statusCode = 500;
      res.end('Error: Cannot load the database');
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
