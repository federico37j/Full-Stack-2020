"use strict";
exports.__esModule = true;
//Importación de librerias
var fs = require("fs");
var LectorArchivos = /** @class */ (function () {
    function LectorArchivos() {
        var _this = this;
        //Función para trae los datos del TXT usando import * as fs from 'fs'
        this.leerArchivos = function (urlFS) {
            //'EjAuto/auto.txt'
            _this.texto = fs.readFileSync(urlFS, 'utf8');
            _this.palabrasPrimero = _this.texto.split('\r\n');
            console.log(_this.palabrasPrimero);
        };
    }
    return LectorArchivos;
}()); //FIN CLASE LECTORARCHIVOS
var lectorArchivos = new LectorArchivos();
lectorArchivos.leerArchivos('EjLibro/libros.txt');
