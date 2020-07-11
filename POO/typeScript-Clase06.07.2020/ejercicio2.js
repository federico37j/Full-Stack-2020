"use strict";
exports.__esModule = true;
//Importación de libreria
var readlineSync = require("readline-sync");
//Declaración e inicialización de variables
var long;
var palabras = new Array(long);
var i;
var sistema;
//Función para cargar arreglo
var cargarArreglo = function (arreglo, longitud) {
    var aux = longitud;
    var input;
    for (i = 0; i < longitud; i++) {
        arreglo[i] = readlineSync.question("Ingrese una palabra: ");
    }
    console.log("Registrado con exito!");
};
//Función para buscar en arreglo
var buscarArreglo = function (arreglo) {
    var nombre = readlineSync.question("Ingrese la palabra que desea buscar: ");
    var dato;
    for (i = 0; i < arreglo.length; i++) {
        dato = arreglo[i];
    }
    if (dato == nombre) {
        console.log("La palabra ingresada se encuentra registrado en la posicion " + i + ".");
    }
    else {
        console.log("La palabra ingresada no se encuentra registrada.");
    }
};
//Función para actualizar en arreglo
var actualizarPalabra = function (arreglo) {
    console.log("Datos que se encuentran actualmente cargados", arreglo);
    arreglo[readlineSync.questionInt("¿Ingresa la posicion del elemento que deseas actualizar? ")] = readlineSync.question("Ingresa una nueva palabra: ");
    console.log("Así quedaron los datos despues de la actualización", arreglo);
};
//Función para eliminar dato
var eliminarIndex = function (arreglo) {
    console.log("Datos que se encuentran actualmente cargados", arreglo);
    var pos = readlineSync.questionInt("¿Ingresa la posicion del elemento que deseas eliminar? ");
    for (i = pos; i < arreglo.length - 1; i++) {
        arreglo[i] = arreglo[i + 1];
    }
    arreglo[i] = null;
    console.log("Así quedaron los datos despues de la eliminacion", arreglo);
};
console.log("<----------BIENVENIDO---------->");
console.log("OPCIONES:");
console.log("(1) Insertar palabra \n(2) Insertar buscar \n(3) Eliminar palabra \n(4) Actualizar palabra\n(5) Salir");
sistema = readlineSync.questionInt("¿Que desea hacer? ");
long = readlineSync.questionInt("Ingrese la longitud del arreglo: ");
while (sistema != 5) {
    switch (sistema) {
        case 1: {
            cargarArreglo(palabras, long);
            break;
        }
        case 2: {
            buscarArreglo(palabras);
            break;
        }
        case 3: {
            eliminarIndex(palabras);
            break;
        }
        case 4: {
            actualizarPalabra(palabras);
            break;
        }
    }
    sistema = readlineSync.questionInt("¿Que desea hacer? ");
}
