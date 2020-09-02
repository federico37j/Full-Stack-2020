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
exports.AutoDeportivoBuilder = void 0;
var autoBuilder_1 = require("./autoBuilder");
var AutoDeportivoBuilder = /** @class */ (function (_super) {
    __extends(AutoDeportivoBuilder, _super);
    function AutoDeportivoBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    AutoDeportivoBuilder.prototype.buildCantidadPuertas = function () {
        this.auto.setCantidadPuertas(4);
    };
    AutoDeportivoBuilder.prototype.buildCantidadRuedas = function () {
        this.auto.setCantidadRuedas(4);
    };
    AutoDeportivoBuilder.prototype.buildVelocidadMax = function () {
        this.auto.setVelocidadMax(300);
    };
    AutoDeportivoBuilder.prototype.buildColor = function () {
        this.auto.setColor("Bordo");
    };
    AutoDeportivoBuilder.prototype.buildModelo = function () {
        this.auto.setModelo(2019);
    };
    AutoDeportivoBuilder.prototype.buildMarca = function () {
        this.auto.setMarca("Nissan GTR");
    };
    return AutoDeportivoBuilder;
}(autoBuilder_1.AutoBuilder));
exports.AutoDeportivoBuilder = AutoDeportivoBuilder;
