"use strict";
exports.__esModule = true;
var SmartPhone = /** @class */ (function () {
    function SmartPhone() {
        this.bateria = 0;
    }
    SmartPhone.prototype.prender = function () {
        this.estaPrendido = true;
    };
    SmartPhone.prototype.apagar = function () {
        this.estaPrendido = false;
    };
    SmartPhone.prototype.llamar = function (numero) {
        console.log("LLAMANDO", numero);
    };
    SmartPhone.prototype.sacarFoto = function () {
        console.log("SACAR FOTO");
    };
    SmartPhone.prototype.setBateria = function (bateria) {
        try {
            if (bateria < 0) {
                throw new Error("El valor no puede ser menor a 0");
            }
            this.bateria = bateria;
        }
        catch (error) {
            console.log("El valor no puede ser menor a 0");
        }
    };
    return SmartPhone;
}());
var miTelefono = new SmartPhone();
miTelefono.setBateria(-1);
// miTelefono.setBateria(2);
