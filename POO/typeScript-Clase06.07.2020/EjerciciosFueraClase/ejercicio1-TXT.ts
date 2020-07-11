//Importación de librerias
import * as readlineSync from "readline-sync";
import * as fs from 'fs';

//Declaración e inicialización de variables
let long: number;
let i: number;
let sistema: number;

//Función para cargar arreglo
let cargarArreglo = () => {
    let texto: string = fs.readFileSync('nombres.txt', 'utf8');
    let palabras: string[] = texto.split(' ');
    console.log("Registrado con exito!");
    return palabras;
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
    let index: number = buscarArreglo(arreglo);
    arreglo[index] = readlineSync.question("Ingresa una nueva palabra: ");
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

//CONSOLA
console.log("<----------BIENVENIDO---------->")
//Cargo los datos del TXT desde el inicio
let palabras = cargarArreglo();
console.log("OPCIONES:");
console.log("(1) Buscar palabra. \n(2) Eliminar palabra. \n(3) Actualizar palabra. \n(4) Salir");
sistema = readlineSync.questionInt("¿Que desea hacer? ");

//MENU
while (sistema != 4) {

    switch (sistema) {

        case 1: {
            cargarArreglo();
            let resultado: number = buscarArreglo(palabras);
            if (resultado >= 0) {
                console.log(`La palabra ingresada se encuentra registrada en la posicion ${resultado}.`);
            } else {
                console.log(`La palabra ingresada no se encuentra registrada.`);
            }
            break;
        }
        case 2: {
            eliminarIndex(palabras)
            break;
        }
        case 3: {
            actualizarPalabra(palabras);
            break;
        }
    }

    sistema = readlineSync.questionInt("¿Que desea hacer? ");
}//FIN

