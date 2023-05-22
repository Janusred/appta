import { Inject } from '@angular/core';
import { VentaService, EmpleadoService, FormatService } from '@services';
import { Venta } from '../../../../models/venta';
import { Empleado } from 'src/app/models/empleado';
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
  empleados: Empleado[] | null = null;
  empleado: Empleado | null = null;

  listaVaciaVentas = undefined;
  listaVaciaEmpleados = undefined;

  constructor(
    private ventaService: VentaService,
    private empleadoService: EmpleadoService,
    private router: Router,
    protected formatService: FormatService
  ) { }

  ngOnInit(): void {
    this.cargarVentas();

  }

  cargarVentas(): void {
    this.empleadoService.lista().subscribe(
      (data: any) => {
        this.empleados = data;
        this.listaVaciaEmpleados = undefined;
        this.ventaService.lista().subscribe(
          (data: any) => {
            this.ventas = data;
            this.listaVaciaVentas = undefined;

          },
          (err: any) => {
            this.listaVaciaVentas = err.error.message;
          }
        );
      },
      (err: any) => {
        this.listaVaciaEmpleados = err.error.message;
      }
    );
  }

  calcularNombreEmpleado(data: any) {

    const empleado = this.empleados!.find(emp => emp?.codEmpleado == data.codEmpleado);
    return empleado?.nombre;
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
