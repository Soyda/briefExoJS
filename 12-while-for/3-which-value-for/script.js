
// les valeurs affichées sont les mêmes pour les deux versions : 0, 1, 2, 3, 4
// la boucle s'exécute avant la comparaison donc que l'incrémentation soit en préfixe ou postfixe ne change rien


for (let i = 0; i < 5; i++) alert( i ); 


for (let i = 0; i < 5; ++i) alert( i );