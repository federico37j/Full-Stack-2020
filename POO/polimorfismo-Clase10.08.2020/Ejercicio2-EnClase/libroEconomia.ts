import { Libro } from "./libro";
import { LibroInfantil } from "./libroInfantil";

class LibroEconomia extends Libro {
    private disponibilidad: boolean;
    private modelo: string;

    constructor(titulo: string, autor: string, editorial: string, anio: number, cantidadCopias: number, modelo: string) {
        super(titulo, autor, editorial, anio, cantidadCopias);
        this.modelo = modelo;
        this.disponibilidad = true;
        this.reservas = 0;
    }

    public reservarLibro() {
        if (this.disponibilidad) {
            this.reservas += 1;
        }
    }

    public getDisponibilidad(): boolean {
        return this.disponibilidad;
    }

    public setDisponibilidad(disponibilidad: boolean): void {
        this.disponibilidad = disponibilidad;
    }

    public getModelo(): string {
        return this.modelo;
    }

    public setModelo(modelo: string): void {
        this.modelo = modelo;
    }

}

let miLibro = new Libro("MONGO BLANCO", "CARLOS BARDEM", "PLAZA & JANES EDITORES", 2019, 100);
let miLibroEconomia = new LibroEconomia("Economía en una lección", "Henry Hazlitt", "Harper", 1946, 100, "Liberal");
let miLibroInfantil = new LibroInfantil("Caperucita roja", "Charles Perrault", "N/A", 1697, 500, 12);
miLibro.reservarLibro();
miLibroEconomia.reservarLibro();
miLibroInfantil.reservarLibro();
console.log(miLibro);
console.log(miLibroEconomia);
console.log(miLibroInfantil);