let rockBtn = document.getElementById("rock");
let paperBtn = document.getElementById("paper");
let scissorsBtn = document.getElementById("scissors");
let display = document.getElementById("display");

rockBtn.addEventListener("click", () => {
  randomNumber = Math.random();
  let computerMove = "";

  if (randomNumber >= 0 && randomNumber < 1 / 3) {
    computerMove = "rock";
  } else if (randomNumber >= 1 / 3 && randomNumber < 2 / 3) {
    computerMove = 'paper';
  } else if (randomNumber >= 2 / 3 && randomNumber < 1) {
    computerMove = 'scissors';
  }

  let result = "";
  if (computerMove === "rock") {
    result = "It's a Tie";
  } else if (computerMove === "paper") {
    result = "You Loss";
  } else if (computerMove === "scissors") {
    result = "You Won";
  }

  display.textContent = `You pick Rock, Computer pick ${computerMove}, ${result}`;
  
});

paperBtn.addEventListener("click", () => {
  randomNumber = Math.random();
  let computerMove = "";

  if (randomNumber >= 0 && randomNumber < 1 / 3) {
    computerMove = "rock";
  } else if (randomNumber >= 1 / 3 && randomNumber < 2 / 3) {
    computerMove = 'paper';
  } else if (randomNumber >= 2 / 3 && randomNumber < 1) {
    computerMove = 'scissors';
  }

  let result = "";
  if (computerMove === "rock") {
    result = "You Won";
  } else if (computerMove === "paper") {
    result = "It's a Tie";
  } else if (computerMove === "scissors") {
    result = "You Loss";
  }

  display.textContent = `You pick Paper, Computer pick ${computerMove}, ${result}`;
});

scissorsBtn.addEventListener("click", () => {
  randomNumber = Math.random();
  let computerMove = "";

  if (randomNumber >= 0 && randomNumber < 1 / 3) {
    computerMove = "rock";
  } else if (randomNumber >= 1 / 3 && randomNumber < 2 / 3) {
    computerMove = 'paper';
  } else if (randomNumber >= 2 / 3 && randomNumber < 1) {
    computerMove = 'scissors';
  }

  let result = "";
  if (computerMove === "rock") {
    result = "You Loss";
  } else if (computerMove === "paper") {
    result = "You Won";
  } else if (computerMove === "scissors") {
    result = "It's a Tie";
  }

  display.textContent = `You pick Scissors, Computer pick ${computerMove}, ${result}`;
});
display.style.color = 'red';