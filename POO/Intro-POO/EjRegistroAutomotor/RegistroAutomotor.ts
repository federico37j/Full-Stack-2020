//Importación de librerías
import { LectorArchivos } from "./LectorArchivos";
import { Auto } from "../EjAuto/auto";

class RegistroAutomotor {
    //Declaración de variables
    private lectorArchivos: LectorArchivos;
    private auto: Auto;
    private autos: Auto[];
    private palabrasPrimero: string[];
    private palabrasSegundo: string[];

    public constructor(lectorArchivos: LectorArchivos, auto: Auto) {
        this.lectorArchivos = lectorArchivos;
        this.auto = auto;
        this.autos = [];
        this.cambiarAObjeto('EjRegistroAutomotor/auto.txt');
    }

    public cambiarAObjeto = (urlFS: string): void => {
        this.palabrasPrimero = this.lectorArchivos.leerArchivos(urlFS);
        let i: number = 0;
        for (i; i < this.palabrasPrimero.length; i++) {
            this.palabrasSegundo = this.palabrasPrimero[i].split(",");
            this.autos.push(new Auto(this.palabrasSegundo[0], Number(this.palabrasSegundo[1]), this.palabrasSegundo[2], Number(this.palabrasSegundo[3])));
        }
    }


    public darAlta = (marca: string, modelo: number, color: string, velocidad: number): void => {
        this.autos.push(new Auto(marca, modelo, color, velocidad));
    }

    //Función que recorre el arreglo de autos y lo muestra por consola
    public listarAutos = (): void => {
        for (let i = 0; i < this.autos.length; i++) {
            if (this.autos[i] != null) {
                console.log(this.autos[i].toString());
            }
        }
    }

}//FIN CLASE REGISTROAUTOMOTOR
let auto = new Auto("", 0, "", 0);
let lectorArchivos = new LectorArchivos();
let registroAutomotor = new RegistroAutomotor(lectorArchivos, auto);

let marca: string = "NUEVA";
let modelo: number = 2020;
let color: string = "Negro";
let velMax: number = 210;

registroAutomotor.darAlta(marca, modelo, color, velMax);
registroAutomotor.listarAutos();

