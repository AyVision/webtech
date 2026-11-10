/*window.alert ("Welcome to JS!");*/

let schritt = 0;

/*console.log(document);*/

function changeColor(){
  let title = document.getElementById("title")  
    title.style.color = "blue";
  console.log(title);
}

function create(){
    let element = document.createElement("div");
    element.textContent = "neues Element";

    document.body.appendChild(element);
}


function weiter() {
  
  const zeile = document.getElementById("wartet" );
  zeile.style.display = "block";


}