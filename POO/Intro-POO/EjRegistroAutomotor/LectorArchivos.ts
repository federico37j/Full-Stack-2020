//Importación de librerias
import * as fs from 'fs';
import { Auto } from '../EjAuto/auto';

export class LectorArchivos {
    //Declaración de variables
    private texto: string;
    private palabrasPrimero: string[];
    private palabrasSegundo: string[];
    private autos: Auto[];

    public constructor() {
        this.autos = [];
    }

    //Función para trae los datos del TXT usando import * as fs from 'fs'
    public leerArchivos = (): void => {
        this.texto = fs.readFileSync('EjAuto/auto.txt', 'utf8');
        this.palabrasPrimero = this.texto.split('\r\n');
    }

    //Función para que mediante el arreglo que vino del txt crear los objetos de tipo Auto
    public cambiarObjeto = (): void => {
        this.leerArchivos();
        let i: number = 0;
        for (i; i < this.palabrasPrimero.length; i++) {
            this.palabrasSegundo = this.palabrasPrimero[i].split(",");
            this.autos.push(new Auto(this.palabrasSegundo[0], Number(this.palabrasSegundo[1]), this.palabrasSegundo[2], Number(this.palabrasSegundo[3])));
        }
    }

}//FIN CLASE LECTORARCHIVOS