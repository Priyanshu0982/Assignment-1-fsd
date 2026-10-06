const http = require("http");

const server = http.createServer((req, res) => {
    console.log("Request received");

    setTimeout(() => {
        res.end("Request handled asynchronously");
    }, 2000);
});

server.listen(3000, () => {
    console.log("Node.js server running on port 3000");
});