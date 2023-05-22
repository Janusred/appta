import { ProveedorService } from '@services';
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
      (data: any) => {
        this.proveedores = data;
        this.listaVacia = undefined;
      },
      (err: any) => {
        this.listaVacia = err.error.message;
      }
    );
  }
  mostrarDetalle(e: any) {
    const idProveedor = e.data.id;
    this.router.navigate(['/detalleProveedor/', idProveedor])
  }



}
