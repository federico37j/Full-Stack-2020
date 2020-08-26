export class Examen {
    private nombre: string;
    private calificacion: number;

    public constructor(nombre: string, calificacion: number) {
        this.nombre = nombre;
        this.calificacion = calificacion;
    }

    public getNombre(): string {
        return this.nombre;
    }

    public getCalificacion(): number {
        return this.calificacion;
    }

}