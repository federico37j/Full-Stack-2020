export class Vehiculo {
    //Declaración de variables
    protected cantidadRuedas: number;
    protected cantidadPuertas: number;
    protected color: string;
    protected modelo: number;
    protected marca: string;
    protected velocidadMax: number;
    private enMarcha: boolean;

    public constructor(marca: string, mod: number, color: string, velocidad: number) {
        this.marca = marca;
        this.modelo = mod;
        this.color = color;
        this.velocidadMax = velocidad;
        this.enMarcha = false;
    }

    //Funciones Get y Set
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

    public getcantidadPuertas(): number {
        return this.cantidadPuertas;
    }

    public setcantidadPuertas(cantidad: number): void {
        this.cantidadPuertas = cantidad;
    }

    public getColor(): string {
        return this.color;
    }

    public setColor(color: string): void {
        this.color = color;
    }

    public getModelo(): number {
        return this.modelo;
    }

    public setModelo(modelo: number): void {
        this.modelo = modelo;
    }

    public getMarca(): string {
        return this.marca;
    }

    public setMarca(marca: string): void {
        this.marca = marca;
    }

    public getVelocidadMax(): number {
        return this.velocidadMax;
    }

    public setVelocidadMax(velocidad: number): void {
        this.velocidadMax = velocidad;
    }

    public ponerEnMarcha(): void {
        if (this.enMarcha) {
            this.enMarcha = false;
        } else {
            this.enMarcha = true;
        }
    }

}//FIN CLASE VEHICULO