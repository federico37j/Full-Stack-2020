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
var TelefonoConCamara = /** @class */ (function (_super) {
    __extends(TelefonoConCamara, _super);
    function TelefonoConCamara(pixel) {
        var _this = _super.call(this) || this;
        _this.pixeles = pixel;
        return _this;
    }
    TelefonoConCamara.prototype.sacarFoto = function () {
        console.log("FOTO");
    };
    TelefonoConCamara.prototype.getCantidadPixeles = function () {
        return this.pixeles;
    };
    return TelefonoConCamara;
}(telefono_1.Telefono));
var pixeles = 48;
var miCel = new TelefonoConCamara(pixeles);
miCel.mandarMensaje();
miCel.sacarFoto();
console.log("La camara contiene", miCel.getCantidadPixeles(), "pixeles");
console.log(miCel);
