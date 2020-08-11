"use strict";
exports.__esModule = true;
exports.Inmueble = void 0;
var Inmueble = /** @class */ (function () {
    function Inmueble(ubicacion, metrosCuadrados, cantHabitaciones) {
        this.ubicacion = ubicacion;
        this.metrosCuadrados = metrosCuadrados;
        this.cantHabitaciones = cantHabitaciones;
        this.espacioVerde = true;
    }
    //Métodos get y set
    Inmueble.prototype.getUbicacion = function () {
        return this.ubicacion;
    };
    Inmueble.prototype.setUbicacion = function (ubicacion) {
        this.ubicacion = ubicacion;
    };
    Inmueble.prototype.getMetrosCuadrados = function (metrosCuadrados) {
        this.metrosCuadrados = metrosCuadrados;
    };
    Inmueble.prototype.setMetrosCuadrados = function () {
        return this.metrosCuadrados;
    };
    Inmueble.prototype.getCantHabitaciones = function (cantHabitaciones) {
        this.cantHabitaciones = cantHabitaciones;
    };
    Inmueble.prototype.setCantHabitaciones = function () {
        return this.cantHabitaciones;
    };
    Inmueble.prototype.getEspacioVerde = function (espacioVerde) {
        this.espacioVerde = espacioVerde;
    };
    Inmueble.prototype.setEspacioVerde = function () {
        return this.espacioVerde;
    };
    return Inmueble;
}());
exports.Inmueble = Inmueble;
