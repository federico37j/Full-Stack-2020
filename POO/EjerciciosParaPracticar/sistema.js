"use strict";
exports.__esModule = true;
//Importación de librerías
var readlineSync = require("readline-sync");
//Clases
var manejarArchivos_1 = require("./manejarArchivos");
var EnStock_1 = require("./EnStock");
var prodVendido_1 = require("./prodVendido");
var Sistema = /** @class */ (function () {
    function Sistema(lectorArchivo) {
        this.manejarArchivos = lectorArchivo;
        this.stock = [];
        this.prodVendido = [];
        this.cambiarTxtAObjeto("./disponible.txt");
        this.cambiarTxtAVendido("./vendido.txt");
    }
    Sistema.prototype.cambiarTxtAObjeto = function (url) {
        var txtPorFila = this.manejarArchivos.leerArchivos(url);
        var txtObjeto;
        var i = 0;
        for (i; i < txtPorFila.length; i++) {
            txtObjeto = txtPorFila[i].split(",");
            this.stock.push(new EnStock_1.EnStock(Number(txtObjeto[0]), txtObjeto[1], Number(txtObjeto[2]), Number(txtObjeto[3]), Number(txtObjeto[4])));
        }
    };
    Sistema.prototype.cambiarTxtAVendido = function (url) {
        var txtPorFila = this.manejarArchivos.leerArchivos(url);
        var txtObjeto;
        var i = 0;
        for (i; i < txtPorFila.length; i++) {
            txtObjeto = txtPorFila[i].split(",");
            this.prodVendido.push(new prodVendido_1.prodVendido(Number(txtObjeto[0]), txtObjeto[1], Number(txtObjeto[2]), Number(txtObjeto[3]), txtObjeto[4], txtObjeto[5], this.totalizar(Number(txtObjeto[2]), Number(txtObjeto[3]))));
        }
    };
    Sistema.prototype.darAlta = function () {
        var numero = this.stock.length + 1;
        var nombProducto = readlineSync.question("- Ingrese el nombre del producto: ").toUpperCase();
        var cantProducto = readlineSync.questionInt("- Ingrese la cantidad de producto: ");
        var precioUnitario = readlineSync.questionInt("- Ingrese el precio unitario: ");
        var costoAsociado = readlineSync.questionInt("- Ingrese el costo asociado: ");
        this.stock.push(new EnStock_1.EnStock(numero, nombProducto, cantProducto, precioUnitario, costoAsociado));
        console.log("¡Operación realizada con exito!");
    };
    //Función para que retorna la fecha actual
    Sistema.prototype.fechaActual = function () {
        var date = new Date();
        return date.getDate() + "/" + date.getMonth() + "/" + date.getFullYear();
    };
    //Función que guarda en el txt 
    Sistema.prototype.pasarATxt = function (arr, url) {
        var cadenaCompleta = "";
        for (var i = 0; i < arr.length; i++) {
            if (i != arr.length - 1) {
                cadenaCompleta += arr[i].toString() + "\n";
            }
            else {
                cadenaCompleta += arr[i].toString();
            }
        }
        this.manejarArchivos.guardarTxt(url, cadenaCompleta);
    };
    Sistema.prototype.actualizarTxt = function () {
        if (this.prodVendido.length > 0) {
            this.pasarATxt(this.prodVendido, "./vendido.txt");
        }
        if (this.stock.length > 0) {
            this.pasarATxt(this.stock, "./disponible.txt");
        }
    };
    Sistema.prototype.busqueda = function (nombProd) {
        for (var i = 0; i < this.stock.length; i++) {
            if (this.stock[i].getNombre() == nombProd) {
                return this.stock[i];
            }
        }
        return null;
    };
    Sistema.prototype.buscarParaComprar = function () {
        var resultado = this.busqueda(readlineSync.question("- Ingrese el nombre del producto a buscar: ").toUpperCase());
        if (resultado != null) {
            console.table(resultado);
            this.comprar(resultado);
        }
        else {
            console.log("El producto buscado no se encuentra disponible.");
        }
    };
    Sistema.prototype.comprar = function (resultado) {
        console.log("<<<REALIZAR COMPRA>>>");
        var numero = this.prodVendido.length + 1;
        var nombCliente = readlineSync.question("- Ingrese el nombre del cliente: ").toUpperCase();
        var cantAComprar = this.cantEnStock(readlineSync.questionInt("- Ingrese la cantidad que quiere comprar: "), resultado);
        if (cantAComprar > 0) {
            this.prodVendido.push(new prodVendido_1.prodVendido(numero, resultado.getNombre(), cantAComprar, resultado.getPrecioUnitario(), nombCliente, this.fechaActual(), this.totalizar(resultado.getPrecioUnitario(), cantAComprar)));
            console.log("¡Compra realizada!");
        }
    };
    Sistema.prototype.cantEnStock = function (cantAComprar, elemento) {
        var resultado = 0;
        var cantidadActual = elemento.getCantidad();
        if (cantAComprar <= cantidadActual) {
            resultado = cantidadActual - cantAComprar;
            elemento.setCantidad(resultado);
        }
        else {
            console.log("No tenemos esa cantidad en stock actualmente.");
        }
        return resultado;
    };
    Sistema.prototype.totalizar = function (precio, cant) {
        return precio * cant;
    };
    Sistema.prototype.listar = function () {
        console.table(this.stock);
    };
    return Sistema;
}()); //FIN CLASE SISTEMA
var milector = new manejarArchivos_1.ManejarArchivos();
var sistema = new Sistema(milector);
var input = readlineSync.questionInt("OPCIONES:\n(1) AGREGAR PRODUCTO\n(2) BUSCAR PARA COMPRAR\n(3) LISTAR\n(4) SALIR\nTu respuesta: ");
var salir = false;
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
            sistema.listar();
            break;
        case 4:
            salir = (readlineSync.question("¿Seguro deseas salir? (Y/N): ") == "Y");
            break;
    }
    if (salir != true) {
        input = readlineSync.questionInt("OPCIONES:\n(1) AGREGAR PRODUCTO\n(2) BUSCAR PARA COMPRAR\n(3) LISTAR\n(4) SALIR\nTu respuesta: ");
    }
    else {
        sistema.actualizarTxt();
        console.log("¡Hasta luego!");
    }
}
