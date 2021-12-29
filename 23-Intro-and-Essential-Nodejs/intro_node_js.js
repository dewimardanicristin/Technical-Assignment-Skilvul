const http = require('http');

const hostname  = 'localhost';
const port = 8000;


const server = http.createServer((req,res) => {
    if(req.url === "/about"){
        res.statusCode = 200
        res.setHeader('Content-Type','text/plain')
        res.write("Welcome to about us page")
        res.end()
    }
    else if(req.url === "/contact"){
        res.statusCode = 200
        res.setHeader('Content-Type','text/plain')
        res.write("Welcome to contact us page")
        res.end()
    }
    else{
        res.statusCode = 200
        res.setHeader('Content-Type','text/plain')
        res.write("Hello World")
        res.end()
    }
    
})

server.listen(port, hostname, () => {
    console.log(`server running at http://${hostname}:${port}/`);
})