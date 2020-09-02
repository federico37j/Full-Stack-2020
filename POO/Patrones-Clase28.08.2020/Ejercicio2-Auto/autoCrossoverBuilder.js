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
exports.AutoCrossoverBuilder = void 0;
var autoBuilder_1 = require("./autoBuilder");
var AutoCrossoverBuilder = /** @class */ (function (_super) {
    __extends(AutoCrossoverBuilder, _super);
    function AutoCrossoverBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    AutoCrossoverBuilder.prototype.buildCantidadPuertas = function () {
        this.auto.setCantidadPuertas(4);
    };
    AutoCrossoverBuilder.prototype.buildCantidadRuedas = function () {
        this.auto.setCantidadRuedas(4);
    };
    AutoCrossoverBuilder.prototype.buildVelocidadMax = function () {
        this.auto.setVelocidadMax(220);
    };
    AutoCrossoverBuilder.prototype.buildColor = function () {
        this.auto.setColor("Naranja");
    };
    AutoCrossoverBuilder.prototype.buildModelo = function () {
        this.auto.setModelo(2009);
    };
    AutoCrossoverBuilder.prototype.buildMarca = function () {
        this.auto.setMarca("Nissan Qashqai");
    };
    return AutoCrossoverBuilder;
}(autoBuilder_1.AutoBuilder));
exports.AutoCrossoverBuilder = AutoCrossoverBuilder;
