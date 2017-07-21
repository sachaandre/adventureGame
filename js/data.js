var LittleAdventure = LittleAdventure || {};
LittleAdventure.Data = {};


LittleAdventure.Data.init = function () {
    this.currentText = "none";
    this.text = null;
    this.choiceText1 = undefined;
    this.choiceText2 = undefined;
    this.pass = null;
};


LittleAdventure.Data.getData = function(name){
    var xhr = new XMLHttpRequest();
    xhr.open("GET", 'data/' + name + '.json', false);
    xhr.send(null);
    if(xhr.readyState != 4 && xhr.status != 200)
        throw new Error('Impossible de charger la data du fichier ' + name);
    var dataJson = xhr.responseText;
    var textData = JSON.parse(dataJson);
    this.text = textData;
}

LittleAdventure.Data.setCurrentText = function (string) {
    this.currentText = string;
};

LittleAdventure.Data.setChoiceText = function (obj){
    this.choiceText1 = obj.choice_1;
    this.choiceText2 = obj.choice_2;
}


