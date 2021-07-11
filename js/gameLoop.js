// This is where the game will happen 

class rock {
    constructor(){
        this.name = "rock";
        this.weak = "paper";
    }
}
class paper {
    constructor(){
        this.name = "paper";
        this.weak = "scissors";
    }
}
class scissors {
    constructor(){
        this.weak ="rock";
        this.name = "scissors";
        
    }
}

const cardsClicker = document.querySelectorAll(".card-div")


//Initializing the basic parameters
let deck = []
let typeOfCards = [rock,paper,scissors];
let p1Deck = []
let p2Deck = []
let p1Score = 0;
let p2Score = 0;


//Main Game Loop 
function gameLoop(){
    gameStart()
    drawHand(p1Deck,p2Deck)

}
//Creating a random deck of the different type of cards
function gameStart(){
   
    for (i=0;i<10;i++){
        
        let card = new typeOfCards[Math.floor(Math.random() * 3)]
        deck.push(card)
        
    }
    
    
    console.log(deck)
}


//Draw the hands for each player
function drawHand(p1Deck,p2Deck){
    for (let i = 0; i < 3; i++) {
        randomIndex = Math.floor(Math.random() * deck.length)
        
        let p1Card = deck[randomIndex];
        p1Deck.push(p1Card);
        deck.splice(randomIndex,1);
        
        
    }
    for (let i = 0; i < 3; i++) {
        randomIndex = Math.floor(Math.random() * deck.length)
        
        let p2Card = deck[randomIndex];
        p2Deck.push(p2Card);
        deck.splice(randomIndex,1);
        
        
        
    }

    console.log("First player hand is :",p1Deck)
    console.log("Second Player Hand is :",p2Deck)
    console.log("Cards left in the deck :",deck)
}

// this will compare the 2 cards picked by the player to decide who wins the rock-paper-scissors
function duel(p1Card,p2Card){
    if (p1Card.name == p2Card.weakerThan){
        p1Score += 1;
        console.log("Player 1 won the duel")

    }else if(p2Card.name == p1Card.weakerThan){
        p2Score += 1;
        console.log("Player 2 won the duel")
    }else{
        
        console.log("Draw")
    }
}


gameLoop();



