import { ActivatedRoute, Router } from '@angular/router';
import { Producto } from '../../../../models/producto';
import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { NavbarComponent } from 'src/app/navbar/navbar.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { VentaService } from '../../../../services/venta.service';
import { NgSelectModule } from '@ng-select/ng-select';
import { Categoria } from 'src/app/models/categoria';
import { Venta } from 'src/app/models/venta';

@Component({
  selector: 'app-editar-venta',
  templateUrl: './editar-venta.component.html',
  styleUrls: ['./editar-venta.component.css'],
  standalone: true,
  imports: [
    NavbarComponent,
    CommonModule,
    FormsModule,
    NgSelectModule]
})
export class EditarVentaComponent implements OnInit {

  venta: Venta | null = null;

  ventas: Categoria[] = [];
  listaVaciaVentas = undefined;

  constructor(
    private activatedRoute: ActivatedRoute,
    private toastr: ToastrService,
    private router: Router,
    private ventaService: VentaService
  ) { }

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.params['id'];
    this.ventaService.detail(id).subscribe(
      data => {
        this.venta = data;
      },
      err => {
        this.toastr.error(err.error.message, 'Error', {
          timeOut: 3000, positionClass: 'toast-bottom-left',
        });
        this.router.navigate(['/listaVenta']);
      }
    );
  }

  onUpdate(): void {
    const id = this.activatedRoute.snapshot.params['id'];
    this.ventaService.update(id, this.venta!).subscribe(
      data => {
        this.toastr.success(data.message, 'OK', {
          timeOut: 3000, positionClass: 'toast-bottom-left'
        });
        this.router.navigate(['/listaVenta']);
      },
      err => {
        this.toastr.error(err.error.message, 'Error', {
          timeOut: 3000, positionClass: 'toast-bottom-left',
        });
      }
    );
  }

  volver(): void {
    this.router.navigate(['/listaVenta']);
  }

}
