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
exports.Alumno = void 0;
var persona_1 = require("./persona");
var Alumno = /** @class */ (function (_super) {
    __extends(Alumno, _super);
    function Alumno(dni, nombre, apellido, edad, examenes, promedio) {
        if (examenes === void 0) { examenes = []; }
        if (promedio === void 0) { promedio = 0; }
        var _this = _super.call(this, nombre, apellido, edad) || this;
        _this.dni = dni;
        _this.examenes = examenes;
        _this.promedio = promedio;
        return _this;
    }
    Alumno.prototype.getDni = function () {
        return this.dni;
    };
    Alumno.prototype.getPromedio = function () {
        return this.promedio;
    };
    Alumno.prototype.getExamenes = function () {
        return this.examenes;
    };
    Alumno.prototype.setPromedio = function (promedio) {
        return this.promedio = promedio;
    };
    Alumno.prototype.setExamenes = function (examen) {
        return this.examenes = examen;
    };
    return Alumno;
}(persona_1.Persona));
exports.Alumno = Alumno;
