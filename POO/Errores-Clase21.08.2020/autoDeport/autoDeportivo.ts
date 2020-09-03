import { Vehiculo } from "./vehiculo";

class AutoDeportivo extends Vehiculo {
    private suspension: string;
    private frenos: string;
    private direccion: string;
    private diseñoAerodinámico: boolean;

    public constructor(marca: string, modelo: number, color: string, velocidadMax: number, suspension: string, frenos: string, direccion: string) {
        super(marca, modelo, color, velocidadMax);
        this.suspension = suspension;
        this.frenos = frenos;
        this.direccion = direccion;
        this.diseñoAerodinámico = true;
    }

    public acelerar(): void {
        this.velocidadActual += 100;
    }

    public getSuspension(): string {
        return this.suspension;
    }

    public setSuspension(suspension: string): void {
        this.suspension = suspension;
    }

    public getFrenos(): string {
        return this.frenos;
    }

    public setFrenos(frenos: string): void {
        this.frenos = frenos;
    }

    public getDireccion(): string {
        return this.direccion;
    }

    public setDireccion(direccion: string): void {
        this.direccion = direccion;
    }

    public getDiseñoAerodinámico(): boolean {
        return this.diseñoAerodinámico;
    }

}

let miAuto = new AutoDeportivo("",0,"",0,"","","");
try {
    miAuto.setCantidadRuedas(5);
} catch (error) {
    console.log("El valor ingresado tiene que ser par",error);
}

