"use strict";
exports.__esModule = true;
exports.Detalle = void 0;
var Detalle = /** @class */ (function () {
    function Detalle(numeroDetalle, fecha, nombProducto, cantProducto, precioUnitario, total) {
        if (total === void 0) { total = 0; }
        this.numeroDetalle = numeroDetalle;
        this.fecha = fecha;
        this.nombProducto = nombProducto;
        this.cantProducto = cantProducto;
        this.precioUnitario = precioUnitario;
        this.total = total;
    }
    Detalle.prototype.getNumeroDetalle = function () {
        return this.numeroDetalle;
    };
    Detalle.prototype.setNumeroDetalle = function (numeroDetalle) {
        this.numeroDetalle = numeroDetalle;
    };
    Detalle.prototype.getFecha = function () {
        return this.fecha;
    };
    Detalle.prototype.setFecha = function (fecha) {
        this.fecha = fecha;
    };
    Detalle.prototype.getNombProducto = function () {
        return this.nombProducto;
    };
    Detalle.prototype.setNombProducto = function (nombProducto) {
        this.nombProducto = nombProducto;
    };
    Detalle.prototype.getCantProducto = function () {
        return this.cantProducto;
    };
    Detalle.prototype.setCantProducto = function (cantProducto) {
        this.cantProducto = cantProducto;
    };
    Detalle.prototype.getPrecioUnitario = function () {
        return this.precioUnitario;
    };
    Detalle.prototype.setPrecioUnitario = function (precioUnitario) {
        this.precioUnitario = precioUnitario;
    };
    Detalle.prototype.getTotal = function () {
        return this.total;
    };
    Detalle.prototype.toString = function () {
        return this.numeroDetalle + "," + this.fecha + "," + this.nombProducto + "," + this.cantProducto + "," + this.precioUnitario + "," + this.total + "\n";
    };
    return Detalle;
}());
exports.Detalle = Detalle;
