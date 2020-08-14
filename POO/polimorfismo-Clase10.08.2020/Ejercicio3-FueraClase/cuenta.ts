import { Movimiento } from "./movimiento";

export class Cuenta {
    private numero: number;
    private titular: string;
    private saldo: number;
    private cotizacionDelDia: number;
    protected estado: boolean;
    private movimiento: Movimiento;

    public constructor(numero: number, titular: string, saldo: number, cotizacionDelDia: number, movimiento: Movimiento) {
        this.numero = numero;
        this.titular = titular;
        this.saldo = saldo;
        this.cotizacionDelDia = cotizacionDelDia;
        this.movimiento = movimiento;
        this.estado = true;
    }

    public calcularGanancia(importe: number): number {
        return this.cotizacionDelDia * importe;
    }

    public getNumero(): number {
        return this.numero;
    }

    public getSaldo(): number {
        return this.saldo;
    }

    public getTitular(): string {
        return this.titular;
    }

    public getCotizacionDelDia(): number {
        return this.cotizacionDelDia;
    }
}