const express = require("express");
const http = require('http');
const { Socket } = require("net");
const { disconnect } = require("process");
const { Server } = require('socket.io');


const app = express();
const server = http.createServer(app);
const io = new Server(server);

app.use(express.static ('public'));


io.on('connection'), (socket) => {
 console.log('someone connected: ', socket.id);
}

socket.on('chat message', (msg) => {
console.log('a user sent a message:',  msg);
io.emit('chat message', msg);
});

socket.on('connection', (stream) => {
  console.log('someone connected!');
});