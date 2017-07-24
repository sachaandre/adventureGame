var ramifications = {
	// Ramification intro, par défaut le début du jeu. (Prévoir un comportement particulier pour celle là)
	intro: [
		{
			type: "text",
			content: "Wello adventurer ! Welcome in the land of Tol And Onne, where the prunes are delicious and where they rule the daily meals !"
		},
        
        {
			type: "text",
			content: "We are located in the nice town of Nega, the capital city of this Land. This is not the main place where we product the famous prunes of Tol And Onne, but the town is famous for its Rabbit with prunes !"
		},
        {
			type: "text",
			content: "Foodie that you are, you planned to go to Naga's Inn to get a taste of that famous meal !"
		},
        {
			type: "text",
			content: "And you went there without any big trouble. Moreover, you found the inn pretty easily !"
		},
        {
			type: "text",
			content: "But you felt something was strange when you arrived,"
		},
        {
			type: "text",
			content: "And when you came in the Inn, too."
		},
        {
			type: "text",
			content: "But, reminding that Rabbit with prunes, you decided to not care about the strange stuff going on here. So with a cheerfull voice, you called for a Prunes Beer, and a plate of Rabbit with Prunes."
		},
        {
			type: "text",
			content: "You took a seat to wait for your order, and you began to sing a little song."
		},
        {
			type: "text",
			content: "You : ♪♪ Prunes of Nega, it's good for ya ♪♪"
		},
        {
			type: "text",
			content: "Lost in your repetitve musical loop, you were not noticing the poor waitress who was trying to desesperatly tell you some news about your delicious Rabbit with Prunes "
		},
        {
			type: "text",
			content: "Waitress : 'Scuse me sir, but I go' bad news fo' ya. We won't be able to get ya som' rabbit. And we're out of booze too. Sorry man"
		},
        {
			type: "text",
			content: "Waitress : A guy, pretending to be an evil wizar' sayin that he'll rule the world, another crazy dude who wants to dominat' da world I guess."
		},
        {
			type: "text",
			content: "Waitress : Nevermind, this creepy douche is blocking our prunes stocks, so we can't do a thing. Unless you do something, adventurer."
		},
		{
			type: "choice",
			content: "This is your first final choice to do",
			choices: [
				{
					type: "option",
					content: "Prendre la fin 1",
					callback: "finnish_1" // L'action pointe
				},
				{
					type: "option",
					content: "Prendre la fin 2",
					callback: "finnish_2"
				}
			]
		}
	],
    
    finnish_1 : [
        {
            type: "text",
            content: "tu as choisi la fin 1 ! La suite arrive bientôt !"
        }
    ],
    finnish_2 : [
        {
            type: "text",
            content: "tu as choisi la fin 2 ! La suite arrive bientôt !"
        }
    ]
};




