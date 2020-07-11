//Importación de libreria
import * as readlineSync from "readline-sync";

//Declaración e inicialización de variables
let long: number;
let palabras = new Array(long);
let i: number;
let sistema: number;

//Función para cargar arreglo
let cargarArreglo = (arreglo: string[], longitud: number) => {
    let aux: number = longitud;
    let input: string;
    for (i = 0; i < longitud; i++) {
        arreglo[i] = readlineSync.question("Ingrese una palabra: ");

    }
    console.log("Registrado con exito!");
}

//Función para buscar en arreglo
let buscarArreglo = (arreglo: string[]) => {
    let nombre: string = readlineSync.question("Ingrese la palabra que desea buscar: ");
    let dato: string;
    for (i = 0; i < arreglo.length; i++) {
        dato = arreglo[i];
    }
    if (dato == nombre) {
        console.log(`La palabra ingresada se encuentra registrado en la posicion ${i}.`);
    } else {
        console.log("La palabra ingresada no se encuentra registrada.");
    }
}

//Función para actualizar en arreglo
let actualizarPalabra = (arreglo: string[]) => {
    console.log("Datos que se encuentran actualmente cargados", arreglo);
    arreglo[readlineSync.questionInt("¿Ingresa la posicion del elemento que deseas actualizar? ")] = readlineSync.question("Ingresa una nueva palabra: ");
    console.log("Así quedaron los datos despues de la actualización", arreglo);
}

//Función para eliminar dato
let eliminarIndex = (arreglo: string[]) => {
    console.log("Datos que se encuentran actualmente cargados", arreglo);
    let pos: number = readlineSync.questionInt("¿Ingresa la posicion del elemento que deseas eliminar? ");
    for (i = pos; i < arreglo.length - 1; i++) {
        arreglo[i] = arreglo[i + 1];
    }
    arreglo[i] = null;
    console.log("Así quedaron los datos despues de la eliminacion", arreglo);
}


console.log("<----------BIENVENIDO---------->")
console.log("OPCIONES:");
console.log("(1) Insertar palabra \n(2) Insertar buscar \n(3) Eliminar palabra \n(4) Actualizar palabra\n(5) Salir");
sistema = readlineSync.questionInt("¿Que desea hacer? ");
long = readlineSync.questionInt("Ingrese la longitud del arreglo: ");

//Menu
while (sistema != 5) {

    switch (sistema) {

        case 1: {
            cargarArreglo(palabras, long);
            break;
        }
        case 2: {
            buscarArreglo(palabras);
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

