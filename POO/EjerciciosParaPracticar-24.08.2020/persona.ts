export class Persona {
    private nombre: string;
    private apellido: string;
    private edad: number;
    protected dni: number;

    public constructor(dni: number,nombre: string, apellido: string, edad: number) {
        this.dni = dni;
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