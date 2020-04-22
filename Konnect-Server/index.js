const app = require('express')();
const server = require('http').Server(app);
const io = require('socket.io')(server);
const PORT = process.env.PORT || 3000;
const cors = require('cors');
server.listen(PORT);

app.use(cors());
var onlineUsers = {
    Music: [],
    Dance: [],
    Movies: [],
    Litreture: []
}
var rooms = ['Music', 'Dance', 'Movies', 'Litreture'];

io.on("connection", (socket) => {
    socket.on('join', (data) => {
        socket.join(data.room);
        // console.log(data);
        // console.log(data.userName + "  has joined the chat");
        // console.log(this.onlineUsers)
        if (rooms.indexOf(data.room) >= 0) {
            onlineUsers[data.room].push(data.userName);
            socket.broadcast.to(data.room).emit('welcome user',
                { userName: data.userName, message: data.userName + " has joined the chat." });
            io.to(data.room).emit('online user updated',
                { room: data.room, list: onlineUsers[data.room] });
        }
    });


    socket.on('online user updated', (data) => {
        io.to(data.room).emit('online users list', data);
    })



    socket.on('disconnect', (data) => {
        // console.log(data);
        // io.to(data.room).emit('disconnect user', { userName: "admin", message: data.userName + " has left the chat." });
    });

    socket.on('leave', (data) => {
        if (rooms.indexOf(data.room) >= 0) {
            // console.log(data);
            io.to(data.room).emit('disconnect user', { userName: data.userName, message: data.userName + " has left the chat." });
            socket.emit('disconnect');
            // var index  = onlineUsers
            onlineUsers[data.room] = onlineUsers[data.room].filter(user => user != data.userName);
            console.log(onlineUsers[data.room]);
            socket.leave(data.room);
        }
    });


    socket.on('send message', (data) => {
        // console.log(data.userName, data.message);
        // console.log(data);
        io.to(data.room).emit('new message', data);
    })
});
