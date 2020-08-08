import { Telefono } from "./telefono";
import { Camara } from "./camara";

class TelefonoConCamara extends Telefono {
    //Declaración de variables
    private pixeles: number;
    private camara: Camara;

    public constructor(pixel: number, bateria: number) {
        super(bateria);
        this.camara = new Camara;
        this.pixeles = pixel;
    }

    public sacarFoto(): void {
        this.camara.sacarFoto();
    }

    public getCantidadPixeles(): number {
        return this.pixeles;
    }
}

let pixeles: number = 48;
let bateria: number = 15;
let miCel = new TelefonoConCamara(pixeles, bateria);
miCel.prenderApagar();
miCel.mandarMensaje("Mensaje", 251561251);
console.log("La camara contiene", miCel.getCantidadPixeles(), "pixeles");
miCel.sacarFoto();
console.log(miCel);