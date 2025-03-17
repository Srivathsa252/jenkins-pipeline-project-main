const http = require('http');
const hostname = 'localhost';
const port = 9090;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  res.end(`
    <!DOCTYPE html>
    <html>
      <head>
        <title>Hello from Node.js</title>
      </head>
      <body>
        <h3>Hello!</h3>
        <p>This is srivathsa, and my roll number is 2022BCD0020</p>
        <p>I have successfully completed the DevOps pipeline assignment, incorporating Git, SonarQube, Docker, and deployment.</p>
      </body>
    </html>
  `);
});

server.listen(port, hostname, () => {
  console.log(`Server is running at http://${hostname}:${port}/`);
});
