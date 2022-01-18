//Computer play. It returns Rock Paper or Scissors
function computerPlay(){
    let choices = [
        "Rock",
        "Paper",
        "Scissors"
    ];
    choices = choices[Math.floor(Math.random()*choices.length)];
    return choices;

}

