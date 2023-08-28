const http = require('http');
const express = require('express');
const socketio = require('socket.io');
const playerManager = require('./player-manager.js')

const app = express();
app.use(express.static(`${__dirname}/../client`));
const server = http.createServer(app);

const io = socketio(server);

io.on('connection', (socket) => {
  playerManager.playerJoined(socket.id);
 
  socket.on('change-username', (username) => {
    playerManager.changeUsername(socket.id, username)
  });

  socket.on("disconnecting", () => {
    playerManager.disconnectPlayer(socket.id);
    console.log(socket.id + ' left!\n' + playerManager.getPlayersToString() + '\n');
    console.log(socket.rooms); // the Set contains at least the socket ID
  });
})

server.on('error', (err) => {
  console.error(err);
});

server.listen(8080, () => {
  console.log('server is ready!!!');
});