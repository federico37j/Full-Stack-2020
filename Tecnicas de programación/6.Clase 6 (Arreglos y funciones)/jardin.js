//Declaración e inicialización de variables
let readlineSync = require("readline-sync");
let cantidad = readlineSync.questionInt("Ingrese el numero de infantes: ");
let azul = 40;
let verde = 35;
let amarilla = 30;

if(cantidad <= amarilla){
    console.log("Aula Amarilla");

} else if (cantidad > amarilla && cantidad <= verde) {
    console.log("Aula Verde");

} else if (cantidad > verde && cantidad <= azul) {
    console.log("Aula Azul");
} else {
    console.log("El jardin no cuenta con la infraestructura necesaria para albergar esos infantes.");

    
}