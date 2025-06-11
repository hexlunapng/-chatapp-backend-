const express = require("express");
const http = require('http');
const { Server } = require('socket.io');


const app = express();

app.get('/', (req, res) => {
    res.send('error.luna.dev');
});
