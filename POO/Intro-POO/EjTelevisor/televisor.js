var Televisor = /** @class */ (function () {
    //Constructor
    function Televisor(volumenInicial, canalInicial) {
        this.volumenActual = volumenInicial;
        this.canalActual = canalInicial;
        this.estaPrendido = false;
    }
    //Funciones
    Televisor.prototype.prenderApagar = function () {
        if (this.estaPrendido)
            this.estaPrendido = false;
        else
            this.estaPrendido = true;
    };
    Televisor.prototype.subirVolumen = function () {
        this.volumenActual = this.volumenActual + 1;
    };
    Televisor.prototype.bajarVolumen = function () {
        this.volumenActual = this.volumenActual - 1;
    };
    Televisor.prototype.subirCanal = function () {
        this.canalActual = this.canalActual + 1;
    };
    Televisor.prototype.bajarCanal = function () {
        this.canalActual = this.canalActual - 1;
    };
    Televisor.prototype.elegirCanal = function (canal) {
        this.canalActual = canal;
    };
    return Televisor;
}());
//OBJETO TELEVISOR
var volumenInicial = 1;
var canalInicial = 4;
//Creo un objeto "miTelevisor" de la clase Televisor
var miTelevisor = new Televisor(volumenInicial, canalInicial);
miTelevisor.prenderApagar();
miTelevisor.bajarVolumen();
console.log(miTelevisor);
