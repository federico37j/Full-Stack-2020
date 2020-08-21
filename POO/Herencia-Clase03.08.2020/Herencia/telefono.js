"use strict";
exports.__esModule = true;
exports.Telefono = void 0;
var Telefono = /** @class */ (function () {
    function Telefono(bateria) {
        this.estaPrendido = false;
        this.bateriaActual = bateria;
        this.linternaPrendida = false;
    }
    Telefono.prototype.mandarMensaje = function (msg, numero) {
        if (numero > 0) {
            console.log("MENSAJE ENVIADO", msg, "numero", numero);
            return true;
        }
        return false;
    };
    Telefono.prototype.hacerLlamada = function () {
        console.log("MARCANDO...");
    };
    Telefono.prototype.prenderApagar = function () {
        this.estaPrendido = !this.estaPrendido;
    };
    Telefono.prototype.prenderApagarLinterna = function () {
        this.linternaPrendida = !this.linternaPrendida;
    };
    Telefono.prototype.setBateria = function (tamanio) {
        this.bateriaActual = tamanio;
    };
    return Telefono;
}());
exports.Telefono = Telefono;
