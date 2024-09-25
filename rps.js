function rockPaperScissors(player1, player2) {

  const winningCombinations = {
    rock:["scissors", "lizard"],
    paper:["rock", "spock"],
    scissors:["paper", "lizard"],
    spock:["scissors","rock"],
    lizard:["spock","paper"]
  }

  if (player1 === player2) { 
    return("draw");
  } else if (winningCombinations[player1].includes(player2)){
    return ("player1");
  } 
  return ("player2");
}

// Leave this code here for the automated tests
module.exports = {
  rockPaperScissors,
}