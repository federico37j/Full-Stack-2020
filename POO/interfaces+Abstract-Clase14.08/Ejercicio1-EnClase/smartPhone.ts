import { Telefono } from "./telefono";

class SmartPhone implements Telefono{
    private estaPrendido: boolean;

    public prender(): void {
        this.estaPrendido = true;
    }

    public apagar(): void {
        this.estaPrendido = false;
    }

    public llamar(numero: string): void {
        console.log("LLAMANDO",numero);
    }
    
    public sacarFoto(): void{
        console.log("SACAR FOTO");
    }

}