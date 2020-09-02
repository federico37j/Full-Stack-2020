import { Elemento } from "./elemento";
import { Archivo } from "./archivo";
import { Logger } from "../Ejercicio3-Logger/logger";

export class Carpeta implements Elemento {
    private nombre: string;
    private elementos: Elemento[];

    public constructor(nombre: string) {
        this.nombre = nombre;
        this.elementos = [];
    }

    public arregarElementos(elemento: Elemento): void {
        this.elementos.push(elemento);
    }

    public getNombre(): string {
        return this.nombre;
    }

    public getContenido(): Elemento[] {
        return this.elementos;
    }
}
const log: Logger = Logger.getLogger();

let carpeta1: Carpeta = new Carpeta("Carpeta 1");
log.logInfo(carpeta1.getNombre());
let carpeta2: Carpeta = new Carpeta("Carpeta 2");
log.logInfo(carpeta2.getNombre());
let carpeta3: Carpeta = new Carpeta("Carpeta 3");
log.logInfo(carpeta3.getNombre());

let archivo1: Archivo = new Archivo("Legajo 1", "C:\Users\Desktop");
log.logInfo(archivo1.getNombre(), archivo1.getUbicacion());
let archivo2: Archivo = new Archivo("Legajo 2", "C:\Users\Desktop");
log.logInfo(archivo2.getNombre(), archivo2.getUbicacion());
let archivo3: Archivo = new Archivo("Legajo 3", "C:\Users\Desktop");
log.logInfo(archivo3.getNombre(), archivo3.getUbicacion());

carpeta1.arregarElementos(archivo1);
carpeta1.arregarElementos(archivo2);
carpeta1.arregarElementos(carpeta3);
carpeta3.arregarElementos(archivo1);

console.table(carpeta1.getContenido());