"use strict";
exports.__esModule = true;
exports.FacturaSimple = void 0;
var FacturaSimple = /** @class */ (function () {
    function FacturaSimple(numeroFac, fecha, nombCliente) {
        this.numero = numeroFac;
        this.fecha = fecha;
        this.nombCliente = nombCliente;
    }
    FacturaSimple.prototype.getNumeroFac = function () {
        return this.numero;
    };
    FacturaSimple.prototype.getNombCliente = function () {
        return this.nombCliente;
    };
    FacturaSimple.prototype.setNombCliente = function (nombCliente) {
        this.nombCliente = nombCliente;
    };
    return FacturaSimple;
}());
exports.FacturaSimple = FacturaSimple;
