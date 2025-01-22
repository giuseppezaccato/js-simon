// **BONUS:**
// - Inseriamo la validazione: se l'utente mette due numeri uguali o inserisce cose diverse da numeri lo blocchiamo in qualche modo.
//     - Se l’utente ha inserito qualcosa di non valido, segnaliamolo visivamente nel form.

//task variabili:
const numArray = [];
const numList = document.getElementById("numbers-list"); //output
const countdown = document.getElementById("countdown");
const answers = document.getElementById("answers-form");

//task riempio numArray con 5 numeri random
for (let i = 0; numArray.length < 5; i++) {

    //---controllo i doppi non presenti!
    let randomNum = random(1, 50)
    if (!(numArray.includes(randomNum))) {
        numArray.push(random(1, 50));
    } else {
        i--
    }
    console.log(numArray);
}
console.log(numArray)

// //task  scrivo i 5 numeri come < li > nella < ul > numList ripescandoli dall'array!
// Visualizzare in pagina 5 numeri casuali
for (let i = 0; i < numArray.length; i++) {
    const listItem = document.createElement('li');
    // numList.innerHTML += (`<li> ${numArray} </li>`); //* usando direttamente il template literal
    listItem.textContent = numArray[i];
    numList.appendChild(listItem);
}

//* randomizer
function random(min, max) {
    return Math.floor(Math.random() * max) + min;
}

//task imposto countdown 
const contoAllaRovescia = setInterval(decremento, 1000);

let counter = 3; //fix RICORDA DI FARLO TORNARE 30 A FINE ESERCIZIO!

// Dopo 30 secondi i numeri scompaiono e appaiono invece 5 input in cui l'utente deve inserire i numeri che ha visto precedentemente,

function decremento() {

    if (counter === 0) {
        console.log("blocco il countdown");
        clearInterval(contoAllaRovescia);
        countdown.classList.add("d-none");
        answers.classList.remove("d-none");
        numList.classList.add("d-none");
    } else {
        console.log("countdown in azione");
        countdown.innerHTML = counter--;
    }
    return counter
}
//!---ATTENZIONE--- LA RACCOLTA DEI DATI VA FATTA DOPO L'EVENTLISTENER, 
//! E QUINDI DENTRO ALLA FUNZIONE EVOCATA ALLO SCATURIRE DEL CLICK!!!
// Dopo che sono stati inseriti i 5 numeri,
// il software dice quanti e quali dei numeri 
// da indovinare sono stati individuati.

//task dichiaro bottone e array vuoto degli input
const btn = document.querySelector('button');
const inputNumbers = []; //?  è necessario?

//task raccolgo i dati inseriti nei 5 input e ne creo un array finalNumbers
const inputForm = document.querySelectorAll('.form-control');
const finalNumbers = [];

//task risultati output
const result = document.getElementById('message');

//* EVENTLISTENER
btn.addEventListener('click', function (event) {

    event.preventDefault();

    for (i = 0; i < inputForm.length; i++) {
        inputNumbers.push((inputForm[i]).value); //?  è necessario?
        if (numArray.includes(parseInt(inputForm[i].value))) {
            finalNumbers.push(inputForm[i].value);
        }
    }
    console.log(finalNumbers);

    if (finalNumbers.length > 0) {
        result.classList.replace("text-danger", "text-success");
        result.innerHTML = `Complimenti, hai indovinato: ${finalNumbers.length} numeri : ${finalNumbers.join('-')}`;
    } else {
        result.innerHTML = "Peccato Nessun numero indovinato.";
    }
});









