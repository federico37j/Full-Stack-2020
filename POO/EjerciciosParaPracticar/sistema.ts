//Importación de librerías
import * as readlineSync from "readline-sync";
//Clases
import { ManejarArchivos } from "./manejarArchivos";
import { plantilla } from "./plantilla";
import { EnStock } from "./EnStock";
import { prodVendido } from "./prodVendido";


class Sistema implements plantilla {
    private manejarArchivos: ManejarArchivos;
    private stock: EnStock[];
    private prodVendido: prodVendido[];

    public constructor(lectorArchivo: ManejarArchivos) {
        this.manejarArchivos = lectorArchivo;
        this.stock = [];
        this.prodVendido = [];
        this.cambiarTxtAObjeto("./disponible.txt");
        this.cambiarTxtAVendido("./vendido.txt");
    }

    public cambiarTxtAObjeto(url: string): void {
        let txtPorFila: string[] = this.manejarArchivos.leerArchivos(url);
        let txtObjeto: string[];
        let i: number = 0;
        for (i; i < txtPorFila.length; i++) {
            txtObjeto = txtPorFila[i].split(",");
            this.stock.push(new EnStock(Number(txtObjeto[0]), txtObjeto[1], Number(txtObjeto[2]), Number(txtObjeto[3]), Number(txtObjeto[4])));
        }
    }

    public cambiarTxtAVendido(url: string): void {
        let txtPorFila: string[] = this.manejarArchivos.leerArchivos(url);
        let txtObjeto: string[];
        let i: number = 0;
        for (i; i < txtPorFila.length; i++) {
            txtObjeto = txtPorFila[i].split(",");
            this.prodVendido.push(new prodVendido(Number(txtObjeto[0]), txtObjeto[1], Number(txtObjeto[2]), Number(txtObjeto[3]), txtObjeto[4],
                txtObjeto[5], this.totalizar(Number(txtObjeto[2]), Number(txtObjeto[3]))));
        }
    }

    public darAlta(): void {
        let numero: number = this.stock.length + 1;
        let nombProducto: string = readlineSync.question("- Ingrese el nombre del producto: ").toUpperCase();
        let cantProducto: number = readlineSync.questionInt("- Ingrese la cantidad de producto: ");
        let precioUnitario: number = readlineSync.questionInt("- Ingrese el precio unitario: ");
        let costoAsociado: number = readlineSync.questionInt("- Ingrese el costo asociado: ");
        this.stock.push(new EnStock(numero, nombProducto, cantProducto, precioUnitario, costoAsociado));
        console.log("¡Operación realizada con exito!");
    }

    //Función para que retorna la fecha actual
    public fechaActual(): string {
        let date: Date = new Date();
        return date.getDate() + "/" + date.getMonth() + "/" + date.getFullYear();
    }

    //Función que guarda en el txt 
    public pasarATxt(arr: object[], url: string): void {
        let cadenaCompleta: string = "";
        for (let i: number = 0; i < arr.length; i++) {
            if (i != arr.length - 1) {
                cadenaCompleta += arr[i].toString() + "\n";
            } else {
                cadenaCompleta += arr[i].toString();
            }
        }
        this.manejarArchivos.guardarTxt(url, cadenaCompleta);
    }

    public actualizarTxt(): void {
        if (this.prodVendido.length == 0) {
            throw new Error('No hay nada para agregar');
        } else {
            this.pasarATxt(this.prodVendido, "./vendido.txt");
        }

        if (this.stock.length == 0) {
            throw new Error('No hay nada para agregar');
        } else {
            this.pasarATxt(this.stock, "./disponible.txt");
        }
    }

    private busqueda(nombProd: string): EnStock {
        for (let i: number = 0; i < this.stock.length; i++) {
            if (this.stock[i].getNombre() == nombProd) {
                return this.stock[i];
            }
        }
        return null;
    }

    public buscarParaComprar(): void {
        let resultado: EnStock = this.busqueda(readlineSync.question("- Ingrese el nombre del producto a buscar: ").toUpperCase());
        if (resultado != null) {
            console.table(resultado);
            this.comprar(resultado);
        } else {
            console.log("El producto buscado no se encuentra disponible.");
        }
    }

    private comprar(resultado: EnStock) {
        console.log("<<<REALIZAR COMPRA>>>");
        let numero: number = this.prodVendido.length + 1;
        let nombCliente: string = readlineSync.question("- Ingrese el nombre del cliente: ").toUpperCase();
        let cantAComprar: number = this.cantEnStock(readlineSync.questionInt("- Ingrese la cantidad que quiere comprar: "), resultado);
        if (cantAComprar > 0) {
            this.prodVendido.push(new prodVendido(numero, resultado.getNombre(), cantAComprar, resultado.getPrecioUnitario(), nombCliente,
                this.fechaActual(), this.totalizar(resultado.getPrecioUnitario(), cantAComprar)));
            console.log("¡Compra realizada!");
        }

    }

    public cantEnStock(cantAComprar: number, elemento: EnStock): number {
        let resultado: number = 0;
        let cantidadActual: number = elemento.getCantidad();
        if (cantAComprar <= cantidadActual) {
            resultado = cantidadActual - cantAComprar;
            elemento.setCantidad(resultado);
        } else {
            console.log("No tenemos esa cantidad en stock actualmente.");
        }
        return resultado;
    }

    public totalizar(precio: number, cant: number): number {
        return precio * cant;
    }

    public listar(): void {
        console.table(this.stock);
    }

}//FIN CLASE SISTEMA

let milector = new ManejarArchivos();
let sistema = new Sistema(milector);

let input: number = readlineSync.questionInt("OPCIONES:\n(1) AGREGAR PRODUCTO\n(2) BUSCAR PARA COMPRAR\n(3) LISTAR\n(4) SALIR\nTu respuesta: ");
let salir: boolean = false;

//Menú
while (salir != true) {
    switch (input) {
        case 1:
            sistema.darAlta();
            break;

        case 2:
            sistema.buscarParaComprar();
            break;

        case 3:
            sistema.listar()
            break;

        case 4:
            salir = (readlineSync.question("¿Seguro deseas salir? (Y/N): ") == "Y");
            break;
    }
    if (salir != true) {
        input = readlineSync.questionInt("OPCIONES:\n(1) AGREGAR PRODUCTO\n(2) BUSCAR PARA COMPRAR\n(3) LISTAR\n(4) SALIR\nTu respuesta: ");
    } else {
        try {
            sistema.actualizarTxt();
        } catch (error) {
            console.log('Ocurrió un error esperado, el arreglo está vacío.');
        }
        console.log("¡Hasta luego!");
    }
}