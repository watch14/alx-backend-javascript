const http = require('http');

const host = 'localhost';
const port = 1245;

const app = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello Holberton School!');
});

app.listen(port, host, () => {
  console.log(`Server running at http://localhost:${port}/`);
});

module.exports = app;
