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
exports.LibroInfantil = void 0;
var libro_1 = require("./libro");
var LibroInfantil = /** @class */ (function (_super) {
    __extends(LibroInfantil, _super);
    function LibroInfantil(titulo, autor, editorial, anio, cantidadCopias, edadRecomendada) {
        var _this = _super.call(this, titulo, autor, editorial, anio, cantidadCopias) || this;
        _this.edadRecomendada = edadRecomendada;
        _this.reservas = 0;
        return _this;
    }
    LibroInfantil.prototype.reservarLibro = function () {
        if (this.edadRecomendada >= 12) {
            this.reservas += 1;
        }
    };
    LibroInfantil.prototype.setEdadRecomendada = function (edad) {
        this.edadRecomendada = edad;
    };
    return LibroInfantil;
}(libro_1.Libro));
exports.LibroInfantil = LibroInfantil;
