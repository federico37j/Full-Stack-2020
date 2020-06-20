"use strict";

let cantidad = 0;

function aumentar() {
  //incrementa el valor de contador
  cantidad = cantidad + 1;
  let nodoH1 = document.getElementById("H1");
  nodoH1.innerHTML = cantidad;

}

function descontar() {
  cantidad = cantidad - 1;
  let nodoH1 = document.getElementById("H1");
  nodoH1.innerHTML = cantidad;

}

let cambiarH1 = () => {
  let miInput = document.getElementById("dato");
  cantidad = cantidad + parseInt(miInput.value);
  let nodoH1 = document.getElementById("H1");
  nodoH1.innerHTML = cantidad;
}
