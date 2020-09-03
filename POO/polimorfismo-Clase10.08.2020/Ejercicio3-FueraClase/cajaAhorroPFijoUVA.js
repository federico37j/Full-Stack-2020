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
exports.CajaAhorroPFijoUVA = void 0;
var cuenta_1 = require("./cuenta");
var CajaAhorroPFijoUVA = /** @class */ (function (_super) {
    __extends(CajaAhorroPFijoUVA, _super);
    function CajaAhorroPFijoUVA(numero, titular, saldo, cotizacion, movimiento, porcentajeAnual, porcentajeInflacion) {
        var _this = _super.call(this, numero, titular, saldo, cotizacion, movimiento) || this;
        _this.porcentajeAnual = porcentajeAnual;
        _this.porcentajeInflacion = porcentajeInflacion;
        _this.cambiarEstado();
        return _this;
    }
    /* Se divide el porcentaje anual por la cantidad de meses para obtener el porcentaje mensual y luego a eso se lo divide por 100
     se hace el mismo procedimiento con porcentaje de inflación y ambos resultados se suman y se multiplican por el importe ingresado
     por parámetro */
    CajaAhorroPFijoUVA.prototype.calcularGanancia = function (importe) {
        var meses = 12;
        var resultado = (this.porcentajeAnual / meses) / 100;
        var porcentajeInflacionDeci = (this.porcentajeInflacion / meses) / 100;
        this.estado = true;
        return (porcentajeInflacionDeci + resultado) * importe;
    };
    CajaAhorroPFijoUVA.prototype.getporcentajeAnual = function () {
        return this.porcentajeAnual;
    };
    CajaAhorroPFijoUVA.prototype.getPorcentajeInflacion = function () {
        return this.porcentajeInflacion;
    };
    return CajaAhorroPFijoUVA;
}(cuenta_1.Cuenta));
exports.CajaAhorroPFijoUVA = CajaAhorroPFijoUVA;
