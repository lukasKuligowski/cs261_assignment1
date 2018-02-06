const http = require('http');

let hits = 1;

const server = http.createServer( (request, response) => {
        if (request.url === '/')
        {
                response.end("Hello world! You are caller number " + hits);
                hits = hits + 1;
        }
        else
        {
                response.end();
        }
});

server.listen(8123);
console.log("Listening!");
