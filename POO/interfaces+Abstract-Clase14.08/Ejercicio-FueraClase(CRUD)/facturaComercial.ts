import { FacturaSimple } from "./FacturaSimple";
import { Detalle } from "./detalle";


export class FacturaComercial extends FacturaSimple {
    private tipoFactura: string;
    private detalle: Detalle[];

    public constructor(numero: number, fecha: string, nombCliente: string, tipoFactura: string, detalle: Detalle[]) {
        super(numero, fecha, nombCliente);
        this.tipoFactura = tipoFactura;
        this.detalle = detalle;
    }

    public getMonto(): number {
        let resultado: number = 0;
        for (let i: number = 0; i < this.detalle.length; i++) {
            resultado += this.detalle[i].getTotal();
        }
        return resultado;
    }

    public getTipoFactura(): string {
        return this.tipoFactura;
    }

    public setTipoFactura(tipoFactura: string): void {
        this.tipoFactura = tipoFactura;
    }

    public getDetalle(): Detalle[] {
        return this.detalle;
    }

}
