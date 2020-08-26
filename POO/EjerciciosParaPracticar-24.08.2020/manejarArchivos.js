"use strict";
exports.__esModule = true;
exports.ManejarArchivos = void 0;
//Importación de librerías
var fs = require("fs");
var ManejarArchivos = /** @class */ (function () {
    function ManejarArchivos() {
        var _this = this;
        //Función para traer los datos del TXT usando import * as fs from 'fs'
        this.leerArchivos = function (urlFS) {
            _this.texto = fs.readFileSync(urlFS, 'utf8');
            return _this.txtPorFila = _this.texto.split('\r\n');
        };
    }
    return ManejarArchivos;
}());
exports.ManejarArchivos = ManejarArchivos;
