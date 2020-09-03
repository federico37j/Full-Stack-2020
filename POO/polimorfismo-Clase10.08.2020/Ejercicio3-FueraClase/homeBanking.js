"use strict";
exports.__esModule = true;
var readlineSync = require("readline-sync");
var movimiento_1 = require("./movimiento");
var cuenta_1 = require("./cuenta");
var cajaAhorroPFijoTradicional_1 = require("./cajaAhorroPFijoTradicional");
var cajaAhorroPFijoUVA_1 = require("./cajaAhorroPFijoUVA");
var HomeBanking = /** @class */ (function () {
    function HomeBanking(usuario, contrasenia, cuenta) {
        this.usuario = usuario;
        this.contrasenia = contrasenia;
        this.cuenta = cuenta;
        this.transaccionesActuales = [];
    }
    //Dependiendo de la operación que realice el usuario se le asigna el tipo al movimiento
    HomeBanking.prototype.tipoDeMovimiento = function (respuesta, importe, saldo) {
        var tipo;
        switch (respuesta) {
            case 1:
                tipo = "ALTA PLAZO FIJO TRADICIONAL";
                break;
            case 2:
                tipo = "ALTA PLAZO FIJO UVA";
                break;
        }
        return new movimiento_1.Movimiento(String(new Date()), tipo, importe, saldo);
    };
    HomeBanking.prototype.darAltaPlazoFijo = function (input) {
        var numero = this.cuenta.getNumero();
        var titular = this.cuenta.getTitular();
        var saldo = this.cuenta.getSaldo();
        var cotizacion = this.cuenta.getCotizacionDelDia();
        var monto = readlineSync.questionInt("Ingrese el monto a invertir: ");
        var movimiento = this.tipoDeMovimiento(input, monto, saldo - monto);
        switch (input) {
            case 1:
                this.transaccionesActuales.push(new cajaAhorroPFijoTradicional_1.CajaAhorroPFijoTradicional(numero, titular, saldo, cotizacion, movimiento, readlineSync.questionInt("Ingrese porcentaje anual: ")));
                break;
            case 2:
                this.transaccionesActuales.push(new cajaAhorroPFijoUVA_1.CajaAhorroPFijoUVA(numero, titular, saldo, cotizacion, movimiento, readlineSync.questionInt("Ingrese porcentaje anual: "), readlineSync.questionInt("Ingrese porcentaje de inflación: ")));
                break;
        }
    };
    HomeBanking.prototype.darAltaPlazoFijoTrad = function (numero, titular, saldo, cotizacion, movimiento, porcentajeAnual) {
        new cajaAhorroPFijoTradicional_1.CajaAhorroPFijoTradicional(numero, titular, saldo, cotizacion, movimiento, porcentajeAnual);
    };
    HomeBanking.prototype.darAltaPlazoFijoUVA = function (numero, titular, saldo, cotizacion, movimiento, porcentajeAnual, porcentajeInflacion) {
        new cajaAhorroPFijoUVA_1.CajaAhorroPFijoUVA(numero, titular, saldo, cotizacion, movimiento, porcentajeAnual, porcentajeInflacion);
    };
    HomeBanking.prototype.getCuentasActuales = function () {
        return this.transaccionesActuales;
    };
    return HomeBanking;
}()); // FIN CLASE HOME BANKING
//CUENTA
var miMovAlta = new movimiento_1.Movimiento("Fri Aug 14 2020 11:27:23 GMT-0300 (GMT-03:00)", "ALTA DE CUENTA", 100000, 100000);
var miCuenta = new cuenta_1.Cuenta(658321, "Federico", 100000, 73, miMovAlta);
console.log(miCuenta.calcularGanancia(10000));
//PLAZO FIJO TRADICIONAL
var miMovPlazoFijoTrad = new movimiento_1.Movimiento("Fri Aug 14 2020 11:27:23 GMT-0300 (GMT-03:00)", "ALTA PLAZO FIJO TRADICIONAL", 100000, 100000);
var miPFijoTradicional = new cajaAhorroPFijoTradicional_1.CajaAhorroPFijoTradicional(658321, "Federico", 100000, 73, miMovPlazoFijoTrad, 12);
console.log(miPFijoTradicional.calcularGanancia(10000));
//PLAZO FIJO UVA
var miMovPlazoFijoUVA = new movimiento_1.Movimiento("Fri Aug 14 2020 11:27:23 GMT-0300 (GMT-03:00)", "ALTA PLAZO FIJO TRADICIONAL", 100000, 100000);
var miPFijoUVA = new cajaAhorroPFijoUVA_1.CajaAhorroPFijoUVA(658321, "Federico", 100000, 73, miMovPlazoFijoUVA, 18, 50);
console.log(miPFijoUVA.calcularGanancia(10000));
var miHomeBanking = new HomeBanking("Admin", "Admin", miCuenta);
//MENU
console.log("¡BIENVENIDO!");
var respuesta = readlineSync.questionInt("(1) PLAZO FIJO TRADICIONAL\n(2) PLAZO FIJO UVA\nTu respuesta: ");
miHomeBanking.darAltaPlazoFijo(respuesta);
console.log(miHomeBanking.getCuentasActuales());
