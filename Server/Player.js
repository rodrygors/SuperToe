class Player {
    constructor(pid){
        this.playerID = pid;
        this.nickname = "";
        this.ongoingGame = false;
        this.isOnline = true;
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
    getOngoingGame(){
        return this.ongoingGame;
    }
    setOngoingGame(isOngoingGame){
        this.ongoingGame = isOngoingGame;
    }
    getIsOnline(){
        return this.isOnline;
    }
    setIsOnline(isOn){
        this.isOnline = isOn;
    }
}

module.exports = Player;