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
var libro_1 = require("./libro");
var libroInfantil_1 = require("./libroInfantil");
var LibroEconomia = /** @class */ (function (_super) {
    __extends(LibroEconomia, _super);
    function LibroEconomia(titulo, autor, editorial, anio, cantidadCopias, modelo) {
        var _this = _super.call(this, titulo, autor, editorial, anio, cantidadCopias) || this;
        _this.modelo = modelo;
        _this.disponibilidad = true;
        _this.reservas = 0;
        return _this;
    }
    LibroEconomia.prototype.reservarLibro = function () {
        if (this.disponibilidad) {
            this.reservas += 1;
        }
    };
    LibroEconomia.prototype.getDisponibilidad = function () {
        return this.disponibilidad;
    };
    LibroEconomia.prototype.setDisponibilidad = function (disponibilidad) {
        this.disponibilidad = disponibilidad;
    };
    LibroEconomia.prototype.getModelo = function () {
        return this.modelo;
    };
    LibroEconomia.prototype.setModelo = function (modelo) {
        this.modelo = modelo;
    };
    return LibroEconomia;
}(libro_1.Libro));
var miLibro = new libro_1.Libro("MONGO BLANCO", "CARLOS BARDEM", "PLAZA & JANES EDITORES", 2019, 100);
var miLibroEconomia = new LibroEconomia("Economia en una lección", "Henry Hazlitt", "Harper", 1946, 100, "Liberal");
var miLibroInfantil = new libroInfantil_1.LibroInfantil("Caperucita roja", "Charles Perrault", "N/A", 1697, 500, 12);
miLibro.reservarLibro();
miLibroEconomia.reservarLibro();
miLibroInfantil.reservarLibro();
console.log(miLibro);
console.log(miLibroEconomia);
console.log(miLibroInfantil);
