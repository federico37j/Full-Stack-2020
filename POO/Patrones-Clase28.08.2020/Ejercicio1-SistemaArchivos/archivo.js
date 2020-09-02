"use strict";
exports.__esModule = true;
exports.Archivo = void 0;
var Archivo = /** @class */ (function () {
    function Archivo(nombre, ubicacion) {
        this.nombre = nombre;
        this.ubicacion = ubicacion;
    }
    Archivo.prototype.getNombre = function () {
        return this.nombre;
    };
    Archivo.prototype.getUbicacion = function () {
        return this.ubicacion;
    };
    return Archivo;
}());
exports.Archivo = Archivo;
