let player = {
    name: "Julia",
    chips: 520
}
let cards = [] //we created an array where we will store our cards so we can render them
let sum = 0;
let message = "";

let hasBlackjack = false;
let isAlive = false;

let messageEl = document.getElementById('message-el')
//let sumEl = document.getElementById('sum-el')
//we can change getElementById with querySelector. It is more of a dynamic function but we have to say what are we looking for
// like in css we add # or . or just name the HTML element
let sumEl = document.querySelector('#sum-el')
let cardsEl = document.querySelector('#cards-el')
let playerEl = document.querySelector("#player-el")

playerEl.textContent = player.name + ": $" + player.chips

function startGame() {
    isAlive = true
    let firstCard = randomCard()
    let secondCard = randomCard()
    sum += firstCard + secondCard;
    cards = [firstCard, secondCard];
    renderGame()
}

function renderGame() {
    sumEl.textContent = "Sum: " + sum;
    cardsEl.textContent = 'Cards: '; 

    for (let i = 0; i < cards.length; i ++) {
        cardsEl.textContent += cards[i] + " ";
    }

    if (sum <= 20) {
        message = "Do you want to draw a new card? 🙂";
    }
    else if (sum === 21) {
        message = "Wohoo! You've got Blackjack! 🥳";
        hasBlackjack = true;
    }
    else {
        message = "You're out of the game! 😭";
        isAlive = false;
    }
    messageEl.textContent = message;
}

function newCard() {
    if (isAlive === true && hasBlackjack === false) {
        let card = randomCard();
        sum += card;
        cards.push(card) // we use push to add another value to an array
        renderGame()
    }
}

function randomCard() {
    let randomNumber = Math.floor(Math.random() * 13) + 1
    if (randomNumber === 1) {
        return 11
    } else if (randomNumber > 10) {
        return 10
    } else {
        return randomNumber
    }
}

function restart() {
    messageEl.textContent = "Want to play a round?"
    cardsEl.textContent = "Cards:"
    sumEl.textContent = "Sum: "
    let firstCard = randomCard();
    let secondCard = randomCard();
    cards = [firstCard, secondCard]
    sum = 0
}