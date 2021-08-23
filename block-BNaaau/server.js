var http = require('http');
var fs = require('fs');
http
  .createServer((req, res) => {
    console.log(req, res);
  })
  .listen(5000);

var server = http.createServer(handelServer);
function handelServer(req, res) {
  res.end('My first server in NodeJS');
}
server.listen(5100);

var server2 = http.createServer(handelServer);

server2.listen(7000, () => {
  console.log(`server listening on port 7000`);
});

http
  .createServer((req, res) => {
    res.statusCode = 202;
  })
  .listen(3333);

// http
//   .createServer((req, res) => {
//     res.setHeader('content-type', `text/html`);
//     res.end(`<h3>Welcome to altcampus</h3>`);
//   })
//   .listen(8000);

http
  .createServer((req, res) => {
    res.writeHead(201, { 'Content-type': 'text/html' });
    res.end(`<h3>Welcome to altcampus</h3>`);
  })
  .listen(8000);

// var server3 = http.createServer(handle);
// function handle(req, res) {
//   if (req.method === 'GET' && req.url === '/') {
//     res.end('Aman Thakur');
//   } else if (req.method === 'GET' && req.url === '/about') {
//     res.setHeader('Content-Type', 'type/html');
//     fs.createReadStream('./index.html').pipe(res);
//   }
// }
// server3.listen(2345);

var server4 = http.createServer(handle2);
function handle2(req, res) {
  if (req.method === 'GET' && req.url === '/users') {
    res.setHeader('Content-Type', 'type/html');

    res.end('<input type= "name" value = "name">');
  } else if (req.method === 'GET' && req.url === '/about') {
    res.setHeader('Content-Type', 'type/html');
    fs.createReadStream('./index.html').pipe(res);
  }
}
server4.listen(2345);
