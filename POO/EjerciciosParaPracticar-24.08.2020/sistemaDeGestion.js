"use strict";
exports.__esModule = true;
//Importación de librerías
var readlineSync = require("readline-sync");
var alumno_1 = require("./alumno");
var manejarArchivos_1 = require("./manejarArchivos");
var examen_1 = require("./examen");
var SistemaDeGestion = /** @class */ (function () {
    function SistemaDeGestion(manejarArchivos) {
        this.listAlumnos = [];
        this.examenes = [];
        this.manejarArchivos = manejarArchivos;
        this.cambiarTxtAObjeto("./alumnos.txt");
    }
    SistemaDeGestion.prototype.cambiarTxtAObjeto = function (url) {
        var txtPorFila = this.manejarArchivos.leerArchivos(url);
        var txtObjeto;
        var i = 0;
        for (i; i < txtPorFila.length; i++) {
            txtObjeto = txtPorFila[i].split(",");
            this.listAlumnos.push(new alumno_1.Alumno(Number(txtObjeto[0]), txtObjeto[1], txtObjeto[2], Number(txtObjeto[3])));
        }
    };
    SistemaDeGestion.prototype.darAlta = function () {
        console.log("<<<CARGA DEL ALUMNO>>>");
        this.listAlumnos.push(new alumno_1.Alumno(readlineSync.questionInt("- Ingrese el número de DNI: "), readlineSync.question("- Ingrese el nombre: ").toUpperCase(), readlineSync.question("- Ingrese el apellido: ").toUpperCase(), readlineSync.questionInt("- Ingrese la edad: ")));
        this.actualizar(this.listAlumnos[this.listAlumnos.length - 1]);
    };
    SistemaDeGestion.prototype.actualizar = function (alumno) {
        var arregloExamenes = this.listadoExamenes();
        alumno.setExamenes(arregloExamenes);
        alumno.setPromedio(this.promedioDeAlumno(arregloExamenes));
        this.pasarArregloGlobal(arregloExamenes);
    };
    SistemaDeGestion.prototype.listadoExamenes = function () {
        var examenesAlumno = [];
        console.log("<<<CARGA DE EXÁMENES RENDIDOS>>>");
        do {
            examenesAlumno.push(new examen_1.Examen(readlineSync.question("- Ingrese el nombre del examen: "), readlineSync.questionInt("- Ingrese la calificación: ")));
        } while (readlineSync.question("¿Desea agregar un examen más? (Y/N): ") == "Y");
        return examenesAlumno;
    };
    SistemaDeGestion.prototype.pasarArregloGlobal = function (arreglo) {
        for (var i = 0; i < arreglo.length; i++) {
            this.examenes.push(arreglo[i]);
        }
    };
    SistemaDeGestion.prototype.busquedaUsuario = function () {
        if (readlineSync.question("BUSQUEDA ESPECIFICA (Y/N): ") == "Y") {
            var alumnoBuscado = this.buscarAlumno(readlineSync.questionInt("-Ingrese el número de DNI del alumno: "));
            console.log(alumnoBuscado);
        }
        else {
            this.listar();
        }
    };
    SistemaDeGestion.prototype.buscarAlumno = function (dni) {
        for (var i = 0; i < this.listAlumnos.length; i++) {
            if (this.listAlumnos[i].getDni() == dni) {
                return this.listAlumnos[i];
            }
        }
    };
    SistemaDeGestion.prototype.listar = function () {
        console.log(this.listAlumnos);
    };
    SistemaDeGestion.prototype.promedioDeAlumno = function (arreglo) {
        var cantidad = 0;
        for (var i = 0; i < arreglo.length; i++) {
            cantidad += arreglo[i].getCalificacion();
        }
        return cantidad / arreglo.length;
    };
    SistemaDeGestion.prototype.promedioTotal = function () {
        console.log("El promedio de todos los alumnos inscriptos en el sistema es de: " + this.promedioDeAlumno(this.examenes) + ".");
    };
    return SistemaDeGestion;
}()); // FIN CLASE SISTEMADEGESTION
var misArchivos = new manejarArchivos_1.ManejarArchivos();
var sistema = new SistemaDeGestion(misArchivos);
var input = readlineSync.questionInt("OPCIONES:\n(1) AGREGAR ALUMNO\n(2) BUSCAR\n(3) PROMEDIO TOTAL\n(4) SALIR\nTu respuesta: ");
var salir = false;
//Menú
while (salir != true) {
    switch (input) {
        case 1:
            sistema.darAlta();
            break;
        case 2:
            sistema.busquedaUsuario();
            break;
        case 3:
            sistema.promedioTotal();
            break;
        case 4:
            salir = (readlineSync.question("¿Seguro deseas salir? (Y/N): ") == "Y");
            break;
    }
    if (salir != true) {
        input = readlineSync.questionInt("OPCIONES:\n(1) AGREGAR ALUMNO\n(2) BUSCAR\n(3) PROMEDIO TOTAL\n(4) SALIR\nTu respuesta: ");
    }
    else {
        console.log("¡Hasta luego!");
    }
}
