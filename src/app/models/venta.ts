export class Venta {
    id?: any;
    codEmpleado: number;
    metodo_pago: string;
    fecha: string;
    total: number;

    constructor(codEmpleado: number, metodo_pago: string, fecha: string, total: number) {
        this.codEmpleado = codEmpleado;
        this.metodo_pago = metodo_pago;
        this.fecha = fecha;
        this.total = total;
    }
}