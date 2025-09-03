/* Scrivi una funzione che accetti una stringa e restituisca il numero di vocali contenute al suo interno */

const word = 'javascript';


// Dichiara la funzione qui.
function soloVocali(string){
    let count = 0;
    let vocali = "";

    for (let i = 0;i < string.length; i++){
        const letter = string[i].toLowerCase();
        if (letter === "a" || letter === "e" || letter === "i" || letter === "o" || letter === "u") {
            count++;
            if (vocali === ""){
                vocali = vocali + letter;
            } else {
                vocali = vocali + ", " + letter;
            }
        }
    }
    return `${count} (${vocali})`;
}

// Invoca la funzione qui e stampa il risultato in console
console.log(soloVocali(word));


//Risultato atteso se si passa 'javascript': 3 (a, a, i)