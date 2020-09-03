"use strict";
exports.__esModule = true;
exports.Vehiculo = void 0;
var Vehiculo = /** @class */ (function () {
    function Vehiculo(marca, modelo, color, velocidadMax) {
        this.marca = marca;
        this.modelo = modelo;
        this.color = color;
        this.velocidadMax = velocidadMax;
        this.velocidadActual = 0;
        this.estaPrendido = false;
    }
    Vehiculo.prototype.arrancar = function () {
        this.estaPrendido = !this.estaPrendido;
    };
    Vehiculo.prototype.getMarca = function () {
        return this.marca;
    };
    Vehiculo.prototype.setMarca = function (marca) {
        this.marca = marca;
    };
    Vehiculo.prototype.getModelo = function () {
        return this.modelo;
    };
    Vehiculo.prototype.setModelo = function (modelo) {
        this.modelo = modelo;
    };
    Vehiculo.prototype.getColor = function () {
        return this.color;
    };
    Vehiculo.prototype.setColor = function (color) {
        this.color = color;
    };
    Vehiculo.prototype.getVelocidadMax = function () {
        return this.velocidadMax;
    };
    Vehiculo.prototype.setVelocidadMax = function (velocidadMax) {
        this.velocidadMax = velocidadMax;
    };
    Vehiculo.prototype.getCantidadRuedas = function () {
        return this.cantidadRuedas;
    };
    Vehiculo.prototype.setCantidadRuedas = function (ruedas) {
        var resul = ruedas % 2;
        if (resul != 0) {
            throw new Error("");
        }
        this.cantidadRuedas = ruedas;
    };
    return Vehiculo;
}());
exports.Vehiculo = Vehiculo;
