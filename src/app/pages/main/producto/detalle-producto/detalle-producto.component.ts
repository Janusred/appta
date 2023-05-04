import { Router, ActivatedRoute } from '@angular/router';
import { ProductoService } from '../../../../services/producto.service';
import { ProveedorService } from '../../../../services/proveedor.service';
import { CategoriaService } from '../../../../services/categoria.service';
import { Component, OnInit } from '@angular/core';
import { DxBoxModule, DxFormModule, DxScrollViewModule } from 'devextreme-angular';
import { ToastrService } from 'ngx-toastr';
import { Producto } from '../../../../models/producto';
import { NavbarComponent } from 'src/app/navbar/navbar.component';
import { CommonModule } from '@angular/common';
import { Proveedor } from 'src/app/models/proveedor';
import { Categoria } from 'src/app/models/categoria';

@Component({
  selector: 'app-detalle-producto',
  templateUrl: './detalle-producto.component.html',
  styleUrls: ['./detalle-producto.component.css'],
  standalone: true,
  imports: [
    NavbarComponent,
    CommonModule,
    DxScrollViewModule,
    DxFormModule,
    DxBoxModule
  ]
})
export class DetalleProductoComponent implements OnInit {

  producto: Producto | null = null;
  proveedor: Proveedor | null = null;
  categoria: Categoria | null = null;

  constructor(
    private categoriaService: CategoriaService,
    private proveedorService: ProveedorService,
    private productoService: ProductoService,
    private activatedRoute: ActivatedRoute,
    private toastr: ToastrService,
    private router: Router
  ) { }

  ngOnInit(): void {
    const idProducto = this.activatedRoute.snapshot.params['id'];
    this.productoService.detail(idProducto).subscribe(
      data => {
        this.producto = data;
        this.proveedorService.detail(this.producto.idProveedor).subscribe(
          proveedor => {
            this.proveedor = proveedor;
          },
          err => {
            this.toastr.error(err.error.message, 'Fail', {
              timeOut: 3000, positionClass: 'toast-top-center',
            });
            this.volver();
          }
        );
        this.categoriaService.detail(this.producto.idCategoria).subscribe(
          categoria => {
            this.categoria = categoria;
            console.log(categoria.id);
            console.log(categoria.nombre)
          },
          err => {
            console.error(err);
          }
        );
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
    this.router.navigate(['/listaProducto']);
  }
}
