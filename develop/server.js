const express = require('express');
const http = require('http');

const app = express();
const PORT = 8082;

const handleRequest = (request, response) => {
    response.end(`It works!! Booyah! Path Hit On: ${request.url}`);
};

const server = http.createServer(handleRequest);

server.listen(PORT, () => {
    console.log(`Server listening on: http://localhost:${PORT}`);
});