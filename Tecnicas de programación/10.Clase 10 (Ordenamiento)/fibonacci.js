//Definición e inicialización de variables
let readlineSync = require("readline-sync");

//Función
function calcularFibonacci(num){
   if(num>1){
    return calcularFibonacci (num-1) + calcularFibonacci(num-2);
    
   } else if (num==1){
    return 1;
   } else if(num==0){
    return 0;
   }
}

//Llamado a la formula
console.log(calcularFibonacci(readlineSync.questionInt("Ingrese un numero: ")));

