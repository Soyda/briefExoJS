// cela ne fonctionne pas car les valeurs 
// récupérées par le prompt sont des strings,
// il faut les convertir en number avant d'effectuer
// l'opération.
// une solution est de rajouter devant la variable 
// tel que +a ou +prompt().

// Version corrigée:

let a = +prompt("First number?", 1);
let b = +prompt("Second number?", 2);

alert(a + b); // donne 3