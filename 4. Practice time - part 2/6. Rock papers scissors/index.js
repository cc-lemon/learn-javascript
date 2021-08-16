let hands = ["rock", "paper", "scissor"];


// Create a function that returns a random item from the array
function randomItem() {
    let randomNumber = Math.floor( Math.random()* 3 );
    console.log(randomNumber);
    if (randomNumber === 0){
      return "rock";
    }
    else if (randomNumber === 1) {
      return "paper";
    }
    else {
      return "scissor";
    }
}
console.log(randomItem());


//ALT lite snyggare
function randomHand() {
    let randomNumber = Math.floor( Math.random()* 3 );
    return hands[randomNumber];

  }
  console.log(randomHand());
