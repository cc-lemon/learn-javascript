// Create two variables:
// myLeads -> should be assigned to an empty array
// inputEl -> should be assigned to the text input field
let myLeads = [];
const inputEl = document.getElementById("input-el"); //const cannot be reassigned constant
const inputBtn = document.getElementById("input-btn");

//reassign -> inputEl = "bla bla"

inputBtn.addEventListener("click", function() {
    console.log("Button clicked!")
})
