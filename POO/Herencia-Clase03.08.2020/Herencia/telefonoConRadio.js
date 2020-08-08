"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var telefono_1 = require("./telefono");
var TelefonoConRadio = /** @class */ (function (_super) {
    __extends(TelefonoConRadio, _super);
    function TelefonoConRadio(frecuencia, bateria) {
        var _this = _super.call(this, bateria) || this;
        _this.frecuenciaActual = frecuencia;
        return _this;
    }
    TelefonoConRadio.prototype.verFrecuenciaActual = function () {
        return this.frecuenciaActual;
    };
    return TelefonoConRadio;
}(telefono_1.Telefono));
var frecuencia = 1500;
var bateria = 4000;
var miCel = new TelefonoConRadio(frecuencia, bateria);
miCel.prenderApagar();
miCel.setBateria(4000);
console.log(miCel.verFrecuenciaActual(), "MHz");
console.log(miCel);
