//Importación de librerías
import * as readlineSync from "readline-sync";

class Matriz {

    //Declaración de variables
    private fila: number;
    private columna: number;
    private matriz;

    //Constructor
    constructor(fila: number, columna: number) {
        this.fila = fila;
        this.columna = columna;
        this.matriz = new Array(fila);
        this.crearMatriz();
        this.llenarConAleatorios();
    }

    //Función para cargar la Matriz con numeros aleatorios
    public llenarConAleatorios() {
        let i: number;
        let j: number;
        for (i = 0; i < this.matriz.length; i++) {
            for (j = 0; j < this.matriz[i].length; j++) {
                this.matriz[i][j] = Math.floor(Math.random() * 100);
            }
        }
    }

    //Función para crear Matriz usando un for
    public crearMatriz() {
        let i: number = 0;
        for (i; i < this.matriz.length; i++) {
            this.matriz[i] = new Array(this.columna);
        }
    }

    //Función para consultar Filas/Columnas y contenido de Matriz
    public getConsulta() {
        console.log("Filas: ", this.matriz.length);
        console.log("Columnas: ", this.matriz[0].length);
        console.log(this.matriz);
    }

    //Función para consultar que hay en una posición especifica
    public get(x: number, y: number) {
        return this.matriz[x][y];
    }

}//FIN CLASE MATRIZ

//Creo un objeto "miMatriz" de la clase Matriz
let miMatriz = new Matriz(3, 5);

miMatriz.getConsulta();
console.log("Valor: "+miMatriz.get(readlineSync.questionInt("Ingrese la fila que desea consultar: "), readlineSync.questionInt("Ingrese la columna que desea consultar: ")));