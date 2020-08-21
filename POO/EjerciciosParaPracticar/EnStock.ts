import { Elemento } from "./elemento";

export class EnStock extends Elemento {
    private costoAsociado: number;
    private disponible: boolean;

    public constructor(id: number, nombre: string, cantidad: number, precioUnitario: number, costoAsociado: number = 0) {
        super(id, nombre, cantidad, precioUnitario);
        this.costoAsociado = costoAsociado;
        this.disponible = true;
    }

    public getNombre(): string {
        return this.nombre;
    }

    public getCantidad(): number {
        return this.cantidad;
    }

    public setCantidad(num: number): void {
        this.cantidad = num;
    }

    public getCostoAsociado(): number {
        return this.costoAsociado;
    }

    public getDisponible(): boolean {
        return this.disponible;
    }

    public toString(): string {
        return `${this.id},${this.nombre},${this.cantidad},${this.precioUnitario},${this.costoAsociado}`;
    }

}