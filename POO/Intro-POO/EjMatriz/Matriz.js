"use strict";
exports.__esModule = true;
//Importación de librerías
var readlineSync = require("readline-sync");
var Matriz = /** @class */ (function () {
    //Constructor
    function Matriz(fila, columna) {
        this.fila = fila;
        this.columna = columna;
        this.matriz = new Array(fila);
        this.crearMatriz();
        this.llenarConAleatorios();
    }
    //Función para cargar la Matriz con numeros aleatorios
    Matriz.prototype.llenarConAleatorios = function () {
        var i;
        var j;
        for (i = 0; i < this.matriz.length; i++) {
            for (j = 0; j < this.matriz[i].length; j++) {
                this.matriz[i][j] = Math.floor(Math.random() * 100);
            }
        }
    };
    //Función para crear Matriz usando un for
    Matriz.prototype.crearMatriz = function () {
        var i = 0;
        for (i; i < this.matriz.length; i++) {
            this.matriz[i] = new Array(this.columna);
        }
    };
    //Función para consultar Filas/Columnas y contenido de Matriz
    Matriz.prototype.getConsulta = function () {
        console.log("Filas: ", this.matriz.length);
        console.log("Columnas: ", this.matriz[0].length);
        console.log(this.matriz);
    };
    //Función para consultar que hay en una posición especifica
    Matriz.prototype.get = function (x, y) {
        return this.matriz[x][y];
    };
    return Matriz;
}()); //FIN CLASE MATRIZ
//Creo un objeto "miMatriz" de la clase Matriz
var miMatriz = new Matriz(3, 5);
miMatriz.getConsulta();
console.log("Valor: " + miMatriz.get(readlineSync.questionInt("Ingrese la fila que desea consultar: "), readlineSync.questionInt("Ingrese la columna que desea consultar: ")));
