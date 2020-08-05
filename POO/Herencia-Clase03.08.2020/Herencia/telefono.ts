export class Telefono {
    //Declaración de variables
    private estaPrendido: boolean;
    private bateriaActual: number;

    public constructor() {
        this.estaPrendido = false;
    }

    public mandarMensaje(): void {
        console.log("MENSAJE ENVIADO");
    }

    public hacerLlamada(): void {
        console.log("MARCANDO...");
    }

    public prenderApagar(): void {
        if (this.estaPrendido) {
            this.estaPrendido = false;
        } else {
            this.estaPrendido = true;
        }
    }

    public setBateria(tamanio: number): void{
        this.bateriaActual = tamanio;
    }

}