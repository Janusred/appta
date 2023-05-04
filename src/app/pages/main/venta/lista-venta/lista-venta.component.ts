import { VentaService } from '../../../../services/venta.service';
import { Venta } from '../../../../models/venta';
import { Component, OnInit } from '@angular/core';
import { DxDataGridModule } from 'devextreme-angular';
import { NavbarComponent } from 'src/app/navbar/navbar.component';

import Swal from 'sweetalert2';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';


@Component({
  selector: 'app-lista-venta',
  templateUrl: './lista-venta.component.html',
  styleUrls: ['./lista-venta.component.css'],
  standalone: true,
  imports: [
    CommonModule,
    NavbarComponent,
    RouterModule,
    DxDataGridModule,
  ]
})
export class ListaVentaComponent implements OnInit {

  ventas: Venta[] = [];

  listaVaciaVentas = undefined;

  constructor(
    private ventaService: VentaService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.cargarVentas();
  }

  cargarVentas(): void {
    this.ventaService.lista().subscribe(
      data => {
        this.ventas = data;
        this.listaVaciaVentas = undefined;
      },
      err => {
        this.listaVaciaVentas = err.error.message;
      }
    );
  }

  mostrarDetalle(e: any) {
    const idVenta = e.data.id;
    this.router.navigate(['/detalleVenta/', idVenta])
  }
  borrar(id: number): void {
    Swal.fire({
      title: '¿Estás seguro?',
      text: 'No hay vuelta atrás',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Sip',
      cancelButtonText: 'Nops'
    }).then((result) => {
      if (result.value) {
        this.ventaService.delete(id).subscribe(res => this.cargarVentas());
        Swal.fire(
          'OK',
          'Venta eliminada',
          'success'
        );
        // For more information about handling dismissals please visit
        // https://sweetalert2.github.io/#handling-dismissals
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        Swal.fire(
          'Cancelado',
          'Venta a salvo',
          'error'
        );
      }
    });
  }


}
