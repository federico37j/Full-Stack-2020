export class Detalle {
    private numeroDetalle: number
    private fecha: string;
    private nombProducto: string;
    private cantProducto: number;
    private precioUnitario: number;
    private total: number;

    public constructor(numeroDetalle: number, fecha: string, nombProducto: string, cantProducto: number, precioUnitario: number, total=0) {
        this.numeroDetalle = numeroDetalle;
        this.fecha = fecha;
        this.nombProducto = nombProducto;
        this.cantProducto = cantProducto;
        this.precioUnitario = precioUnitario;
        this.total = total;
    }

    public getNumeroDetalle(): number {
        return this.numeroDetalle;
    }

    public setNumeroDetalle(numeroDetalle: number): void {
        this.numeroDetalle = numeroDetalle;
    }

    public getFecha(): string {
        return this.fecha;
    }

    public setFecha(fecha: string): void {
        this.fecha = fecha;
    }

    public getNombProducto(): string {
        return this.nombProducto;
    }

    public setNombProducto(nombProducto: string): void {
        this.nombProducto = nombProducto;
    }

    public getCantProducto(): number {
        return this.cantProducto;
    }

    public setCantProducto(cantProducto: number): void {
        this.cantProducto = cantProducto;
    }

    public getPrecioUnitario(): number {
        return this.precioUnitario;
    }

    public setPrecioUnitario(precioUnitario: number): void {
        this.precioUnitario = precioUnitario;
    }

    public getTotal(): number{
        return this.total;
    }

    public toString(): string {
        return `${this.numeroDetalle},${this.fecha},${this.nombProducto},${this.cantProducto},${this.precioUnitario},${this.total}\n`;
    }

}