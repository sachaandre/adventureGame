//GAME
var LittleAdventure = LittleAdventure || {};
LittleAdventure.Game = {};

var ramifications = ramifications,
    i;

LittleAdventure.Game = {
	current_ramification : "intro", // Imaginons que c'est  "rencontre_avec_un_thug"
	current_screen : 0, // Imaginons que c'est 0 donc le premier écran. 
    
    init: function () {
        "use strict";
        //reference player,die,ui
        this.player = LittleAdventure.Player;
        this.die = LittleAdventure.Die;
        //Init player and die
        this.player.init({
            life: 0,
            alive: true
        });
        this.die.init();
        this.nextSentence();
    },
	
	choiceEvent : function (btn) {
        "use strict";
		var self = this; // self pointe sur LittleAdventure.Game
		
		//Au clic on récupére la valeur du callback définis ci-dessous
		btn.addEventListener("click", function () {
			var callback = this.getAttribute("data-action");
            console.log(callback);
			self.current_ramification = callback;
			self.current_screen = 0; //L'écran est par défaut à 0 comme on commence la ramification au début.
            console.log(self.current_ramification);
			self.nextSentence();
		}, true);
	},
    
	nextSentence : function () {
        "use strict";
		var screen = ramifications[this.current_ramification][this.current_screen],
            btn,
            btnParent = document.querySelector(".inputArea"),
            self = this;
		// Code pour afficher la phrase à l'utilisateur
		// ... //
        
        console.log(this.current_ramification);
        document.getElementById('story').innerHTML = screen.content;
        
        if (btnParent.firstChild) {
            while (btnParent.firstChild) {
                btnParent.removeChild(btnParent.firstChild);
            }
        }
        
		if (screen.type === "choice") {
		
			for (i = 0; i < screen.choices.length; i += 1) {
				// On crée un bouton html, imaginons qu'ils s'appelle btn :)
                btn = document.createElement("button");
                btn.className = "input";
                btn.innerHTML = screen.choices[i].content;
                btnParent.appendChild(btn);
				// On stocke la valeure du callback dans un attribut data
                btn.setAttribute("data-action", screen.choices[i].callback);
				
				//On s'occupe de l'évenement au clic dessus
				this.choiceEvent(btn);
			}
		} else if (screen.type === "text") {
			// Code pour afficher le bouton next et l'évenement au clique sur ce dernier qui relance la fonction nextSentence
			// ... //
			btn = document.createElement("button");
            btn.className = "input";
            btn.innerHTML = "next";
            btnParent.appendChild(btn);
            
            btn.addEventListener("click", function () {
                self.nextSentence();
            }, false);
		}
		this.current_screen += 1;  // On incrémente de 1 l'écran actuelle
	}
};
LittleAdventure.Game.init();






