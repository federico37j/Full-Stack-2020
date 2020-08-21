export abstract class Elemento {
    protected id: number;
    protected nombre: string;
    protected cantidad: number;
    protected precioUnitario: number;


    public constructor(id: number, nombre: string, cantidad: number, precioUnitario: number) {
        this.id = id;
        this.nombre = nombre;
        this.cantidad = cantidad;
        this.precioUnitario = precioUnitario;
    }

    abstract toString(): string;

    public getNumero(): number {
        return this.id;
    }

    public getPrecioUnitario(): number {
        return this.precioUnitario;
    }

}