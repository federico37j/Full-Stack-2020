"use strict";
//DECLARACIÓN E INICIALIZACIÓN DE VARIABLES
let compras = new Array;

//Lleno el arreglo con los datos que voy ingresando
let agregar = () => {
  let miInput = document.getElementById("precio");

  compras.push(miInput.value);
}

//Cada dato que hay en el Array lo sumo
let calcular = () => {
  let parrafo = document.getElementById("parrafo");
  let total = 0;
  for (let i = 0; i < compras.length; i++) {
    total = total + parseInt(compras[i]);
  }
  parrafo.innerHTML = total;
}