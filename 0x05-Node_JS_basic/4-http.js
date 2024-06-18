const http = require('http');

const port = 1245;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello Holberton School!');
});

server.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});
