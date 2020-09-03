import { Auto } from "./auto";

class AutoCarreras extends Auto {
    private apretarEmbrague: boolean;

    public constructor(marca: string, mod: number, color: string, velocidad: number) {
        super(marca, mod, color, velocidad);
        this.apretarEmbrague = false;
    }

    public acelerar(): void {
        this.velocidadActual += 20;
    }

    public ponerEnMarcha() {
        if (this.apretarEmbrague) {
            this.enMarcha = true;
        } else {
            console.log("Recuerde pisar el embrague primero.");
        }
    }

    public pisarEmbrague(): void {
        if (this.apretarEmbrague) {
            this.apretarEmbrague = false;
        } else {
            this.apretarEmbrague = true;
        }
    }

}

let miAuto = new Auto("Renault", 2020, "Gris", 200);
let miAutoCarreras = new AutoCarreras("Ferrari", 2020, "Negro", 200);

miAuto.acelerar();
miAutoCarreras.acelerar();
miAutoCarreras.pisarEmbrague();
miAutoCarreras.ponerEnMarcha();

console.log(miAuto);
console.log(miAutoCarreras);