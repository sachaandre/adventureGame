var LittleAdventure = LittleAdventure || {};

LittleAdventure.UI = {};

var c1 = document.getElementById('choice_1'),
    c2 = document.getElementById('choice_2'),
    next = document.getElementById('next');

LittleAdventure.UI.init = function () {
    next.addEventListener('click', function () {
        LittleAdventure.Game.nextSentence();
    });
    
    c1.addEventListener('click', function () {
        LittleAdventure.UI.sendButtonData(1);
        LittleAdventure.Game.nextSentence();
    });
    
    c2.addEventListener('click', function () {
        LittleAdventure.UI.sendButtonData(2);
        LittleAdventure.Game.nextSentence();
    });
};

LittleAdventure.UI.refreshText = function () {
    document.getElementById('story').innerHTML = this.data.currentText;
};

LittleAdventure.UI.setButtons = function (has_choice, c1_text, c2_text) {
    if (has_choice === "true") {
        c1.innerHTML = c1_text;
        c2.innerHTML = c2_text;
        next.style.display = "none";
        c1.style.display = "inline-block";
        c2.style.display = "inline-block";
    }
    if (has_choice === "false") {
        next.innerHTML = "Next";
        next.display = "inline-block";
        c1.style.display = "none";
        c2.style.display = "none";
    }
};

LittleAdventure.UI.sendButtonData = function (value) {
    this.buttonValue = value;
    LittleAdventure.Game.player.type = 1;
};

