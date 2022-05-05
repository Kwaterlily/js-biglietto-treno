// calcolare il prezzo del biglietto del treno in base all'età
// chiedere all'utente quanti chilometri intende percorrere
const chilometri = prompt("Quanti chilometri intende percorrere?") ;
console.log("chilometri da percorrere:" + chilometri);

// l'utente inserisce la sua età e calcoliamo se è over 65 o under 18
//chiedere all'utente l'età
const etaUtente = parseInt(prompt("Inserisca la sua età")) ;
console.log("età utente:" + etaUtente) ;

// definiamo che il costo del biglietto standard é di 0.21 € al km
const prezzoBigliettoAKm = 0.21;

// calcoliamo il prezzo del biglietto in base ai chilometri di percorrenza
let prezzoBiglietto = (chilometri * prezzoBigliettoAKm);
console.log("prezzo del biglietto Standard é di € :" +  prezzoBiglietto);

// calcoliamo il prezzo del biglietto applicando uno sconto del 20% per gli under 18 e applicando uno sconto del 40% per gli over 65.
if (etaUtente > 65 ) {
    const scontoOver65 = prezzoBiglietto * 40 / 100;
    prezzoBiglietto = prezzoBiglietto - scontoOver65;
    console.log("prezzo biglietto con sconto Over 65 del -20% é di €: " + prezzoBiglietto);

} else if (etaUtente < 18 ) {
    const scontooUnder18 = prezzoBiglietto * 20 / 100;
    prezzoBiglietto = prezzoBiglietto - scontooUnder18;
    console.log("prezzo biglietto con sconto Under 18 del -40% é di €: " + prezzoBiglietto);

} 

// Comunicare all'utente il prezzo finale da pagare in base ai chilometri e alla propria età
document.getElementById("biglietto_treno").innerHTML = `Il costro del suo biglietto è di: ${prezzoBiglietto.toFixed(2)} €`;








