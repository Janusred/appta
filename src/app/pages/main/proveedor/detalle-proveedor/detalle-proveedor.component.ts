import { Router, ActivatedRoute } from '@angular/router';
import { ProveedorService } from '../../../../services/proveedor.service';
import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Proveedor } from '../../../../models/proveedor';
import { NavbarComponent } from 'src/app/navbar/navbar.component';
import { CommonModule } from '@angular/common';
import { DxFormModule } from 'devextreme-angular';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-detalle-proveedor',
  templateUrl: './detalle-proveedor.component.html',
  styleUrls: ['./detalle-proveedor.component.css'],
  standalone: true,
  imports: [
    NavbarComponent,
    CommonModule,
    DxFormModule]
})
export class DetalleProveedorComponent implements OnInit {

  proveedor: Proveedor | null = null;

  constructor(
    private proveedorService: ProveedorService,
    private activatedRoute: ActivatedRoute,
    private toastr: ToastrService,
    private router: Router
  ) { }

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.params['id'];
    this.proveedorService.detail(id).subscribe(
      data => {
        this.proveedor = data;
      },
      err => {
        this.toastr.error(err.error.message, 'Error', {
          timeOut: 3000, positionClass: 'toast-bottom-left',
        });
        this.volver();
      }
    );
  }

  modificarProveedor(id: number): void {
    let idProveedor: number = this.proveedor!.id;
    this.router.navigate(['/editarProveedor/', idProveedor])
  }
  borrarProveedor(id: number): void {
    Swal.fire({
      title: '¿Estás seguro?, Se eliminaran TODOS los productos asignados a este proveedor',
      text: 'Esta opción no se puede deshacer',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Eliminar',
      cancelButtonText: 'Cancelar'
    }).then((result) => {
      if (result.value) {
        this.proveedorService.delete(id).subscribe(res => this.router.navigate(['/listaProveedor']));
        Swal.fire(
          'OK',
          'El proveedor y todos sus productos han sido eliminados',
          'success'
        );
        // For more information about handling dismissals please visit
        // https://sweetalert2.github.io/#handling-dismissals
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        Swal.fire(
          'Cancelado',
          'El proveedor no se ha eliminado',
          'error'
        );
      }
    });
  }

  volver(): void {
    this.router.navigate(['/listaProveedor']);
  }

}
