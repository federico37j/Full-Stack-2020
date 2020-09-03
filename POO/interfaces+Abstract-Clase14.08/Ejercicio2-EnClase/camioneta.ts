import { Vehiculo } from "./vehiculo";

class Camioneta extends Vehiculo {
    private largo: number;

    public constructor(marca: string, modelo: number, color: string, velocidadMax: number) {
        super(marca, modelo, color, velocidadMax);
    }

    public acelerar(): void {
        this.velocidadActual += 15;
    }

    public getlargo(): number {
        return this.largo;
    }

    public setTipoCaja(largo: number): void {
        this.largo = largo;
    }

}