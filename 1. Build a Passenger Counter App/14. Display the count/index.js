// document.getElementById("count").innerText = 5

// change the count-el in the HTML to reflect the new count

let countEl = document.getElementById("count-el"); //hade skrivit count-id istället för count-el.
//console.log(countEl);
let count = 0;

function increment() {
    //console.log("Click");
    count = count + 1;

    //document.getElementById();
    countEl.innerText = count;
    //console.log(count);
}
