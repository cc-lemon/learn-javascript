let myLeads = ["www.awesomelead.com", "www.epiclead.com", "www.greatlead.com"]
const inputEl = document.getElementById("input-el")
const inputBtn = document.getElementById("input-btn")
const ulEl = document.getElementById("ul-el")

inputBtn.addEventListener("click", function() {
    myLeads.push(inputEl.value)
    console.log(myLeads)
})

// Let's try a different method!
for (let i = 0; i < myLeads.length; i++) {
    //ulEl.innerHTML += "<li>" + myLeads[i] + "</li>";
    //Three steps with current method
    //create element
    // set text content
    //append to ul
    const li = document.createElement("li"); //this is less human readable
    li.textContent = myLeads[i];
    ulEl.append(li);
}
