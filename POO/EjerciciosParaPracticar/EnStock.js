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
exports.EnStock = void 0;
var elemento_1 = require("./elemento");
var EnStock = /** @class */ (function (_super) {
    __extends(EnStock, _super);
    function EnStock(id, nombre, cantidad, precioUnitario, costoAsociado) {
        if (costoAsociado === void 0) { costoAsociado = 0; }
        var _this = _super.call(this, id, nombre, cantidad, precioUnitario) || this;
        _this.costoAsociado = costoAsociado;
        _this.disponible = true;
        return _this;
    }
    EnStock.prototype.getNombre = function () {
        return this.nombre;
    };
    EnStock.prototype.getCantidad = function () {
        return this.cantidad;
    };
    EnStock.prototype.setCantidad = function (num) {
        this.cantidad = num;
    };
    EnStock.prototype.getCostoAsociado = function () {
        return this.costoAsociado;
    };
    EnStock.prototype.getDisponible = function () {
        return this.disponible;
    };
    EnStock.prototype.toString = function () {
        return this.id + "," + this.nombre + "," + this.cantidad + "," + this.precioUnitario + "," + this.costoAsociado;
    };
    return EnStock;
}(elemento_1.Elemento));
exports.EnStock = EnStock;
