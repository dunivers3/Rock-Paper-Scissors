//HOW TO PLAY ROCK PAPER SCISSORS

    //ROCK BEATS SCISSORS
    //SCISSORS BEATS PAPER
    //PAPER BEATS ROCK


const score = {
    player: 0,
    computer: 0
};


//Main play function
function game(){
    let playerSelection = prompt("What is your choice? ", "Rock, Paper or Scissors?");
    playerSelection = playerSelection.toUpperCase();
    let computerSelection = computerPlay();
    computerSelection = computerSelection.toUpperCase();

    let winner = winnerSelector(playerSelection, computerSelection);

    console.log(playerSelection);
    console.log(computerSelection);
    console.log(winner)
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
function winnerSelector(plyS, cmpS){
    if(plyS === cmpS){
        console.log("Thats a draw!");        
    }else if (plyS === "ROCK"){
        if (cmpS === "SCISSORS"){
            return ("You win! Rock beats Scissors!");
        }else {
            return ("You loose! Paper beats Rock!");
        }
    }else if (plyS === "SCISSORS"){
        if (cmpS === "PAPER"){
            return ("You win! Scissors beats Paper!");
        }else {
            return ("You loose! Paper beats Rock!");
        }
    }else {
        if (cmpS === "ROCK"){
            return ("You win! Paper beats Rock!");
        }else {
            return ("You loose! Scissors beats Paper!");
        }
    }
}














game();
