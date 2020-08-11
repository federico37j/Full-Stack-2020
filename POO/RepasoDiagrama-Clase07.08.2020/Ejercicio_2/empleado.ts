export class Empleado {
    //Declaración de variables
    private id: number;
    private nombre: string;
    private apellido: string;
    private edad: number;
    private dni: number;
    private cargo: string;
    private salario: number;
    private fechaIngreso: string;

    public constructor(id: number, nombre: string, apellido: string, dni: number, edad: number, cargo: string, salario?: number) {
        this.id = id;
        this.nombre = nombre;
        this.apellido = apellido;
        this.edad = edad;
        this.dni = dni;
        this.cargo = cargo;

        if (salario == undefined) {
            this.salario = 16875;
        } else {
            this.salario = salario;
        }
        this.fechaIngreso = String(new Date());
    }

    public crearEmpleado(empleados: Empleado[], nombre: string, apellido: string, dni: number, edad: number, cargo: string): Empleado {
        let id: number = empleados.length + 1;
        return new Empleado(id, nombre, apellido, dni, edad, cargo);
    }

    //Se actualiza el empleado pasado por parámetro con los métodos set de esta clase
    public actualizarEmpleado(empleado: Empleado, nombre: string, apellido: string, dni: number, edad: number, cargo: string, salario: number): number {
        let completado: number = 1;
        empleado.setNombre(nombre);
        empleado.setApellido(apellido);
        empleado.setDni(dni);
        empleado.setEdad(edad);
        empleado.setCargo(cargo);
        empleado.setSalario(salario);

        return completado;
    }

    //Métodos get y set
    public getId(): number {
        return this.id;
    }

    public setId(id: number): void {
        this.id = id;
    }

    public getNombre(): string {
        return this.nombre;
    }

    public setNombre(nombre: string): void {
        this.nombre = nombre;
    }

    public getApellido(): string {
        return this.apellido;
    }

    public setApellido(apellido: string): void {
        this.apellido = apellido;
    }

    public getEdad(): number {
        return this.edad;
    }

    public setEdad(edad: number): void {
        this.edad = edad;
    }

    public getDni(): number {
        return this.dni;
    }

    public setDni(dni: number): void {
        this.dni = dni;
    }

    public getCargo(): string {
        return this.cargo;
    }

    public setCargo(cargo: string): void {
        this.cargo = cargo;
    }

    public getSalario(): number {
        return this.salario;
    }

    public setSalario(salario: number): void {
        this.salario = salario;
    }

    public getFechaIngreso(): string {
        return this.fechaIngreso;
    }

    public setFechaIngreso(fechaIngreso: string): void {
        this.fechaIngreso = fechaIngreso;
    }


}
