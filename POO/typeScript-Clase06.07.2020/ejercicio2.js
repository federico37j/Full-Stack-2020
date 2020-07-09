"use strict";
exports.__esModule = true;
//Importación de libreria
var readlineSync = require("readline-sync");
//Declaración e inicialización de variables
var long;
var i;
var sistema;
//Función para cargar arreglo
var cargarArreglo = function (arreglo) {
    for (i = 0; i < arreglo.length; i++) {
        arreglo[i] = readlineSync.question("Ingrese una palabra: ");
    }
    console.log("Registrado con exito!");
    console.log(arreglo);
};
//Función para buscar en arreglo
var buscarArreglo = function (arreglo) {
    var nombre = readlineSync.question("Ingrese la palabra: ");
    var dato;
    for (i = 0; i < arreglo.length; i++) {
        dato = arreglo[i];
        if (dato == nombre) {
            return i;
        }
    }
};
//Función para actualizar en arreglo
var actualizarPalabra = function (arreglo) {
    console.log(arreglo);
    var index = buscarArreglo(arreglo);
    arreglo[index] = readlineSync.question("Ingresa una nueva palabra: ");
    console.log(arreglo);
};
//Función para eliminar dato
var eliminarIndex = function (arreglo) {
    console.log("Datos que se encuentran actualmente cargados antes de la eliminación", arreglo);
    var index = buscarArreglo(arreglo);
    for (i = index; i < arreglo.length - 1; i++) {
        arreglo[i] = arreglo[i + 1];
    }
    arreglo[i] = null;
    console.log("Así quedaron los datos despues de la eliminación", arreglo);
};
console.log("<----------BIENVENIDO---------->");
console.log("OPCIONES:");
console.log("(1) Insertar palabra \n(2) Buscar palabra \n(3) Eliminar palabra \n(4) Actualizar palabra \n(5) Salir");
sistema = readlineSync.questionInt("¿Que desea hacer? ");
long = readlineSync.questionInt("Ingrese la longitud del arreglo: ");
var palabras = new Array(long);
//Menu
while (sistema != 5) {
    switch (sistema) {
        case 1: {
            cargarArreglo(palabras);
            break;
        }
        case 2: {
            var resultado = buscarArreglo(palabras);
            if (resultado >= 0) {
                console.log("La palabra ingresada se encuentra registrada en la posicion " + resultado + ".");
            }
            else {
                console.log("La palabra ingresada no se encuentra registrada.");
            }
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
