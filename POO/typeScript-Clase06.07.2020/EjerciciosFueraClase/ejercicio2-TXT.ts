//Importación de librerias
import * as fs from 'fs';

//Declaración e inicialización de variables
let listaNombres: string = fs.readFileSync('ListadoNombres.txt', 'utf8');
let listaColegios: string = fs.readFileSync('ListadoColegios.txt', 'utf8');
let nombres: string[] = listaNombres.split(',');
let colegios: string[] = listaColegios.split(',');
let padron: string[] = new Array();
let i: number;

//Divido la cantidad de de nombres que hay en la lista por la cantidad de colegios de la otra lista 
let cantPorColegio = Math.round(nombres.length / colegios.length);

//Funcion para asignar las personas en los colegios según el cupo
let asignacion = () => {
    let colegiosPendientes: boolean = true;
    let i: number = 0;
    let contador: number = 0;
    let colegio: number = 0;
    while (colegiosPendientes) {
        if (colegio < colegios.length) {
            for (i; contador < cantPorColegio; i++) {
                if (nombres[i] != undefined) {
                    padron[i] = `Votante: ${nombres[i]}, Colegio: ${colegios[colegio]}.`;
                }
                contador++;
            }
            contador = 0;
            colegio++;
        } else {
            colegiosPendientes = false;
        }
    }
}

//Función para mostrar por consola
let mostrar = (arreglo: string[]) => {
    console.log("<<<<-------------- ------ PADRÓN ------ -------------->>>>");
    for (i = 0; i < arreglo.length; i++) {
        console.log(arreglo[i]);
        console.log("-------------------------------------------------");
    }
}

//Llamado a la función
asignacion();
mostrar(padron);
