export class Persona {
    private nombre: string;
    private apellido: string;
    private edad: number;

    public constructor(nombre: string, apellido: string, edad: number) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.edad = edad;
    }

    public getNombre(): string {
        return this.nombre;
    }

    public getApellido(): string {
        return this.apellido;
    }

    public getEdad(): number {
        return this.edad;
    }

}