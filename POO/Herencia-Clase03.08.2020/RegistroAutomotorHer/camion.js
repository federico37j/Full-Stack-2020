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
exports.Camion = void 0;
//Import clases
var vehiculo_1 = require("./vehiculo");
//Uso "export" para utilizar la clase en otra y uso "extends" para que herede de Vehículo.
var Camion = /** @class */ (function (_super) {
    __extends(Camion, _super);
    function Camion(marca, mod, color, velocidad, carga, cantAcoplados) {
        var _this = _super.call(this, marca, mod, color, velocidad) || this;
        _this.cantAcopladosDefault = 0;
        _this.cargaToneladas = carga;
        _this.cantidadRuedas = 4;
        if (cantAcoplados != undefined) {
            _this.cantAcoplados = cantAcoplados;
        }
        else {
            _this.cantAcoplados = _this.cantAcopladosDefault;
        }
        return _this;
    }
    //Funciones Get y Set
    Camion.prototype.getCantAcoplados = function () {
        return this.cantAcoplados;
    };
    Camion.prototype.setCantAcoplados = function (cantidad) {
        this.cantAcoplados = cantidad;
    };
    Camion.prototype.getCargaToneladas = function () {
        return this.cargaToneladas;
    };
    Camion.prototype.setCargaToneladas = function (cantidad) {
        this.cantAcoplados = cantidad;
    };
    return Camion;
}(vehiculo_1.Vehiculo)); //FIN CLASE CAMIÓN
exports.Camion = Camion;
