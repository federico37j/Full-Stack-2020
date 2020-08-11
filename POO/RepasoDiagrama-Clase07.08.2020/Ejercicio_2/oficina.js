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
//Import librerías
var readlineSync = require("readline-sync");
//Import clases
var empleado_1 = require("./empleado");
var inmueble_1 = require("./inmueble");
var Oficina = /** @class */ (function (_super) {
    __extends(Oficina, _super);
    function Oficina(nombreSede, direccion, ubicacion, metrosCuadrados, cantHabitaciones, empleado) {
        var _this = _super.call(this, ubicacion, metrosCuadrados, cantHabitaciones) || this;
        _this.nombreSede = nombreSede;
        _this.direccion = direccion;
        _this.empleado = empleado;
        _this.empleados = [];
        _this.espacioVerde = false;
        return _this;
    }
    //Llamo a la función(crearEmpleado) de la clase Empleado para dar de alta uno y lo guardo en el arreglo
    Oficina.prototype.darAltaEmpleado = function () {
        this.empleados.push(this.empleado.crearEmpleado(this.empleados, readlineSync.question("(1) Ingrese el nombre: "), readlineSync.question("(2) Ingrese el apellido: "), readlineSync.questionInt("(3) Ingrese el DNI: "), readlineSync.questionInt("(4) Ingrese el edad: "), readlineSync.question("(5) Ingrese el cargo: ")));
        console.log("¡Registro cargado con éxito!");
    };
    //Muestro el arreglo por consola
    Oficina.prototype.listarEmpleados = function () {
        var aux = [];
        for (var i = 0; i < this.empleados.length; i++) {
            if (this.empleados[i] != null) {
                aux.push(this.empleados[i]);
            }
        }
        console.table(aux);
    };
    //Busco al empleado filtrando por DNI y Apellido
    Oficina.prototype.buscarEmpleado = function (dni, apellido) {
        for (var i = 0; i < this.empleados.length; i++) {
            if (this.empleados[i].getDni() == dni && this.empleados[i].getApellido() == apellido) {
                return this.empleados[i];
            }
        }
    };
    Oficina.prototype.busquedaUsuario = function (respuesta) {
        if (respuesta == "Y" && this.empleados.length > 0) {
            var resultado = this.buscarEmpleado(readlineSync.questionInt("(1) Ingrese el DNI: "), readlineSync.question("(2) Ingrese el apellido: "));
            if (resultado != undefined && resultado != null) {
                console.table(resultado);
                if ((readlineSync.question("¿Desea actualizarlo? (Y/N): ") == "Y")) {
                    this.actualizarUsuario(resultado);
                }
            }
            else {
                console.log("El empleado no se encuentra actualmente en nuestros registros.");
            }
        }
        else {
            this.listarEmpleados();
        }
    };
    //Llamo a la función(actualizarEmpleado) de la clase Empleado para actualizar uno, pasandole por parametro nombre/apellido/dni/edad/cargo/salario
    Oficina.prototype.actualizarUsuario = function (empleado) {
        var resultado;
        resultado = this.empleado.actualizarEmpleado(empleado, readlineSync.question("(1) Ingrese el nombre: "), readlineSync.question("(2) Ingrese el apellido: "), readlineSync.questionInt("(3) Ingrese el DNI: "), readlineSync.questionInt("(4) Ingrese la edad: "), readlineSync.question("(5) Ingrese el cargo: "), readlineSync.questionInt("(6) Ingrese el salario: "));
        if (resultado > 0) {
            console.log("¡Operación realizada con éxito!");
        }
        else {
            console.log("¡Error!");
        }
    };
    //Métodos get
    Oficina.prototype.getNombreSede = function () {
        return this.nombreSede;
    };
    Oficina.prototype.getDireccion = function () {
        return this.direccion;
    };
    return Oficina;
}(inmueble_1.Inmueble)); //FIN CLASE OFICINA
var miEmpleado = new empleado_1.Empleado(0, "Pepe", "Alvarez", 32323232, 25, "Scrum Master");
var oficina = new Oficina("Onirus", "25 de mayo 168", "Tandil", 150, 4, miEmpleado);
console.log(oficina);
var input = readlineSync.questionInt("OPCIONES\n(1) DAR ALTA UN EMPLEADO\n(2) LISTAR\n(3) SALIR\nTu respuesta: ");
var salir = false;
//MENÚ
while (salir != true) {
    switch (input) {
        case 1:
            oficina.darAltaEmpleado();
            break;
        case 2:
            oficina.busquedaUsuario(readlineSync.question("¿Desea buscar una empleado especifico? (Y/N): "));
            break;
        case 3:
            salir = (readlineSync.question("¿Seguro deseas salir? (Y/N): ") == "Y");
            break;
    }
    if (salir != true) {
        input = readlineSync.questionInt("OPCIONES\n(1) DAR ALTA UN EMPLEADO\n(2) LISTAR\n(3) SALIR\nTu respuesta: ");
    }
    else {
        console.log("¡Hasta luego!");
    }
}
