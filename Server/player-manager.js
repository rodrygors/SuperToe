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
        var player = new Player(playerID);
        playerList[playerID] = player;
    };

    const changeUsername = (playerID, nickname) => {
        var player = playerList[playerID];
        const oldNick = player.getNickname();
        player.setNickname(nickname);

        var oldPlayerEntry = checkUsernameOnList(nickname);
        if (nickname != "" && oldPlayerEntry) delete playerList[oldPlayerEntry];

        playerList[playerID] = player;
        
        return {'oldNick': oldNick, 'newNick': player.getNickname()};
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
        playerJoined, changeUsername, getPlayerList, getPlayersToString, disconnectPlayer
    };
}

module.exports = playerManager();