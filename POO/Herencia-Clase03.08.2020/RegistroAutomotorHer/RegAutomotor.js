"use strict";
exports.__esModule = true;
//Import librerías
var readlineSync = require("readline-sync");
var LectorArch_1 = require("./LectorArch");
var auto_1 = require("./auto");
var moto_1 = require("./moto");
var camion_1 = require("./camion");
var RegistroAutomotor = /** @class */ (function () {
    function RegistroAutomotor(lectorArchivos, auto, moto, camion) {
        this.lectorArchivos = lectorArchivos;
        this.auto = auto;
        this.moto = moto;
        this.camion = camion;
        this.vehiculos = [];
        this.cambiarAObjeto('RegistroAutomotorHer/auto.txt');
    }
    //Con esta función se traen los datos de la función leerArchivos y se crean los objetos de tipo vehículo.
    RegistroAutomotor.prototype.cambiarAObjeto = function (urlFS) {
        this.txtPorFila = this.lectorArchivos.leerArchivos(urlFS);
        var i = 0;
        for (i; i < this.txtPorFila.length; i++) {
            this.txtObjeto = this.txtPorFila[i].split(",");
            this.vehiculos.push(new auto_1.Auto(this.txtObjeto[0], Number(this.txtObjeto[1]), this.txtObjeto[2], Number(this.txtObjeto[3])));
        }
    };
    //Con esta función se crean los objetos de tipo auto/moto/camión
    RegistroAutomotor.prototype.darAltaVehiculo = function (input) {
        switch (input) {
            case 1:
                this.vehiculos.push(this.auto.darAltaAuto(readlineSync.question("(1) Ingrese la marca: "), readlineSync.questionInt("(2) Ingrese el modelo: "), readlineSync.question("(3) Ingrese el color: "), readlineSync.questionInt("(4) Ingrese la velocidad maxima: "), readlineSync.questionInt("(5) Ingrese la cantidad de puertas: ")));
                break;
            case 2:
                this.vehiculos.push(this.moto.darAltaMoto(readlineSync.question("(1) Ingrese la marca: "), readlineSync.questionInt("(2) Ingrese el modelo: "), readlineSync.question("(3) Ingrese el color: "), readlineSync.questionInt("(4) Ingrese la velocidad maxima: "), readlineSync.questionInt("(5) Ingrese la cilindrada: ")));
                break;
            case 3:
                this.vehiculos.push(this.camion.darAltaCamion(readlineSync.question("(1) Ingrese la marca: "), readlineSync.questionInt("(2) Ingrese el modelo: "), readlineSync.question("(3) Ingrese el color: "), readlineSync.questionInt("(4) Ingrese la velocidad maxima: "), readlineSync.questionInt("(5) Ingrese la carga maxima en toneladas: "), readlineSync.questionInt("(6) Ingrese cantidad de acoplados: ")));
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
var lectorArchivos = new LectorArch_1.LectorArch();
var auto = new auto_1.Auto("", 0, "", 0);
var moto = new moto_1.Moto("", 0, "", 0, 0);
var camion = new camion_1.Camion("", 0, "", 0, 0);
var registroAutomotor = new RegistroAutomotor(lectorArchivos, auto, moto, camion);
var input = readlineSync.questionInt("OPCIONES:\n(1) DAR ALTA:\n(2) LISTAR\n(3) SALIR\nTu respuesta: ");
var salir = false;
//MENÚ
while (salir != true) {
    switch (input) {
        case 1:
            registroAutomotor.darAltaVehiculo(readlineSync.questionInt("DAR ALTA\n(1) AUTO\n(2) MOTO\n(3) CAMIÓN\nTu respuesta: "));
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
