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
exports.FacturaComercial = void 0;
var FacturaSimple_1 = require("./FacturaSimple");
var FacturaComercial = /** @class */ (function (_super) {
    __extends(FacturaComercial, _super);
    function FacturaComercial(numero, fecha, nombCliente, tipoFactura, detalle) {
        var _this = _super.call(this, numero, fecha, nombCliente) || this;
        _this.tipoFactura = tipoFactura;
        _this.detalle = detalle;
        return _this;
    }
    FacturaComercial.prototype.getMonto = function () {
        var resultado = 0;
        for (var i = 0; i < this.detalle.length; i++) {
            resultado += this.detalle[i].getTotal();
        }
        return resultado;
    };
    FacturaComercial.prototype.getTipoFactura = function () {
        return this.tipoFactura;
    };
    FacturaComercial.prototype.setTipoFactura = function (tipoFactura) {
        this.tipoFactura = tipoFactura;
    };
    FacturaComercial.prototype.getDetalle = function () {
        return this.detalle;
    };
    return FacturaComercial;
}(FacturaSimple_1.FacturaSimple));
exports.FacturaComercial = FacturaComercial;
