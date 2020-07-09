var auto = /** @class */ (function () {
    //Constructor
    function auto(marcha, color) {
        this.enMarcha = marcha;
        this.color = color;
    }
    //Funciones
    auto.prototype.arrancar = function () {
        if (this.enMarcha) {
            this.enMarcha = false;
        }
        else {
            this.enMarcha = true;
        }
    };
    auto.prototype.cantRuedas = function (numRuedas) {
        this.cantidadRuedas = numRuedas;
    };
    auto.prototype.cantPuertas = function (numPuertas) {
        this.cantidadPuertas = numPuertas;
    };
    auto.prototype.elegirColor = function (color) {
        this.color = color;
    };
    auto.prototype.velocidad = function (velocidad) {
        this.velocidadMax = velocidad;
    };
    return auto;
}());
//OBJETO AUTO
var marchaa = true;
var colore = "Rojo";
var ruedas = 4;
//Creo un objeto "miAuto" de la clase Auto
var miAuto = new auto(marchaa, colore);
miAuto.cantRuedas(ruedas);
console.log(miAuto);
