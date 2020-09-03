export abstract class FacturaSimple {
    protected numero: number;
    protected fecha: string;
    protected nombCliente: string;
  

    public constructor(numeroFac: number, fecha: string, nombCliente: string) {
        this.numero = numeroFac;
        this.fecha = fecha;
        this.nombCliente = nombCliente;

    }

    abstract getMonto(): number;

    public getNumeroFac(): number{
        return this.numero;
    }

    public getNombCliente(): string{
        return this.nombCliente;
    }

    public setNombCliente(nombCliente: string): void{
        this.nombCliente = nombCliente;
    }

}