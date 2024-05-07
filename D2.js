/* ESERCIZIO 1
 Scrivi un algoritmo per trovare il più grande tra due numeri interi.
*/

const numero1 = 25
const numero2 = 8
if (numero1 > numero2) {
  console.log("Il numero 1 è più grande del numero 2")
} else if (numero1 < numero2) {
  console.log("Il numero 1 è più piccolo del numero 2")
} 

/* ESERCIZIO 2
  Scrivi un algoritmo che mostri "not equal" in console se un numero intero fornito è diverso da 5.
*/

const numero3 = 10
const numero4 = 5
if (numero3 === numero4) {
  console.log("equal")
} else {
  console.log("not equal")
}

/* ESERCIZIO 3
  Scrivi un algoritmo che mostri "divisibile per 5" in console se un numero fornito è perfettamente divisibile per 5 (suggerimento: usa l'operatore modulo)
*/

/* const numero5 = 50
const numero6 = 5
numero5 /= numero6
console.log("Il risultato della divisione è:")
if (numero5 / numero6) {
  console.log(é divisbile per numero6.)
} */

const intero1 = 50
const intero2 = 25
const risultato = intero1 / intero2
if (risultato === 2)
console.log("Il risultato è divisibile per 5") 


/* ESERCIZIO 4
  Scrivi un algoritmo per verificare che, dati due numeri interi, il valore di uno di essi sia 8 oppure se la loro addizione/sottrazione sia uguale a 8.
*/

const numero5 = 16
const numero6 = 8
var risultato2 = numero5 - numero6
if (numero5 || numero6 === 8) {
  console.log("Uno dei due numeri interi è 8.")
} else {
  console.log("Nessuno dei due numeri è 8.")
}
if (risultato2 === 8) {
  console.log("La sottrazione dà come risultato 8.")
}
 

/* ESERCIZIO 5
  Stai lavorando su un sito di e-commerce. Stai salvando il saldo totale del carrello dell'utente in una variabile "totalShoppingCart".
  C'è una promozione in corso: se il totale del carrello supera 50, l'utente ha diritto alla spedizione gratuita (altrimenti la spedizione ha un costo fisso pari a 10).
  Crea un algoritmo che determini l'ammontare totale che deve essere addebitato all'utente per il checkout.
*/

var totalShoppingCart = 35
const costoSpedizione = 10
if (totalShoppingCart > 50) {
  console.log("Hai diritto alla spedizione gratuita!")
} else {
  console.log("Il costo della spedizione è di:", totalShoppingCart + costoSpedizione)
}


/* ESERCIZIO 6
  Stai lavorando su un sito di e-commerce. Oggi è il Black Friday e viene applicato il 20% su ogni prodotto.
  Modifica la risposta precedente includendo questa nuova promozione nell'algoritmo, determinando come prima se le spedizioni sono gratuite oppure no e e calcolando il totale.
*/

const prezzoProdotto = 35
const quantitaProdotti = 3
const scontoProdotto = 0.2
const prezzoTotale = prezzoProdotto * quantitaProdotti
const scontoTotale = prezzoTotale * scontoProdotto
console.log("Il costo totale è di:", scontoTotale) 
  if (scontoTotale > 50){
    console.log("Hai diritto alla spedizione gratuita!")
} else {
  console.log("Il costo della spedizione è di:", scontoTotale + costoSpedizione)
}



/* ESERCIZIO 7
  Crea tre variabili, e assegna un valore numerico a ciascuna di esse.
  Utilizzando un blocco condizionale, crea un algoritmo per ordinarle secondo il loro valore, dal più alto al più basso.
  Alla fine mostra il risultato in console.
*/
const variabili = ["25",
"91",
"36",
]; 
variabili.sort()
console.log(variabili)



/* ESERCIZIO 8
  Crea un algoritmo per verificare che un valore fornito sia un numero oppure no (suggerimento: cerca su un motore di ricerca "typeof").
*/

const valore1= "Gatto"
const valore2 = 19
console.log(typeof "Gatto")
console.log(typeof 19)

/* ESERCIZIO 9
  Crea un algoritmo per controllare se un numero fornito sia pari o dispari (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/

var numero = 12
if (numero % 2 === 0) {
  console.log("Il numero è pari.")
} else {
  console.log("Il nmero è dispari")
}


/* ESERCIZIO 10
  Modifica la logica del seguente algoritmo in modo che mostri in console il messaggio corretto in ogni circostanza.
  let val = 7
  if (val < 10) {
      console.log("Meno di 10");
    } else if (val < 5) {
      console.log("Meno di 5");
    } else {
      console.log("Uguale a 10 o maggiore");
    }
*/

const val = 7
  if (val < 10) {
      console.log("Meno di 10");
    } else if (val < 5) {
      console.log("Meno di 5");
    } else {
      console.log("Uguale a 10 o maggiore");
  }

    const val1 = 14
  if (val1 < 10) {
      console.log("Meno di 10");
    } else if (val1 < 5) {
      console.log("Meno di 5");
    } else {
      console.log("Uguale a 10 o maggiore");
  }
    

/* ESERCIZIO 11
  Fornito il seguente oggetto, scrivi del codice per aggiungere una proprietà "city", il cui valore sarà "Toronto".
*/

/* const me = {
  name: 'John',
  lastName: 'Doe',
  skills: ['javascript', 'html', 'css'],
} */

const me = {
  name: 'John',
  lastName: 'Doe',
  skills: ['javascript', 'html', 'css'],
  city: 'Toronto',
} 
console.log("Nome:", me["name"])
console.log("Cognome:", me["lastName"])
console.log("Skills:", me["skills"])
console.log("Città:", me["city"])



/* ESERCIZIO 12
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere la proprietà "lastName".
*/

delete me.lastName
console.log(me)

/* ESERCIZIO 13
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere l'ultimo elemento della proprietà "skills".
*/

me.skills.pop()
console.log(me.skills)

/* ESERCIZIO 14
  Scrivi del codice per creare un array inizialmente vuoto. Riempilo successivamente con i numeri da 1 a 10.
*/

let array = []
array.push(1);
array.push(2);
array.push(3);
array.push(4);
array.push(5);
array.push(6);
array.push(7);
array.push(8);
array.push(9);
array.push(10);
console.log(array)


/* ESERCIZIO 15
  Scrivi del codice per sostituire l'ultimo elemento dell'array, ovvero il valore 10, con il valore 100.
*/

array.pop();
array.push(100);
console.log(array);

