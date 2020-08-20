import { Auto } from "./auto";

class AutoCarreras implements Auto {
    private velocidadActual: number;

    public constructor() {
        this.velocidadActual = 0;
    }

    public acelerar(): void {
        this.velocidadActual += 50;
    }

    public getVelocidadActual(): number {
       return this.velocidadActual;
    }

}

