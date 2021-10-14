// (a): cela va afficher "hello 1"
// (b): cela va afficher "hello firstname"
// (c): cela va afficher "hello Ilya"

let firstname = "Ilya";

alert( `hello ${1}` ); // (a)

alert( `hello ${"firstname"}` ); // (b)

alert( `hello ${firstname}` ); // (c)