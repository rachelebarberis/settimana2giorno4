/* ESERCIZIO 1
 Scrivi una funzione di nome "area", che riceve due parametri (l1, l2) e calcola l'area del rettangolo associato.
*/

function area (num1, num2) {
    let myArea=num1*num2
    return myArea;
}
console.log(area(11,12));

/* ESERCIZIO 2
 Scrivi una funzione di nome "crazySum", che riceve due numeri interi come parametri.
 La funzione deve ritornare la somma dei due parametri, ma se il valore dei due parametri è il medesimo deve invece tornare
 la loro somma moltiplicata per tre.
*/

function crazySum(numa, numb) {
    if(numa === numb) {
        return (numa + numb) * 3;
    } else {
        return numa+numb;
    } 
}
console.log(crazySum(4,4));

/* ESERCIZIO 3
 Scrivi una funzione di nome "crazyDiff" che calcola la differenza assoluta tra un numero fornito come parametro e 19.
 Deve inoltre tornare la differenza assoluta moltiplicata per tre qualora il numero fornito sia maggiore di 19.
*/

function crazyDiff (a, b=19)  {
    let result = Math.abs(a-b); 
    if (result>19) {
        return (result)*3;
    } else {
        return (result);
    }
}
console.log(crazyDiff(120));

/* ESERCIZIO 4
 Scrivi una funzione di nome "boundary" che accetta un numero intero n come parametro, e ritorna true se n è compreso tra 20 e 100 (incluso) oppure
 se n è uguale a 400.
*/
function boundary (nintero) {
    if (20<nintero<100 && nintero===400) {
        return (true) ;
} else {
    return (false);
}
}
console.log(boundary(37))

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 5
 Scrivi una funzione di nome "epify" che accetta una stringa come parametro.
 La funzione deve aggiungere la parola "EPICODE" all'inizio della stringa fornita, ma se la stringa fornita comincia già con "EPICODE" allora deve
 ritornare la stringa originale senza alterarla.
*/

let stringastart = "ciao"
function epify (stringastart) {

if (stringastart.startsWith('EPICODE')) {
    return string;
  } else {
    return 'EPICODE ' + stringastart;
  }
}
console.log(epify(stringastart));

/* ESERCIZIO 6
 Scrivi una funzione di nome "check3and7" che accetta un numero positivo come parametro. La funzione deve controllare che il parametro sia un multiplo
 di 3 o di 7. (Suggerimento: usa l'operatore modulo)
*/

function check3and7 (n) {
    if (n%3===0 ) {
        return ('numero divisibile per tre')
    } else if (n%7===0) {
        return ('numero divisibile per sette')
    } else {
        return ('numero non divisibile ne per 3 ne per 7')
    }
}
console.log(check3and7(31))

/* ESERCIZIO 7
 Scrivi una funzione di nome "reverseString", il cui scopo è invertire una stringa fornita come parametro (es. "EPICODE" --> "EDOCIPE")
*/

let string = 'EPICODE';
function reverseString(string) {
  string = string.split('').reverse().join('');
  return string;
}
console.log(reverseString(string));



/* ESERCIZIO 8
 Scrivi una funzione di nome "upperFirst", che riceve come parametro una stringa formata da diverse parole.
 La funzione deve rendere maiuscola la prima lettera di ogni parola contenuta nella stringa.
*/

let string1= 'ciao sto impazzendo';
console.log(string1);
function upperFirst(string1) {
    string1=string1.split(' ');
    for (let i = 0; i < string1.length; i++) {
        string1[i]=
        string1[i].charAt(0).toUpperCase() +string1[i].slice(1);
    }
    string1=string1.join(' ');
    return string1;
}
console.log(upperFirst(string1));

/* ESERCIZIO 9
 Scrivi una funzione di nome "cutString", che riceve come parametro una stringa. La funzione deve creare una nuova stringa senza il primo e l'ultimo carattere
 della stringa originale.
*/

let stringa='epicode'
function cutString (stringa) {
    return stringa.slice(1,-1);
}
console.log(cutString(stringa));

/* ESERCIZIO 10
 Scrivi una funzione di nome "giveMeRandom", che accetta come parametro un numero n e ritorna un'array contenente n numeri casuali inclusi tra 0 e 10.
*/


