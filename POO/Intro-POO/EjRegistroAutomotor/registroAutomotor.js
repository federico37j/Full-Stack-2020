"use strict";
exports.__esModule = true;
//Importación de librerías
var LectorArchivos_1 = require("./LectorArchivos");
var auto_1 = require("../EjAuto/auto");
var RegistroAutomotor = /** @class */ (function () {
    function RegistroAutomotor(lectorArchivos, auto) {
        var _this = this;
        this.cambiarAObjeto = function (urlFS) {
            _this.palabrasPrimero = _this.lectorArchivos.leerArchivos(urlFS);
            var i = 0;
            for (i; i < _this.palabrasPrimero.length; i++) {
                _this.palabrasSegundo = _this.palabrasPrimero[i].split(",");
                _this.autos.push(new auto_1.Auto(_this.palabrasSegundo[0], Number(_this.palabrasSegundo[1]), _this.palabrasSegundo[2], Number(_this.palabrasSegundo[3])));
            }
        };
        this.darAlta = function (marca, modelo, color, velocidad) {
            _this.autos.push(new auto_1.Auto(marca, modelo, color, velocidad));
        };
        //Función que recorre el arreglo de autos y lo muestra por consola
        this.listarAutos = function () {
            for (var i = 0; i < _this.autos.length; i++) {
                if (_this.autos[i] != null) {
                    console.log(_this.autos[i].toString());
                }
            }
        };
        this.lectorArchivos = lectorArchivos;
        this.auto = auto;
        this.autos = [];
        this.cambiarAObjeto('EjRegistroAutomotor/auto.txt');
    }
    return RegistroAutomotor;
}()); //FIN CLASE REGISTROAUTOMOTOR
var auto = new auto_1.Auto("", 0, "", 0);
var lectorArchivos = new LectorArchivos_1.LectorArchivos();
var registroAutomotor = new RegistroAutomotor(lectorArchivos, auto);
var marca = "NUEVA";
var modelo = 2020;
var color = "Negro";
var velMax = 210;
registroAutomotor.darAlta(marca, modelo, color, velMax);
registroAutomotor.listarAutos();
