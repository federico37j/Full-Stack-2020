import { Elemento } from "./elemento";

export class prodVendido extends Elemento {
    private fecha: string;
    private nombCliente: string;
    private total: number;


    public constructor(id: number, nombre: string, cantidad: number, precioUnitario: number, nombCliente: string, fecha: string, total: number) {
        super(id, nombre, cantidad, precioUnitario);
        this.nombCliente = nombCliente;
        this.fecha = fecha;
        this.total = total;
    }

    public getTotal(): number {
        return this.total;
    }

    public toString(): string {
        return `${this.id},${this.nombre},${this.cantidad},${this.precioUnitario},${this.nombCliente},${this.total},${this.fecha}`;
    }

}