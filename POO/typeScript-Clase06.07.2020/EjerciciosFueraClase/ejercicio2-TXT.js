"use strict";
exports.__esModule = true;
//Importación de librerias
var fs = require("fs");
//Declaración e inicialización de variables
var listaNombres = fs.readFileSync('ListadoNombres.txt', 'utf8');
var listaColegios = fs.readFileSync('ListadoColegios.txt', 'utf8');
var nombres = listaNombres.split(',');
var colegios = listaColegios.split(',');
var padron = new Array();
var i;
//Divido la cantidad de de nombres que hay en la lista por la cantidad de colegios de la otra lista 
var cantPorColegio = Math.round(nombres.length / colegios.length);
//Funcion para asignar las personas en los colegios según el cupo
var asignacion = function () {
    var colegiosPendientes = true;
    var i = 0;
    var contador = 0;
    var colegio = 0;
    while (colegiosPendientes) {
        if (colegio < colegios.length) {
            for (i; contador < cantPorColegio; i++) {
                if (nombres[i] != undefined) {
                    padron[i] = "Votante: " + nombres[i] + ", Colegio: " + colegios[colegio] + ".";
                }
                contador++;
            }
            contador = 0;
            colegio++;
        }
        else {
            colegiosPendientes = false;
        }
    }
};
//Función para mostrar por consola
var mostrar = function (arreglo) {
    console.log("<<<<-------------- ------ PADRÓN ------ -------------->>>>");
    for (i = 0; i < arreglo.length; i++) {
        console.log(arreglo[i]);
        console.log("-------------------------------------------------");
    }
};
//Llamado a la función
asignacion();
mostrar(padron);
