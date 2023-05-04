export class Proveedor {
    id?: any;
    nombre: string;
    empresa: string;
    email: string;
    telefono: number;
    direccion: string
    ciudad: string;
    codigoPostal: number;



    constructor(nombre: string, empresa: string, email: string, telefono: number, direccion: string, ciudad: string, codigoPostal: number,) {
        this.nombre = nombre;
        this.empresa = empresa;
        this.email = email;
        this.telefono = telefono;
        this.direccion = direccion;
        this.ciudad = ciudad;
        this.codigoPostal = codigoPostal;
    }
}