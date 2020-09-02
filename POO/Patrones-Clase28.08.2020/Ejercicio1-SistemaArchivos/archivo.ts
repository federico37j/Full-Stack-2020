import { Elemento } from "./elemento";

export class Archivo implements Elemento {
    private nombre: string;
    private ubicacion: string;

    public constructor(nombre: string, ubicacion: string) {
        this.nombre = nombre;
        this.ubicacion = ubicacion;
    }

    public getNombre(): string {
        return this.nombre;
    }

    public getUbicacion(): string {
        return this.ubicacion;
    }
}


