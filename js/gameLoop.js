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

//Initializing the diffefrent DOM Elements
const cardsClicker = document.querySelectorAll(".card-div");
const p1Card1 = document.querySelector(".p1-card1");
const p1Card2 = document.querySelector(".p1-card2");
const p1Card3 = document.querySelector(".p1-card3");
const confirmBtn = document.querySelector(".glow-on-hover")
const scoreField = document.querySelector(".score-field")
const p1CardPlayed = document.querySelector(".p1ChosenCard")
const p2CardPlayed = document.querySelector(".p2ChosenCard")

//Initializing the basic parameters
let deck = [];
let typeOfCards = [rock,paper,scissors];
let p1Deck = [];
let p2Deck = [];
let p1ChosenCard;
let p2ChosenCard;
let p1Score = 0;
let p2Score = 0;
let audio = new Audio('../styles/POL-treasure-match-short.wav') 
audio.loop = 'loop';


  

//Main Game Loop 
function gameLoop(){
    gameStart();
    drawHand(p1Deck,p2Deck);
    choseCard();
    
    
    

}
//Creating a random deck of the different type of cards
function gameStart(){
   
    for (i=0;i<48;i++){
        
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

    p1Card1.classList.add(p1Deck[0].name);
    p1Card2.classList.add(p1Deck[1].name);
    p1Card3.classList.add(p1Deck[2].name);

    console.log("First player hand is :",p1Deck)
    console.log("Second Player Hand is :",p2Deck)
    console.log("Cards left in the deck :",deck)
}


// This function lets us pick a card for the AI and then let the player chose his own card and then make them duel
function choseCard() {
    let randomIndex = Math.floor(Math.random() * 3)
    p2ChosenCard = p2Deck[randomIndex];
    

    p1Card1.addEventListener("click",() => {
        p1ChosenCard = p1Deck[0]
        
        p1Card1.classList.add("isSelected")
        p1Card2.classList.remove("isSelected")
        p1Card3.classList.remove("isSelected")
    })
    p1Card2.addEventListener("click",() => {
        p1ChosenCard = p1Deck[1]
        p1Card2.classList.add("isSelected")
        p1Card1.classList.remove("isSelected")
        p1Card3.classList.remove("isSelected")
    })
    p1Card3.addEventListener("click",() => {
        p1ChosenCard = p1Deck[2]
        p1Card3.classList.add("isSelected")
        p1Card1.classList.remove("isSelected")
        p1Card2.classList.remove("isSelected")
    })

    
}

// this will compare the 2 cards picked by the player to decide who wins the rock-paper-scissors
function duel(p1Card,p2Card){
    if (p1Card.name == p2Card.weak){
        p1Score += 1;
        // alert("Player 1 wins !")
        scoreField.textContent = `SCORE : ${p2Score}:${p1Score}`;
    }else if(p2Card.name == p1Card.weak){
        p2Score += 1;
        // alert("Player 2 wins !")
        scoreField.textContent = `SCORE : ${p2Score}:${p1Score}`;
    }else{
        
        // alert("Draw")
    }
}




confirmBtn.addEventListener("click",() => {
    p1CardPlayed.classList.add(p1ChosenCard.name);
    p2CardPlayed.classList.add(p2ChosenCard.name)
    duel(p1ChosenCard,p2ChosenCard);
    p1Deck = [];
    p2Deck = [];
    
    cardsClicker.forEach(element => {
        element.classList.remove("rock","paper","scissors")
    });
    
    if (deck.length > 0){
        drawHand(p1Deck,p2Deck);
        p1Card1.classList.remove("isSelected")
        p1Card2.classList.remove("isSelected")
        p1Card3.classList.remove("isSelected")
    }else if(p1Score > p2Score){
        alert("Player 1 has won the game ! CONGRATULATIONS !")
        window.location.reload();
    }else if(p2Score > p1Score){
        alert("Oh nooo ! you lost to the computer. I'm sorry :'( ")
        window.location.reload();
    }else if(p1Score == p2Score){
        alert("Wow a draw ? That's a rare occurrence !")
        window.location.reload();
        
    }
    
    setTimeout(() => {
        p1CardPlayed.classList.remove("rock","paper","scissors")
        p2CardPlayed.classList.remove("rock","paper","scissors")
    }, 1000);

    
})



gameLoop();
audio.play();