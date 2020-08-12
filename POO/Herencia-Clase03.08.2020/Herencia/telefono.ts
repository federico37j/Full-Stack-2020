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
        return false;
    }

    public hacerLlamada(): void {
        console.log("MARCANDO...");
    }

    public prenderApagar(): void {
        this.estaPrendido = !this.estaPrendido;

    }

    public prenderApagarLinterna(): void {
        this.linternaPrendida = !this.linternaPrendida;

    }

    public setBateria(tamanio: number): void {
        this.bateriaActual = tamanio;
    }

}