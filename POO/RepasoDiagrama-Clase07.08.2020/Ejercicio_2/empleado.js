"use strict";
exports.__esModule = true;
exports.Empleado = void 0;
var Empleado = /** @class */ (function () {
    function Empleado(id, nombre, apellido, dni, edad, cargo, salario) {
        this.id = id;
        this.nombre = nombre;
        this.apellido = apellido;
        this.edad = edad;
        this.dni = dni;
        this.cargo = cargo;
        if (salario == undefined) {
            this.salario = 16875;
        }
        else {
            this.salario = salario;
        }
        this.fechaIngreso = String(new Date());
    }
    Empleado.prototype.crearEmpleado = function (empleados, nombre, apellido, dni, edad, cargo) {
        var id = empleados.length + 1;
        return new Empleado(id, nombre, apellido, dni, edad, cargo);
    };
    //Se actualiza el empleado pasado por parámetro con los métodos set de esta clase
    Empleado.prototype.actualizarEmpleado = function (empleado, nombre, apellido, dni, edad, cargo, salario) {
        var completado = 1;
        empleado.setNombre(nombre);
        empleado.setApellido(apellido);
        empleado.setDni(dni);
        empleado.setEdad(edad);
        empleado.setCargo(cargo);
        empleado.setSalario(salario);
        return completado;
    };
    //Métodos get y set
    Empleado.prototype.getId = function () {
        return this.id;
    };
    Empleado.prototype.setId = function (id) {
        this.id = id;
    };
    Empleado.prototype.getNombre = function () {
        return this.nombre;
    };
    Empleado.prototype.setNombre = function (nombre) {
        this.nombre = nombre;
    };
    Empleado.prototype.getApellido = function () {
        return this.apellido;
    };
    Empleado.prototype.setApellido = function (apellido) {
        this.apellido = apellido;
    };
    Empleado.prototype.getEdad = function () {
        return this.edad;
    };
    Empleado.prototype.setEdad = function (edad) {
        this.edad = edad;
    };
    Empleado.prototype.getDni = function () {
        return this.dni;
    };
    Empleado.prototype.setDni = function (dni) {
        this.dni = dni;
    };
    Empleado.prototype.getCargo = function () {
        return this.cargo;
    };
    Empleado.prototype.setCargo = function (cargo) {
        this.cargo = cargo;
    };
    Empleado.prototype.getSalario = function () {
        return this.salario;
    };
    Empleado.prototype.setSalario = function (salario) {
        this.salario = salario;
    };
    Empleado.prototype.getFechaIngreso = function () {
        return this.fechaIngreso;
    };
    Empleado.prototype.setFechaIngreso = function (fechaIngreso) {
        this.fechaIngreso = fechaIngreso;
    };
    return Empleado;
}());
exports.Empleado = Empleado;
