// Coding Steps:
// For the final project you will be creating an automated version of the classic card game WAR! There are many versions of the game WAR. In this version there are only 2 players.
// You do not need to do anything special when there is a tie in a round.
// Think about how you would build this project and write your plan down. Consider classes such as: Card, Deck, Player, as well as what properties and methods they may include.
// Four suits to represent the appearance (user interface - ui) for your cards
// let cardSuits = ["Spades ♠️", "Hearts ❤️", "Diamonds 💎", "Clubs 🍀"];
// console.log("Card Suits Example:", cardSuits);

// The game itself will automatically play using console.log() to display turns, points, cards used, and the outcome of the game. No user input via prompts is required.
// The completed project should, when executed, do the following:
// Deal 26 Cards to each Player from a Deck of 52 cards.
// Iterate through the turns where each Player plays a Card.
// The Player who played the higher card is awarded a point.
// -Ties result in zero points for both Players.
// After all cards have been played, display the score and declare the winner.



// Pseudo Code:
// 1. Create a deck of cards
// 2. Shuffle the deck
// 3. Create two players
// 4. Deal 26 cards to each player
// 5. Play the game
// 6. Compare the card values
// 7. Determine the winner in each round
// 8. Display the score
// 9. Declare the game winner
// 10. End the game



// 1. Create a deck of cards
class Deck {
    constructor() {
        this.deck = [];
        this.ranks = ["Ace", "2", "3", "4", "5", "6", "7", "8", "9", "10", "Jack", "Queen", "King"];
        this.suits = ["Spades ♠️", "Hearts ❤️", "Diamonds 💎", "Clubs 🍀"];
    }


        createDeck() {
        for (let i = 0; i < this.suits.length; i++) {
            for (let j = 0; j < this.ranks.length; j++) {
               let card ={
                    name: `${this.ranks[j]} of ${this.suits[i]}`,
                    value: j + 1,
                }; 
                
                this.deck.push(card)
            }
        }
    }

// 2. Shuffle the deck using the Fisher-Yates algorithm
    shuffle() {
        for (let i = this.deck.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [this.deck[i], this.deck[j]] = [this.deck[j], this.deck[i]];
        }
    }
}



// 3. Create two players using objects
class Game {
    constructor() {
        this.player1 = {
            name: "Player 1",
            hand: [],
            score: 0,
        }
        this.player2 = {
            name: "Player 2",
            hand: [],
            score: 0,
        }
    }
    
    playGame() {
        const deck = new Deck();
        deck.createDeck();
        deck.shuffle();
        
        // 4. Deal 26 cards to each player
        for (let i = 0; i < 26; i++) {
            this.player1.hand.push(deck.deck.pop());
            this.player2.hand.push(deck.deck.pop());
        }

        // 5. Play the game
        for (let i = 0; i < 26; i++) {
            const card1 = this.player1.hand.pop();
            const card2 = this.player2.hand.pop();

        // 6. Compare the card values

            console.log(`${this.player1.name} plays: ${card1.name}, value: ${card1.value}`);
            console.log(`${this.player2.name} plays: ${card2.name}, value: ${card2.value}`);
            
        // 7. Determine the winner in each round

            if (card1.value > card2.value) {
                this.player1.score++;
                console.log(`Result: 🏆 ${this.player1.name} wins this round!`);
            } else if (card1.value < card2.value) {
                this.player2.score++;
                console.log(`Result: 🏆 ${this.player2.name} wins this round!`);
            } else {
                console.log("Result: 🤝 It's a tie!");
            }
            
            console.log(`Current score: P1: ${this.player1.score} | P2: ${this.player2.score} \n--------------------`);
        }


        // 8. Display the score
        console.log(`Final Score: \n * ${this.player1.name}: ${this.player1.score} \n * ${this.player2.name}: ${this.player2.score}`);

        // 9. Declare the winner
        if (this.player1.score > this.player2.score) {
            console.log(`The winner is: 🎉 ${this.player1.name}`);
        } else if (this.player1.score < this.player2.score) {
            console.log(`The winner is: 🎉 ${this.player2.name}`);
        } else {
            console.log("It's a tie! 🤝");
        }

        // 10. End the game
            console.log("Game Over! Thanks for playing!");
    }
}   


const deck = new Deck();
deck.createDeck();
deck.shuffle();
console.log("Deck of Cards:", deck.deck);

const game = new Game();
game.playGame();
