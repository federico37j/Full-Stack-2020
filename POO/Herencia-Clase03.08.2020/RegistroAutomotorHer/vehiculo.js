"use strict";
exports.__esModule = true;
exports.Vehiculo = void 0;
var Vehiculo = /** @class */ (function () {
    function Vehiculo(marca, mod, color, velocidad) {
        this.marca = marca;
        this.modelo = mod;
        this.color = color;
        this.velocidadMax = velocidad;
        this.enMarcha = false;
    }
    //Funciones Get y Set
    Vehiculo.prototype.getCantidadRuedas = function () {
        return this.cantidadRuedas;
    };
    Vehiculo.prototype.setCantidadRuedas = function (cantidad) {
        this.cantidadRuedas = cantidad;
    };
    Vehiculo.prototype.getcantidadPuertas = function () {
        return this.cantidadPuertas;
    };
    Vehiculo.prototype.setcantidadPuertas = function (cantidad) {
        this.cantidadPuertas = cantidad;
    };
    Vehiculo.prototype.getColor = function () {
        return this.color;
    };
    Vehiculo.prototype.setColor = function (color) {
        this.color = color;
    };
    Vehiculo.prototype.getModelo = function () {
        return this.modelo;
    };
    Vehiculo.prototype.setModelo = function (modelo) {
        this.modelo = modelo;
    };
    Vehiculo.prototype.getMarca = function () {
        return this.marca;
    };
    Vehiculo.prototype.setMarca = function (marca) {
        this.marca = marca;
    };
    Vehiculo.prototype.getVelocidadMax = function () {
        return this.velocidadMax;
    };
    Vehiculo.prototype.setVelocidadMax = function (velocidad) {
        this.velocidadMax = velocidad;
    };
    Vehiculo.prototype.ponerEnMarcha = function () {
        if (this.enMarcha) {
            this.enMarcha = false;
        }
        else {
            this.enMarcha = true;
        }
    };
    return Vehiculo;
}()); //FIN CLASE VEHICULO
exports.Vehiculo = Vehiculo;
