import * as fs from 'fs';
let texto: string = fs.readFileSync('texto.txt', 'utf8');

try {
    let palabras: string[] = texto.split(' ');

    if (palabras.length <= 1 && palabras[0] == '') {
        throw new Error("Largo arreglo es: 1 o 0 y la posición cero esta vacia");
    }
    console.log(palabras);

} catch (error) {
    console.log("El archivo se encuentra vacio",error);
}

