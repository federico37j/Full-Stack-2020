//Import librerías
import * as readlineSync from "readline-sync";

//Import clases
import { Vehiculo } from "./vehiculo";
import { Auto } from "./auto";
import { Moto } from "./moto";
import { Camion } from "./camion";
import { CustomError } from "../autoDeport/customError";

class RegistroAutomotor {
    //Declaración de variables
    private vehiculos: Vehiculo[];

    public constructor() {
        this.vehiculos = [];
    }

    //Con esta función se crean los objetos de tipo auto/moto/camión
    public darAltaVehiculo(input: number): void {
        if (input > 3) {
            throw new CustomError("ERROR");
        }
        switch (input) {
            case 1:
                this.vehiculos.push(new Auto(readlineSync.question("(1) Ingrese la marca: "), readlineSync.questionInt("(2) Ingrese el modelo: "),
                    readlineSync.question("(3) Ingrese el color: "), readlineSync.questionInt("(4) Ingrese la velocidad maxima: "),
                    readlineSync.questionInt("(5) Ingrese la cantidad de puertas: ")));
                break;

            case 2:
                this.vehiculos.push(new Moto(readlineSync.question("(1) Ingrese la marca: "), readlineSync.questionInt("(2) Ingrese el modelo: "),
                    readlineSync.question("(3) Ingrese el color: "), readlineSync.questionInt("(4) Ingrese la velocidad maxima: ")
                    , readlineSync.questionInt("(5) Ingrese la cilindrada: ")));
                break;

            case 3:
                this.vehiculos.push(new Camion(readlineSync.question("(1) Ingrese la marca: "), readlineSync.questionInt("(2) Ingrese el modelo: "),
                    readlineSync.question("(3) Ingrese el color: "), readlineSync.questionInt("(4) Ingrese la velocidad maxima: "),
                    readlineSync.questionInt("(5) Ingrese la carga maxima en toneladas: "), readlineSync.questionInt("(6) Ingrese cantidad de acoplados: ")));
                break;
        }
    }

    //Función que recorre el arreglo de vehiculo y lo muestra por consola
    public listarVehiculos(): void {
        let aux: object[] = [];
        for (let i = 0; i < this.vehiculos.length; i++) {
            if (this.vehiculos[i] != null) {
                aux.push(this.vehiculos[i]);
            }
        }
        console.table(aux);
    }

}//FIN CLASE REGISTROAUTOMOTOR

let registroAutomotor = new RegistroAutomotor();

let input: number = readlineSync.questionInt("OPCIONES:\n(1) DAR ALTA\n(2) LISTAR\n(3) SALIR\nTu respuesta: ");
let salir: boolean = false;

//MENÚ
while (salir != true) {
    switch (input) {

        case 1:
            try {
                registroAutomotor.darAltaVehiculo(readlineSync.questionInt("DAR ALTA\n(1) AUTO\n(2) MOTO\n(3) CAMIÓN\nTu respuesta: "));
            } catch (error) {
                console.log("El valor ingresado está por fuera del rango esperado");
            }
            break;

        case 2:
            registroAutomotor.listarVehiculos();
            break;

        case 3:
            salir = (readlineSync.question("¿Seguro deseas salir? (Y/N): ") == "Y");
            break;
    }

    if (salir != true) {
        input = readlineSync.questionInt("OPCIONES\n(1) DAR ALTA\n(2) LISTAR\n(3) SALIR\nTu respuesta: ");
    } else {
        console.log("¡Hasta luego!");
    }
}
