import * as readlineSync from "readline-sync";

import { Movimiento } from "./movimiento";
import { Cuenta } from "./cuenta";
import { CajaAhorroPFijoTradicional } from "./cajaAhorroPFijoTradicional";
import { CajaAhorroPFijoUVA } from "./cajaAhorroPFijoUVA";

class HomeBanking {
    private usuario: string;
    private contrasenia: string;
    private cuenta: Cuenta;
    private transaccionesActuales: Cuenta[];

    public constructor(usuario: string, contrasenia: string, cuenta: Cuenta) {
        this.usuario = usuario;
        this.contrasenia = contrasenia;
        this.cuenta = cuenta;
        this.transaccionesActuales = [];
    }

    //Dependiendo de la operación que realice el usuario se le asigna el tipo al movimiento
    private tipoDeMovimiento(respuesta: number, importe: number, saldo: number): Movimiento {
        let tipo: string;
        switch (respuesta) {
            case 1:
                tipo = "ALTA PLAZO FIJO TRADICIONAL";
                break;
            case 2:
                tipo = "ALTA PLAZO FIJO UVA";
                break;
        }
        return new Movimiento(String(new Date()), tipo, importe, saldo);
    }

    public darAltaPlazoFijo(input: number): void {
        let numero: number = this.cuenta.getNumero();
        let titular: string = this.cuenta.getTitular();
        let saldo: number = this.cuenta.getSaldo();
        let cotizacion: number = this.cuenta.getCotizacionDelDia();
        let monto: number = readlineSync.questionInt("Ingrese el monto a invertir: ");
        let movimiento: Movimiento = this.tipoDeMovimiento(input, monto, saldo - monto);
        switch (input) {
            case 1:
                this.transaccionesActuales.push(new CajaAhorroPFijoTradicional(numero, titular, saldo, cotizacion, movimiento,
                    readlineSync.questionInt("Ingrese porcentaje anual: ")));
                break;

            case 2:
                this.transaccionesActuales.push(new CajaAhorroPFijoUVA(numero, titular, saldo, cotizacion, movimiento,
                    readlineSync.questionInt("Ingrese porcentaje anual: "), readlineSync.questionInt("Ingrese porcentaje de inflación: ")));
                break;
        }
    }

    private darAltaPlazoFijoTrad(numero: number, titular: string, saldo: number, cotizacion: number, movimiento: Movimiento, porcentajeAnual: number) {
        new CajaAhorroPFijoTradicional(numero, titular, saldo, cotizacion, movimiento, porcentajeAnual);
    }

    private darAltaPlazoFijoUVA(numero: number, titular: string, saldo: number, cotizacion: number, movimiento: Movimiento, porcentajeAnual: number,
        porcentajeInflacion: number) {
        new CajaAhorroPFijoUVA(numero, titular, saldo, cotizacion, movimiento, porcentajeAnual, porcentajeInflacion);
    }

    public getCuentasActuales(): Cuenta[] {
        return this.transaccionesActuales;
    }

}// FIN CLASE HOME BANKING

//CUENTA
let miMovAlta = new Movimiento("Fri Aug 14 2020 11:27:23 GMT-0300 (GMT-03:00)", "ALTA DE CUENTA", 100000, 100000);
let miCuenta = new Cuenta(658321, "Federico", 100000, 73, miMovAlta);
console.log(miCuenta.calcularGanancia(10000));

//PLAZO FIJO TRADICIONAL
let miMovPlazoFijoTrad = new Movimiento("Fri Aug 14 2020 11:27:23 GMT-0300 (GMT-03:00)", "ALTA PLAZO FIJO TRADICIONAL", 100000, 100000);
let miPFijoTradicional = new CajaAhorroPFijoTradicional(658321, "Federico", 100000, 73, miMovPlazoFijoTrad, 12);
console.log(miPFijoTradicional.calcularGanancia(10000));

//PLAZO FIJO UVA
let miMovPlazoFijoUVA = new Movimiento("Fri Aug 14 2020 11:27:23 GMT-0300 (GMT-03:00)", "ALTA PLAZO FIJO TRADICIONAL", 100000, 100000);
let miPFijoUVA = new CajaAhorroPFijoUVA(658321, "Federico", 100000, 73, miMovPlazoFijoUVA, 18, 50);
console.log(miPFijoUVA.calcularGanancia(10000));

let miHomeBanking = new HomeBanking("Admin", "Admin", miCuenta);
//MENU
console.log("¡BIENVENIDO!");
let respuesta: number = readlineSync.questionInt("(1) PLAZO FIJO TRADICIONAL\n(2) PLAZO FIJO UVA\nTu respuesta: ");
miHomeBanking.darAltaPlazoFijo(respuesta);
console.log(miHomeBanking.getCuentasActuales());


