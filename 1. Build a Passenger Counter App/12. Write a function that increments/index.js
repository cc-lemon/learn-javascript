let lapsCompleted = 0

// Create a function that increments the lapsCompleted variable with one
// Run it three times
function incrementLaps() {
  lapsCompleted = lapsCompleted + 1;
}
for (var i = 1; i < 4; i++) incrementLaps(i);

console.log(lapsCompleted)
