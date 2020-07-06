//Declaración e inicialización de variables
let readlineSync = require("readline-sync");
let long = readlineSync.questionInt("Ingrese la cantidad de alumnos que va a cargar: ");
let arregloAlumnos = new Array(long); 
let nota1 = new Array(long); 
let nota2 = new Array(long); 
let nota3 = new Array(long); 
let nombre;
let notaTotal = 0;
let promedio = 0;

//Funciones
let cargarArreglo = () => {
    for(let i=0; i < long; i++){
        arregloAlumnos[i] = readlineSync.question("Ingrese un alumno: ");
        nota1[i] = readlineSync.questionInt("Ingrese primer nota: ");
        nota2[i] = readlineSync.questionInt("Ingrese segunda nota: ");
        nota3[i] = readlineSync.questionInt("Ingrese tercer nota: ");
    }
}

let calcularPromedio = (nombre) =>{
        for(let i= 0; i < long; i++){
            if(nombre == arregloAlumnos[i]){
                notaTotal = nota1[i] + nota2[i] + nota3[i];
            }     
    }
    return promedio = notaTotal/3;
}
// Implementación de funciones
cargarArreglo();
nombre = readlineSync.question("Ingrese el nombre del alumno que desea buscar: ");
promedio = calcularPromedio(nombre);
       
console.log("El promedio anual de este alumno es "+promedio);
    


