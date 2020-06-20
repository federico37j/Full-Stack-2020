"use strict";

let btn = document.querySelector("button");
let miInput = document.querySelector("input");
let miLista = document.querySelector("ol");


function agregar(){
    let tarea = document.createElement("li");
    tarea.innerHTML = miInput.value;
    
    miLista.appendChild(tarea);
}

btn.addEventListener("click",agregar);