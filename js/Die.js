var LittleAdventure = LittleAdventure || {};

LittleAdventure.Die = {};

LittleAdventure.Die.init = function () {
    "use strict";
    this.value = 0;
    this.faces = 6;
};

LittleAdventure.Die.setDiceValue = function (val) {
    "use strict";
    this.value = val;
};

LittleAdventure.Die.rollDie = function () {
    "use strict";
    var rd = Math.floor((Math.random() * this.faces) + 1);
    this.setDiceValue(rd);
};