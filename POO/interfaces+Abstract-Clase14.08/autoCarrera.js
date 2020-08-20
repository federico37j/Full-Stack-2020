var AutoCarreras = /** @class */ (function () {
    function AutoCarreras() {
        this.velocidadActual = 0;
    }
    AutoCarreras.prototype.acelerar = function () {
        this.velocidadActual += 50;
    };
    return AutoCarreras;
}());
