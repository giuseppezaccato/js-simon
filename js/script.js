// **Descrizione:**
// Visualizzare in pagina 5 numeri casuali.Da lì parte un timer di 30 secondi.
// Dopo 30 secondi i numeri scompaiono e appaiono invece 5 input in cui l'utente deve inserire i numeri che ha visto precedentemente,
// nell'ordine che preferisce.
// Dopo che sono stati inseriti i 5 numeri,
// il software dice quanti e quali dei numeri da indovinare sono stati individuati.
// **NOTA**: non è importante l'ordine con cui l'utente inserisce i numeri, basta che ne indovini il più possibile.

// **BONUS:**
// - Inseriamo la validazione: se l'utente mette due numeri uguali o inserisce cose diverse da numeri lo blocchiamo in qualche modo.
//     - Se l’utente ha inserito qualcosa di non valido, segnaliamolo visivamente nel form.

//task variabili:
const numArray = [];
const numList = document.getElementById("numbers-list"); //output
const countdown = document.getElementById("countdown");
const answers = document.getElementById("answers-form");

//task riempio numArray con 5 numeri random
for (let i = 0; i < 5; i++) {
    numArray.push(Math.floor(Math.random() * 50) + 1);
    console.log(numArray)
}
console.log(numArray)
// numList.createElement('li') //se funziona questo è MEGLIO del console.log

// //task  scrivo i 5 numeri come < li > nella < ul > numList ripescandoli dall'array!
for (let i = 0; i < numArray.length; i++) {
    const listItem = document.createElement('li');
    listItem.textContent = numArray[i];
    numList.appendChild(listItem);
}

//! non serve necessariamente!
// function random(min, max) {
//     Math.floor(Math.random() * max) + min
// }

//task imposto countdown
const contoAllaRovescia = setInterval(decremento, 1000);
let counter = 5; //fix RICORDA DI FARLO TORNARE 30 A FINE ESERCIZIO
function decremento() {

    if (counter == 0) {
        console.log("ho raggiunto lo zero")
        clearInterval(contoAllaRovescia);
        countdown.classList.add("d-none");
        answers.classList.remove("d-none");
        numList.classList.add("d-none");
    } else {
        console.log("sto eseguendo il decremento")
        countdown.innerHTML = counter--
    }
    return counter
}





