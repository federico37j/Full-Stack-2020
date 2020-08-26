//Importación de librerías
import * as fs from 'fs';

export class ManejarArchivos {
    private texto: string;
    private txtPorFila: string[];

    //Función para traer los datos del TXT usando import * as fs from 'fs'
    public leerArchivos = (urlFS: string): string[] => {
        this.texto = fs.readFileSync(urlFS, 'utf8');
        return this.txtPorFila = this.texto.split('\r\n');
    }

}
