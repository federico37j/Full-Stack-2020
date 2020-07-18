//Importación de librerias
import * as fs from 'fs';

class LectorArchivos {
    //Declaración de variables
    private texto: string;
    private palabrasPrimero: string[];

    public constructor() {

    }

    //Función para trae los datos del TXT usando import * as fs from 'fs'
    public leerArchivos = (urlFS: string): void => {
        //'EjAuto/auto.txt'
        this.texto = fs.readFileSync(urlFS, 'utf8');
        this.palabrasPrimero = this.texto.split('\r\n');
        console.log(this.palabrasPrimero);
    }

}//FIN CLASE LECTORARCHIVOS

let lectorArchivos = new LectorArchivos();
lectorArchivos.leerArchivos('EjLibro/libros.txt');

class libros {

    
}