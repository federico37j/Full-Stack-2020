import { Telefono } from "./telefono";

class TelefonoConRadio extends Telefono {
    //Declaración de variables
    private frecuenciaActual: number;

    constructor(frecuencia: number) {
        super();
        this.frecuenciaActual = frecuencia;
    }

    public verFrecuenciaActual(): number {
        return this.frecuenciaActual;
    }

    public getFrecuencia(): number {
        return this.frecuenciaActual;
    }
}

let frecuencia = 1500;
let miCel = new TelefonoConRadio(frecuencia);
miCel.setBateria(4000);
miCel.prenderApagar();
console.log(miCel.getFrecuencia(), "MHz");
console.log(miCel);