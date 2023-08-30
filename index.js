const http = require('http');
const PORT = 8080;

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.end("<h1> Home Page </h1>");
    } else if (req.url === '/about'){
        res.end("About Page")
    } else if(req.url === '/contact'){
        res.end("Conract Page")
    } else {
        res.end(" 404 : Page not found")
    }
});

server.listen(PORT, () => {
    console.log("Server started");
});
