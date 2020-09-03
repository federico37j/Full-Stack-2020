"use strict";
exports.__esModule = true;
var SmartPhone = /** @class */ (function () {
    function SmartPhone() {
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
    return SmartPhone;
}());
