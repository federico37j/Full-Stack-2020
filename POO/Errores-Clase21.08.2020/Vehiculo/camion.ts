//Import clases
import { Vehiculo } from "./vehiculo";

//Uso "export" para utilizar la clase en otra y uso "extends" para que herede de Vehículo.
export class Camion extends Vehiculo {
    //Declaración de variables
    private cantAcoplados: number;
    private cargaToneladas: number;
    private cantAcopladosDefault: number = 0;

    public constructor(marca: string, mod: number, color: string, velocidad: number, carga: number, cantAcoplados?: number) {
        super(marca, mod, color, velocidad);
        this.cargaToneladas = carga;
        this.cantidadRuedas = 4;

        if (cantAcoplados != undefined) {
            this.cantAcoplados = cantAcoplados;
        } else {
            this.cantAcoplados = this.cantAcopladosDefault;
        }
    }

    //Funciones Get y Set
    public getCantAcoplados(): number {
        return this.cantAcoplados;
    }

    public setCantAcoplados(cantidad: number): void {
        this.cantAcoplados = cantidad;
    }

    public getCargaToneladas(): number {
        return this.cargaToneladas;
    }

    public setCargaToneladas(cantidad: number): void {
        this.cantAcoplados = cantidad;
    }

}//FIN CLASE CAMIÓN