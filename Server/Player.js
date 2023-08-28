const Player = (pid) =>{
    var playerID = pid;
    var nickname = "";
    var ongoingGame = false;

    const getPlayerID = () => {
        return playerID;
    }
    const getNickname = () => {
        return nickname;
    }
    const setPlayerID = (pid) => {
        this.playerID = pid;
    }
    const setNickname = (nick) => {
        this.nickname = nick;
    }

    const hasOngoingGame = () => {
        return ongoingGame;
    }

    return {
        Player, hasOngoingGame, getPlayerID, getNickname, setPlayerID, setNickname
    };
}

module.exports = Player();