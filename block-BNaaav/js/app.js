var http = require('http');
var fs = require('fs');
var server = http.createServer(handleServer);

function handleServer(req, res) {
  console.log(req.method, req.url);
  if (req.method === 'GET' && req.url === '/index') {
    res.setHeader('Content-Type', 'type/html');
    fs.createReadStream('../application/index.html').pipe(res);
  } else if (req.method === 'GET' && req.url === '/about') {
    res.setHeader('Content-Type', 'type/html');
    fs.createReadStream('./about.html').pipe(res);
  }
}

server.listen(3000, () => {
  console.log(`sever listener on port 3000`);
});
