import { Persona } from "./persona";
import { Examen } from "./examen";

export class Alumno extends Persona {
    private promedio: number;
    private examenes: Examen[];

    public constructor(dni: number, nombre: string, apellido: string, edad: number, examenes: Examen[] = [], promedio: number = 0) {
        super(dni,nombre, apellido, edad);
        this.examenes = examenes;
        this.promedio = promedio;
    }

    public getDni(): number {
        return this.dni;
    }

    public getPromedio(): number {
        return this.promedio;
    }

    public getExamenes(): Examen[] {
        return this.examenes;
    }

    public setPromedio(promedio: number): number {
        return this.promedio = promedio;
    }

    public setExamenes(examen: Examen[]): Examen[] {
        return this.examenes = examen;
    }

}