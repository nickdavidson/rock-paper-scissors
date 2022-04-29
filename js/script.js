// User picks Rock, Paper, or Scissors (RPS)
function userPlay() {
    let playerSelection = prompt("Rock! Paper! Scissors!");
    playerSelection = playerSelection.toLowerCase();

    while(playerSelection!=="rock" && playerSelection!=="paper" && playerSelection !=="scissors"){
        console.log("Invalid entry - try again!");
        playerSelection = prompt("Rock! Paper! Scissors!");
        playerSelection = playerSelection.toLowerCase();
    }

    return playerSelection;
}
    

// Computer randomly generates selection;
function computerPlay() {
    let cpuChoices = ["rock", "paper", "scissors"];
    return cpuChoices[Math.floor(Math.random()*cpuChoices.length)];     //randomly generate
}

// Compare the two selections and determine the winner;
function playRound(playerSelection, computerSelection){
    let winner = "";

    if(playerSelection === computerSelection){
        winner = "draw";
    }

    else if (playerSelection === "rock"){
        if (computerSelection === "paper"){
            winner = "computer";
        }
        else if (computerSelection === "scissors"){
            winner = "player";
        }
    }

    else if (playerSelection === "paper"){
        if (computerSelection === "scissors"){
            winner = "computer";
        }
        else if (computerSelection === "rock"){
            winner = "player";
        }
    }

    else if (playerSelection === "scissors"){
        if (computerSelection === "rock"){
            winner = "computer";
        }
        else if (computerSelection === "paper"){
            winner = "player";
        }
    }
    else {
        console.log("Invalid choice - please choose again.");
    }

    setRoundWinner(winner);

    return winner;
}

//Check the winner, then increment that winners index in the array by 1;
function updateScore(winner) {
    if(winner==="player"){
        scoreArray[0]+=1;
        playerScore.textContent = `${scoreArray[0]}`;
    }
    else if(winner==="computer"){
        scoreArray[1]+=1;
        cpuScore.textContent = `${scoreArray[1]}`
    }

    if(scoreArray[0]===WIN_CONDITION || scoreArray[1]===WIN_CONDITION){
        declareWinner(winner);
    }

}

//Output the current leading player and the current score to the console
function displayScore(scoreboard){
    let leader = "Player";
    let score = scoreboard[0] + "-" + scoreboard[1];
    let display = `${leader} leads ${score}.`

    if(scoreboard[0]<scoreboard[1]){
        leader = "Computer";
        score = scoreboard[1] + "-" + scoreboard[0];
        display = `${leader} leads ${score}.`
    }
    else if(scoreboard[0]===scoreboard[1]){
        display = `Game is tied ${score}.`;
    }
    
    console.log(display);
}

//Get the greater of the two scores in the scoreboard array, then output the respective inner to console
function getWinner(scoreboard) {
    if(scoreboard[0]===scoreboard[1]){
        return "Game was a draw!";
    }
    else if(scoreboard[0]>scoreboard[1]) {
        return "Player wins the game!";
    }
    else if(scoreboard[0]<scoreboard[1]) {
        return "Computer wins the game!";
    }
    else {
        return "Could not determine a winner.";
    }
}

//Capitalize the first letter of a string
function capitalize(string) {
    return string.substring(0,1).toUpperCase()+string.substring(1);
}

//Gameplay loop
function game(rounds) {
    let playerSelection = "";
    let computerSelection = "";

    for(let i = 0; i < rounds; i++){

        //Get player and computer selections
        playerSelection = userPlay();
        computerSelection = computerPlay();

        //Compare the two selections and determine the winner of the round
        let winner = playRound(playerSelection, computerSelection);

        //Output the selection of the player and computer
        console.log("Round " + (i+1) + ": " + "(Player) " + capitalize(playerSelection) +  " vs " + capitalize(computerSelection) + " (CPU)");
        
        console.log(generateWinnerText(winner, playerSelection, computerSelection));

        

        
        //Update the scoreboard array
        updateScore(winner, scoreArray);

        //Display the current score
        displayScore(scoreArray);
    }

    //Output the winner of the game
    console.log(getWinner(scoreArray));
}

function generateWinnerText(winner, playerSelection, computerSelection) {
    let winningMove;
    //Create winning move string based on the winner and loser's selection
    if (winner === "player") {
        winningMove = `${capitalize(playerSelection)} beats ${capitalize(computerSelection)}!` + "\n";
    }
    else if (winner === "computer") {
        winningMove = `${capitalize(computerSelection)} beats ${capitalize(playerSelection)}!` + "\n";
    }
    else {
        winningMove = "";
    }

    //Output who won the round
    if (winner !== "draw") {
        winningMove += `${capitalize(winner)} wins the round!`;
    }
    else {
        winningMove += `${capitalize(winner)}!`;
    }

    return winningMove;
}

function buttonPlay(){
    let computerTurn = computerPlay();
    let playerTurn = this.id;
    console.log(playerTurn+ " " + computerTurn);
    
    playRound(playerTurn, computerTurn);
    setImages(playerTurn, computerTurn);
    let winner = getRoundWinner()
    
    outputText = generateWinnerText(winner, playerTurn, computerTurn);
    outputBox.textContent = outputText;

    updateScore(winner);
}

function setRoundWinner(winner){
    ROUND_WINNER = winner;

}

function getRoundWinner(){
    return ROUND_WINNER;
}

const container = document.querySelector("#container");
const outputBox = document.querySelector("#output");
const inputBox = document.querySelector("#input");
const playerScore = document.querySelector("#player-score");
const cpuScore = document.querySelector("#cpu-score");

const NUM_ROUNDS = 5;
const WIN_CONDITION = Math.floor(NUM_ROUNDS/2) + 1;

playerScore.textContent = 0;
cpuScore.textContent = 0;

const ROCK_IMAGE = "./img/rock.png";
const PAPER_IMAGE = "./img/paper.png";
const SCISSORS_IMAGE = "./img/scissors.png";

const rockButton = document.createElement("button");
rockButton.innerHTML = "ROCK";
rockButton.id = "rock";
rockButton.className = "play-button";
rockButton.addEventListener('click', buttonPlay);

const paperButton = document.createElement("button");
paperButton.textContent = "PAPER";
paperButton.id = "paper";
paperButton.className = "play-button";
paperButton.addEventListener('click', buttonPlay);

const scissorsButton = document.createElement("button");
scissorsButton.textContent = "SCISSORS";
scissorsButton.id ="scissors"
scissorsButton.className = "play-button";
scissorsButton.addEventListener('click', buttonPlay);

let outputText = "Rock, Paper, Scissors!"

const buttonSet = document.createElement('div');
buttonSet.id = "buttons";
buttonSet.appendChild(rockButton);
buttonSet.appendChild(paperButton);
buttonSet.appendChild(scissorsButton);

inputBox.appendChild(buttonSet);

outputBox.id = "output"
outputBox.textContent = outputText;

const restartButton = document.createElement("button");
restartButton.innerHTML = "Play again?";
restartButton.id = "restart";
restartButton.addEventListener('click', restartGame);

function restartGame(){
    playerScore.textContent = `${scoreArray[0]=0}`;
    cpuScore.textContent = `${scoreArray[1]=0}`;

    outputBox.textContent = "";
    setImages("rock", "rock");

    buttonSet.appendChild(rockButton);
    buttonSet.appendChild(paperButton);
    buttonSet.appendChild(scissorsButton);

    buttonSet.removeChild(restartButton);
}

let scoreArray = [0,0];

const playerImage = document.querySelector('#player-img');
const cpuImage = document.querySelector('#cpu-img');

function setPlayerImage(selection){
    switch (selection) {
        case 'rock':
            playerImage.src = ROCK_IMAGE;
            break;
        case 'paper':
            playerImage.src = PAPER_IMAGE;
            break;
        case 'scissors':
            playerImage.src = SCISSORS_IMAGE;
            break;
        default:
            console.log("Invalid Player image selector");
    }
}

function setCPUImage(selection){
    switch (selection) {
        case 'rock':
            cpuImage.src = ROCK_IMAGE;
            break;
        case 'paper':
            cpuImage.src = PAPER_IMAGE;
            break;
        case 'scissors':
            cpuImage.src = SCISSORS_IMAGE;
            break;
        default:
            console.log("Invalid CPU image selector");
    }
}

function setImages(playerSelect, computerSelect){
    setPlayerImage(playerSelect);
    setCPUImage(computerSelect);
}

function declareWinner(winner){
    outputBox.textContent += `\n${capitalize(winner)} wins the game!`;
    buttonSet.removeChild(rockButton);
    buttonSet.removeChild(paperButton);
    buttonSet.removeChild(scissorsButton);

    buttonSet.appendChild(restartButton);
}