"use strict";

//Agarro el evento si hace click ejecuta la formula
let btn = document.getElementById("btn");
btn.addEventListener("click",ocultar);


function ocultar(){
    let miDiv = document.getElementById("miDiv")
    miDiv.classList.toggle("ocultar")
}


