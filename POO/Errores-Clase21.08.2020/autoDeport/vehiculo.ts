export abstract class Vehiculo {
    private marca: string;
    private modelo: number;
    protected color: string;
    private velocidadMax: number;
    protected velocidadActual: number;
    private cantidadRuedas: number;
    private estaPrendido: boolean;

    public constructor(marca: string, modelo: number, color: string, velocidadMax: number) {
        this.marca = marca;
        this.modelo = modelo;
        this.color = color;
        this.velocidadMax = velocidadMax;
        this.velocidadActual = 0;
        this.estaPrendido = false;
    }

    abstract acelerar(): void;

    public arrancar(): void {
        this.estaPrendido = !this.estaPrendido;
    }

    public getMarca(): string {
        return this.marca;
    }

    public setMarca(marca: string): void {
        this.marca = marca;
    }

    public getModelo(): number {
        return this.modelo;
    }

    public setModelo(modelo: number): void {
        this.modelo = modelo;
    }

    public getColor(): string {
        return this.color;
    }

    public setColor(color: string): void {
        this.color = color;
    }

    public getVelocidadMax(): number {
        return this.velocidadMax;
    }

    public setVelocidadMax(velocidadMax: number): void {
        this.velocidadMax = velocidadMax;
    }

    public getCantidadRuedas(): number {
        return this.cantidadRuedas;
    }

    public setCantidadRuedas(ruedas: number): void {
        let resul = ruedas % 2;
        if (resul != 0) {
            throw new Error(""); 
        }
        this.cantidadRuedas = ruedas;
    }

}

