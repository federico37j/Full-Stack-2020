"use strict";
exports.__esModule = true;
exports.Auto = void 0;
var Auto = /** @class */ (function () {
    function Auto(marca, mod, color, velocidadMax) {
        this.marca = marca;
        this.modelo = mod;
        this.color = color;
        this.velocidadMax = velocidadMax;
        this.velocidadActual = 0;
        this.enMarcha = false;
    }
    Auto.prototype.acelerar = function () {
        this.velocidadActual += 10;
    };
    Auto.prototype.ponerEnMarcha = function () {
        if (this.enMarcha) {
            this.enMarcha = false;
        }
        else {
            this.enMarcha = true;
        }
    };
    //Funciones Get y Set
    Auto.prototype.getCantidadRuedas = function () {
        return this.cantidadRuedas;
    };
    Auto.prototype.setCantidadRuedas = function (cantidad) {
        this.cantidadRuedas = cantidad;
    };
    Auto.prototype.getcantidadPuertas = function () {
        return this.cantidadPuertas;
    };
    Auto.prototype.setcantidadPuertas = function (cantidad) {
        this.cantidadPuertas = cantidad;
    };
    Auto.prototype.getColor = function () {
        return this.color;
    };
    Auto.prototype.setColor = function (color) {
        this.color = color;
    };
    Auto.prototype.getModelo = function () {
        return this.modelo;
    };
    Auto.prototype.setModelo = function (modelo) {
        this.modelo = modelo;
    };
    Auto.prototype.getMarca = function () {
        return this.marca;
    };
    Auto.prototype.setMarca = function (marca) {
        this.marca = marca;
    };
    Auto.prototype.getVelocidadMax = function () {
        return this.velocidadMax;
    };
    Auto.prototype.setVelocidadMax = function (velocidad) {
        this.velocidadMax = velocidad;
    };
    return Auto;
}()); //FIN CLASE AUTO
exports.Auto = Auto;
