"use strict";

let myInput = document.getElementById("myInput");
let btn = document.getElementById("btn");
let titulo = document.getElementById("titulo");

btn.addEventListener("click",activar);


function activar(){
//setInterval(mostrar,1000);
//setTimeout(mostrar,1000);
let contador = myInput.value;
let time = setInterval(function(e){
    if(contador === 0){
        titulo.innerHTML = "BOOOM!";
        clearInterval(time);
    }else{
        contador--;
        titulo.innerHTML = contador;
    }

},1000);


}
// function mostrar(){
//     console.log("Mensaje");
// }
