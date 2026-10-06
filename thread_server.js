const http = require("http");

const server = http.createServer((req, res) => {
    console.log("Handling request");

    setTimeout(() => {
        res.end("Request handled by a separate thread");
    }, 2000);
});

server.listen(3000, () => {
    console.log("Server running on port 3000");
});