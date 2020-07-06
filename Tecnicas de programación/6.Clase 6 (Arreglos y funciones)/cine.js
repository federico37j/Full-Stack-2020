//Declaración e inicialización de variables
let readlineSync = require("readline-sync");
let cantidadButacas = readlineSync.questionInt("Ingrese la cantidad de butacas que hay en el cine: ");
let ocupadaDesocupada = new Array(cantidadButacas);
let i;

//Funciones
let cargarButacas = () =>{
    for(i = 0; i < cantidadButacas; i++){
        ocupadaDesocupada[i] = aleatorioBool();
    }
}
//Funcion para crear booleanos
let aleatorioBool = () =>{
    if(Math.random()>0.5){
        return true;
    } else {
        return false;
    }
}

//Recorro el arreglo para saber cuantas butacas estan ocupadas y cuantas no.
let recorrerButacas = (array) =>{
    let ocupada = 0;
    let desocupada = 0;
    for(i = 0; i < array.length; i++){
        if(array[i] == true){
            ocupada++;
        } else if (array[i] == false){
            desocupada++;
        }   
    } 
    console.log(`La cantidad de butacas ocupadas en la sala del cine es de ${ocupada} y la cantidad de desocupadas son ${desocupada}.`)  
}
//Llamado a las funciones
cargarButacas();
recorrerButacas(ocupadaDesocupada);