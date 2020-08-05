import { Telefono } from "./telefono";

class TelefonoConCamara extends Telefono {
    //Declaración de variables
    private pixeles: number;

    constructor(pixel: number) {
        super();
        this.pixeles = pixel;
    }

    public sacarFoto(): void {
        console.log("FOTO");
    }

    public getCantidadPixeles(): number{
        return this.pixeles;
    }
}

let pixeles: number = 48;
let miCel = new TelefonoConCamara(pixeles);

miCel.mandarMensaje();
miCel.sacarFoto();
console.log("La camara contiene",miCel.getCantidadPixeles(),"pixeles");
console.log(miCel);