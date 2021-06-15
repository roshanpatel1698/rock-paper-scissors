function computerPlay() {
  let rndInt = Math.floor(Math.random() * 3);
  let gamePick = "";
  if (rndInt == 0) {
    gamePick = "Rock";
  } else if (rndInt == 1) {
    gamePick = "Paper";
  } else if (rndInt == 2) {
    gamePick = "Scissors";
  } else {
    gamePick = "ERROR";
  }
  return gamePick;
}

computerPick = computerPlay();

function playRound(playerSelection, computerSelection) {
  computerSelection = computerPick.toLowerCase();
  playerSelection = playerPick.toLowerCase();
  let result = "";

  if (playerSelection == "rock") {
    switch (computerSelection) {
      case "rock":
        result = "tie";
        break;

      case "paper":
        result = "computer";
        break;

      case "scissors":
        result = "player";
        break;
    }
  } else if (playerSelection == "paper") {
    switch (computerSelection) {
      case "rock":
        result = "player";
        break;

      case "paper":
        result = "tie";
        break;

      case "scissors":
        result = "computer";
        break;
    }
  } else if (playerSelection == "scissors") {
    switch (computerSelection) {
      case "rock":
        result = "computer";
        break;

      case "paper":
        result = "player";
        break;

      case "scissors":
        result = "tie";
        break;
    }
  }

  return result;
}

p = 0;
c = 0;
answer = playRound();

do {
  computerPlay();
  computerPick = computerPlay();
  sign = window.prompt("Pick Rock, Paper, or Scissors", "Rock/Paper/Scissors");
  playerPick = sign;
  playRound();
  answer = playRound();
  if (answer == "computer") {
    c++;
  } else if (answer == "player") {
    p++;
  } else if (answer == "tie") {
    p + 0;
    c + 0;
  }

  console.log(p, c, answer, computerPick, playRound());
} while (p < 5 && c < 5);

if (p > c) {
  console.log("Player Wins!");
} else {
  console.log("Dumbass");
}
