class auto {
    //Variables
    private enMarcha: boolean;
    private color: string;
    private cantidadRuedas: number;
    private cantidadPuertas: number;
    private velocidadMax: number;

    //Constructor
    constructor(marcha: boolean, color: string) {
        this.enMarcha = marcha;
        this.color = color;
       
    }

    //Funciones
    arrancar(): void {
        if (this.enMarcha) {
            this.enMarcha = false
        } else {
            this.enMarcha = true;
        }
    }

    cantRuedas(numRuedas: number): void{
        this.cantidadRuedas = numRuedas;
    }

    cantPuertas(numPuertas: number): void{
        this.cantidadPuertas = numPuertas;
    }

    elegirColor(color: string): void{
        this.color = color;
    }

    velocidad(velocidad: number): void{
        this.velocidadMax = velocidad;
    }

}

//OBJETO AUTO
let marchaa: boolean = true;
let colore: string = "Rojo";
let ruedas: number = 4;

//Creo un objeto "miAuto" de la clase Auto
let miAuto = new auto(marchaa,colore);

miAuto.cantRuedas(ruedas);

console.log(miAuto);

