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
exports.prodVendido = void 0;
var elemento_1 = require("./elemento");
var prodVendido = /** @class */ (function (_super) {
    __extends(prodVendido, _super);
    function prodVendido(id, nombre, cantidad, precioUnitario, nombCliente, fecha, total) {
        var _this = _super.call(this, id, nombre, cantidad, precioUnitario) || this;
        _this.nombCliente = nombCliente;
        _this.fecha = fecha;
        _this.total = total;
        return _this;
    }
    prodVendido.prototype.getTotal = function () {
        return this.total;
    };
    prodVendido.prototype.toString = function () {
        return this.id + "," + this.nombre + "," + this.cantidad + "," + this.precioUnitario + "," + this.nombCliente + "," + this.total + "," + this.fecha;
    };
    return prodVendido;
}(elemento_1.Elemento));
exports.prodVendido = prodVendido;
