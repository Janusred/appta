import { EmpleadoService } from '../../../../services/empleado.service';
import { Empleado } from 'src/app/models/empleado';
import { Component, OnInit } from '@angular/core';
import { NavbarComponent } from 'src/app/navbar/navbar.component';

import Swal from 'sweetalert2';
import { Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { DxDataGridModule } from 'devextreme-angular';



@Component({
  selector: 'app-lista-empleado',
  templateUrl: './lista-empleado.component.html',
  styleUrls: ['./lista-empleado.component.css'],
  standalone: true,
  imports: [
    NavbarComponent,
    RouterModule,
    CommonModule,
    DxDataGridModule,
    RouterModule
  ]
})
export class ListaEmpleadoComponent implements OnInit {

  empleados: Empleado[] = [];

  listaVacia = undefined;

  constructor(
    private empleadoService: EmpleadoService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.cargarEmpleados();
  }
  mostrarDetalle(e: any) {
    const idEmpleado = e.data.id;
    this.router.navigate(['/detalleEmpleado/', idEmpleado])
  }
  cargarEmpleados(): void {
    this.empleadoService.lista().subscribe(
      data => {
        this.empleados = data;
        this.listaVacia = undefined;
      },
      err => {
        this.listaVacia = err.error.message;
      }
    );
  }

  borrar(id: number): void {
    Swal.fire({
      title: '¿Estás seguro?, Se eliminara el empleado seleccionado',
      text: 'Esta opción no se puede deshacer',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Eliminar',
      cancelButtonText: 'Volver'
    }).then((result) => {
      if (result.value) {
        this.empleadoService.delete(id).subscribe(res => this.cargarEmpleados(),
          error => {
            // Capturar el error y mostrar un mensaje personalizado
          });

        Swal.fire(
          'OK',
          'El empleado ha  sido eliminado ',
          'success'
        );
        // For more information about handling dismissals please visit
        // https://sweetalert2.github.io/#handling-dismissals
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        Swal.fire(
          'Cancelado',
          'El empleado no se ha eliminado',
          'error'
        );
      }
    });
  }


}
