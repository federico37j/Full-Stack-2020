//Import clases
import { Vehiculo } from "./vehiculo";

//Uso "export" para utilizar la clase en otra y uso "extends" para que herede de Vehículo.
export class Moto extends Vehiculo {
    //Declaración de variables
    private cascoPuesto: boolean;

    public constructor(marca: string, mod: number, color: string, velocidad: number) {
        super(marca, mod, color, velocidad);
       
        this.cantidadRuedas = 2;
        this.cascoPuesto = false;
    }

    //Función para arrancar la moto solo si se tiene puesto el casco antes.
    public arrancarMoto(): void {
        if (this.cascoPuesto) {
            this.ponerEnMarcha();
        } else {
            console.log("Pónganse el casco y vuelva a intentar");
        }
    }

    public tocarbocina(): void {
        console.log("Suena bocina");
    }

    public setCasco(casco: boolean): void {
        this.cascoPuesto = casco;
    }

    public setRuedas(ruedas: number): void {
        this.cantidadRuedas = ruedas;
    }

}//FIN CLASE MOTO