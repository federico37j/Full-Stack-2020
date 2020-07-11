//Declaración e inicialización de variables
import * as readlineSync from "readline-sync";

let long: number = readlineSync.questionInt("Ingrese la longitud: ");
let primerNumero = new Array(long);
let segundoNumero = new Array(long);
let i: number;
//Funciones
let cargarArreglo = (arreglo,long) => {
    
    for(i = 0; i < long; i++){
        arreglo[i] = readlineSync.questionInt("Ingrese un valor: ");
    }
}

let calcularProductoEscalar = (arreglo1, arreglo2): number =>{
    let productoEscalar: number = 0;
    for(i = 0; i < long; i++){
        productoEscalar = productoEscalar + (arreglo1[i]*arreglo2[i]);
    }
    return productoEscalar;
}

//Implemento las funciones
cargarArreglo(primerNumero,long);
cargarArreglo(segundoNumero,long);
let resultado: number = calcularProductoEscalar(primerNumero,segundoNumero);
console.log("Producto: "+resultado);

