const http = require("http");
const fs = require("fs");

function fileHandel(fileName, statusCode, res) {
    fs.readFile(fileName, (err, data) => {
        if (err) {
            res.writeHead(404, { "Content-Type": "text/html" });
            res.write("<h1>File Not Found</h1>");
            return res.end();
        }

        res.writeHead(statusCode, { "Content-Type": "text/html" });
        res.write(data);
        res.end();
    });
}

const server = http.createServer((req, res) => {

    if (req.url === "/") {
        fileHandel("index.html", 200, res);
    }
    else if (req.url === "/about") {
        fileHandel("about.html", 200, res);
    }
    else if (req.url === "/contact") {
        fileHandel("contact.html", 200, res);
    }
    else {
        fileHandel("error.html", 404, res);
    }
});

const PORT = process.env.PORT || 3000;

server.listen(PORT, () => {
    console.log("Server Running on Port " + PORT);
});