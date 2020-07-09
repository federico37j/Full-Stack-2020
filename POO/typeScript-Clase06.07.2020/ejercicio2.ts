//Importación de libreria
import * as readlineSync from "readline-sync";

//Declaración e inicialización de variables
let long: number;
let i: number;
let sistema: number;

//Función para cargar arreglo
let cargarArreglo = (arreglo: string[]) => {
    for (i = 0; i < arreglo.length; i++) {
        arreglo[i] = readlineSync.question("Ingrese una palabra: ");

    }
    console.log("Registrado con exito!");
    console.log(arreglo);
}

//Función para buscar en arreglo
let buscarArreglo = (arreglo: string[]): number => {
    let nombre: string = readlineSync.question("Ingrese la palabra: ");
    let dato: string;
    for (i = 0; i < arreglo.length; i++) {
        dato = arreglo[i];
        if (dato == nombre) {
            return i;
        }
    }
}

//Función para actualizar en arreglo
let actualizarPalabra = (arreglo: string[]) => {
    console.log(arreglo);
    let index: number = buscarArreglo(arreglo);
    arreglo[index] = readlineSync.question("Ingresa una nueva palabra: ");
    console.log(arreglo);
}

//Función para eliminar dato
let eliminarIndex = (arreglo: string[]) => {
    console.log("Datos que se encuentran actualmente cargados antes de la eliminación", arreglo);
    let index: number = buscarArreglo(arreglo);
    for (i = index; i < arreglo.length - 1; i++) {
        arreglo[i] = arreglo[i + 1];
    }
    arreglo[i] = null;
    console.log("Así quedaron los datos despues de la eliminación", arreglo);
}


console.log("<----------BIENVENIDO---------->")
console.log("OPCIONES:");
console.log("(1) Insertar palabra \n(2) Buscar palabra \n(3) Eliminar palabra \n(4) Actualizar palabra \n(5) Salir");
sistema = readlineSync.questionInt("¿Que desea hacer? ");

//Se le pide al usuario que ingrese la longitud y se crea un arreglo con esa longitud
long = readlineSync.questionInt("Ingrese la longitud del arreglo: ");
let palabras = new Array(long);

//Menu
while (sistema != 5) {

    switch (sistema) {

        case 1: {
            cargarArreglo(palabras);
            break;
        }
        case 2: {
            let resultado: number = buscarArreglo(palabras);
            if(resultado >= 0){
                console.log(`La palabra ingresada se encuentra registrada en la posicion ${resultado}.`);
            }else{
                console.log(`La palabra ingresada no se encuentra registrada.`);

            }
            break;
        }
        case 3: {
            eliminarIndex(palabras)
            break;
        }
        case 4: {
            actualizarPalabra(palabras);
            break;
        }
    }

    sistema = readlineSync.questionInt("¿Que desea hacer? ");
}

