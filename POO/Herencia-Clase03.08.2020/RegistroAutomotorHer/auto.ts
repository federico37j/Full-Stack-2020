//Import clases
import { Vehiculo } from "./vehiculo";

//Uso "export" para utilizar la clase en otra y uso "extends" para que herede de Vehículo.
export class Auto extends Vehiculo {
    private apretarEmbrague: boolean;

    public constructor(marca: string, mod: number, color: string, velocidad: number, cantidadPuertas?: number) {
        super(marca, mod, color, velocidad);
        this.cantidadRuedas = 4;
        this.apretarEmbrague = false;

        //La variable cantidadPuertas es un parámetro opcional, sino se carga en el constructor queda por defecto lo que contenga "puertasDefecto".
        if (cantidadPuertas != undefined) {
            this.cantidadPuertas = cantidadPuertas;
        } else {
            this.cantidadPuertas = 3;
        }

    }

    public arrancarAuto(): void {
        if (this.apretarEmbrague) {
            this.apretarEmbrague = false;
        } else {
            this.apretarEmbrague = true;
        }
    }


}//FIN CLASE AUTO
