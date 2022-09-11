const http = require('http');

const port = 8081;

http.createServer((request, response) => {
    response.writeHead(200, { 'Content-type': 'text/html' }); //200 code means ok
    response.write("<h1>Hello, this is from my server</h1>");
    response.end();
}).listen(port, () => {
    console.log(`Nodejs server started on port ${port}`);
});

//http://localhost:8081