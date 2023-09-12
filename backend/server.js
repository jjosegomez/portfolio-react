//initialize an express js app
const express = require('express');
const app = express();
//initialize a port
const port = 5000;
//initialize a path

app.get('/', (req, res) => {
    res.send('Hello World!');
})
