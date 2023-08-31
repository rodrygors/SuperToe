const Player = require('./Player.js')

class PlayerManager {

    constructor(){
        this.playerList = {}
    }

    playerJoined(playerID) {
        var player = new Player(playerID);
        this.playerList[playerID] = player;
    };

    checkUsernameOnList(nickname) {
        for (var player in this.playerList){
            if (this.playerList[player].getNickname() == nickname) return player;
        }
        return 0;
    }

    changeUsername(playerID, nickname) {
        var player = this.playerList[playerID];
        const oldNick = player.getNickname();
        player.setNickname(nickname);

        var oldPlayerEntry = this.checkUsernameOnList(nickname);
        if (nickname != "" && oldPlayerEntry) delete this.playerList[oldPlayerEntry];

        this.playerList[playerID] = player;
        
        return {'oldNick': oldNick, 'newNick': player.getNickname()};
    }

    getPlayerList() {
        return this.playerList;
    };

    getOnlinePlayerList() {
        var onlinePlayers = [];
        for (var player in this.playerList){
            if (this.playerList[player].getIsOnline()) onlinePlayers.push(this.playerList[player])
        }
        return onlinePlayers;
    };

    getPlayersToString() {
        var string = "Player List:\n";

        for (player in this.playerList){
            string = string + (player + ": " + this.playerList[player] + "\n")
        }

        return string;
    };

    getOnlinePlayersToString() {
        var string = "Players Online:\n";

        for (var player in this.playerList){
            if (this.playerList[player].getIsOnline()) {
                string = string + (player + ": " + this.playerList[player].getNickname + "\n");
            }
        }

        return string;
    };

    disconnectPlayer(playerID) {
        if (!this.playerList[playerID].getOngoingGame() && this.playerList[playerID].getNickname() == "") delete this.playerList[playerID]
        else this.playerList[playerID] = this.playerList[playerID].setIsOnline(false);
    }

}

module.exports = PlayerManager;