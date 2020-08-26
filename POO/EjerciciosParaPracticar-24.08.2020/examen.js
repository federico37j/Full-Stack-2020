"use strict";
exports.__esModule = true;
exports.Examen = void 0;
var Examen = /** @class */ (function () {
    function Examen(nombre, calificacion) {
        this.nombre = nombre;
        this.calificacion = calificacion;
    }
    Examen.prototype.getNombre = function () {
        return this.nombre;
    };
    Examen.prototype.getCalificacion = function () {
        return this.calificacion;
    };
    return Examen;
}());
exports.Examen = Examen;
