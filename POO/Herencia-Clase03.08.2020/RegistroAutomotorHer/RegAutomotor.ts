//Import librerías
import * as readlineSync from "readline-sync";
import { LectorArch } from "./LectorArch";

//Import clases
import { Vehiculo } from "./vehiculo";
import { Auto } from "./auto";
import { Moto } from "./moto";
import { Camion } from "./camion";

class RegistroAutomotor {
    //Declaración de variables
    private txtPorFila: string[];
    private txtObjeto: string[];
    private vehiculos: Vehiculo[];
    private lectorArchivos: LectorArch;

    public constructor(lectorArchivos: LectorArch, auto: Auto, moto: Moto, camion: Camion) {
        this.lectorArchivos = lectorArchivos;
        this.vehiculos = [];
        this.cambiarAObjeto('RegistroAutomotorHer/auto.txt');
    }

    //Con esta función se traen los datos de la función leerArchivos y se crean los objetos de tipo vehículo.
    public cambiarAObjeto(urlFS: string): void {
        this.txtPorFila = this.lectorArchivos.leerArchivos(urlFS);
        let i: number = 0;
        for (i; i < this.txtPorFila.length; i++) {
            this.txtObjeto = this.txtPorFila[i].split(",");
            this.vehiculos.push(new Auto(this.txtObjeto[0], Number(this.txtObjeto[1]), this.txtObjeto[2], Number(this.txtObjeto[3])));
        }
    }

    //Con esta función se crean los objetos de tipo auto/moto/camión
    public darAltaVehiculo(input: number): void {
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

let lectorArchivos = new LectorArch();
let auto = new Auto("",0,"",0);
let moto = new Moto("",0,"",0,0);
let camion = new Camion ("",0,"",0,0);
let registroAutomotor = new RegistroAutomotor(lectorArchivos,auto,moto,camion);

let input: number = readlineSync.questionInt("OPCIONES:\n(1) DAR ALTA:\n(2) LISTAR\n(3) SALIR\nTu respuesta: ");
let salir: boolean = false;

//MENÚ
while (salir != true) {
    switch (input) {

        case 1:
            registroAutomotor.darAltaVehiculo(readlineSync.questionInt("DAR ALTA\n(1) AUTO\n(2) MOTO\n(3) CAMIÓN\nTu respuesta: "));
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
