//GAME
var LittleAdventure = LittleAdventure || {};
LittleAdventure.Game = {};

var i = 0,
    dataText;

LittleAdventure.Game.init = function () {
    
    //reference player,die,ui
    this.player = LittleAdventure.Player;
    this.die = LittleAdventure.Die;
    this.data = LittleAdventure.Data;
    this.ui = LittleAdventure.UI;
    
    //Init player and die
    this.player.init({
        life: 0,
        alive: true
    });
    this.die.init();
    this.data.init();
    this.ui.init();
    
    this.ui.game = this;
    this.ui.player = this.player;
    this.ui.die = this.die;
    this.ui.data = this.data;
     
    
    this.step = 0;
    this.setGame(i);
    this.ui.refreshText();
};

LittleAdventure.Game.setGame = function (i) {
    this.data.getData("data-game");
    dataText = this.data.text;
    this.ui.setButtons(dataText.intro[i].has_choices);
    this.data.setCurrentText(dataText.intro[i].currentText);
};


LittleAdventure.Game.nextSentence = function () {
    
    if (this.player.type === 0) {
        switch (this.step) {
        case 0:
            i++;
            this.data.setCurrentText(dataText.intro[i].currentText);
            this.ui.setButtons(dataText.intro[i].has_choices);
            this.ui.refreshText();
            if (i === dataText.intro.length - 1) {
                this.step++;
                i = 0;
            }
            break;
        case 1:
            this.data.setCurrentText(dataText.p1[i].currentText);
            this.data.setChoiceText(dataText.p1[i]);
            this.ui.setButtons(dataText.p1[i].has_choices, this.data.choiceText1, this.data.choiceText2);
            this.ui.refreshText();
            i++;
            if (i === dataText.p1.length) {
                this.step++;
                i = 0;
            }
            break;
                
        default:
            this.data.setCurrentText("This is a sample text");
            this.ui.refreshText();
        }
    }
    if (this.player.type === 1) { // If the player is a Bard
        console.log("totoro");
        this.data.setCurrentText("Im doing shit yo");
        this.ui.setButtons(dataText.intro[i].has_choices);
        this.ui.refreshText();
    }
};


LittleAdventure.Game.init();







