//Definición e inicialización de variables
let readlineSync = require("readline-sync");
let tamanioArreglo = readlineSync.questionInt("Ingrese el tamanio del arreglo: ");
let arregloNum = new Array(tamanioArreglo);
let i = 0;

//FUNCIÓN PARA CARGAR ARREGLO
function cargarArreglo (arr,tam){
    for(let i = 0; i<tam; i++){
        arr[i] = readlineSync.questionInt("Ingrese un numero: ");
    }
}

// INVERTIR E IMPRIMIR ARREGLO SECUENCIAL

//Esta función me sirve para intercambiar arreglos de 5 números despues me deja de funcionar (Despues revisar)
// function invertirArregloSec(arr){
//     let aux;
//     for(let i = 0; i < arr.length; i++){
//         for(let j = 2; j < arr.length; j++){
//             aux = arr[i];
//             arr[i] = arr[j];
//             arr[j] = aux;
//         }
//     }
// }

function invertirArregloSec(arr,larg){
    let aux;
    let i;
    for(i = 0; i < larg-i; i++){
        aux = arr[i];
        arr[i] = arr[larg-i];
        arr[larg-i] = aux;
    }
}

function imprimirArregloSec(arr,largo){
    let i;
    for(i=0; i<=largo; i++){
        console.log("Posicion",i,"tiene el valor",arr[i]); 
    }
}

// INVERTIR E IMPRIMIR ARREGLO RECURSIVO
function invertirArregloRec (arregl,indIzq,indDer){
    let aux;
    if(indIzq<indDer){
        aux = arregl[indIzq];
        arregl[indIzq] = arregl[indDer];
        arregl[indDer] = aux;
        invertirArregloRec (arregl,indIzq+1,indDer-1);
    };
}

function imprimirArregloRec(arr,i,largo){ 
    if(i<=largo){
        console.log("Posicion ",i,"tiene",imprimirArregloRec(arr,i+1,largo));
    }
    return arr[i-1];
}

//LLAMADO A FUNCIONES
cargarArreglo(arregloNum,tamanioArreglo);
console.log("<--------ARREGLO INVERTIDO REC-------->");
invertirArregloRec(arregloNum,i,tamanioArreglo-1);
imprimirArregloRec(arregloNum,i,tamanioArreglo-1);

// console.log("<--------ARREGLO INVERTIDO-------->");
// invertirArregloSec(arregloNum,tamanioArreglo-1);
// imprimirArregloSec(arregloNum,tamanioArreglo-1);