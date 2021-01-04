
const express = require('express');
const postsRouter = require('./data/posts/postsRouter');
const server = express();
server.use(express.json());

// use server.use when importing an express router

server.use('/api/posts', postsRouter);

server.get('/', (req, res) => {
    res.send('Welcome to the API')
})

server.listen(8080, (req, res) => {
console.log(`server is listening at localhost://8080`)
})

