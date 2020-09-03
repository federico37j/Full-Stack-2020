"use strict";
exports.__esModule = true;
var fs = require("fs");
var texto = fs.readFileSync('texto.txt', 'utf8');
console.log(texto);
try {
    var palabras = texto.split(' ');
    if (palabras.length <= 1 && palabras[0] == '') {
        throw new Error("Largo arreglo es: 1 o 0 y la posición cero esta vacia");
    }
    console.log(palabras);
}
catch (error) {
    console.log("El archivo se encuentra vacio", error);
}
