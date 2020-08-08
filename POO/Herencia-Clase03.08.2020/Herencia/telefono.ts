export class Telefono {
    //Declaración de variables
    private estaPrendido: boolean;
    private bateriaActual: number;
    protected linternaPrendida: boolean;

    public constructor(bateria: number) {
        this.estaPrendido = false;
        this.bateriaActual = bateria;
        this.linternaPrendida = false;
    }

    public mandarMensaje(msg: string, numero: number): boolean {
        if (numero > 0) {
            console.log("MENSAJE ENVIADO", msg, "numero", numero);
            return true;
        }

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

    public prenderApagarLinterna(): void {
        if (this.linternaPrendida) {
            this.linternaPrendida = false;
        } else {
            this.linternaPrendida = true;
        }
    }

    public setBateria(tamanio: number): void {
        this.bateriaActual = tamanio;
    }

}