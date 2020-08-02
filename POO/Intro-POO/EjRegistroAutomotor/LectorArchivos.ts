//Importación de librerias
import * as fs from 'fs';

export class LectorArchivos {
    //Declaración de variables
    private texto: string;
    private palabrasPrimero: string[];

    public constructor() {

    }

    //Función para trae los datos del TXT usando import * as fs from 'fs'
    public leerArchivos = (urlFS: string): string[] => {
        this.texto = fs.readFileSync(urlFS, 'utf8');
        return this.palabrasPrimero = this.texto.split('\r\n');
    }

}//FIN CLASE LECTORARCHIVOS
