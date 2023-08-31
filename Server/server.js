const http = require('http');
const express = require('express');
const socketio = require('socket.io');
const PlayerManager = require('./player-manager.js')

const app = express();
app.use(express.static(`${__dirname}/../client`));
const server = http.createServer(app);

const io = socketio(server);

var playerManager = new PlayerManager();

io.on('connection', (socket) => {
  playerManager.playerJoined(socket.id);
 
  socket.on('change-username', (username) => {
    const changedUsername = playerManager.changeUsername(socket.id, username);
    console.log(`O jogador ${changedUsername['oldNick']}(${socket.id}) alterou o nome para ${changedUsername['newNick']}`)
    socket.emit('console-log', `New username: ${username}`)
  });

  socket.on("disconnecting", () => {
    playerManager.disconnectPlayer(socket.id);
    console.log(socket.id + ' left!\n' + playerManager.getOnlinePlayersToString() + '\n');
    console.log(socket.rooms); // the Set contains at least the socket ID
  });
})

server.on('error', (err) => {
  console.error(err);
});

server.listen(8080, () => {
  console.log('server is ready!!!');
});