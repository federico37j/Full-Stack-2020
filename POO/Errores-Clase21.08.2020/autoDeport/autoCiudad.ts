import { Vehiculo } from "./vehiculo";

class AutoCiudad extends Vehiculo {
    private tipoCaja: string;

    public constructor(marca: string, modelo: number, color: string, velocidadMax: number, tipoCaja: string) {
        super(marca, modelo, color, velocidadMax);
        this.tipoCaja = tipoCaja;
    }

    public acelerar(): void {
        this.velocidadActual += 10;
    }

    public getTipoCaja(): string {
        return this.tipoCaja;
    }

    public setTipoCaja(tipo: string): void {
        this.tipoCaja = tipo;
    }
}
