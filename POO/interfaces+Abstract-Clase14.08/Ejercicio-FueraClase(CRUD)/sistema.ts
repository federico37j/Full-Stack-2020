//Importación de librerías
import * as readlineSync from "readline-sync";

import { ManejarArchivos } from "./manejarArchivos";
import { FacturaComercial } from "./facturaComercial";
import { Detalle } from "./detalle";
import { plantilla } from "./plantilla";


class Sistema implements plantilla {
    private manejarArchivos: ManejarArchivos;
    private detalle: Detalle;
    private facturaComercial: FacturaComercial[];
    private ordenesDeCompra: Detalle[];


    public constructor(lectorArchivo: ManejarArchivos) {
        this.manejarArchivos = lectorArchivo;
        this.ordenesDeCompra = [];
        this.facturaComercial = [];
        this.cambiarTxtAObjeto("Ejercicio-FueraClase(CRUD)/detalleFactura.txt");
    }

    private cambiarTxtAObjeto(url): void {
        let txtPorFila: string[] = this.manejarArchivos.leerArchivos(url);
        let txtObjeto: string[];
        let i: number = 0;
        for (i; i < txtPorFila.length; i++) {
            txtObjeto = txtPorFila[i].split(",");
            this.ordenesDeCompra.push(new Detalle(Number(txtObjeto[0]), txtObjeto[1], txtObjeto[2], Number(txtObjeto[3]), Number(txtObjeto[4]),
                this.totalizar(Number(txtObjeto[3]), Number(txtObjeto[4]))));
        }
    }

    public darAlta(): void {
        let numero: number = this.ordenesDeCompra.length + 1;
        let fecha: string = this.fechaActual();
        do {
            let nombProducto: string = readlineSync.question("- Ingrese el nombre del producto: ").toUpperCase();
            let cantProducto: number = readlineSync.questionInt("- Ingrese la cantidad de producto: ");
            let precioUnitario: number = readlineSync.questionInt("- Ingrese el precio unitario: ");
            this.ordenesDeCompra.push(new Detalle(numero, fecha, nombProducto.toUpperCase(), cantProducto, precioUnitario, this.totalizar(precioUnitario, cantProducto)));
        } while (readlineSync.question("¿Desea cargar otro producto? (Y/N) ") == "Y");
        if (readlineSync.question("¿Desea realizar la factura? (Y/N) ") == "Y") {
            this.facturarOrdenDeCompra(numero);
        }
    }

    public totalizar(precio: number, cant: number): number {
        return precio * cant;
    }

    //Función que retorna la fecha actual
    public fechaActual(): string {
        let date: Date = new Date();
        return date.getDate() + "/" + date.getMonth() + "/" + date.getFullYear();
    }

    public listar(lista: object[]): void {
        let aux: object[] = [];
        let i: number;
        for (i = 0; i < lista.length; i++) {
            if (lista[i] != null) {
                aux[i] = lista[i];
            }
        }
        lista = [];
        lista = aux;
        console.table(lista);
    }

    public listarFacturacion(listaFactura: FacturaComercial[]): void {
        let arrayFactura = [];
        for (let i: number = 0; i < listaFactura.length; i++) {
            let factura = {
                numero: listaFactura[i]["numero"],
                fecha: listaFactura[i]["fecha"],
                nombCliente: listaFactura[i]["nombCliente"],
                tipoFactura: listaFactura[i]["tipoFactura"],
                total: listaFactura[i].getMonto()
            }
            arrayFactura.push(factura);
            console.table(arrayFactura);
            console.table(listaFactura[i]['detalle']);
        }
    }

    //Función que guarda en el txt 
    public pasarATxt(): void {
        let cadenaCompleta: string = "";
        for (let i: number = 0; i < this.ordenesDeCompra.length; i++) {
            cadenaCompleta += this.ordenesDeCompra[i].toString();
        }
        this.manejarArchivos.guardarTxt("Ejercicio-FueraClase(CRUD)/detalleFactura.txt", cadenaCompleta);
    }

    //Dependiendo la búsqueda que quiera hacer el usuario, muestra toda la lista o solo un objeto especifico
    public busquedaUsuario(respuesta?: boolean): void {
        if (respuesta == true) {
            console.log("BÚSQUEDA ESPECIFICA")
            let numFac: number = readlineSync.questionInt("- Ingrese el numero de detalle: ");
            let nombCliente: string = readlineSync.question("- Ingrese la fecha: ");
            let nombProducto: string = readlineSync.question("- Ingrese el nombre del producto: ").toUpperCase();
            let resultado: number = this.buscarEspecifico(numFac, nombCliente, nombProducto);
            if (resultado >= 0) {
                console.table(this.ordenesDeCompra[resultado]);
                this.actualizarEliminar(resultado, readlineSync.questionInt("OPCIONES:\n(1) ACTUALIZAR\n(2) BORRAR\n(3) SALIR\nTu respuesta: "));
            } else {
                console.log("¡El registro buscado no existe!");
            }
        } else {
            this.listar(this.ordenesDeCompra);
        }
    }

    public buscarEspecifico(numFac: number, fecha: string, nombProd: string): number {
        for (let i: number = 0; i < this.ordenesDeCompra.length; i++) {
            if (this.ordenesDeCompra[i].getNumeroDetalle() == numFac && this.ordenesDeCompra[i].getFecha() == fecha
                && this.ordenesDeCompra[i].getNombProducto() == nombProd) {
                return i;
            }
        }
        return -1;

    }

    public facturarOrdenDeCompra(numFac: number): void {
        let numero: number = this.facturaComercial.length + 1;
        let nombCliente: string = readlineSync.question("- Ingrese el nombre del cliente: ");
        let tipoFactura: string = readlineSync.question("- Ingrese el tipo de factura: ");
        let paraFacturar: Detalle[] = [];
        for (let i: number = 0; i < this.ordenesDeCompra.length; i++) {
            if (this.ordenesDeCompra[i].getNumeroDetalle() == numFac) {
                paraFacturar.push(this.ordenesDeCompra[i]);
            }
        }
        this.facturaComercial.push(new FacturaComercial(numero, this.fechaActual(), nombCliente, tipoFactura, paraFacturar));
    }

    public actualizarEliminar(posDetalleFact: number, respuesta: number): void {
        if (respuesta == 1) {
            this.actualizar(posDetalleFact);
        }
        if (respuesta == 2) {
            this.eliminar(posDetalleFact);
        }
    }

    public eliminar(indice: number): void {
        // let i: number;
        // for (i = indice; i < this.ordenesDeCompra.length - 1; i++) {
        //     this.ordenesDeCompra[i] = this.ordenesDeCompra[i + 1];
        // }
        // this.ordenesDeCompra[i] = null;
        this.ordenesDeCompra.splice(indice, 1);
        console.log("¡Registro eliminado con éxito!");
    }

    public actualizar(posicion: number): void {
        this.detalle = this.ordenesDeCompra[posicion];
        this.detalle.setNombProducto(readlineSync.question("- Ingrese el nombre del producto: ").toUpperCase());
        this.detalle.setCantProducto(readlineSync.questionInt("- Ingrese la cantidad de producto: "));
        this.detalle.setPrecioUnitario(readlineSync.questionInt("- Ingrese el precio unitario: "));
        console.table(this.detalle);
    }

    public getFacturaComercial(): FacturaComercial[] {
        return this.facturaComercial;
    }
}

let milector = new ManejarArchivos();
let sistema = new Sistema(milector);

let input: number = readlineSync.questionInt("OPCIONES:\n(1) AGREGAR ORDEN DE COMPRA\n(2) BUSCAR\n(3) FACTURAR\n(4) LISTAR FACTURAS\n(5) SALIR\nTu respuesta: ");
let salir: boolean = false;

//Menú
while (salir != true) {
    switch (input) {
        case 1:
            sistema.darAlta();
            break;

        case 2:
            sistema.busquedaUsuario(readlineSync.question("OPCIONES:\n(1) BÚSQUEDA ESPECIFICA\n(2) LISTAR TODO\nTu respuesta: ") == "1");
            break;

        case 3:
            let numFac: number = readlineSync.questionInt("- Ingrese el numero de detalle: ");
            sistema.facturarOrdenDeCompra(numFac);
            break;

        case 4:
            sistema.listarFacturacion(sistema.getFacturaComercial());
            break;

        case 5:
            salir = (readlineSync.question("¿Seguro deseas salir? (Y/N): ") == "Y");
            break;
    }
    if (salir != true) {
        input = readlineSync.questionInt("OPCIONES:\n(1) AGREGAR ORDEN DE COMPRA\n(2) BUSCAR\n(3) FACTURAR\n(4) LISTAR FACTURAS\n(5) SALIR\nTu respuesta: ");
    } else {
        sistema.pasarATxt();
        console.log("¡Hasta luego!");
    }
}