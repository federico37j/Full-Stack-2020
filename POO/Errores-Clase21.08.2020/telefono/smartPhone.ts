import { Telefono } from "./telefono";

class SmartPhone implements Telefono {
    private estaPrendido: boolean;
    private bateria: number;

    public constructor() {
        this.bateria = 0;
    }

    public prender(): void {
        this.estaPrendido = true;
    }

    public apagar(): void {
        this.estaPrendido = false;
    }

    public llamar(numero: string): void {
        console.log("LLAMANDO", numero);
    }

    public sacarFoto(): void {
        console.log("SACAR FOTO");
    }

    public setBateria(bateria: number): void {
        try {
            if (bateria < 0) {
                throw new Error("El valor no puede ser menor a 0");
            }
            this.bateria = bateria;

        } catch (error) {
            console.log("El valor no puede ser menor a 0");
        }

    }

}

let miTelefono = new SmartPhone();
miTelefono.setBateria(-1);
// miTelefono.setBateria(2);