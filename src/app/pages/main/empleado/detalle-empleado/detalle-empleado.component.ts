import { Router, ActivatedRoute } from '@angular/router';
import { EmpleadoService } from '../../../../services/empleado.service';
import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { NavbarComponent } from 'src/app/navbar/navbar.component';
import { CommonModule } from '@angular/common';
import { Empleado } from 'src/app/models/empleado';

@Component({
  selector: 'app-detalle-empleado',
  templateUrl: './detalle-empleado.component.html',
  styleUrls: ['./detalle-empleado.component.css'],
  standalone: true,
  imports: [
    NavbarComponent,
    CommonModule]
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
      data => {
        this.empleado = data;
      },
      err => {
        this.toastr.error(err.error.message, 'Fail', {
          timeOut: 3000, positionClass: 'toast-top-center',
        });
        this.volver();
      }
    );
  }

  volver(): void {
    this.router.navigate(['/listaEmpleado']);
  }

}
