"use strict";
exports.__esModule = true;
//Declaración e inicialización de variables
var readlineSync = require("readline-sync");
var long = readlineSync.questionInt("Ingrese la longitud: ");
var primerNumero = new Array(long);
var segundoNumero = new Array(long);
var i;
//Funciones
var cargarArreglo = function (arreglo, long) {
    for (i = 0; i < long; i++) {
        arreglo[i] = readlineSync.question("Ingrese un valor: ");
    }
};
var calcularProductoEscalar = function (arreglo1, arreglo2) {
    var productoEscalar = 0;
    for (i = 0; i < long; i++) {
        productoEscalar = productoEscalar + (arreglo1[i] * arreglo2[i]);
    }
    return productoEscalar;
};
//Implemento las funciones
cargarArreglo(primerNumero, long);
cargarArreglo(segundoNumero, long);
var resultado = calcularProductoEscalar(primerNumero, segundoNumero);
console.log("Producto: " + resultado);
