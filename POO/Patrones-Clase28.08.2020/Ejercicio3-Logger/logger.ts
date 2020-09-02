//Importación de librerías
import * as fs from 'fs';

export class Logger {
    private static instancia: Logger = null;
    //Uso createWriteStream para escribir un archivo línea por línea.
    private insertarLinea = fs.createWriteStream("infoLog.txt");

    //Uso la clase Date para agregarle la fecha a las operaciones del método logInfo.
    private date: Date = new Date();

    //Constructor privado
    private constructor() { }

    //Si "instancia" es igual a null la creo, sino la retorno.
    public static getLogger(): Logger {
        if (this.instancia == null) {
            this.instancia = new Logger();
        }
        return this.instancia;
    }

    public logInfo(nombre: string, ubic?: string): void {
        if (ubic == undefined) {
            this.insertarLinea.write("| INFORMACIÓN | " + this.date + " | CARPETA: " + nombre + " |\n");
        } else {
            this.insertarLinea.write("| INFORMACIÓN | " + this.date + " | ARCHIVO: " + nombre + " | UBICACIÓN: " + ubic + " |\n");
        }
    }
}