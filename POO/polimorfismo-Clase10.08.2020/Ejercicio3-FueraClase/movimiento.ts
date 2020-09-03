export class Movimiento {
    private fecha: string;
    private tipo: string;
    private importe: number;
    private saldo: number;

    public constructor(fecha: string, tipo: string, importe: number, saldo: number) {
        this.fecha = fecha;
        this.tipo = tipo;
        this.importe = importe;
        this.saldo = saldo;
    }

    public imprimirMovimiento (): void{
        console.log(`Fecha: ${this.fecha}\nTipo: ${this.tipo}\nImporte: ${this.importe}\nSaldo: ${this.saldo}.`);
    }
}