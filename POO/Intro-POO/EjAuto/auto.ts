//Importación de librerias
import * as fs from 'fs';

//Exporto la clase Auto para poder utilizarla en la clase RegistroAutomotor.
export class Auto {
    //Declaración de variables
    private enMarcha: boolean;
    private color: string;
    private marca: string;
    private cantidadRuedas: number;
    private cantidadPuertas: number;
    private modelo: number;
    private velocidadMax: number;
    private autos: Auto[];
    private texto: string;
    private palabrasPrimero: string[];
    private palabrasSegundo: string[];
    private indice: number;
    private cantPuertasDefecto: number = 4;

    //Constructor
    public constructor(marca: string, mod: number, color: string, velocidad: number, cantidadPuertas?: number) {
        this.marca = marca;
        this.modelo = mod;
        this.color = color;
        this.velocidadMax = velocidad;
        this.autos = [];

        //La cantidad de puertas es un parámetro opcional, sino se carga en el constructor queda por defecto con 4 ruedas
        if (cantidadPuertas == undefined) {
            this.cantidadPuertas = this.cantPuertasDefecto;
        } else {
            this.cantidadPuertas = cantidadPuertas;
        }
    }

    //Función para poner en marcha el auto
    public arrancar(): void {
        if (this.enMarcha) {
            this.enMarcha = false
        } else {
            this.enMarcha = true;
        }
    }

    //Funciones Get y Set
    public setCantRuedas(numRuedas: number): void {
        this.cantidadRuedas = numRuedas;
    }

    public setCantPuertas(numPuertas: number): void {
        this.cantidadPuertas = numPuertas;
    }

    public setElegirColor(color: string): void {
        this.color = color;
    }

    public setVelocidad(velocidad: number): void {
        this.velocidadMax = velocidad;
    }

    public getMarca(): string {
        return this.marca;
    }

    public setMarca(marca: string): void {
        this.marca = marca;
    }

    //Función para buscar un auto dependiendo de la marca
    public buscarAuto = (nombre: string): Auto => {
        let dato: string;
        let i: number;
        for (i = 0; i < this.autos.length; i++) {
            dato = this.autos[i].getMarca();
            if (dato == nombre) {
                this.indice = i;
                return this.autos[i];
            }
        }
    }

    //Función para crear los objetos de tipo auto e ingresarlos en el arreglo "autos"
    public darAlta = (marca: string, modelo: number, color: string, velocidadMax: number): void => {
        this.autos.push(new Auto(marca, modelo, color, velocidadMax));
    }

    //Función para trae los datos del TXT usando import * as fs from 'fs'
    public leerArchivos = (): void => {
        this.texto = fs.readFileSync('EjAuto/auto.txt', 'utf8');
        this.palabrasPrimero = this.texto.split('\r\n');
    }

    //Función para que mediante el arreglo que vino del txt crear los objetos de tipo Auto
    public cambiarObjeto = (): void => {
        this.leerArchivos();
        let i: number = 0;
        for (i; i < this.palabrasPrimero.length; i++) {
            this.palabrasSegundo = this.palabrasPrimero[i].split(",");
            this.autos.push(new Auto(this.palabrasSegundo[0], Number(this.palabrasSegundo[1]), this.palabrasSegundo[2], Number(this.palabrasSegundo[3])));
        }
    }

    //Función que recorre el arreglo de autos y lo muestra por consola
    public listarAutos = (): void => {
        for (let i = 0; i < this.autos.length; i++) {
            if (this.autos[i] != null) {
                console.log(this.autos[i].toString());
            }
        }
    }

    //Función para actualizar la marca usando la función setMarca
    public actualizar = (nombre: string): void => {
        this.setMarca(nombre);
    }

    //Función para eliminar un auto siempre y cuando antes haya sido buscado por la función "buscarAuto"
    public eliminarIndex = (): void => {
        let i: number;
        for (i = this.indice; i < this.autos.length - 1; i++) {
            this.autos[i] = this.autos[i + 1];
        }
        this.autos[i] = null;
    }

    //Función toString que devuelve Marca/Modelo/Color/VelocidadMax
    public toString = (): string => {
        return "Marca: " + this.marca + ", Modelo: " + this.modelo + ", Color: " + this.color + ", Velocidad maxima: " + this.velocidadMax + ".";
    }

}//FIN CLASE AUTO

/*
//OBJETO AUTO
let marchaa: boolean = true;
let colore: string = "Rojo";
let ruedas: number = 4;

//Creo un objeto "miAuto" de la clase Auto
let miAuto = new Auto(marchaa,colore);

miAuto.cantRuedas(ruedas);

console.log(miAuto);
*/
