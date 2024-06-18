const http = require('http');

const app = http.createServer((req, res) => {
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

    const fs = require('fs');
    const students = [];
    const csStudents = [];
    const sweStudents = [];

    fs.readFile(database, 'utf-8', (err, data) => {
      if (err) {
        res.statusCode = 500;
        res.end('Error: Cannot load the database');
        return;
      }

      const lines = data.split('\n').filter(line => line !== '');
      lines.slice(1).forEach(line => {
        const [firstname,,, field] = line.split(',');
        students.push(firstname);
        if (field === 'CS') {
          csStudents.push(firstname);
        } else if (field === 'SWE') {
          sweStudents.push(firstname);
        }
      });

      res.write('This is the list of our students\n');
      res.write(`Number of students: ${students.length}\n`);
      res.write(`Number of students in CS: ${csStudents.length}. List: ${csStudents.join(', ')}\n`);
      res.write(`Number of students in SWE: ${sweStudents.length}. List: ${sweStudents.join(', ')}`);
      res.end();
    });
  } else {
    res.statusCode = 404;
    res.end('Not Found');
  }
});

app.listen(1245, () => {
  console.log('Server running at http://localhost:1245/');
});

module.exports = app;
