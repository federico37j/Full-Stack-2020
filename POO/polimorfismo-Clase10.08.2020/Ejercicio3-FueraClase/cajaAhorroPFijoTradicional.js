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
exports.CajaAhorroPFijoTradicional = void 0;
var cuenta_1 = require("./cuenta");
var CajaAhorroPFijoTradicional = /** @class */ (function (_super) {
    __extends(CajaAhorroPFijoTradicional, _super);
    function CajaAhorroPFijoTradicional(numero, titular, saldo, cotizacion, movimiento, porcentajeAnual) {
        var _this = _super.call(this, numero, titular, saldo, cotizacion, movimiento) || this;
        _this.porcentajeAnual = porcentajeAnual;
        _this.estado = false;
        return _this;
    }
    CajaAhorroPFijoTradicional.prototype.calcularGanancia = function (importe) {
        var meses = 12;
        this.estado = true;
        return ((this.porcentajeAnual / meses) / 100) * importe;
    };
    CajaAhorroPFijoTradicional.prototype.getporcentajeAnual = function () {
        return this.porcentajeAnual;
    };
    return CajaAhorroPFijoTradicional;
}(cuenta_1.Cuenta));
exports.CajaAhorroPFijoTradicional = CajaAhorroPFijoTradicional;
