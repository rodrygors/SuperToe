class Player {
    constructor(pid){
        this.playerID = pid;
        this.nickname = "";
        this.ongoingGame = false;
    }

    //Getters and Setters
    getPlayerID(){
        return this.playerID;
    }
    getNickname(){
        return this.nickname;
    }
    setPlayerID(pid){
        this.playerID = pid;
    }
    setNickname(nick){
        this.nickname = nick;
    }

    hasOngoingGame(){
        return this.ongoingGame;
    }
}

module.exports = Player;