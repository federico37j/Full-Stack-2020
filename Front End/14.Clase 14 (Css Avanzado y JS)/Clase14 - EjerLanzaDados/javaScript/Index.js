"use strict";

function lanzamientoDados() {
  let nodoH1 = document.getElementById("H1");
  let veces = 1000;
  let primerDado = 0;
  let segundoDado = 0;
  let resultado;
  let esSiete = 0;

  for (let i = 0; i <= veces; i++) {
    primerDado = azar();
    console.log("primer dado contiene el: " + primerDado);
    segundoDado = azar();
    console.log("segundo dado contiene el: " + segundoDado);
    resultado = primerDado + segundoDado;
    console.log("resultado de suma: " + resultado);
    if (resultado == 7) {
      esSiete++;
      console.log("cuantos dados suman 7:" + esSiete);
    }
  }
  console.log(esSiete);
  nodoH1.innerHTML = esSiete;
}

//Calculo al azar numeros del 1 al 6
function azar() {
  let cantidad = 0;
  cantidad = Math.floor(Math.random() * 6) + 1;
  return cantidad;
}

