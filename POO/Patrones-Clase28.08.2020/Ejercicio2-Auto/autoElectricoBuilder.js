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
exports.AutoElectricoBuilder = void 0;
var autoBuilder_1 = require("./autoBuilder");
var AutoElectricoBuilder = /** @class */ (function (_super) {
    __extends(AutoElectricoBuilder, _super);
    function AutoElectricoBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    AutoElectricoBuilder.prototype.buildCantidadPuertas = function () {
        this.auto.setCantidadPuertas(4);
    };
    AutoElectricoBuilder.prototype.buildCantidadRuedas = function () {
        this.auto.setCantidadRuedas(4);
    };
    AutoElectricoBuilder.prototype.buildVelocidadMax = function () {
        this.auto.setVelocidadMax(200);
    };
    AutoElectricoBuilder.prototype.buildColor = function () {
        this.auto.setColor("Blanco");
    };
    AutoElectricoBuilder.prototype.buildModelo = function () {
        this.auto.setModelo(2016);
    };
    AutoElectricoBuilder.prototype.buildMarca = function () {
        this.auto.setMarca("Tesla");
    };
    return AutoElectricoBuilder;
}(autoBuilder_1.AutoBuilder));
exports.AutoElectricoBuilder = AutoElectricoBuilder;
