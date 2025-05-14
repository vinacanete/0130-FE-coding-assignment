/**
Using any of the tools you've worked with so far, create a game of Tic-Tac-Toe.
- Create a Tic-Tac-Toe game grid using your HTML element of choice.
- When a cell in the grid is clicked, an X or O should appear in that spot depending on whose turn it is.
- A heading should say whether it is X's or O's turn and change with each move made.
- A button should be available to clear the grid and restart the game.
- When a player has won, or the board is full and the game results in a draw, a Bootstrap alert or similar Bootstrap component should appear across the screen announcing the winner.
 */

// variables for grid, players, and game state 
let box0 = $('#box0');
let box1 = $('#box1');
let box2 = $('#box2');
let box3 = $('#box3');
let box4 = $('#box4');
let box5 = $('#box5');
let box6 = $('#box6');
let box7 = $('#box7');
let box8 = $('#box8');

let player1 = 'X';
let player2 = 'O';

let turn = 0;
let winner = false;

// keep track of current player
let currentPlayer = '';


const winningCombinations = [
  [box0, box1, box2],
  [box3, box4, box5],
  [box6, box7, box8],
  [box0, box3, box6],
  [box1, box4, box7],
  [box2, box5, box8],
  [box0, box4, box8],
  [box2, box4, box6]
];

// game functions
const endGame = () => {
    console.log("Game Over!");
    $('.box').css('pointer-events', 'none');
    $('p1').removeClass("border border-info");
    $('p2').removeClass("border border-info");
    $('#alertStart').hide();}

const checkWinner = (currentPlayer, a, b, c) => {

    if(a.text() === currentPlayer && b.text() === currentPlayer && c.text() === currentPlayer){
        winner = true;
        console.log(`Found winner, it's $(currentPlayer)!`);

        a.removeClass('text-info bg-dark');
        b.removeClass('text-info bg-dark');
        c.removeClass('text-info bg-dark');

        a.addClass('text-light bg-success');
        b.addClass('text-light bg-success');
        c.addClass('text-light bg-success');

        if (currentPlayer === 'X') {
            currentPlayer = "Player 1";
        } else {
            currentPlayer = "Player 2";
        }
        
        // show the alert
        $('#alertWinner').text(`GAME OVER. ${currentPlayer} wins! 🏆`);
        $('#alertWinner').show();

        // end game
        endGame();
    }
}


const checkOutcomes = () => {
    checkWinner(currentPlayer, ...winningCombinations[0]);
    checkWinner(currentPlayer, ...winningCombinations[1]);
    checkWinner(currentPlayer, ...winningCombinations[2]);
    checkWinner(currentPlayer, ...winningCombinations[3]);
    checkWinner(currentPlayer, ...winningCombinations[4]);
    checkWinner(currentPlayer, ...winningCombinations[5]);
    checkWinner(currentPlayer, ...winningCombinations[6]);
    checkWinner(currentPlayer, ...winningCombinations[7]);

    if (turn === 9 && winner === false) {
        console.log("It's a draw!");
        $('#alertDraw').show();
        endGame();
    }
}


const startGame = () => {

    $('#startBtn').hide();
    $('#resetBtn').show();

    console.log("Start Game!");
    console.log(turn++);
    currentPlayer = player1;
    console.log(currentPlayer);

    $('#p1').addClass("border border-info");
    
    // show the alert
    $('#alertStart').show();
    
    // click event for each box
    $('.box').on('click', function() {
        $('#alertStart').hide();
        
        // clicked box will change text to current player X or O
        $(this).text(currentPlayer);
        
        if(turn > 4){
            // check for winner
            console.log("Checking for winner...");
            checkOutcomes();
        }

        // players take turn
        if (winner === false) {
        
            if (currentPlayer === player1) {
                currentPlayer = player2;
                $('#p2').addClass("border border-info");
                $('#p1').removeClass("border border-info");
                console.log(turn++);
            } else {
                currentPlayer = player1;
                console.log(turn++);
                $('#p1').addClass("border border-info");
                $('#p2').removeClass("border border-info");
            }
        }
    });
}

document.getElementById('startBtn').addEventListener('click', () => startGame());

document.getElementById('resetBtn').addEventListener('click', () => document.location.reload(true));
