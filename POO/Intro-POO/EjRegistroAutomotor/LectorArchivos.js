"use strict";
exports.__esModule = true;
exports.LectorArchivos = void 0;
//Importación de librerias
var fs = require("fs");
var auto_1 = require("../EjAuto/auto");
var LectorArchivos = /** @class */ (function () {
    function LectorArchivos() {
        var _this = this;
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
                _this.autos.push(new auto_1.Auto(_this.palabrasSegundo[0], Number(_this.palabrasSegundo[1]), _this.palabrasSegundo[2], Number(_this.palabrasSegundo[3])));
            }
        };
        this.autos = [];
    }
    return LectorArchivos;
}()); //FIN CLASE LECTORARCHIVOS
exports.LectorArchivos = LectorArchivos;
