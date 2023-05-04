export class Empleado {
    id?: any;
    nombre: string;
    codEmpleado: number;


    constructor(nombre: string, codEmpleado: number) {
        this.nombre = nombre;
        this.codEmpleado = codEmpleado;
    }

}