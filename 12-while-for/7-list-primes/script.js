
let n = +prompt("Enter a number","");
let prime = [];

Prime:
for (let i = 2; i < n; i++) {
      for (let j = 2; j < i; j++){
            if (i % j == 0 ) continue Prime;
      }
      prime.push(i);
}

alert(prime);

// PS: je me souvenais un peu de la solution