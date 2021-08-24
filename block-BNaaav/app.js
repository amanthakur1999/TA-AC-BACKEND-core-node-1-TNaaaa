// var http = require('http');
// var fs = require('fs');
// var server = http.createServer(handleServer);

// function handleServer(req, res) {
//   console.log(req.method, req.url);
//   if (req.method === 'GET' && req.url === '/index') {
//     res.setHeader('Content-Type', 'type/html');
//     fs.createReadStream('./index.html').pipe(res);
//   }
//   if (req.method === 'GET' && req.url === '/about') {
//     res.setHeader('Content-Type', 'type/html');
//     fs.createReadStream('./about.html').pipe(res);
//   }
//   if (req.url.split('.').pop() === 'css') {
//     // set header for css file
//     res.setHeader('Content-Type', 'text/css');
//     // read css file and send it in response
//     fs.readFile('./assets/stylesheets/' + req.url, (err, content) => {
//       if (err) return console.log(err);
//       res.end(content);
//     });
//   }
// }

// server.listen(3000, () => {
//   console.log(`sever listener on port 3000`);
// });
let http = require('http');
let file = require('fs');
let server = http.createServer((req, res) => {
  console.log(req.method, req.url);
  if ((req.method === 'GET', req.url === '/')) {
    file.readFile('./index.html', (err, content) => {
      if (err) console.log(err);
      res.setHeader('Content-Type', 'text/html');
      res.end(content);
    });
  } else if ((req.method === 'GET', req.url === '/about')) {
    file.readFile('./about.html', (err, content) => {
      if (err) console.log(err);
      res.setHeader('Content-Type', 'text/html');
      res.end(content);
    });
  } else if (req.url.split('.').pop() === 'css') {
    // set header for css file
    res.setHeader('Content-Type', 'text/css');
    // read css file and send it in response
    file.readFile('./assets/stylesheets/' + req.url, (err, content) => {
      if (err) return console.log(err);
      res.end(content);
    });
  } else {
    res.statusCode = 400;
    res.end('Page is Not Found');
  }
});
server.listen(3000, () => {
  console.log('server is running fine');
});
