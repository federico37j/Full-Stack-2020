import { Libro } from "./libro";

export class LibroInfantil extends Libro {
    private edadRecomendada: number;

    constructor(titulo: string, autor: string, editorial: string, anio: number, cantidadCopias: number, edadRecomendada: number) {
        super(titulo, autor, editorial, anio, cantidadCopias);
        this.edadRecomendada = edadRecomendada;
        this.reservas = 0;
    }

    public reservarLibro(): void {
        if (this.edadRecomendada >= 12) {
            this.reservas += 1;
        }
    }

    public setEdadRecomendada(edad: number): void {
        this.edadRecomendada = edad;
    }

}
