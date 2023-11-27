const http = require('http');
const fileSystem = require('fs');
http.createServer((req, res) => {
    fileSystem.readFile('demo.html', (error, data) => {
        if (error) { 
            res.writeHead(500, { 'content-type': 'text/plain' });
            res.write('server error')
            res.end()
        }
        else {
            res.writeHead(200, { 'content-type': 'text/html' });
            res.write(data)
            res.end()
        }
    })
    console.log('http://localhost:3000')
}).listen(3000)

