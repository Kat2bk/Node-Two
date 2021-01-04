const express = require('express');
const server = express();
server.use(express.json());
const port = 8080;

server.get('/', (req, res) => {
    res.send('Welcome to the API')
})

server.listen(port, (req, res) => {
console.log(`server is listening at port://${port}`)
})