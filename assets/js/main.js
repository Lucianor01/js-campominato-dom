/*
Il computer deve generare 16 numeri casuali nello stesso range della difficoltà prescelta: le bombe. Attenzione: nella stessa cella può essere posizionata al massimo una bomba, perciò nell’array delle bombe non potranno esserci due numeri uguali.
In seguito l'utente clicca su una cella: se il numero è presente nella lista dei numeri generati - abbiamo calpestato una bomba - la cella si colora di rosso e la partita termina. Altrimenti la cella cliccata si colora di azzurro e l'utente può continuare a cliccare sulle altre celle.
La partita termina quando il giocatore clicca su una bomba o quando raggiunge il numero massimo possibile di numeri consentiti (ovvero quando ha rivelato tutte le celle che non sono bombe).
Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha cliccato su una cella che non era una bomba.
*/

function creaElementoHtml(tagHtml, classi, text) {

    let elemento = document.createElement(tagHtml)
    elemento.className = classi;
    elemento.innerText = text;

    return elemento;

}

const griglia = document.querySelector('.griglia')

const button = document.querySelector('button')

button.addEventListener('click', function () {
    this.classList.add('button')
    let difficoltà = document.querySelector('#difficoltà').value;
    griglia.innerHTML = '';

    const bombs = [];

    let maxNumber;

    if (difficoltà === 'easy') {
        maxNumber = 100;
    } else if (difficoltà === 'medium') {
        maxNumber = 81;
    } else if (difficoltà === 'hard') {
        maxNumber = 49;
    }

    while (bombs.length < 16) {
        let randomNumber = Math.floor(Math.random() * maxNumber) + 1;
        if (!bombs.includes(randomNumber)) {
            bombs.push(randomNumber);
            console.log(randomNumber);
        }
    }

    let score = 0;

    if (difficoltà === 'easy') {
        for (let i = 1; i <= 100; i++) {
            const divbox = creaElementoHtml("div", "box", i);
            divbox.addEventListener('click', function () {
                if (bombs.includes(i)) {
                    this.classList.add('bg_red');
                    this.innerHTML = `<i class="fa-solid fa-bomb fa-beat" style="color: #0c0d0d;"></i>`
                    displayMessage("Hai Perso!", score);
                } else {
                    this.classList.add('bg_light_blue');
                    score++;
                    if (score === 84) {
                        const message = "Congratulazioni! Hai Vinto! ";
                        displayMessage(message, score);
                    }
                }
                this.classList.add('bg_light_green');
                console.log(this.innerText);
            });
            griglia.classList.add('griglia')
            griglia.style.cssText = "border: 5px solid rgb(224, 188, 26) !important; box-shadow: 0 0 25px rgb(224, 122, 26);"
            griglia.append(divbox,);
        }
    } else if (difficoltà === 'medium') {
        for (let i = 1; i <= 81; i++) {
            const divbox = creaElementoHtml("div", "box_medium", i);
            divbox.addEventListener('click', function () {
                if (bombs.includes(i)) {
                    this.classList.add('bg_red');
                    this.innerHTML = `<i class="fa-solid fa-bomb fa-beat" style="color: #0c0d0d;"></i>`
                    displayMessage("Hai Perso!", score);
                } else {
                    this.classList.add('bg_light_blue');
                    score++;
                    if (score === 65) {
                        const message = "Congratulazioni! Hai Vinto!";
                        displayMessage(message, score);
                    }
                }
                this.classList.add('bg_light_green');
                console.log(this.innerText);
            });
            griglia.classList.add('griglia')
            griglia.style.cssText = "border: 5px solid rgb(224, 188, 26) !important; box-shadow: 0 0 25px rgb(224, 122, 26);"
            griglia.append(divbox);
        }
    } else if (difficoltà === 'hard') {
        for (let i = 1; i <= 49; i++) {
            const divbox = creaElementoHtml('div', 'box_hard', i);
            divbox.addEventListener('click', function () {
                if (bombs.includes(i)) {
                    this.classList.add('bg_red');
                    this.innerHTML = `<i class="fa-solid fa-bomb fa-beat" style="color: #0c0d0d;"></i>`
                    displayMessage("Hai Perso!", score);
                } else {
                    this.classList.add('bg_light_blue');
                    score++;
                    if (score === 33) {
                        const message = "Congratulazioni! Hai Vinto!";
                        displayMessage(message, score);
                    }
                }
                this.classList.add('bg_light_green');
                console.log(this.innerText);
            });
            griglia.classList.add('griglia')
            griglia.style.cssText = "border: 5px solid rgb(224, 188, 26) !important; box-shadow: 0 0 25px rgb(224, 122, 26);"
            griglia.append(divbox);
        }
    }

})

function displayMessage(message, score) {
    const risultato = document.createElement("div");
    risultato.classList.add("message");
    risultato.innerText = message;
    if (score) {
        const scoreElement = document.createElement("div");
        scoreElement.innerText = "Score: " + score;
        risultato.appendChild(scoreElement);
    }
    const resetButton = document.createElement("button");
    resetButton.innerText = "Reset Level";
    resetButton.addEventListener("click", function () {
        griglia.innerHTML = "";
        griglia.style.cssText = "";
        button.classList.remove("button");
        button.click();
        griglia.classList.add("border", "box-shadow");
    });
    risultato.appendChild(resetButton);
    griglia.append(risultato);
}




//! ---------------------------- DARK-LIGHT MODE ---------------------------- !\\

const lightMode = document.querySelector('#light_mode');
const darkMode = document.querySelector('#dark_mode');
const htmlTag = document.getElementsByTagName('html')[0];

lightMode.addEventListener('click', function () {
    htmlTag.dataset.bsTheme = 'light';
});

darkMode.addEventListener('click', function () {
    htmlTag.dataset.bsTheme = 'dark';
});