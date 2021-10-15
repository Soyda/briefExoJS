let age = prompt('Age?','');
// 1ère version
if ( !(age >= 14 && age <= 90)) {
      alert('Out of range 1');
} else {
      alert('In range 1');
}
// Deuxième version
if ( age < 14 || age > 90) {
      alert('Out of range 2');
} else {
      alert('In range 2');
}