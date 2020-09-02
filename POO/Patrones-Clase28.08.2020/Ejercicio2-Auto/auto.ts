export class Auto {
    private cantidadRuedas: number;
    private cantidadPuertas: number;
    private color: string;
    private modelo: number;
    private marca: string;
    private velocidadMax: number;
    private enMarcha: boolean;

    public constructor() {
        this.cantidadRuedas = 0;
        this.cantidadPuertas = 0;
        this.color = "";
        this.modelo = 0;
        this.marca = "";
        this.velocidadMax = 0;
        this.enMarcha = false;
    }

    public setCantidadRuedas(cantidadRuedas: number): void {
        this.cantidadRuedas = cantidadRuedas;
    }

    public setCantidadPuertas(cantidadPuertas: number): void {
        this.cantidadPuertas = cantidadPuertas;
    }

    public setColor(color: string): void {
        this.color = color;
    }

    public setModelo(modelo: number): void {
        this.modelo = modelo;
    }

    public setMarca(marca: string): void {
        this.marca = marca;
    }

    public setVelocidadMax(velocidadMax: number): void {
        this.velocidadMax = velocidadMax;
    }
}