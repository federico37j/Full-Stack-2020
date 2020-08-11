export class Inmueble {
    private ubicacion: string;
    private metrosCuadrados: number;
    private cantHabitaciones: number;
    protected espacioVerde: boolean;

    public constructor(ubicacion: string, metrosCuadrados: number, cantHabitaciones: number) {
        this.ubicacion = ubicacion;
        this.metrosCuadrados = metrosCuadrados;
        this.cantHabitaciones = cantHabitaciones;
        this.espacioVerde = true;
    }

    //Métodos get y set

    public getUbicacion(): string {
        return this.ubicacion;
    }

    public setUbicacion(ubicacion: string): void {
        this.ubicacion = ubicacion;

    }

    public getMetrosCuadrados(metrosCuadrados: number): void {
        this.metrosCuadrados = metrosCuadrados;
    }

    public setMetrosCuadrados(): number {
        return this.metrosCuadrados;
    }

    public getCantHabitaciones(cantHabitaciones: number): void {
        this.cantHabitaciones = cantHabitaciones;
    }

    public setCantHabitaciones(): number {
        return this.cantHabitaciones;
    }

    public getEspacioVerde(espacioVerde: boolean): void {
        this.espacioVerde = espacioVerde;
    }

    public setEspacioVerde(): boolean {
        return this.espacioVerde;
    }



}