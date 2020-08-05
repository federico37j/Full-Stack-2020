//Import clases
import { Vehiculo } from "./vehiculo";

//Uso "export" para utilizar la clase en otra y uso "extends" para que herede de Vehículo.
export class Auto extends Vehiculo {

    public constructor(marca: string, mod: number, color: string, velocidad: number, cantidadPuertas?: number) {
        super();
        this.marca = marca;
        this.modelo = mod;
        this.color = color;
        this.velocidadMax = velocidad;
        this.cantidadRuedas = 4;

        //La variable cantidadPuertas es un parámetro opcional, sino se carga en el constructor queda por defecto lo que contenga "puertasDefecto".
        if (cantidadPuertas != undefined) {
            this.cantidadPuertas = cantidadPuertas;
        } else {
            this.cantidadPuertas = 3;
        }

    }


}//FIN CLASE AUTO
