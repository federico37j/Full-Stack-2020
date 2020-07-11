//Definición e inicialización de variables
let readlineSync = require("readline-sync");
let numero = readlineSync.questionInt("Ingrese un numero: ");


//Función Factorial, si el número ingresado es un 0 retorno un 1 sino es asi calculo el factorial para ese número
function fact(num){
    resultado = 1;
    if(num==0){
        resultado = 1;

    } else {

        resultado = num * fact(num-1);

    }
    return resultado;
}

//Llamado a la formula y la muestro por consola
console.log("El factorial de este numero es:",fact(numero));