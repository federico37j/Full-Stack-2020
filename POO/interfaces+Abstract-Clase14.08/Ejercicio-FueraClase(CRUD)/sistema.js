"use strict";
exports.__esModule = true;
//Importación de librerías
var readlineSync = require("readline-sync");
var manejarArchivos_1 = require("./manejarArchivos");
var facturaComercial_1 = require("./facturaComercial");
var detalle_1 = require("./detalle");
var Sistema = /** @class */ (function () {
    function Sistema(lectorArchivo) {
        this.manejarArchivos = lectorArchivo;
        this.ordenesDeCompra = [];
        this.facturaComercial = [];
        this.cambiarTxtAObjeto("Ejercicio-FueraClase(CRUD)/detalleFactura.txt");
    }
    Sistema.prototype.cambiarTxtAObjeto = function (url) {
        var txtPorFila = this.manejarArchivos.leerArchivos(url);
        var txtObjeto;
        var i = 0;
        for (i; i < txtPorFila.length; i++) {
            txtObjeto = txtPorFila[i].split(",");
            this.ordenesDeCompra.push(new detalle_1.Detalle(Number(txtObjeto[0]), txtObjeto[1], txtObjeto[2], Number(txtObjeto[3]), Number(txtObjeto[4]), this.totalizar(Number(txtObjeto[3]), Number(txtObjeto[4]))));
        }
    };
    Sistema.prototype.darAlta = function () {
        var numero = this.ordenesDeCompra.length + 1;
        var fecha = this.fechaActual();
        do {
            var nombProducto = readlineSync.question("- Ingrese el nombre del producto: ").toUpperCase();
            var cantProducto = readlineSync.questionInt("- Ingrese la cantidad de producto: ");
            var precioUnitario = readlineSync.questionInt("- Ingrese el precio unitario: ");
            this.ordenesDeCompra.push(new detalle_1.Detalle(numero, fecha, nombProducto.toUpperCase(), cantProducto, precioUnitario, this.totalizar(precioUnitario, cantProducto)));
        } while (readlineSync.question("¿Desea cargar otro producto? (Y/N) ") == "Y");
        if (readlineSync.question("¿Desea realizar la factura? (Y/N) ") == "Y") {
            this.facturarOrdenDeCompra(numero);
        }
    };
    Sistema.prototype.totalizar = function (precio, cant) {
        return precio * cant;
    };
    //Función que retorna la fecha actual
    Sistema.prototype.fechaActual = function () {
        var date = new Date();
        return date.getDate() + "/" + date.getMonth() + "/" + date.getFullYear();
    };
    Sistema.prototype.listar = function (lista) {
        var aux = [];
        var i;
        for (i = 0; i < lista.length; i++) {
            if (lista[i] != null) {
                aux[i] = lista[i];
            }
        }
        lista = [];
        lista = aux;
        console.table(lista);
    };
    Sistema.prototype.listarFacturacion = function (listaFactura) {
        var arrayFactura = [];
        for (var i = 0; i < listaFactura.length; i++) {
            var factura = {
                numero: listaFactura[i]["numero"],
                fecha: listaFactura[i]["fecha"],
                nombCliente: listaFactura[i]["nombCliente"],
                tipoFactura: listaFactura[i]["tipoFactura"],
                total: listaFactura[i].getMonto()
            };
            arrayFactura.push(factura);
            console.table(arrayFactura);
            console.table(listaFactura[i]['detalle']);
        }
    };
    //Función que guarda en el txt 
    Sistema.prototype.pasarATxt = function () {
        var cadenaCompleta = "";
        for (var i = 0; i < this.ordenesDeCompra.length; i++) {
            cadenaCompleta += this.ordenesDeCompra[i].toString();
        }
        this.manejarArchivos.guardarTxt("Ejercicio-FueraClase(CRUD)/detalleFactura.txt", cadenaCompleta);
    };
    //Dependiendo la búsqueda que quiera hacer el usuario, muestra toda la lista o solo un objeto especifico
    Sistema.prototype.busquedaUsuario = function (respuesta) {
        if (respuesta == true) {
            console.log("BÚSQUEDA ESPECIFICA");
            var numFac = readlineSync.questionInt("- Ingrese el numero de detalle: ");
            var nombCliente = readlineSync.question("- Ingrese la fecha: ");
            var nombProducto = readlineSync.question("- Ingrese el nombre del producto: ").toUpperCase();
            var resultado = this.buscarEspecifico(numFac, nombCliente, nombProducto);
            if (resultado >= 0) {
                console.table(this.ordenesDeCompra[resultado]);
                this.actualizarEliminar(resultado, readlineSync.questionInt("OPCIONES:\n(1) ACTUALIZAR\n(2) BORRAR\n(3) SALIR\nTu respuesta: "));
            }
            else {
                console.log("¡El registro buscado no existe!");
            }
        }
        else {
            this.listar(this.ordenesDeCompra);
        }
    };
    Sistema.prototype.buscarEspecifico = function (numFac, fecha, nombProd) {
        for (var i = 0; i < this.ordenesDeCompra.length; i++) {
            if (this.ordenesDeCompra[i].getNumeroDetalle() == numFac && this.ordenesDeCompra[i].getFecha() == fecha
                && this.ordenesDeCompra[i].getNombProducto() == nombProd) {
                return i;
            }
        }
        return -1;
    };
    Sistema.prototype.facturarOrdenDeCompra = function (numFac) {
        var numero = this.facturaComercial.length + 1;
        var nombCliente = readlineSync.question("- Ingrese el nombre del cliente: ");
        var tipoFactura = readlineSync.question("- Ingrese el tipo de factura: ");
        var paraFacturar = [];
        for (var i = 0; i < this.ordenesDeCompra.length; i++) {
            if (this.ordenesDeCompra[i].getNumeroDetalle() == numFac) {
                paraFacturar.push(this.ordenesDeCompra[i]);
            }
        }
        this.facturaComercial.push(new facturaComercial_1.FacturaComercial(numero, this.fechaActual(), nombCliente, tipoFactura, paraFacturar));
    };
    Sistema.prototype.actualizarEliminar = function (posDetalleFact, respuesta) {
        if (respuesta == 1) {
            this.actualizar(posDetalleFact);
        }
        if (respuesta == 2) {
            this.eliminar(posDetalleFact);
        }
    };
    Sistema.prototype.eliminar = function (indice) {
        // let i: number;
        // for (i = indice; i < this.ordenesDeCompra.length - 1; i++) {
        //     this.ordenesDeCompra[i] = this.ordenesDeCompra[i + 1];
        // }
        // this.ordenesDeCompra[i] = null;
        this.ordenesDeCompra.splice(indice, 1);
        console.log("¡Registro eliminado con éxito!");
    };
    Sistema.prototype.actualizar = function (posicion) {
        this.detalle = this.ordenesDeCompra[posicion];
        this.detalle.setNombProducto(readlineSync.question("- Ingrese el nombre del producto: ").toUpperCase());
        this.detalle.setCantProducto(readlineSync.questionInt("- Ingrese la cantidad de producto: "));
        this.detalle.setPrecioUnitario(readlineSync.questionInt("- Ingrese el precio unitario: "));
        console.table(this.detalle);
    };
    Sistema.prototype.getFacturaComercial = function () {
        return this.facturaComercial;
    };
    return Sistema;
}());
var milector = new manejarArchivos_1.ManejarArchivos();
var sistema = new Sistema(milector);
var input = readlineSync.questionInt("OPCIONES:\n(1) AGREGAR ORDEN DE COMPRA\n(2) BUSCAR\n(3) FACTURAR\n(4) LISTAR FACTURAS\n(5) SALIR\nTu respuesta: ");
var salir = false;
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
            var numFac = readlineSync.questionInt("- Ingrese el numero de detalle: ");
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
    }
    else {
        sistema.pasarATxt();
        console.log("¡Hasta luego!");
    }
}
