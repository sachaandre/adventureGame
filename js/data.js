ramifications = {
	// Ramification intro, par défaut le début du jeu. (Prévoir un comportement particulier pour celle là)
	intro: [
		//Ecran 1 : Correspond a un texte. Un boutton next permet de passer à l'écran suivant
		{
			type: "text",
			content: "This is a simple gnagna text"
		},
		//Ecran 2 : Choix multiples, en fonction de la valeure sélectionner l'utilisateur est renvoyer vers une autre ramification ou continue sur la courante
		{
			type: "choice",
			content: "gnagnagna",
			choices: [
				{
					type: "option",
					content: "Devenir un barde",
					callback: "create_barde" // L'action pointe
				},
				{
					type: "option",
					content: "Continuer",
					callback: "ramification-1"
				},
				{
					type: "option",
					content: "Continuer"
					//Pas de callback, 
				}
			]
		},
		{
			type: "text",
			content: "On continue"
		}
	],
	create_bard : [
		{
			type: "text",
			content: "Un thug sauvage apparait, il a l'air vraiment con"
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
	aller_manger_domac : [
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




