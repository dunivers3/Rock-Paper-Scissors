//HOW TO PLAY ROCK PAPER SCISSORS

    //ROCK BEATS SCISSORS
    //SCISSORS BEATS PAPER
    //PAPER BEATS ROCK


var scorecard = {
    player: 0,
    computer: 0
};


//Main play function
function playGame(){
    let playerSelection = prompt("What is your choice? ", "Rock, Paper or Scissors?");
    playerSelection = playerSelection.toUpperCase();
    let computerSelection = computerPlay();
    computerSelection = computerSelection.toUpperCase();

    let winner = selectWinner(playerSelection, computerSelection);

    // console.log(playerSelection);
    // console.log(computerSelection);
    // console.log(winner)
}

//Computer play. It returns Rock Paper or Scissors
function computerPlay(){
    let randomChoices = [
        "Rock",
        "Paper",
        "Scissors"
    ];
    randomChoices = randomChoices[Math.floor(Math.random()*randomChoices.length)];
    return randomChoices;

}

//Function that determines the winner
function selectWinner(playerChoice, computerChoice){
    if(playerChoice === computerChoice){
        console.log ("Rock Paper Scissors tie");       
    }else if (playerChoice === "ROCK"){
        if (computerChoice === "SCISSORS"){
            scorecard.player ++;
            console.log ("Player Rocks");
        }else {
            scorecard.computer ++;
            console.log ("Computer Wraps");
        }
    }else if (playerChoice === "SCISSORS"){
        if (computerChoice === "PAPER"){
            scorecard.player ++;
            console.log ("Player Cuts");
        }else {
            scorecard.computer ++;
            console.log ("Computer Smashes");
        }
    }else {
        if (computerChoice === "ROCK"){
            scorecard.player ++;
            console.log ("Player Wraps");
        }else {
            scorecard.computer ++;
            console.log ("Computer Cuts");
        }
    }
}







// Announce winner
function getWinner(){
    if (scorecard.player == scorecard.computer){
        console.log("Well, thats a tie. You won " + scorecard.player + " times, and Computer won " + scorecard.computer + " times!");
    }else if (scorecard.player > scorecard.computer){
        console.log("Player wins! You beat the Computer " + scorecard.player + " times! ");
    }else {
        console.log("Computer wins! You got crushed " + scorecard.computer + " times!");
    }
}


//Repeat the game fo 5 turns

for (i=1; i <=5; i++){
    playGame();
}

getWinner();
