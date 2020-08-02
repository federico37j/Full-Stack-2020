"use strict";
exports.__esModule = true;
exports.LectorArchivos = void 0;
//Importación de librerias
var fs = require("fs");
var LectorArchivos = /** @class */ (function () {
    function LectorArchivos() {
        var _this = this;
        //Función para trae los datos del TXT usando import * as fs from 'fs'
        this.leerArchivos = function (urlFS) {
            _this.texto = fs.readFileSync(urlFS, 'utf8');
            return _this.palabrasPrimero = _this.texto.split('\r\n');
        };
    }
    return LectorArchivos;
}()); //FIN CLASE LECTORARCHIVOS
exports.LectorArchivos = LectorArchivos;
