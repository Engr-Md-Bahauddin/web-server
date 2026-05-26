const http = require('http');
const fs = require('fs');

const port = 3000;
const hostname = '192.168.0.170';

const server = http.createServer((req,res) => {
 
    
const fileHandel = (filelocation, statuscode) => {
        fs.readFile(filelocation, (err,data) =>{
        res.writeHead(statuscode, {'Content-Type': 'text/html'});
        res.write(data);
        res.end();
        });

    };

if(req.url === '/'){
    fileHandel('./HTML_Files/index.html', 200);
}

else if(req.url === '/about'){
    fileHandel('./HTML_Files/about.html', 200);
}

else if(req.url === '/contact'){
    fileHandel('./HTML_Files/contact.html', 200);
}

else{
    fileHandel('./HTML_Files/error.html', 404);
}


});

server.listen(port, hostname, () => {
    console.log(`Server is running at http://${hostname}:${port}`);
});