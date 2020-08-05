"use strict";
exports.__esModule = true;
exports.Telefono = void 0;
var Telefono = /** @class */ (function () {
    function Telefono() {
        this.estaPrendido = false;
    }
    Telefono.prototype.mandarMensaje = function () {
        console.log("MENSAJE ENVIADO");
    };
    Telefono.prototype.hacerLlamada = function () {
        console.log("MARCANDO...");
    };
    Telefono.prototype.prenderApagar = function () {
        if (this.estaPrendido) {
            this.estaPrendido = false;
        }
        else {
            this.estaPrendido = true;
        }
    };
    Telefono.prototype.setBateria = function (tamanio) {
        this.bateriaActual = tamanio;
    };
    return Telefono;
}());
exports.Telefono = Telefono;
