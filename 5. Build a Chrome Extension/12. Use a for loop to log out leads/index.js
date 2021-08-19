let myLeads = ["aws.se", "bbs.com", "bsu.su"];
const inputEl = document.getElementById("input-el")
const inputBtn = document.getElementById("input-btn")

inputBtn.addEventListener("click", function() {
    myLeads.push(inputEl.value)
    console.log(myLeads)
})

for (let i = 0; i < myLeads.length; i++) {
  console.log(myLeads[i]);
}
// Log out the items in the myLeads array using a for loop
