// Stampa il cubo dei primi N numeri, dove N è un numero
// indicato dall’utente.
var n = parseInt(prompt('inserisci un numero'));

for (var i = n-5; i < n; i++){
  var cubo = Math.pow(i, 3);
  console.log(cubo);
}
