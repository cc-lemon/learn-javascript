let countEl = document.getElementById("count-el")
let count = 0

function increment() {
    count = count + 1
    countEl.innerText = count
}


//The DOM document object model, how you use js to modify a webpage
//HTML document = document, object = js object, model = real thing -> <h2 id="count-el">0</h2>
//model -> let countEl = document.getElementById("count-el")
