"use strict";
exports.__esModule = true;
exports.AutoBuilder = void 0;
var auto_1 = require("./auto");
var AutoBuilder = /** @class */ (function () {
    function AutoBuilder() {
    }
    AutoBuilder.prototype.getAuto = function () {
        return this.auto;
    };
    AutoBuilder.prototype.crearNuevoAuto = function () {
        this.auto = new auto_1.Auto();
    };
    return AutoBuilder;
}());
exports.AutoBuilder = AutoBuilder;
