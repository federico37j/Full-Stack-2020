import { Telefono } from "./telefono";

class TelefonoConRadio extends Telefono {
    //Declaración de variables
    private frecuenciaActual: number;

    public constructor(frecuencia: number, bateria: number) {
        super(bateria);
        this.frecuenciaActual = frecuencia;
    }

    public verFrecuenciaActual(): number {
        return this.frecuenciaActual;
    }

}

let frecuencia = 1500;
let bateria: number = 4000;
let miCel = new TelefonoConRadio(frecuencia, bateria);
miCel.prenderApagar();
miCel.setBateria(4000);
console.log(miCel.verFrecuenciaActual(), "MHz");
console.log(miCel);