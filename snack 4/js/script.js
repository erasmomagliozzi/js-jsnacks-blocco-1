// In un array sono contenuti i nomi degli invitati alla festa del
// grande Gatsby, chiedi all’utente il suo nome e comunicagli se
// può partecipare o no alla festa.

var invitati = ['Andrea', 'Marco', 'Alfredo', 'Giacomo', 'Antonio', 'Pasquale'];
console.log(invitati);
var nomeUtente = prompt('Inserisci il tuo nome');
console.log(nomeUtente);

var invitato = false;
for (var i = 0;i < invitati.length; i++){
  console.log(invitati[i]);
  if (nomeUtente == invitati[i]){
    var invitato = true;
    alert('Invitato')
  }
}
console.log(invitato);
