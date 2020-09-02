"use strict";
exports.__esModule = true;
exports.Auto = void 0;
var Auto = /** @class */ (function () {
    function Auto() {
        this.cantidadRuedas = 0;
        this.cantidadPuertas = 0;
        this.color = "";
        this.modelo = 0;
        this.marca = "";
        this.velocidadMax = 0;
        this.enMarcha = false;
    }
    Auto.prototype.setCantidadRuedas = function (cantidadRuedas) {
        this.cantidadRuedas = cantidadRuedas;
    };
    Auto.prototype.setCantidadPuertas = function (cantidadPuertas) {
        this.cantidadPuertas = cantidadPuertas;
    };
    Auto.prototype.setColor = function (color) {
        this.color = color;
    };
    Auto.prototype.setModelo = function (modelo) {
        this.modelo = modelo;
    };
    Auto.prototype.setMarca = function (marca) {
        this.marca = marca;
    };
    Auto.prototype.setVelocidadMax = function (velocidadMax) {
        this.velocidadMax = velocidadMax;
    };
    return Auto;
}());
exports.Auto = Auto;
