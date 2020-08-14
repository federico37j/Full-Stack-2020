import { Movimiento } from "./movimiento";
import { Cuenta } from "./cuenta";

export class CajaAhorroPFijoUVA extends Cuenta {
    private porcentajeAnual: number;
    private porcentajeInflacion: number;

    public constructor(numero: number, titular: string, saldo: number, cotizacion: number, movimiento: Movimiento, porcentajeAnual: number, porcentajeInflacion: number) {
        super(numero, titular, saldo, cotizacion, movimiento);
        this.porcentajeAnual = porcentajeAnual;
        this.porcentajeInflacion = porcentajeInflacion;
        this.estado = false;
    }

    public calcularGanancia(importe: number): number {
        let meses: number = 12;
        let resultado: number = (this.porcentajeAnual / meses) / 100;
        let porcentajeInflacionDeci: number = (this.porcentajeInflacion / meses) / 100;
        this.estado = true;
        return (porcentajeInflacionDeci + resultado) * importe;
    }

    public getporcentajeAnual(): number {
        return this.porcentajeAnual;
    }

    public getPorcentajeInflacion(): number {
        return this.porcentajeInflacion;
    }
}