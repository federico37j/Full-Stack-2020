import { AutoBuilder } from "./autoBuilder";

export class AutoDeportivoBuilder extends AutoBuilder {

    public buildCantidadPuertas(): void {
        this.auto.setCantidadPuertas(4);
    }

    public buildCantidadRuedas(): void {
        this.auto.setCantidadRuedas(4);
    }

    public buildVelocidadMax(): void {
        this.auto.setVelocidadMax(300);
    }

    public buildColor(): void {
        this.auto.setColor("Bordo");
    }

    public buildModelo(): void {
        this.auto.setModelo(2019);
    }

    public buildMarca(): void {
        this.auto.setMarca("Nissan GTR");
    }
}