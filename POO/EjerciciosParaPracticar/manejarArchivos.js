"use strict";
exports.__esModule = true;
exports.ManejarArchivos = void 0;
//Importación de librerías
var fs = require("fs");
//Exporto la clase ManejarArchivos para poder utilizarla en la clase Factura.
var ManejarArchivos = /** @class */ (function () {
    function ManejarArchivos() {
        var _this = this;
        //Función para traer los datos del TXT usando import * as fs from 'fs'
        this.leerArchivos = function (urlFS) {
            _this.texto = fs.readFileSync(urlFS, 'utf8');
            return _this.txtPorFila = _this.texto.split('\r\n');
        };
    }
    //Función para insertar los datos en el TXT
    ManejarArchivos.prototype.guardarTxt = function (url, texto) {
        fs.writeFile(url, texto, function (err) {
            if (err)
                return console.error(err);
        });
    };
    return ManejarArchivos;
}());
exports.ManejarArchivos = ManejarArchivos;
