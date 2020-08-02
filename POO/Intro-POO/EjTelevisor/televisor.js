"use strict";
exports.__esModule = true;
var Decodificador = /** @class */ (function () {
    //Constructor
    function Decodificador(volumen, canal) {
        this.volumenActual = volumen;
        this.canalActual = canal;
    }
    //Funciones
    Decodificador.prototype.cambiarCanal = function (canal) {
        this.canalActual = canal;
    };
    Decodificador.prototype.subirCanal = function () {
        this.canalActual = this.canalActual + 1;
    };
    Decodificador.prototype.bajarCanal = function () {
        this.canalActual = this.canalActual - 1;
    };
    Decodificador.prototype.subirVolumen = function () {
        this.volumenActual = this.volumenActual + 1;
    };
    Decodificador.prototype.bajarVolumen = function () {
        this.volumenActual = this.volumenActual - 1;
    };
    return Decodificador;
}());
var Televisor = /** @class */ (function () {
    //Constructor
    function Televisor(decodificador) {
        this.decodificador = decodificador;
        this.estaPrendido = false;
    }
    //Funciones
    Televisor.prototype.prenderApagar = function () {
        if (this.estaPrendido)
            this.estaPrendido = false;
        else
            this.estaPrendido = true;
    };
    Televisor.prototype.cambiarCanal = function (canal) {
        if (this.estaPrendido) {
            this.decodificador.cambiarCanal(canal);
        }
    };
    Televisor.prototype.subirCanal = function () {
        if (this.estaPrendido) {
            this.decodificador.subirCanal();
        }
    };
    Televisor.prototype.bajarCanal = function () {
        if (this.estaPrendido) {
            this.decodificador.bajarCanal();
        }
    };
    Televisor.prototype.subirVolumen = function () {
        if (this.estaPrendido) {
            this.decodificador.subirVolumen();
        }
    };
    Televisor.prototype.bajarVolumen = function () {
        if (this.estaPrendido) {
            this.decodificador.bajarVolumen();
        }
    };
    return Televisor;
}());
//OBJETO TELEVISOR
var volumenInicial = 1;
var canalInicial = 4;
//Creo un objeto "decodificador" de la clase Decodificador
var decodificador = new Decodificador(volumenInicial, canalInicial);
//Creo un objeto "miTelevisor" de la clase Televisor
var primerTelevisor = new Televisor(decodificador);
primerTelevisor.prenderApagar();
primerTelevisor.cambiarCanal(20);
console.log(primerTelevisor);
var Taybl_1 = require("Taybl");
var object = {
    files: [
        {
            fileName: "file name1",
            invalid: [
                { type: "type name1", count: 6, "line numbers": "7, 18" },
                { type: "type name2", count: 2, "line numbers": "17, 9" }
            ]
        },
    ]
};
var taybl = new Taybl_1["default"](primerTelevisor);
taybl
    .withHorizontalLineStyle("-")
    .withVerticalLineStyle("|")
    .withNumberOfSpacesAtStartOfColumns(1)
    .withNumberOfSpacesAtEndOfColumns(1)
    .print();
