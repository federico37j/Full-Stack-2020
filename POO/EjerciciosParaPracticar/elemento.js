"use strict";
exports.__esModule = true;
exports.Elemento = void 0;
var Elemento = /** @class */ (function () {
    function Elemento(id, nombre, cantidad, precioUnitario) {
        this.id = id;
        this.nombre = nombre;
        this.cantidad = cantidad;
        this.precioUnitario = precioUnitario;
    }
    Elemento.prototype.getNumero = function () {
        return this.id;
    };
    Elemento.prototype.getPrecioUnitario = function () {
        return this.precioUnitario;
    };
    return Elemento;
}());
exports.Elemento = Elemento;
