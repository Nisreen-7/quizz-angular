# exo
Faire une page quizz et un component QuizzItem avec une question, une liste de réponse et lorsque l'on click sur la bonne réponse, ça augmente notre score (et ça met la réponse en vert, sinon en rouge). Voilà pour les personnes qui veulent faire sans étapes, vous pouvez vous baser juste sur ça, et sinon étapes dans le message suivant (on peut rester sur le même projet first-angular)
	
1-Créer un component QuizzComponent et une route /quizz qui pointe dessus et qui contiendra une propriété score initialisée à 0
	
2-On peut commencer par faire un QuizzItemComponent et mettre dans son template en dur une question et 2-3 boutons qui représentent les réponses et créer une méthode chooseAnswer(index:number) qui sera assignée au click de chaque bouton, et dans cette méthode on fait que si l'index de la bonne réponse est cliqué alors on affiche un petit "bonne réponse" dans le template, sinon on affiche un "mauvaise réponse"
	
3-On rajoute un Output goodAnswer dans le QuizzItemComponent qui sera emit par chooseAnswer si la bonne réponse est choisie, et côté QuizzComponent on écoute l'event goodAnswer pour faire que lorsqu'il est déclenché on augmente le score de 1
	
4-Créer une interface Quizz qui va avoir comme propriétés : une question en string, un options en string[] (un array de réponses) et un answer en number (qui sera l'index de la bonne réponse dans le tableau d'option). Exemple : {​​​​​​question: '', options: ['d','4','3'], answer: 1}​​​​​​
	
5-Dans le QuizzComponent on ajoute une propriété de type Quizz[] avec la liste des questions de notre quizz et leurs réponses dedans, puis dans le template on fait une boucle sur cette propriété et pour chaque élément on affiche un QuizzItem
	
6-On rajoute un @Input de type Quizz dans le QuizzItemComponent et on modifie le template et la méthode chooseAnswer en conséquence : la question n'est plus en dure, elle vient de l'@Input, on fait une boucle sur les options pour afficher chaque bouton, et dans cette boucle on utilise la variable $index pour récupérer l'index de la boucle et le donner à chooseAnswer. Dans le chooseAnswer on compare l'index choisi avec l'index contenu dans quizz.answer

## Bonus :
Faire qu'on ne puisse pas répondre plusieurs fois à une même question
	
Faire du css pour afficher en vert la bonne réponse et en rouge les mauvaises
	
Faire qu'une fois qu'on a répondu à toutes les questions il se passe quelque chose (une modal, une alert ou autre, qui nous affiche notre score total par exemple)

### on a modifié les etape ,apres appoyer sur un answer,il faut appoyer sue le button next pour aller al page suivante. 
