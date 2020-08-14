"use strict";
exports.__esModule = true;
exports.Cuenta = void 0;
var Cuenta = /** @class */ (function () {
    function Cuenta(numero, titular, saldo, cotizacionDelDia, movimiento) {
        this.numero = numero;
        this.titular = titular;
        this.saldo = saldo;
        this.cotizacionDelDia = cotizacionDelDia;
        this.movimiento = movimiento;
        this.estado = true;
    }
    Cuenta.prototype.calcularGanancia = function (importe) {
        return this.cotizacionDelDia * importe;
    };
    Cuenta.prototype.getNumero = function () {
        return this.numero;
    };
    Cuenta.prototype.getSaldo = function () {
        return this.saldo;
    };
    Cuenta.prototype.getTitular = function () {
        return this.titular;
    };
    Cuenta.prototype.getCotizacionDelDia = function () {
        return this.cotizacionDelDia;
    };
    return Cuenta;
}());
exports.Cuenta = Cuenta;
