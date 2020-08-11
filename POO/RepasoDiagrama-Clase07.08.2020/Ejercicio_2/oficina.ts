//Import librerías
import * as readlineSync from "readline-sync";

//Import clases
import { Empleado } from "./empleado";
import { Inmueble } from "./inmueble";

class Oficina extends Inmueble {
    private nombreSede: string;
    private direccion: string;
    private empleado: Empleado;
    private empleados: Empleado[];

    public constructor(nombreSede: string, direccion: string, ubicacion: string, metrosCuadrados: number, cantHabitaciones: number, empleado: Empleado) {
        super(ubicacion, metrosCuadrados, cantHabitaciones);
        this.nombreSede = nombreSede;
        this.direccion = direccion;
        this.empleado = empleado;
        this.empleados = [];
        this.espacioVerde = false;
    }

    //Llamo a la función(crearEmpleado) de la clase Empleado para dar de alta uno y lo guardo en el arreglo
    public darAltaEmpleado(): void {
        this.empleados.push(this.empleado.crearEmpleado(this.empleados, readlineSync.question("(1) Ingrese el nombre: "), readlineSync.question("(2) Ingrese el apellido: "),
            readlineSync.questionInt("(3) Ingrese el DNI: "), readlineSync.questionInt("(4) Ingrese el edad: "), readlineSync.question("(5) Ingrese el cargo: ")));
        console.log("¡Registro cargado con éxito!");
    }

    //Muestro el arreglo por consola
    public listarEmpleados(): void {
        let aux: Empleado[] = [];
        for (let i = 0; i < this.empleados.length; i++) {
            if (this.empleados[i] != null) {
                aux.push(this.empleados[i]);
            }
        }
        console.table(aux);
    }

    //Busco al empleado filtrando por DNI y Apellido
    public buscarEmpleado(dni: number, apellido: string): Empleado {
        for (let i: number = 0; i < this.empleados.length; i++) {
            if (this.empleados[i].getDni() == dni && this.empleados[i].getApellido() == apellido) {
                return this.empleados[i];
            }
        }

    }

    public busquedaUsuario(respuesta?: string): void {
        if (respuesta == "Y" && this.empleados.length > 0) {
            let resultado: Empleado = this.buscarEmpleado(readlineSync.questionInt("(1) Ingrese el DNI: "),
                readlineSync.question("(2) Ingrese el apellido: "));
            if (resultado != undefined && resultado != null) {
                console.table(resultado);
                if ((readlineSync.question("¿Desea actualizarlo? (Y/N): ") == "Y")) {
                    this.actualizarUsuario(resultado);
                }
            } else {
                console.log("El empleado no se encuentra actualmente en nuestros registros.");
            }
        } else {
            this.listarEmpleados();
        }

    }

    //Llamo a la función(actualizarEmpleado) de la clase Empleado para actualizar uno, pasandole por parametro nombre/apellido/dni/edad/cargo/salario
    private actualizarUsuario(empleado: Empleado): void {
        let resultado: number;
        resultado = this.empleado.actualizarEmpleado(empleado, readlineSync.question("(1) Ingrese el nombre: "), readlineSync.question("(2) Ingrese el apellido: "),
            readlineSync.questionInt("(3) Ingrese el DNI: "), readlineSync.questionInt("(4) Ingrese la edad: "), readlineSync.question("(5) Ingrese el cargo: "),
            readlineSync.questionInt("(6) Ingrese el salario: "));
        if (resultado > 0) {
            console.log("¡Operación realizada con éxito!");
        } else {
            console.log("¡Error!");
        }

    }

    //Métodos get
    public getNombreSede(): string {
        return this.nombreSede;
    }

    public getDireccion(): string {
        return this.direccion;
    }

}//FIN CLASE OFICINA

let miEmpleado = new Empleado(0, "Pepe", "Alvarez", 32323232, 25, "Scrum Master");
let oficina = new Oficina("Onirus", "25 de mayo 168", "Tandil", 150, 4, miEmpleado);

let input: number = readlineSync.questionInt("OPCIONES\n(1) DAR ALTA UN EMPLEADO\n(2) LISTAR\n(3) SALIR\nTu respuesta: ");
let salir: boolean = false;

//MENÚ
while (salir != true) {
    switch (input) {

        case 1:
            oficina.darAltaEmpleado();
            break;

        case 2:
            oficina.busquedaUsuario(readlineSync.question("¿Desea buscar una empleado especifico? (Y/N): "));
            break;

        case 3:
            salir = (readlineSync.question("¿Seguro deseas salir? (Y/N): ") == "Y");
            break;
    }

    if (salir != true) {
        input = readlineSync.questionInt("OPCIONES\n(1) DAR ALTA UN EMPLEADO\n(2) LISTAR\n(3) SALIR\nTu respuesta: ");
    } else {
        console.log("¡Hasta luego!");
    }
}
