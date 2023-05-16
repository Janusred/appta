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
    const codEmpleado = e.data.codEmpleado;
    this.router.navigate(['/detalleEmpleado/', codEmpleado])
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


}
