"use strict";
exports.__esModule = true;
exports.Movimiento = void 0;
var Movimiento = /** @class */ (function () {
    function Movimiento(fecha, tipo, importe, saldo) {
        this.fecha = fecha;
        this.tipo = tipo;
        this.importe = importe;
        this.saldo = saldo;
    }
    Movimiento.prototype.imprimirMovimiento = function () {
        console.log("Fecha: " + this.fecha + "\nTipo: " + this.tipo + "\nImporte: " + this.importe + "\nSaldo: " + this.saldo + ".");
    };
    return Movimiento;
}());
exports.Movimiento = Movimiento;
