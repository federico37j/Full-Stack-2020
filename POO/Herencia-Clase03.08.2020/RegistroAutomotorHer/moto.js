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
exports.Moto = void 0;
//Import clases
var vehiculo_1 = require("./vehiculo");
//Uso "export" para utilizar la clase en otra y uso "extends" para que herede de Vehículo.
var Moto = /** @class */ (function (_super) {
    __extends(Moto, _super);
    function Moto(marca, mod, color, velocidad) {
        var _this = _super.call(this, marca, mod, color, velocidad) || this;
        _this.cantidadRuedas = 2;
        _this.cascoPuesto = false;
        return _this;
    }
    //Función para arrancar la moto solo si se tiene puesto el casco antes.
    Moto.prototype.arrancarMoto = function () {
        if (this.cascoPuesto) {
            this.ponerEnMarcha();
        }
        else {
            console.log("Pónganse el casco y vuelva a intentar");
        }
    };
    Moto.prototype.tocarbocina = function () {
        console.log("Suena bocina");
    };
    Moto.prototype.setCasco = function (casco) {
        this.cascoPuesto = casco;
    };
    Moto.prototype.setRuedas = function (ruedas) {
        this.cantidadRuedas = ruedas;
    };
    return Moto;
}(vehiculo_1.Vehiculo)); //FIN CLASE MOTO
exports.Moto = Moto;
