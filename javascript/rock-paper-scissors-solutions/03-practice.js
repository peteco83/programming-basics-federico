const honestRockPaperScissors = (playerA, playerB) => {
  let aiMove = "";
  const moves = ["rock", "paper", "scissors"];

  const clean = userInput => {
    return userInput.toString().toLocaleLowerCase();
  };
  console.log(
    `Player A plays ${clean(playerA)} and Player B plays ${clean(playerB)}`
  );

  if (!moves.includes(clean(playerA)) || !moves.includes(clean(playerB))) {
    return "I only take 'rock', 'paper' or 'scissors' as an argument";
  }

  if (clean(playerA) === clean(playerB)) {
    return "It is a draw";
  } else if (clean(playerA) === "rock") {
    if (clean(playerB) === "scissors") {
      result = "Player A is the winner!";
    } else {
      result = "Player B is the winner!";
    }
  } else if (clean(playerA) === "paper") {
    if (clean(playerB) === "rock") {
      result = "Player A is the winner!";
    } else {
      result = "Player B is the winner!";
    }
  } else if (clean(playerA) === "scissors") {
    if (clean(playerB) === "paper") {
      result = "Player A is the winner!";
    } else {
      result = "Player B is the winner!";
    }
  }

  return result;
};

console.log(honestRockPaperScissors("scissors", "rock"));
