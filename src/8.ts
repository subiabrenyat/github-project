// Function to generate a random number between 1 and 6
function getRandomNumber() {
  return Math.floor(Math.random() * 6) + 1;
}

// Function to roll the dice
function rollDice() {
  const rolled = getRandomNumber();
  console.log(`You rolled a ${rolled}`);
}
