export class Producto {
    id?: any;
    nombre: string;
    precio: number;
    idProveedor: number;
    idCategoria: number;
    cantidad: number;

    constructor(nombre: string, precio: number, idProveedor: number, idCategoria: number, cantidad: number) {
        this.nombre = nombre;
        this.precio = precio;
        this.idProveedor = idProveedor;
        this.idCategoria = idCategoria;
        this.cantidad = cantidad;
    }

}