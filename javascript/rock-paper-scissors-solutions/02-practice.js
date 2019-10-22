const honestRockPaperScissors = userMove => {
  let aiMove = "";
  const moves = ["rock", "paper", "scissors"];

  const playerMove = userMove.toString().toLocaleLowerCase();

  if (!moves.includes(playerMove)) {
    return "I only take 'rock', 'paper' or 'scissors' as an argument";
  }

  const randomMove = Math.floor(Math.random() * moves.length);

  aiMove = moves[randomMove];

  return aiMove;
};

console.log(honestRockPaperScissors("rOCk"));
