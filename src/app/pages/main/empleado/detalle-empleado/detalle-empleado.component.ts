import { Router, ActivatedRoute } from '@angular/router';
import { EmpleadoService } from '@services';
import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { NavbarComponent } from 'src/app/navbar/navbar.component';
import { CommonModule } from '@angular/common';
import { Empleado } from 'src/app/models/empleado';
import { DxFormModule } from 'devextreme-angular';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-detalle-empleado',
  templateUrl: './detalle-empleado.component.html',
  styleUrls: ['./detalle-empleado.component.css'],
  standalone: true,
  imports: [
    NavbarComponent,
    CommonModule,
    DxFormModule]
})
export class DetalleEmpleadoComponent implements OnInit {

  empleado: Empleado | null = null;

  constructor(
    private empleadoService: EmpleadoService,
    private activatedRoute: ActivatedRoute,
    private toastr: ToastrService,
    private router: Router
  ) { }

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.params['id'];
    this.empleadoService.detail(id).subscribe(
      (data: any) => {
        this.empleado = data;
      },
      (err: any) => {
        this.toastr.error(err.error.message, 'Error', {
          timeOut: 3000, positionClass: 'toast-bottom-left',
        });
        this.volver();
      }
    );
  }

  modificarEmpleado(id: number): void {
    let codEmpleado: number = this.empleado!.codEmpleado;
    this.router.navigate(['/editarEmpleado/', codEmpleado])
  }

  borrarEmpleado(id: number): void {
    Swal.fire({
      title: '¿Estás seguro?, Se eliminara el empleado seleccionado',
      text: 'Esta opción no se puede deshacer',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Eliminar',
      cancelButtonText: 'Volver'
    }).then((result) => {
      if (result.value) {
        this.empleadoService.delete(id).subscribe(res => this.router.navigate(['/listaEmpleado']));

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
  volver(): void {
    this.router.navigate(['/listaEmpleado']);
  }

}
