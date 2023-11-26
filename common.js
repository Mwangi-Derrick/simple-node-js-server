const http = require('http');
http.createServer((req, res) => {
    res.writeHead(200, { 'content-type': 'text/html' });
    res.end('Hello world')
    console.log('http://localhost:3000')
}).listen(3000)

