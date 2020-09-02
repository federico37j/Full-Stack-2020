"use strict";
exports.__esModule = true;
exports.Carpeta = void 0;
var archivo_1 = require("./archivo");
var logger_1 = require("../Ejercicio3-Logger/logger");
var Carpeta = /** @class */ (function () {
    function Carpeta(nombre) {
        this.nombre = nombre;
        this.elementos = [];
    }
    Carpeta.prototype.arregarElementos = function (elemento) {
        this.elementos.push(elemento);
    };
    Carpeta.prototype.getNombre = function () {
        return this.nombre;
    };
    Carpeta.prototype.getContenido = function () {
        return this.elementos;
    };
    return Carpeta;
}());
exports.Carpeta = Carpeta;
var log = logger_1.Logger.getLogger();
var carpeta1 = new Carpeta("Carpeta 1");
log.logInfo(carpeta1.getNombre());
var carpeta2 = new Carpeta("Carpeta 2");
log.logInfo(carpeta2.getNombre());
var carpeta3 = new Carpeta("Carpeta 3");
log.logInfo(carpeta3.getNombre());
var archivo1 = new archivo_1.Archivo("Legajo 1", "C:\Users\Desktop");
log.logInfo(archivo1.getNombre(), archivo1.getUbicacion());
var archivo2 = new archivo_1.Archivo("Legajo 2", "C:\Users\Desktop");
log.logInfo(archivo2.getNombre(), archivo2.getUbicacion());
var archivo3 = new archivo_1.Archivo("Legajo 3", "C:\Users\Desktop");
log.logInfo(archivo3.getNombre(), archivo3.getUbicacion());
carpeta1.arregarElementos(archivo1);
carpeta1.arregarElementos(archivo2);
carpeta1.arregarElementos(carpeta3);
carpeta3.arregarElementos(archivo1);
console.table(carpeta1.getContenido());
