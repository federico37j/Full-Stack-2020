import { AutoElectricoBuilder } from "./autoElectricoBuilder";
import { AutoCrossoverBuilder } from "./autoCrossoverBuilder";
import { AutoDeportivoBuilder } from "./autoDeportivoBuilder";
import { AutoBuilder } from "./autoBuilder";
import { Auto } from "./auto";

class RegistroAutomotor {
    private autoBuilder: AutoBuilder;

    public setAutoBuilder(ab: AutoBuilder): void {
        this.autoBuilder = ab;
    }

    public getAuto(): Auto {
        return this.autoBuilder.getAuto();
    }

    public construirAuto(): void {
        this.autoBuilder.crearNuevoAuto();
        this.autoBuilder.buildCantidadRuedas();
        this.autoBuilder.buildCantidadPuertas();
        this.autoBuilder.buildColor();
        this.autoBuilder.buildMarca();
        this.autoBuilder.buildModelo();
        this.autoBuilder.buildVelocidadMax();
    }
}

let registroAutomotor = new RegistroAutomotor();
let autoElectricoBuilder: AutoElectricoBuilder = new AutoElectricoBuilder();
let autoCrossoverBuilder: AutoCrossoverBuilder = new AutoCrossoverBuilder();
let autoDeportivoBuilder: AutoDeportivoBuilder = new AutoDeportivoBuilder();

registroAutomotor.setAutoBuilder(autoElectricoBuilder);
registroAutomotor.construirAuto();
registroAutomotor.setAutoBuilder(autoCrossoverBuilder);
registroAutomotor.construirAuto();
// registroAutomotor.setAutoBuilder(autoDeportivoBuilder);
// registroAutomotor.construirAuto();

let auto: Auto = registroAutomotor.getAuto();
console.log(auto);