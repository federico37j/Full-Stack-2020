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
        this.estado = false;
    }
    //Se ingresa un importe por parámetro y se multiplica por la cotización del día
    Cuenta.prototype.calcularGanancia = function (importe) {
        return this.cotizacionDelDia * importe;
    };
    Cuenta.prototype.cambiarEstado = function () {
        this.estado = !this.estado;
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
