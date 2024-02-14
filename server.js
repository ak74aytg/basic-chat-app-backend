const express = require("express");
const http = require("http");
const socketIo = require("socket.io");
const cors = require('cors');

const PORT = process.env.PORT || 5000;
const users = [{}];

const app = express();
app.use(cors());
const server = http.createServer(app);
const io = socketIo(server, {
    cors: {
        origin: "*",
        method: ["GET", "POST"],
        credentials: true
    }
});

io.on("connection", (socket) => {
    console.log("new user connected!")

    socket.on("joined", ({ user }) => {
        users[socket.id] = user;
        console.log(`${user} has joined`)
        socket.emit('welcome', { User: "Admin", message: `Welcome to the chat, ${user}` })
        socket.broadcast.emit('newUser', {User: "Admin", message: `${user} has joined the chat`})
    })

    socket.on('disconnect', () => {
        console.log(`user left`);
        socket.broadcast.emit('left', {User:"Admin", message:`${users[socket.id]} has left!`})
    })

    socket.on("message", ({message, id}) => {
        io.emit('sendMessage', {User: users[id], message ,id})
    })
})

server.listen(PORT, () => {
    console.log(`server is connected at ${PORT}`);
})