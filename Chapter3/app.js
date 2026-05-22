const http = require('http');

const server = http.createServer((req, res) => {
    console.log(req.url);
    res.setHeader('Content-Type', 'text/html');

    res.end("Hello from Node.js server");
});

const PORT = 3000;

server.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});