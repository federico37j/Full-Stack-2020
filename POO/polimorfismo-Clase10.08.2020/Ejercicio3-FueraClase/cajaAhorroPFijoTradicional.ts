import { Cuenta } from "./cuenta";
import { Movimiento } from "./movimiento";

export class CajaAhorroPFijoTradicional extends Cuenta {
    private porcentajeAnual: number;

    public constructor(numero: number, titular: string, saldo: number, cotizacion: number, movimiento: Movimiento, porcentajeAnual: number) {
        super(numero, titular, saldo, cotizacion, movimiento);
        this.porcentajeAnual = porcentajeAnual;
        this.estado = false;
    }

    public calcularGanancia(importe: number): number {
        let meses: number = 12;
        this.estado = true;
        return ((this.porcentajeAnual / meses) / 100) * importe;
    }

    public getporcentajeAnual(): number {
        return this.porcentajeAnual;
    }
}