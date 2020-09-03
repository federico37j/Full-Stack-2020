export class Libro {
    private titulo: string;
    private autor: string;
    private editorial: string;
    private anio: number;
    private cantidadCopias: number;
    protected reservas: number;

    public constructor(titulo: string, autor: string, editorial: string, anio: number, cantidadCopias: number) {
        this.titulo = titulo;
        this.autor = autor;
        this.editorial = editorial;
        this.anio = anio;
        this.cantidadCopias = cantidadCopias;
        this.reservas = 0;
    }

    public reservarLibro() {
        if (this.cantidadCopias > 0) {
            this.reservas += 1;
        }
    }

    public getTitulo(): string {
        return this.titulo;
    }

    public setTitulo(titulo: string): void {
        this.titulo = titulo;
    }

    public getAutor(): string {
        return this.autor;
    }

    public setAutor(autor: string): void {
        this.autor = autor;
    }

    public getEditorial(): string {
        return this.editorial;
    }

    public setEditorial(editorial: string): void {
        this.editorial = editorial;
    }

    public getAnio(): number {
        return this.anio;
    }

    public setAnio(anio: number): void {
        this.anio = anio;
    }

}