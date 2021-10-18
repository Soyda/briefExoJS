// la première boucle affiche 1, 2, 3, 4,
// la seconde  boucle affiche 1, 2, 3, 4, 5

let i = 0;
while (++i < 5) alert( i ); // i est incrémenté avant la vérification de la condition


let j = 0;
while (j++ < 5) alert( j ); // j est comparé avant l'incrémetation et l'alert infiche la valeur incrémenté