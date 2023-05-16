import { ActivatedRoute, Router } from '@angular/router';
import { ProveedorService } from '../../../../services/proveedor.service';
import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { NavbarComponent } from 'src/app/navbar/navbar.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Proveedor } from 'src/app/models/proveedor';

@Component({
  selector: 'app-editar-proveedor',
  templateUrl: './editar-proveedor.component.html',
  styleUrls: ['./editar-proveedor.component.css'],
  standalone: true,
  imports: [
    NavbarComponent,
    CommonModule,
    FormsModule]
})
export class EditarProveedorComponent implements OnInit {

  proveedor: Proveedor | null = null;

  constructor(
    private proveedorService: ProveedorService,
    private activatedRoute: ActivatedRoute,
    private toastr: ToastrService,
    private router: Router
  ) { }

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.params['id'];
    this.proveedorService.detail(id).subscribe(
      data => {
        this.proveedor = data;
      },
      err => {
        this.toastr.error(err.error.message, 'Error', {
          timeOut: 3000, positionClass: 'toast-bottom-left',
        });
        this.router.navigate(['/listaProveedor']);
      }
    );
  }

  onUpdate(): void {
    const idProveedor: number = this.proveedor!.id;
    const id = this.activatedRoute.snapshot.params['id'];
    this.proveedorService.update(id, this.proveedor!).subscribe(
      data => {
        this.toastr.success(data.message, 'OK', {
          timeOut: 3000, positionClass: 'toast-bottom-left'
        });
        this.router.navigate(['/detalleProveedor/', idProveedor])
      },
      err => {
        this.toastr.error(err.error.message, 'Error', {
          timeOut: 3000, positionClass: 'toast-bottom-left',
        });
      }
    );
  }

  volver(): void {
    this.router.navigate(['/listaProveedor']);
  }

}
