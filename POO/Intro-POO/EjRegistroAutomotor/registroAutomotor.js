"use strict";
exports.__esModule = true;
//Importación de librerías
var LectorArchivos_1 = require("./LectorArchivos");
var auto_1 = require("../EjAuto/auto");
var RegistroAutomotor = /** @class */ (function () {
    function RegistroAutomotor(lectorArchivos, auto) {
        var _this = this;
        this.cambiarObjeto = function () {
            _this.lectorArchivos.cambiarObjeto();
        };
        this.darAlta = function (marca, modelo, color, velocidad) {
            _this.auto.darAlta(marca, modelo, color, velocidad);
        };
        this.listarAutos = function () {
            _this.auto.listarAutos();
        };
        this.lectorArchivos = lectorArchivos;
        this.auto = auto;
        this.cambiarObjeto();
    }
    return RegistroAutomotor;
}()); //FIN CLASE REGISTROAUTOMOTOR
var auto = new auto_1.Auto("", 0, "", 0);
var lectorArchivos = new LectorArchivos_1.LectorArchivos();
var registroAutomotor = new RegistroAutomotor(lectorArchivos, auto);
var marca = "Fiat";
var modelo = 2020;
var color = "Negro";
var velMax = 210;
registroAutomotor.darAlta(marca, modelo, color, velMax);
registroAutomotor.listarAutos();
