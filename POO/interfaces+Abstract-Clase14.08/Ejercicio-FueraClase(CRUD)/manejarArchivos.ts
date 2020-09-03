//Importación de librerías
import * as fs from 'fs';

//Exporto la clase ManejarArchivos para poder utilizarla en la clase Factura.
export class ManejarArchivos {
    //Declaración de variables
    private texto: string;
    private txtPorFila: string[];

    //Función para traer los datos del TXT usando import * as fs from 'fs'
    public leerArchivos = (urlFS: string): string[] => {
        this.texto = fs.readFileSync(urlFS, 'utf8');
        return this.txtPorFila = this.texto.split('\r\n');
    }

    //Función para insertar los datos en el TXT
    public guardarTxt(url: string, texto: string): void {
        fs.writeFile(url, texto, function (err) {
            if (err) return console.error(err);
        });
    }

}
