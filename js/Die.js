var LittleAdventure = LittleAdventure || {}

LittleAdventure.Die = {};

LittleAdventure.Die.init = function(){
    this.value = 0;
    this.faces = 6;
}

LittleAdventure.Die.setDiceValue = function(val){
    this.value = val;   
}