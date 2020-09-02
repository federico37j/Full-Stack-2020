import { Auto } from "./auto";

export abstract class AutoBuilder {
    protected auto: Auto;

    public abstract buildCantidadPuertas(): void;
    public abstract buildColor(): void;
    public abstract buildModelo(): void;
    public abstract buildMarca(): void;
    public abstract buildCantidadRuedas(): void;
    public abstract buildVelocidadMax(): void;

    public getAuto(): Auto {
        return this.auto;
    }

    public crearNuevoAuto(): void {
        this.auto = new Auto();
    }
}