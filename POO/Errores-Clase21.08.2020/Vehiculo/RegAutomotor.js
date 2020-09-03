"use strict";
exports.__esModule = true;
//Import librerías
var readlineSync = require("readline-sync");
var auto_1 = require("./auto");
var moto_1 = require("./moto");
var camion_1 = require("./camion");
var customError_1 = require("../autoDeport/customError");
var RegistroAutomotor = /** @class */ (function () {
    function RegistroAutomotor() {
        this.vehiculos = [];
    }
    //Con esta función se crean los objetos de tipo auto/moto/camión
    RegistroAutomotor.prototype.darAltaVehiculo = function (input) {
        if (input > 3) {
            throw new customError_1.CustomError("ERROR");
        }
        switch (input) {
            case 1:
                this.vehiculos.push(new auto_1.Auto(readlineSync.question("(1) Ingrese la marca: "), readlineSync.questionInt("(2) Ingrese el modelo: "), readlineSync.question("(3) Ingrese el color: "), readlineSync.questionInt("(4) Ingrese la velocidad maxima: "), readlineSync.questionInt("(5) Ingrese la cantidad de puertas: ")));
                break;
            case 2:
                this.vehiculos.push(new moto_1.Moto(readlineSync.question("(1) Ingrese la marca: "), readlineSync.questionInt("(2) Ingrese el modelo: "), readlineSync.question("(3) Ingrese el color: "), readlineSync.questionInt("(4) Ingrese la velocidad maxima: "), readlineSync.questionInt("(5) Ingrese la cilindrada: ")));
                break;
            case 3:
                this.vehiculos.push(new camion_1.Camion(readlineSync.question("(1) Ingrese la marca: "), readlineSync.questionInt("(2) Ingrese el modelo: "), readlineSync.question("(3) Ingrese el color: "), readlineSync.questionInt("(4) Ingrese la velocidad maxima: "), readlineSync.questionInt("(5) Ingrese la carga maxima en toneladas: "), readlineSync.questionInt("(6) Ingrese cantidad de acoplados: ")));
                break;
        }
    };
    //Función que recorre el arreglo de vehiculo y lo muestra por consola
    RegistroAutomotor.prototype.listarVehiculos = function () {
        var aux = [];
        for (var i = 0; i < this.vehiculos.length; i++) {
            if (this.vehiculos[i] != null) {
                aux.push(this.vehiculos[i]);
            }
        }
        console.table(aux);
    };
    return RegistroAutomotor;
}()); //FIN CLASE REGISTROAUTOMOTOR
var registroAutomotor = new RegistroAutomotor();
var input = readlineSync.questionInt("OPCIONES:\n(1) DAR ALTA\n(2) LISTAR\n(3) SALIR\nTu respuesta: ");
var salir = false;
//MENÚ
while (salir != true) {
    switch (input) {
        case 1:
            try {
                registroAutomotor.darAltaVehiculo(readlineSync.questionInt("DAR ALTA\n(1) AUTO\n(2) MOTO\n(3) CAMIÓN\nTu respuesta: "));
            }
            catch (error) {
                console.log("El valor ingresado está por fuera del rango esperado");
            }
            break;
        case 2:
            registroAutomotor.listarVehiculos();
            break;
        case 3:
            salir = (readlineSync.question("¿Seguro deseas salir? (Y/N): ") == "Y");
            break;
    }
    if (salir != true) {
        input = readlineSync.questionInt("OPCIONES\n(1) DAR ALTA\n(2) LISTAR\n(3) SALIR\nTu respuesta: ");
    }
    else {
        console.log("¡Hasta luego!");
    }
}
