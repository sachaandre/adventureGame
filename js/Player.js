var LittleAdventure = LittleAdventure || {};

LittleAdventure.Player = {};

LittleAdventure.Player.init = function(stats){
    this.life = stats.life;
    this.alive = stats.alive;
    this.type = 0; // 0 FOR GAME ; 1 FOR BARD ; 2 FOR WARRIOR
}

LittleAdventure.Player.setLifePoints = function(nb){
    this.life = nb;
}

LittleAdventure.Player.setType = function(type){
    this.type = type;
}