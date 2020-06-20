"use strict";

let btn = document.querySelectorAll(".miBoton");
for(let i = 0; i<btn.length; i++){
    btn[i].addEventListener("click",function(e){
    ocultar(i);
    })
    
}


function ocultar(i) {
    let miDiv = document.querySelectorAll(".miDiv");
        miDiv[i].classList.toggle("ocultar");
}

