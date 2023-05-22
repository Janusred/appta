import { ProveedorService } from '@services';
import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { NavbarComponent } from 'src/app/navbar/navbar.component';
import { FormsModule } from '@angular/forms';
import { Proveedor } from 'src/app/models/proveedor';

@Component({
  selector: 'app-nuevo-proveedor',
  templateUrl: './nuevo-proveedor.component.html',
  styleUrls: ['./nuevo-proveedor.component.css'],
  standalone: true,
  imports: [
    NavbarComponent,
    FormsModule]
})
export class NuevoProveedorComponent implements OnInit {

  nombre = '';
  empresa = '';
  email = '';
  telefono: number | null = null;
  direccion = '';
  ciudad = '';
  codigoPostal: number | null = null;


  constructor(
    private proveedorService: ProveedorService,
    private toastr: ToastrService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  onCreate(): void {
    const proveedor = new Proveedor(this.nombre, this.empresa, this.email, this.telefono!, this.direccion, this.ciudad, this.codigoPostal!);
    this.proveedorService.save(proveedor).subscribe(
      (data: any) => {
        this.toastr.success(data.message, 'OK', {
          timeOut: 3000, positionClass: 'toast-bottom-left'
        });
        this.router.navigate(['/listaProveedor']);
      },
      (err: any) => {
        this.toastr.error(err.error.message, 'Error', {
          timeOut: 3000, positionClass: 'toast-bottom-left',
        });
      }
    );
  }

  volver(): void {
    this.router.navigate(['/listaProveedor']);
  }

}
