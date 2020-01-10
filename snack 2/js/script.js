// L’utente inserisce due parole in successione, con due
// prompt. Il software stampa prima la parola più corta, poi la
// parola più lunga.
var parolaUno = prompt('Inserisci una parola');
var parolaDue = prompt("Inserisci un'altra parola");

if (parolaUno < parolaDue){
  console.log(parolaUno);
  console.log(parolaDue);
}else {
  console.log(parolaDue);
  console.log(parolaUno);
}
