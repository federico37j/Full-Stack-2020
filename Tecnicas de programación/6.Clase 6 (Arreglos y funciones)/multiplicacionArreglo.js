//Declaracion e inicializacion de variables
let readlineSync = require("readline-sync");
let long = readlineSync.questionInt("Ingrese la longitud de los arreglos: ");
let primerArreglo = new Array(long);
let segundoArreglo = new Array(long);
let tercerArreglo = new Array(long);
let cuartoArreglo = new Array(long);
let quintoArreglo = new Array(long);
let i;

//Función para cargar un arreglo
let cargarArreglo = (arreglo) => {
    for(i = 0; i < long; i++){
        arreglo[i] = readlineSync.questionInt("Ingrese el valor que desea almacenar: ");
    }
}
//Función que sirve tanto para 3 arreglos como para 5
let multiplicarArreglo = (primerArreglo,segundoArreglo,tercerArreglo,cuartoArreglo,quintoArreglo) =>{
    
    if(primerArreglo[0] != undefined && segundoArreglo[0] != undefined && tercerArreglo[0] == undefined){
        for(i = 0; i < long; i++){
            tercerArreglo[i] = primerArreglo[i] * segundoArreglo[i];

        }
        mostrarArreglo(tercerArreglo);

    } else if (primerArreglo[0] != undefined && segundoArreglo[0] != undefined && tercerArreglo[0] != undefined 
                && cuartoArreglo[0] != undefined) {
             for(i = 0; i < long; i++){
                quintoArreglo[i] = primerArreglo[i] * segundoArreglo[i] * tercerArreglo[i] * cuartoArreglo[i];
             }   
         mostrarArreglo(quintoArreglo);                                                                               
    }

}
//Funcion para mostrar arreglo
let mostrarArreglo = (arreglo) => {
    for(i = 0; i < long; i++){
        console.log(arreglo[i]);
    }
}
//Muestra siempre la misma linea
let linea = () =>{
    console.log("<----------------------------------->");
}

//Llamado a la función
cargarArreglo(primerArreglo);
linea();
cargarArreglo(segundoArreglo);
linea();
/*//Descomentar para cargar 4 arreglos
cargarArreglo(tercerArreglo);
linea();
cargarArreglo(cuartoArreglo);
linea();*/
multiplicarArreglo(primerArreglo,segundoArreglo,tercerArreglo,cuartoArreglo,quintoArreglo);

