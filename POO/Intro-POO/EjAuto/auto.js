"use strict";
exports.__esModule = true;
exports.Auto = void 0;
//Importación de librerias
var fs = require("fs");
//Exporto la clase Auto para poder utilizarla en la clase RegistroAutomotor.
var Auto = /** @class */ (function () {
    //Constructor
    function Auto(marca, mod, color, velocidad, cantidadPuertas) {
        var _this = this;
        this.cantPuertasDefecto = 4;
        //Función para buscar un auto dependiendo de la marca
        this.buscarAuto = function (nombre) {
            var dato;
            var i;
            for (i = 0; i < _this.autos.length; i++) {
                dato = _this.autos[i].getMarca();
                if (dato == nombre) {
                    _this.indice = i;
                    return _this.autos[i];
                }
            }
        };
        //Función para crear los objetos de tipo auto e ingresarlos en el arreglo "autos"
        this.darAlta = function (marca, modelo, color, velocidadMax) {
            _this.autos.push(new Auto(marca, modelo, color, velocidadMax));
        };
        //Función para trae los datos del TXT usando import * as fs from 'fs'
        this.leerArchivos = function () {
            _this.texto = fs.readFileSync('EjAuto/auto.txt', 'utf8');
            _this.palabrasPrimero = _this.texto.split('\r\n');
        };
        //Función para que mediante el arreglo que vino del txt crear los objetos de tipo Auto
        this.cambiarObjeto = function () {
            _this.leerArchivos();
            var i = 0;
            for (i; i < _this.palabrasPrimero.length; i++) {
                _this.palabrasSegundo = _this.palabrasPrimero[i].split(",");
                _this.autos.push(new Auto(_this.palabrasSegundo[0], Number(_this.palabrasSegundo[1]), _this.palabrasSegundo[2], Number(_this.palabrasSegundo[3])));
            }
        };
        //Función que recorre el arreglo de autos y lo muestra por consola
        this.listarAutos = function () {
            for (var i = 0; i < _this.autos.length; i++) {
                if (_this.autos[i] != null) {
                    console.log(_this.autos[i].toString());
                }
            }
        };
        //Función para actualizar la marca usando la función setMarca
        this.actualizar = function (nombre) {
            _this.setMarca(nombre);
        };
        //Función para eliminar un auto siempre y cuando antes haya sido buscado por la función "buscarAuto"
        this.eliminarIndex = function () {
            var i;
            for (i = _this.indice; i < _this.autos.length - 1; i++) {
                _this.autos[i] = _this.autos[i + 1];
            }
            _this.autos[i] = null;
        };
        //Función toString que devuelve Marca/Modelo/Color/VelocidadMax
        this.toString = function () {
            return "Marca: " + _this.marca + ", Modelo: " + _this.modelo + ", Color: " + _this.color + ", Velocidad maxima: " + _this.velocidadMax + ".";
        };
        this.marca = marca;
        this.modelo = mod;
        this.color = color;
        this.velocidadMax = velocidad;
        this.autos = [];
        //La cantidad de puertas es un parámetro opcional, sino se carga en el constructor queda por defecto con 4 ruedas
        if (cantidadPuertas == undefined) {
            this.cantidadPuertas = this.cantPuertasDefecto;
        }
        else {
            this.cantidadPuertas = cantidadPuertas;
        }
    }
    //Función para poner en marcha el auto
    Auto.prototype.arrancar = function () {
        if (this.enMarcha) {
            this.enMarcha = false;
        }
        else {
            this.enMarcha = true;
        }
    };
    //Funciones Get y Set
    Auto.prototype.setCantRuedas = function (numRuedas) {
        this.cantidadRuedas = numRuedas;
    };
    Auto.prototype.setCantPuertas = function (numPuertas) {
        this.cantidadPuertas = numPuertas;
    };
    Auto.prototype.setElegirColor = function (color) {
        this.color = color;
    };
    Auto.prototype.setVelocidad = function (velocidad) {
        this.velocidadMax = velocidad;
    };
    Auto.prototype.getMarca = function () {
        return this.marca;
    };
    Auto.prototype.setMarca = function (marca) {
        this.marca = marca;
    };
    return Auto;
}()); //FIN CLASE AUTO
exports.Auto = Auto;
//OBJETO AUTO
var marca = "NUEVA";
var modelo = 2020;
var color = "Negro";
var velMax = 210;
//Creo un objeto "miAuto" de la clase Auto
var miAuto = new Auto(marca, modelo, color, velMax);
console.log();
var Taybl_1 = require("Taybl");
var object = {
    files: [
        {
            fileName: "file name1",
            invalid: [
                { type: "type name1", count: 6, "line numbers": "7, 18" },
                { type: "type name2", count: 2, "line numbers": "17, 9" }
            ]
        },
    ]
};
var taybl = new Taybl_1["default"](object);
taybl
    .withHorizontalLineStyle("-")
    .withVerticalLineStyle("|")
    .withNumberOfSpacesAtStartOfColumns(1)
    .withNumberOfSpacesAtEndOfColumns(1)
    .print();
