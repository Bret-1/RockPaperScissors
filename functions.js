function getComputerChoice(){
    let result = Math.floor(Math.random() * 33)
    if(result % 3 == 0){
        return "rock";
    } else if(result % 3 == 1){
        return "paper";
    } 
    return "scissors";
}


let humanScore = 0;
let computerScore = 0;
let playerChoice = "rock";

function playRound(){
    console.log("Player Choice: " + playerChoice);
    let computerChoice = getComputerChoice();
    console.log("Computer Choice: " + computerChoice);

    const result = document.getElementById("result");

    if((playerChoice == "rock" && computerChoice == "scissors") ||
       (playerChoice == "scissors" && computerChoice == "paper") ||
    (playerChoice == "paper" && computerChoice == "rock")){
        console.log("Player wins!!");
        result.textContent = "Player Wins! Computer chose " + computerChoice.toLowerCase();
        humanScore++;;
    } else if (playerChoice == computerChoice){
        console.log("Tie!");
        result.textContent = "Tie! Computer chose " + computerChoice.toLowerCase();
    } else {
        console.log("Computer Wins!!");
        result.textContent = "Computer Wins! Computer chose " + computerChoice.toLowerCase();
        computerScore++;;
    }

    const score = document.getElementById("score");
    score.textContent = "Player: " + humanScore + " Computer: " + computerScore;
}

function playerRock(){
    playerChoice = "rock";
    playRound();
}

function playerScissors(){
    playerChoice = "scissors";
    playRound();
}

function playerPaper(){
    playerChoice = "paper";
    playRound();
}