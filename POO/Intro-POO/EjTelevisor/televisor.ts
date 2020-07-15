import { throws } from "assert";

class Decodificador {

    //Variables
    private canalActual: number;
    private volumenActual: number;

    //Constructor
    constructor(volumen: number, canal: number){
        this.volumenActual = volumen;
        this.canalActual = canal;
    }

    //Funciones
    public cambiarCanal(canal: number): void{
        this.canalActual = canal;
    }

    public subirCanal(): void{
        this.canalActual = this.canalActual + 1;
    }

    public bajarCanal(): void{
        this.canalActual = this.canalActual - 1;
    }

    public subirVolumen(): void{
        this.volumenActual = this.volumenActual + 1;
    }
     
    public bajarVolumen(): void{
        this.volumenActual = this.volumenActual - 1;
    }

}

class Televisor {
    
    //Variables
    private estaPrendido: boolean
    private decodificador: Decodificador;
  

    //Constructor
    constructor(decodificador: Decodificador){
        this.decodificador = decodificador;
        this.estaPrendido = false;
    }

    //Funciones
    public prenderApagar(): void {
        if (this.estaPrendido)
            this.estaPrendido = false
        else
            this.estaPrendido = true
    }

    public cambiarCanal(canal: number): void{
        if(this.estaPrendido){
            this.decodificador.cambiarCanal(canal);
        }
    }

    public subirCanal(): void{
        if(this.estaPrendido){
            this.decodificador.subirCanal();
        }
    }

    public bajarCanal(): void{
        if(this.estaPrendido){
            this.decodificador.bajarCanal();
        }
    }

    public subirVolumen(): void{
        if(this.estaPrendido){
            this.decodificador.subirVolumen();
        }
    }

    public bajarVolumen(): void{
        if(this.estaPrendido){
            this.decodificador.bajarVolumen();
        }
    }
 
}


//OBJETO TELEVISOR
let volumenInicial: number = 1;
let canalInicial: number = 4;

//Creo un objeto "decodificador" de la clase Decodificador
let decodificador: Decodificador = new Decodificador(volumenInicial,canalInicial);
//Creo un objeto "miTelevisor" de la clase Televisor
let primerTelevisor: Televisor = new Televisor(decodificador);
primerTelevisor.prenderApagar();
primerTelevisor.cambiarCanal(20);

console.log(primerTelevisor);