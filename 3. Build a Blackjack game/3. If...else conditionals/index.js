let firstCard = 10
let secondCard = 12
let sum = firstCard + secondCard

//The logic of Black jack
if (sum < 21) {
  console.log("Do u want a new card?");
} else if (sum === 21){
  console.log("You got 21!");
}else {
  console.log("You are out of luck!");
}
