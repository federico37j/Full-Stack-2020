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
var vehiculo_1 = require("./vehiculo");
var AutoDeportivo = /** @class */ (function (_super) {
    __extends(AutoDeportivo, _super);
    function AutoDeportivo(marca, modelo, color, velocidadMax, suspension, frenos, direccion) {
        var _this = _super.call(this, marca, modelo, color, velocidadMax) || this;
        _this.suspension = suspension;
        _this.frenos = frenos;
        _this.direccion = direccion;
        _this.diseñoAerodinámico = true;
        return _this;
    }
    AutoDeportivo.prototype.acelerar = function () {
        this.velocidadActual += 100;
    };
    AutoDeportivo.prototype.getSuspension = function () {
        return this.suspension;
    };
    AutoDeportivo.prototype.setSuspension = function (suspension) {
        this.suspension = suspension;
    };
    AutoDeportivo.prototype.getFrenos = function () {
        return this.frenos;
    };
    AutoDeportivo.prototype.setFrenos = function (frenos) {
        this.frenos = frenos;
    };
    AutoDeportivo.prototype.getDireccion = function () {
        return this.direccion;
    };
    AutoDeportivo.prototype.setDireccion = function (direccion) {
        this.direccion = direccion;
    };
    AutoDeportivo.prototype.getDiseñoAerodinámico = function () {
        return this.diseñoAerodinámico;
    };
    return AutoDeportivo;
}(vehiculo_1.Vehiculo));
var miAuto = new AutoDeportivo("", 0, "", 0, "", "", "");
try {
    miAuto.setCantidadRuedas(5);
}
catch (error) {
    console.log("El valor ingresado tiene que ser par", error);
}
