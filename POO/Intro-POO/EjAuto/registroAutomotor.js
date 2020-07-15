"use strict";
exports.__esModule = true;
//Importación de librerías
var readlineSync = require("readline-sync");
var auto_1 = require("./auto");
var RegistroAutomotor = /** @class */ (function () {
    //Constructor
    function RegistroAutomotor(auto) {
        var _this = this;
        this.cambiarObjeto = function () {
            _this.auto.cambiarObjeto();
        };
        //Función para buscar un auto
        this.buscar = function () {
            var nombre = readlineSync.question("Ingrese la marca: ");
            return _this.auto.buscarAuto(nombre);
        };
        //Función para eliminar un auto
        this.borrar = function () {
            _this.auto.eliminarIndex();
        };
        //Función para actualizar la marca
        this.actualizar = function () {
            var autoResult = _this.buscar();
            _this.nombre = readlineSync.question("Ingrese la nueva marca: ");
            autoResult.actualizar(_this.nombre);
            return autoResult;
        };
        //Función para crear los objetos de tipo auto
        this.darAlta = function (marca, modelo, color, velocidadMax) {
            _this.auto.darAlta(marca, modelo, color, velocidadMax);
        };
        this.auto = auto;
    }
    //Función para mostrar por consola los autos ya cargados
    RegistroAutomotor.prototype.listarAutos = function () {
        this.auto.listarAutos();
    };
    return RegistroAutomotor;
}()); //FIN REGISTRO AUTOMOTOR
//Creo objetos de tipo Auto y RegistroAutomotor
var auto = new auto_1.Auto("", 0, "", 0);
var miRegistro = new RegistroAutomotor(auto);
//Cargo el arreglo con los autos del txt desde el principio
miRegistro.cambiarObjeto();
console.log("OPCIONES:");
console.log("(1) DAR ALTA\n(2) BORRAR\n(3) ACTUALIZAR\n(4) BUSCAR\n(5) LISTAR\n(6) SALIR");
var input = readlineSync.questionInt("¿Que desea hacer? ");
//Menú
while (input != 6) {
    switch (input) {
        case 1:
            console.log("<------ DAR DE ALTA UN AUTOMOVIL ------>");
            var marca = readlineSync.question("(1) Ingrese la Marca: ");
            var modelo = readlineSync.questionInt("(2) Ingrese el Modelo: ");
            var color = readlineSync.question("(3) Ingrese el color: ");
            var velocidadMax = readlineSync.questionInt("(4) Ingrese el Velocidad máxima: ");
            miRegistro.darAlta(marca, modelo, color, velocidadMax);
            break;
        case 2:
            console.log("<------ BORRADO DE UN AUTO ------>");
            miRegistro.buscar().toString();
            miRegistro.borrar();
            console.log("¡Registro borrado con éxito!");
            break;
        case 3:
            console.log("<------ ACTUALIZAR UN AUTOMOVIL ------>");
            console.log(miRegistro.actualizar().toString());
            break;
        case 4:
            console.log("<------ BUSCAR UN AUTOMOVIL ------>");
            console.log(miRegistro.buscar().toString());
            break;
        case 5:
            console.log("MOSTRAR LISTA DE AUTOS");
            miRegistro.listarAutos();
            break;
        case 6:
            console.log("¡Hasta luego!");
            break;
    }
    input = readlineSync.questionInt("¿Que desea hacer? ");
}
