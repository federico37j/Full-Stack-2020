//Importación de librerías
import * as readlineSync from "readline-sync";
import { Alumno } from "./alumno";
import { ManejarArchivos } from "./manejarArchivos";
import { Examen } from "./examen";
import { Plantilla } from "./plantilla";

class SistemaDeGestion implements Plantilla {
    private listAlumnos: Alumno[] = [];
    private examenes: Examen[] = [];
    private manejarArchivos: ManejarArchivos;

    public constructor(manejarArchivos: ManejarArchivos) {
        this.manejarArchivos = manejarArchivos;
        this.cambiarTxtAObjeto("./alumnos.txt");
    }

    private cambiarTxtAObjeto(url: string): void {
        let txtPorFila: string[] = this.manejarArchivos.leerArchivos(url);
        let txtObjeto: string[];
        let i: number = 0;
        for (i; i < txtPorFila.length; i++) {
            txtObjeto = txtPorFila[i].split(",");
            this.listAlumnos.push(new Alumno(Number(txtObjeto[0]), txtObjeto[1], txtObjeto[2], Number(txtObjeto[3])));
        }
    }

    public darAlta(): void {
        console.log("<<<CARGA DEL ALUMNO>>>");
        this.listAlumnos.push(new Alumno(readlineSync.questionInt("- Ingrese el número de DNI: "), readlineSync.question("- Ingrese el nombre: ").toUpperCase(),
            readlineSync.question("- Ingrese el apellido: ").toUpperCase(), readlineSync.questionInt("- Ingrese la edad: ")));

        this.actualizar(this.listAlumnos[this.listAlumnos.length - 1]);
    }

    private actualizar(alumno: Alumno): void {
        let arregloExamenes: Examen[] = this.listadoExamenes();
        alumno.setExamenes(arregloExamenes);
        alumno.setPromedio(this.promedioDeAlumno(arregloExamenes));

        this.pasarArregloGlobal(arregloExamenes);
    }

    public listadoExamenes(): Examen[] {
        let examenesAlumno: Examen[] = [];
        console.log("<<<CARGA DE EXÁMENES RENDIDOS>>>");
        do {
            examenesAlumno.push(new Examen(readlineSync.question("- Ingrese el nombre del examen: "), readlineSync.questionInt("- Ingrese la calificación: ")));
        } while (readlineSync.question("¿Desea agregar un examen más? (Y/N): ") == "Y");
        return examenesAlumno;
    }

    private pasarArregloGlobal(arreglo: Examen[]): void {
        for (let i = 0; i < arreglo.length; i++) {
            this.examenes.push(arreglo[i]);
        }
    }

    public busquedaUsuario(): void {
        if (readlineSync.question("BUSQUEDA ESPECIFICA (Y/N): ") == "Y") {
            let alumnoBuscado: Alumno = this.buscarAlumno(readlineSync.questionInt("-Ingrese el número de DNI del alumno: "));
            console.log(alumnoBuscado);
        } else {
            this.listar();
        }
    }

    private buscarAlumno(dni: number): Alumno {
        for (let i = 0; i < this.listAlumnos.length; i++) {
            if (this.listAlumnos[i].getDni() == dni) {
                return this.listAlumnos[i];
            }
        }
    }

    public listar(): void {
        console.log(this.listAlumnos);
    }

    private promedioDeAlumno(arreglo: Examen[]): number {
        let cantidad: number = 0;
        for (let i = 0; i < arreglo.length; i++) {
            cantidad += arreglo[i].getCalificacion();
        }
        return cantidad / arreglo.length;
    }

    public promedioTotal(): void {
        console.log(`El promedio de todos los alumnos inscriptos en el sistema es de: ${this.promedioDeAlumno(this.examenes)}.`);
    }

}// FIN CLASE SISTEMADEGESTION

let misArchivos = new ManejarArchivos();
let sistema = new SistemaDeGestion(misArchivos);
let input: number = readlineSync.questionInt("OPCIONES:\n(1) AGREGAR ALUMNO\n(2) BUSCAR\n(3) PROMEDIO TOTAL\n(4) SALIR\nTu respuesta: ");
let salir: boolean = false;

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
    } else {
        console.log("¡Hasta luego!");
    }
}