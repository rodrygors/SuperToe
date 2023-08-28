const Player = require('./Player.js')

const playerManager = () => {

    var playerList = {}

    const checkUsernameOnList = (nickname) => {
        for (playerID in playerList){
            if (playerList[playerID].getNickname() == nickname) return playerID;
        }
        return 0;
    }

    const playerJoined = (playerID) => {
        var player = Player(playerID);
        playerList[playerID] = player;
    };

    const changeUsername = (playerID, nickname) => {
        var player = playerList[playerID];
        var oldPlayerEntry = checkUsernameOnList(nickname);

        if (nickname != "" && oldPlayerEntry) playerList.delete(oldPlayerEntry);
        
    }

    const getPlayerList = () => {
        return playerList;
    };

    const getPlayersToString = () => {
        var string = "Players Online:\n";

        for (player in playerList){
            string = string + (player + ": " + playerList[player] + "\n")
        }

        return string;
    };

    const disconnectPlayer = (playerID) => {
        if (!playerList[playerID].hasOngoingGame() && playerList[playerID].getNickname() == "") playerList.delete(playerID);
    }

    return {
        playerJoined, getPlayerList, getPlayersToString, disconnectPlayer
    };
}

module.exports = playerManager();