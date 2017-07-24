var ramifications = {
	// Ramification intro, par défaut le début du jeu. (Prévoir un comportement particulier pour celle là)
	intro: [
		//Ecran 1 : Correspond a un texte. Un boutton next permet de passer à l'écran suivant
		{
			type: "text",
			content: "Welcome into an incredible adventure that is being build right now"
		},
        
        {
			type: "text",
			content: "This is a simple gnagna text"
		},
		//Ecran 2 : Choix multiples, en fonction de la valeure sélectionner l'utilisateur est renvoyer vers une autre ramification ou continue sur la courante
		{
			type: "choice",
			content: "This is a critical point",
			choices: [
				{
					type: "option",
					content: "Devenir un barde",
					callback: "create_bard_action" // L'action pointe
				},
				{
					type: "option",
					content: "Continuer",
					callback: "ramification-1"
				}
			]
		},
		{
			type: "text",
			content: "On continue"
		}
	],
    create_bard_action : [
        {
            type : "throw",
            content : " This is some text to roll a die",
            action_name : "create_bard"
        }
    ],
	create_bard_succeed : [
		{
			type: "text",
			content: "Un thug sauvage apparait, il a l'air vraiment con mais vous êtes un bard"
		},
		{
			type: "text",
			content: "Il se dirige vers vous sans doute pour marabouter votre esprit"
		},
		{
			type: "choice",
			content: "Souhaitez vous combatre le thug ou manger domac",
			choices: [
				{
					type: "option",
					content: "Combatre",
					callback: "combatre_le_thug" // L'action pointe sur la ramification combatre_le_thug
				},
				{
					type: "option",
					content: "Manger",
					callback: "aller_manger_domac"
				}
			]
		}
	],
	create_bard_fail : [
		{
			type: "text",
			content: "Un thug sauvage apparait, il a l'air vraiment con"
		}
	],
	
	combatre_le_thug : [
		{
			type: "text",
			content: "Un thug sauvage apparait, il a l'air vraiment con"
		}
	]
};




