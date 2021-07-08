let welcomeEl = document.getElementById("welcome-el")

let name = "Christian"
let greeting = "Welcome back "

welcomeEl.innerText = greeting + name

// Add an emoji to the end!
// WRITE YOUR CODE BELOW HERE
// HINT: count = count + 1
//name = name + " :)";
//welcomeEl.innerText = welcomeEl.innerText + " :)"
welcomeEl.innerText += " :)";  //same as line above but less clunky!
