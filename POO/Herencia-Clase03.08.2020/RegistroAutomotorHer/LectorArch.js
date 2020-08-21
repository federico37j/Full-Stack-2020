"use strict";
exports.__esModule = true;
exports.LectorArch = void 0;
//Importación de librerías
var fs = require("fs");
//Exporto la clase LectorArchivos para poder utilizarla en la clase RegAutomotor.
var LectorArch = /** @class */ (function () {
    //Constructor
    function LectorArch() {
        var _this = this;
        //Función para traer los datos del TXT usando import * as fs from 'fs'
        this.leerArchivos = function (urlFS) {
            _this.texto = fs.readFileSync(urlFS, 'utf8');
            return _this.txtPorFila = _this.texto.split('\r\n');
        };
    }
    return LectorArch;
}());
exports.LectorArch = LectorArch;
