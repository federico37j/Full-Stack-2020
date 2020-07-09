var monitor = /** @class */ (function () {
    //Constructor
    function monitor(volumen, resolucion) {
        this.resolucion = resolucion;
        this.volumenActual = volumen;
        this.estaPrendido = false;
    }
    //Funciones
    monitor.prototype.prendidoApagado = function () {
        if (this.estaPrendido) {
            this.estaPrendido = false;
        }
        else {
            this.estaPrendido = true;
        }
    };
    monitor.prototype.subirVolumen = function () {
        this.volumenActual = this.volumenActual + 1;
    };
    monitor.prototype.bajarVolumen = function () {
        this.volumenActual = this.volumenActual - 1;
    };
    monitor.prototype.cambiarResolucion = function (cambResol) {
        this.resolucion = cambResol;
    };
    return monitor;
}());
//OBJETO MONITOR
var volumenMonitor = 5;
var resolucion = "1600 x 900";
//Creo un objeto "miMonitor" de la clase monitor
var miMonitor = new monitor(volumenMonitor, resolucion);
miMonitor.prendidoApagado();
console.log(miMonitor);
