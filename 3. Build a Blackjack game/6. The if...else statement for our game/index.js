let firstCard = 10
let secondCard = 10
let sum = firstCard + secondCard

// Write the conditional according to these rules:

// if less than or equal to 20 -> "Do you want to draw a new card? 🙂"
// else if exactly 21 -> "Wohoo! You've got Blackjack! 🥳"
// else -> "You're out of the game! 😭"
if (sum <= 20) {
  console.log("New card, mister?");
} else if (sum === 21) {
  console.log("We've got ourselves a Blackjack!");
} else{
  console.log("You're out!");
}
