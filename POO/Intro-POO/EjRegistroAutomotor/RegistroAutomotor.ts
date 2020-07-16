//Importación de librerías
import { LectorArchivos } from "./LectorArchivos";
import { Auto } from "../EjAuto/auto";

class RegistroAutomotor {
    //Declaración de variables
    private lectorArchivos: LectorArchivos;
    private auto: Auto;

    public constructor(lectorArchivos: LectorArchivos, auto: Auto) {
        this.lectorArchivos = lectorArchivos;
        this.auto = auto;
        this.cambiarObjeto();
    }

    public cambiarObjeto = (): void => {
        this.lectorArchivos.cambiarObjeto();
    }

    public darAlta = (marca: string, modelo: number, color: string, velocidad: number): void => {
        this.auto.darAlta(marca, modelo, color, velocidad);
    }

    public listarAutos = (): void => {
        this.auto.listarAutos();
    }

}//FIN CLASE REGISTROAUTOMOTOR
let auto = new Auto("", 0, "", 0);
let lectorArchivos = new LectorArchivos();
let registroAutomotor = new RegistroAutomotor(lectorArchivos, auto);

let marca: string = "Fiat";
let modelo: number = 2020;
let color: string = "Negro";
let velMax: number = 210;

registroAutomotor.darAlta(marca, modelo, color, velMax);
registroAutomotor.listarAutos();

