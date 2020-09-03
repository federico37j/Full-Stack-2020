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
var auto_1 = require("./auto");
var AutoCarreras = /** @class */ (function (_super) {
    __extends(AutoCarreras, _super);
    function AutoCarreras(marca, mod, color, velocidad) {
        var _this = _super.call(this, marca, mod, color, velocidad) || this;
        _this.apretarEmbrague = false;
        return _this;
    }
    AutoCarreras.prototype.acelerar = function () {
        this.velocidadActual += 20;
    };
    AutoCarreras.prototype.ponerEnMarcha = function () {
        if (this.apretarEmbrague) {
            this.enMarcha = true;
        }
        else {
            console.log("Recuerde pisar el embrague primero.");
        }
    };
    AutoCarreras.prototype.pisarEmbrague = function () {
        if (this.apretarEmbrague) {
            this.apretarEmbrague = false;
        }
        else {
            this.apretarEmbrague = true;
        }
    };
    return AutoCarreras;
}(auto_1.Auto));
var miAuto = new auto_1.Auto("Renault", 2020, "Gris", 200);
var miAutoCarreras = new AutoCarreras("Ferrari", 2020, "Negro", 200);
miAuto.acelerar();
miAutoCarreras.acelerar();
miAutoCarreras.pisarEmbrague();
miAutoCarreras.ponerEnMarcha();
console.log(miAuto);
console.log(miAutoCarreras);
