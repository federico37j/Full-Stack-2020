//Definición e inicialización de variables
let readlineSync = require("readline-sync");
let tamanio = readlineSync.questionInt("Ingrese el tamanio: ");
let arregloNombres = new Array(tamanio);
let arregloFacturacion = new Array(tamanio);

//Función para cargar factura
function cargarFactura(arregloCl,arregloFac, largo){
    let i;
        for (i = 0 ; i<largo; i++ ) {
            arregloCl[i] = "CLIENTE"+(i * 5);
            arregloFac[i] = readlineSync.questionInt("Facturacion " + (i+1) + ": ");
        }
}    

//Función para imprimir un arreglo al lado de otro
function escribirEnUnaLinea(arreglo, cantidad) {
    let i;
    let vector = "" ;
    for (i = 0 ; i<cantidad; i++) {
    vector = vector + arreglo[i] + " " ;
    }
    console.log(vector);
}    

function intercambiar(arreglo, i, j) {
    let aux;
    aux = arreglo[i] ;
    arreglo[i] = arreglo[j] ;
    arreglo[j] = aux ;
}


function comparar(arreglo, i, j) {
    let comparacion;
//Devuelve 0 si son iguales, 1 si lo que hay en “i” es mayor a lo que hay en “j”,-1 si lo que hay en “i” es menor a lo que hay en “j”
    if (arreglo[i] === arreglo[j]) {
        comparacion = 0;
    } else if (arreglo[i] < arreglo[j]) {
        comparacion = -1;
    } else {
        comparacion = 1;
    }
        return comparacion;
}

//Ordeno el arreglo por nombre
function burbuja(clientes, facturacion, cantidad) { 
       let i, j;
       for (i = 2; i < cantidad; i++) { 
            for (j = 0; j < (cantidad - i); j++) { 
                if (comparar(clientes, j, j+1) == 1) { 
                    intercambiar(clientes, j, j+1);
                    intercambiar(facturacion, j, j+1);
                }
            }
        }
}

//Funcion para buscar un cliente dado
function buscarRecursivo(valor, a, izq, der) {
    let posicion; 
    let medio;
    if (izq <= der) {
        medio = Math.floor ((izq + der) / 2);
        if (valor == a[medio]) {
            posicion = medio; 
        } else if (valor < a[medio]) {
            posicion = buscarRecursivo(valor, a, izq, medio - 1);
        } else {
            posicion = buscarRecursivo(valor, a, medio + 1, der);
        }
    } else {
        posicion = -1
    }
    return posicion; 
}

//Llamado a las formulas
cargarFactura(arregloNombres,arregloFacturacion,tamanio);
console.log("<----------------SIN ORDENAR---------------->");
escribirEnUnaLinea(arregloNombres,tamanio);
escribirEnUnaLinea(arregloFacturacion,tamanio);
console.log("<---------------- ORDENADO  ---------------->");
burbuja(arregloNombres,arregloFacturacion,tamanio);
escribirEnUnaLinea(arregloNombres,tamanio);
escribirEnUnaLinea(arregloFacturacion,tamanio);
console.log("<---------------- BUSQUEDA POR NOMBRE  ---------------->");
let clienteBus = readlineSync.question("Ingrese el nombre del cliente a buscar: ");
// let clienteMay= clienteBus.toLocaleUpperCase();
let pos = buscarRecursivo(clienteBus,arregloNombres,0,tamanio);
if(pos>0){
    console.log("El cliente: "+arregloNombres[pos]+" esta en la posicion "+(pos+1)+" y su facturacion es: "+arregloFacturacion[pos]);

}else{
    console.log("El cliente no existe.");
}

