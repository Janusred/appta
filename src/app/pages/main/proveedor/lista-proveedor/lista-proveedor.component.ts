import { ProveedorService } from '../../../../services/proveedor.service';
import { Proveedor } from '../../../../models/proveedor';
import { Component, OnInit } from '@angular/core';
import { NavbarComponent } from 'src/app/navbar/navbar.component';
import { DxDataGridModule } from 'devextreme-angular';

import Swal from 'sweetalert2';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-lista-proveedor',
  templateUrl: './lista-proveedor.component.html',
  styleUrls: ['./lista-proveedor.component.css'],
  standalone: true,
  imports: [
    CommonModule,
    NavbarComponent,
    DxDataGridModule
  ]
})
export class ListaProveedorComponent implements OnInit {

  proveedores: Proveedor[] = [];

  listaVacia = undefined;

  constructor(
    private proveedorService: ProveedorService,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.cargarProveedores();
  }

  cargarProveedores(): void {
    this.proveedorService.lista().subscribe(
      data => {
        this.proveedores = data;
        this.listaVacia = undefined;
      },
      err => {
        this.listaVacia = err.error.message;
      }
    );
  }
  mostrarDetalle(e: any) {
    const idProveedor = e.data.id;
    this.router.navigate(['/detalleProveedor/', idProveedor])
  }
  borrar(id: number): void {
    Swal.fire({
      title: '¿Estás seguro?, Se eliminaran TODOS los productos asignados a este proveedor',
      text: 'Esta opción no se puede deshacer',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Eliminar',
      cancelButtonText: 'Volver'
    }).then((result) => {
      if (result.value) {
        this.proveedorService.delete(id).subscribe(res => this.cargarProveedores(),
          error => { });
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


}
