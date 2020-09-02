import { AutoBuilder } from "./autoBuilder";

export class AutoElectricoBuilder extends AutoBuilder {

    public buildCantidadPuertas(): void {
        this.auto.setCantidadPuertas(4);
    }

    public buildCantidadRuedas(): void {
        this.auto.setCantidadRuedas(4);
    }

    public buildVelocidadMax(): void {
        this.auto.setVelocidadMax(200);
    }

    public buildColor(): void {
        this.auto.setColor("Blanco");
    }

    public buildModelo(): void {
        this.auto.setModelo(2016);
    }

    public buildMarca(): void {
        this.auto.setMarca("Tesla");
    }
}