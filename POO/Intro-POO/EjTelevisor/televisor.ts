class Televisor {
    //Variables
    private estaPrendido: boolean
    private volumenActual: number
    private canalActual: number

    //Constructor
    constructor(volumenInicial: number, canalInicial: number) {
        this.volumenActual = volumenInicial;
        this.canalActual = canalInicial;
        this.estaPrendido = false;
    }

    //Funciones
    prenderApagar(): void {
        if (this.estaPrendido)
                this.estaPrendido = false
        else
            this.estaPrendido = true
    }
    subirVolumen(): void {
        this.volumenActual = this.volumenActual + 1
    }
    bajarVolumen(): void {
        this.volumenActual = this.volumenActual - 1
    }
    subirCanal(): void {
        this.canalActual = this.canalActual + 1
    }
    bajarCanal(): void {
        this.canalActual = this.canalActual - 1
    }
    elegirCanal(canal: number): void {
        this.canalActual = canal;
    }
 }

 //OBJETO TELEVISOR
 let volumenInicial: number = 1;
 let canalInicial: number = 4;

 //Creo un objeto "miTelevisor" de la clase Televisor
 let miTelevisor = new Televisor(volumenInicial, canalInicial);

 miTelevisor.prenderApagar();
 miTelevisor.bajarVolumen();
 
 console.log(miTelevisor);