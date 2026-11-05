let cards =[]
let sum = 0
let hasBlackJack = false
let isAlive = false
let message = ""
let messageEl=document.getElementById("message-el")
let sumEl=document.getElementById("sum-el")
let cardsEl=document.querySelector("#cards-el")
let playerEl=document.querySelector("#player-el")
const player ={
    name:"Stefan",
    chips:0
}
playerEl.textContent=player.name + " " + "Chips: $" + player.chips


function getRandomCard() {
     let card = Math.floor((Math.random()*13)+1)
     if(card>10) {return 10
     } else if (card==1) {return 11}
    else{return card}
}

function startGame(){
    isAlive=true;
    let firstCard=getRandomCard()
    let secondCard=getRandomCard()
    sum = firstCard + secondCard;
    cards.push(firstCard, secondCard)
    console.log(cards)
    renderGame()
}

function renderGame(){
    cardsEl.textContent="Cards: "
    for(let i=0; i<cards.length; i++) {
    cardsEl.textContent+= cards[i]+ " ";
    }

    sumEl.textContent="Sum: " + sum
        if (sum <= 20) {
        message = "Do you want to draw a new card? 🙂"
        } else if (sum === 21) {
        message = "Wohoo! You've got Blackjack! 🥳"
            hasBlackJack = true
        } else {
            message = "You're out of the game! 😭"
            isAlive = false
        }
        messageEl.textContent=message
    }


function newCard() {
    if(isAlive && hasBlackJack===false){
    let thirdCard=getRandomCard();
    cards.push(thirdCard)
    sum+=thirdCard
    renderGame()
    }
}
