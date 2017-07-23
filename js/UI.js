var LittleAdventure = LittleAdventure || {};

LittleAdventure.UI = {};

var c1 = document.getElementById('choice_1'),
    c2 = document.getElementById('choice_2'),
    next = document.getElementById('next');

LittleAdventure.UI.init = function () {

};

LittleAdventure.UI.refreshText = function (text) {
    document.getElementById('story').innerHTML = text;
};


