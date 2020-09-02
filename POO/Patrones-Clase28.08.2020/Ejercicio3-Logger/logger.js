"use strict";
exports.__esModule = true;
exports.Logger = void 0;
//Importación de librerías
var fs = require("fs");
var Logger = /** @class */ (function () {
    //Constructor privado
    function Logger() {
        //Uso createWriteStream para escribir un archivo línea por línea.
        this.insertarLinea = fs.createWriteStream("infoLog.txt");
        //Uso la clase Date para agregarle la fecha a las operaciones del método logInfo.
        this.date = new Date();
    }
    //Si "instancia" es igual a null la creo, sino la retorno.
    Logger.getLogger = function () {
        if (this.instancia == null) {
            this.instancia = new Logger();
        }
        return this.instancia;
    };
    Logger.prototype.logInfo = function (nombre, ubic) {
        if (ubic == undefined) {
            this.insertarLinea.write("| INFORMACIÓN | " + this.date + " | CARPETA: " + nombre + " |\n");
        }
        else {
            this.insertarLinea.write("| INFORMACIÓN | " + this.date + " | ARCHIVO: " + nombre + " | UBICACIÓN: " + ubic + " |\n");
        }
    };
    Logger.instancia = null;
    return Logger;
}());
exports.Logger = Logger;
