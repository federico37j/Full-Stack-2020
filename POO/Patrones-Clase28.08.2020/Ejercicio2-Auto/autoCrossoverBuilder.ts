import { AutoBuilder } from "./autoBuilder";

export class AutoCrossoverBuilder extends AutoBuilder {

    public buildCantidadPuertas(): void {
        this.auto.setCantidadPuertas(4);
    }

    public buildCantidadRuedas(): void {
        this.auto.setCantidadRuedas(4);
    }

    public buildVelocidadMax(): void {
        this.auto.setVelocidadMax(220);
    }
    
    public buildColor(): void {
        this.auto.setColor("Naranja");
    }

    public buildModelo(): void {
        this.auto.setModelo(2009);
    }

    public buildMarca(): void {
        this.auto.setMarca("Nissan Qashqai");
    }

}