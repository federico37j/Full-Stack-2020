"use strict";
exports.__esModule = true;
var autoElectricoBuilder_1 = require("./autoElectricoBuilder");
var autoCrossoverBuilder_1 = require("./autoCrossoverBuilder");
var autoDeportivoBuilder_1 = require("./autoDeportivoBuilder");
var RegistroAutomotor = /** @class */ (function () {
    function RegistroAutomotor() {
    }
    RegistroAutomotor.prototype.setAutoBuilder = function (ab) {
        this.autoBuilder = ab;
    };
    RegistroAutomotor.prototype.getAuto = function () {
        return this.autoBuilder.getAuto();
    };
    RegistroAutomotor.prototype.construirAuto = function () {
        this.autoBuilder.crearNuevoAuto();
        this.autoBuilder.buildCantidadRuedas();
        this.autoBuilder.buildCantidadPuertas();
        this.autoBuilder.buildColor();
        this.autoBuilder.buildMarca();
        this.autoBuilder.buildModelo();
        this.autoBuilder.buildVelocidadMax();
    };
    return RegistroAutomotor;
}());
var registroAutomotor = new RegistroAutomotor();
var autoElectricoBuilder = new autoElectricoBuilder_1.AutoElectricoBuilder();
var autoCrossoverBuilder = new autoCrossoverBuilder_1.AutoCrossoverBuilder();
var autoDeportivoBuilder = new autoDeportivoBuilder_1.AutoDeportivoBuilder();
registroAutomotor.setAutoBuilder(autoElectricoBuilder);
registroAutomotor.construirAuto();
registroAutomotor.setAutoBuilder(autoCrossoverBuilder);
registroAutomotor.construirAuto();
// registroAutomotor.setAutoBuilder(autoDeportivoBuilder);
// registroAutomotor.construirAuto();
var auto = registroAutomotor.getAuto();
console.log(auto);
