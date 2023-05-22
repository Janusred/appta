import { EmpleadoService } from '@services';
import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { NavbarComponent } from 'src/app/navbar/navbar.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NgSelectModule } from '@ng-select/ng-select';
import { Empleado } from 'src/app/models/empleado';




@Component({
  selector: 'app-nuevo-empleado',
  templateUrl: './nuevo-empleado.component.html',
  styleUrls: ['./nuevo-empleado.component.css'],
  standalone: true,
  imports: [
    CommonModule,
    NavbarComponent,
    FormsModule,
    NgSelectModule
  ]
})
export class NuevoEmpleadoComponent implements OnInit {
  nombre = '';
  codEmpleado: number | null = null;


  constructor(
    private empleadoService: EmpleadoService,
    private toastr: ToastrService,
    private router: Router
  ) { }


  ngOnInit(): void {
  }

  onCreate(): void {
    const empleado = new Empleado(this.codEmpleado!, this.nombre);
    this.empleadoService.save(empleado).subscribe(
      (data: any) => {
        this.toastr.success(data.message, 'OK', {
          timeOut: 3000, positionClass: 'toast-bottom-left'
        });
        this.router.navigate(['/listaEmpleado']);
      },
      (err: any) => {
        this.toastr.error(err.error.message, 'Error', {
          timeOut: 3000, positionClass: 'toast-bottom-left',
        });
      }
    );
  }

  volver(): void {
    this.router.navigate(['/listaEmpleado']);
  }

}
