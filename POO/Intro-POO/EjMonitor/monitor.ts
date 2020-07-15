class Monitor {
    //Variables
    private estaPrendido: boolean;
    private volumenActual: number;
    private resolucion: string;

    //Constructor
    constructor(volumen: number, resolucion: string) {
        this.volumenActual = volumen;
        this.resolucion = resolucion;
        this.estaPrendido = false;
    }

    //Funciones
    prendidoApagado(): void {
        if (this.estaPrendido) {
            this.estaPrendido = false
        } else {
            this.estaPrendido = true;
        }
    }

    subirVolumen(): void {
        this.volumenActual = this.volumenActual + 1;
    }

    bajarVolumen(): void {
        this.volumenActual = this.volumenActual - 1;
    }

    cambiarResolucion(cambResol: string): void {
        this.resolucion = cambResol;
    }

}

//OBJETO MONITOR
let volumenMonitor: number = 5;
let resolucion: string = "1600 x 900";

//Creo un objeto "miMonitor" de la clase monitor
let miMonitor = new Monitor(volumenMonitor,resolucion);

miMonitor.prendidoApagado();

console.log(miMonitor);