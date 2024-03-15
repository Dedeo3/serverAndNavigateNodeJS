// var http = require("http");

// http.createServer(function(req, res) {
//     let status = 200;

//     res.writeHead(status, {"Content-Type": "text/html"});

//     res.write("wkkww");
//     res.end(); 
// }).listen(8080);

const http = require("http");

// initial to read html fille
const fs = require("fs");

const server = http.createServer((req, res) => {
    // Check the URL of the request
    switch (req.url) {
        case "/":
            fs.readFile("project/index.html", (err, data) => {
                if (err) {
                    res.writeHead(500, { "Content-Type": "text/plain" });
                    res.end("Internal Server Error");
                } else {
                    res.writeHead(200, { "Content-Type": "text/html" });
                    console.log("status 200 ok bos")
                    res.end(data);
                }
            });
            break;
        case "/about.html":
            fs.readFile("project/about.html", (err, data) => {
                if (err) {
                    res.writeHead(500, { "Content-Type": "text/plain" });
                    res.end("Internal Server Error");
                } else {
                    res.writeHead(200, { "Content-Type": "text/html" });
                    console.log("status 200 ok bos")
                    res.end(data);
                }
            });
            break;

        case "/contact.html":
            fs.readFile("project/contact.html", (err, data) => {
                if (err) {
                    res.writeHead(500, { "Content-Type": "text/plain" });
                    res.end("Internal Server Error");
                } else {
                    res.writeHead(200, { "Content-Type": "text/html" });
                    console.log("status 200 ok bos")
                    res.end(data);
                }
            });
            break;
        default:
            res.writeHead(404, { "Content-Type": "text/plain" });
            res.end("404 Not Found");
    }
});

// const PORT = process.env.PORT || 8081;
const PORT = 8081;
server.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});


