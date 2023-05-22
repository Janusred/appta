export class DetalleVenta {
    id?: any;
    idVenta: number;
    idProducto?: number;
    cantidad?: number;
    precio_unitario: number;
    total_linea: number;

    constructor(idVenta: number, idProducto: number, cantidad: number, precio_unitario: number, total_linea: number) {
        this.idVenta = idVenta;
        this.idProducto = idProducto;
        this.cantidad = cantidad;
        this.precio_unitario = precio_unitario;
        this.total_linea = total_linea;
    }
}