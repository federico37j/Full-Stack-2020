//Importación de librerías
import * as readlineSync from "readline-sync";
import { Auto } from './auto';

class RegistroAutomotor {
    //Declaración de variables
    private nombre: string;
    private auto: Auto;

    //Constructor
    public constructor(auto: Auto) {
        this.auto = auto;
    }

    public cambiarObjeto = (): void => {
        this.auto.cambiarObjeto();
    }

    //Función para buscar un auto
    public buscar = (): Auto => {
        let nombre = readlineSync.question("Ingrese la marca: ");
        return this.auto.buscarAuto(nombre);
    }

    //Función para eliminar un auto
    public borrar = (): void => {
        this.auto.eliminarIndex();
    }

    //Función para actualizar la marca
    public actualizar = (): Auto => {
        let autoResult: Auto = this.buscar();
        this.nombre = readlineSync.question("Ingrese la nueva marca: ");
        autoResult.actualizar(this.nombre);
        return autoResult;
    }

    //Función para crear los objetos de tipo auto
    public darAlta = (marca: string, modelo: number, color: string, velocidadMax: number): void => {
        this.auto.darAlta(marca, modelo, color, velocidadMax);
    }

    //Función para mostrar por consola los autos ya cargados
    public listarAutos(): void {
        this.auto.listarAutos();
    }


}//FIN REGISTRO AUTOMOTOR

//Creo objetos de tipo Auto y RegistroAutomotor
let auto = new Auto("", 0, "", 0);
let miRegistro = new RegistroAutomotor(auto);

//Cargo el arreglo con los autos del txt desde el principio
miRegistro.cambiarObjeto();

console.log("OPCIONES:");
console.log("(1) DAR ALTA\n(2) BORRAR\n(3) ACTUALIZAR\n(4) BUSCAR\n(5) LISTAR\n(6) SALIR");
let input: number = readlineSync.questionInt("¿Que desea hacer? ");

//Menú
while (input != 6) {
    switch (input) {

        case 1:
            console.log("<------ DAR DE ALTA UN AUTOMOVIL ------>");
            let marca: string = readlineSync.question("(1) Ingrese la Marca: ");
            let modelo: number = readlineSync.questionInt("(2) Ingrese el Modelo: ");
            let color: string = readlineSync.question("(3) Ingrese el color: ");
            let velocidadMax: number = readlineSync.questionInt("(4) Ingrese el Velocidad máxima: ");
            miRegistro.darAlta(marca, modelo, color, velocidadMax);
            break;

        case 2:
            console.log("<------ BORRADO DE UN AUTO ------>");
            miRegistro.buscar().toString();
            miRegistro.borrar();
            console.log("¡Registro borrado con éxito!");
            break;

        case 3:
            console.log("<------ ACTUALIZAR UN AUTOMOVIL ------>");
            console.log(miRegistro.actualizar().toString());
            break;

        case 4:
            console.log("<------ BUSCAR UN AUTOMOVIL ------>");
            console.log(miRegistro.buscar().toString());
            break;

        case 5:
            console.log("MOSTRAR LISTA DE AUTOS")
            miRegistro.listarAutos();
            break;

        case 6:
            console.log("¡Hasta luego!");
            break;
    }

    input = readlineSync.questionInt("¿Que desea hacer? ");

}