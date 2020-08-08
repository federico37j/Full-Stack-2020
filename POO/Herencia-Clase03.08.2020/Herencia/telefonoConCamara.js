"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var telefono_1 = require("./telefono");
var camara_1 = require("./camara");
var TelefonoConCamara = /** @class */ (function (_super) {
    __extends(TelefonoConCamara, _super);
    function TelefonoConCamara(pixel, bateria) {
        var _this = _super.call(this, bateria) || this;
        _this.camara = new camara_1.Camara;
        _this.pixeles = pixel;
        return _this;
    }
    TelefonoConCamara.prototype.sacarFoto = function () {
        this.camara.sacarFoto();
    };
    TelefonoConCamara.prototype.getCantidadPixeles = function () {
        return this.pixeles;
    };
    return TelefonoConCamara;
}(telefono_1.Telefono));
var pixeles = 48;
var bateria = 4000;
var miCel = new TelefonoConCamara(pixeles, bateria);
miCel.prenderApagar();
miCel.mandarMensaje("Mensaje", 251561251);
console.log("La camara contiene", miCel.getCantidadPixeles(), "pixeles");
miCel.sacarFoto();
console.log(miCel);
