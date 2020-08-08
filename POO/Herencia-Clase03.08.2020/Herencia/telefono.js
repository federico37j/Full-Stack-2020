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
    Telefono.prototype.prenderApagarLinterna = function () {
        if (this.linternaPrendida) {
            this.linternaPrendida = false;
        }
        else {
            this.linternaPrendida = true;
        }
    };
    Telefono.prototype.setBateria = function (tamanio) {
        this.bateriaActual = tamanio;
    };
    return Telefono;
}());
exports.Telefono = Telefono;
