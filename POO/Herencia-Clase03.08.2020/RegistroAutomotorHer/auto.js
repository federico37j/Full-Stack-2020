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
exports.Auto = void 0;
//Import clases
var vehiculo_1 = require("./vehiculo");
//Uso "export" para utilizar la clase en otra y uso "extends" para que herede de Vehículo.
var Auto = /** @class */ (function (_super) {
    __extends(Auto, _super);
    function Auto(marca, mod, color, velocidad, cantidadPuertas) {
        var _this = _super.call(this, marca, mod, color, velocidad) || this;
        _this.cantidadRuedas = 4;
        _this.apretarEmbrague = false;
        //La variable cantidadPuertas es un parámetro opcional, sino se carga en el constructor queda por defecto lo que contenga "puertasDefecto".
        if (cantidadPuertas != undefined) {
            _this.cantidadPuertas = cantidadPuertas;
        }
        else {
            _this.cantidadPuertas = 3;
        }
        return _this;
    }
    Auto.prototype.darAltaAuto = function (marca, mod, color, velocidad, cantidadPuertas) {
        return new Auto(marca, mod, color, velocidad, cantidadPuertas);
    };
    Auto.prototype.arrancarAuto = function () {
        if (this.apretarEmbrague) {
            this.apretarEmbrague = false;
        }
        else {
            this.apretarEmbrague = true;
        }
    };
    return Auto;
}(vehiculo_1.Vehiculo)); //FIN CLASE AUTO
exports.Auto = Auto;
