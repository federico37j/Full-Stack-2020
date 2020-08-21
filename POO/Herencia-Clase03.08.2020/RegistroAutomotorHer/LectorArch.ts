//Importación de librerías
import * as fs from 'fs';

//Exporto la clase LectorArchivos para poder utilizarla en la clase RegAutomotor.
export class LectorArch {
    //Declaración de variables
    private texto: string;
    private txtPorFila: string[];

    //Constructor
    public constructor() {

    }

    //Función para traer los datos del TXT usando import * as fs from 'fs'
    public leerArchivos = (urlFS: string): string[] => {
        this.texto = fs.readFileSync(urlFS, 'utf8');
        return this.txtPorFila = this.texto.split('\r\n');
    }

}
