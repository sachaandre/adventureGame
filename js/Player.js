var LittleAdventure = LittleAdventure || {};

LittleAdventure.Player = {};

LittleAdventure.Player.init = function(stats){
    this.life = 1;
    this.alive = true;
    this.type = 0; // 0 FOR GAME ; 1 FOR BARD ; 2 FOR WARRIOR
}

LittleAdventure.Player.setLifePoints = function(nb){
    this.life = nb;
}

LittleAdventure.Player.setType = function(type){
    this.type = type;
    this.type === 1 ? this.life = 10 : this.life = 30;
}