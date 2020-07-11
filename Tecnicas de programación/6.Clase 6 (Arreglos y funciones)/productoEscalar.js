//Declaración e inicialización de variables
let readlyneSync = require("readline-sync");
let long = readlyneSync.questionInt("Ingrese la longitud: ");
let primerNumero = new Array(long);
let segundoNumero = new Array(long);

//Funciones
let cargarArreglo = (arreglo,long) => {
    let i;
    for(i = 0; i < long; i++){
        arreglo[i] = readlyneSync.questionInt("Ingrese un valor: ");
    }
}

let calcularProductoEscalar = (arreglo1, arreglo2) =>{
    let productoEscalar = 0;
    for(i = 0; i < long; i++){
        productoEscalar = productoEscalar + (arreglo1[i]*arreglo2[i]);
    }
    return productoEscalar;
}

let mostrarArreglo = (arreglo, long) => {
    for(i = 0; i < long; i++){
        console.log(arreglo[i]);
    }
}
//Implemento las funciones
cargarArreglo(primerNumero,long);
cargarArreglo(segundoNumero,long);
let resultado = calcularProductoEscalar(primerNumero,segundoNumero);
console.log("Producto: "+resultado);
