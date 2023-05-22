import { Router, ActivatedRoute } from '@angular/router';
import { ProductoService, ProveedorService, CategoriaService } from '@services';
import { Component, OnInit } from '@angular/core';
import { DxBoxModule, DxButtonModule, DxFormModule, DxScrollViewModule } from 'devextreme-angular';
import { ToastrService } from 'ngx-toastr';
import { Producto } from '../../../../models/producto';
import { NavbarComponent } from 'src/app/navbar/navbar.component';
import { CommonModule } from '@angular/common';
import { Proveedor } from 'src/app/models/proveedor';
import { Categoria } from 'src/app/models/categoria';
import Swal from 'sweetalert2';

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
    DxBoxModule,
    DxButtonModule
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
      (data: any) => {
        this.producto = data;
        this.proveedorService.detail(this.producto!.idProveedor).subscribe(
          proveedor => {
            this.proveedor = proveedor;
          },
          (err: any) => {
            this.toastr.error(err.error.message, 'Error', {
              timeOut: 3000, positionClass: 'toast-bottom-left',
            });
            this.volver();
          }
        );
        this.categoriaService.detail(this.producto!.idCategoria).subscribe(
          categoria => {
            this.categoria = categoria;
          },
          (err: any) => {
            console.error(err);
          }
        );
      },
      (err: any) => {
        this.toastr.error(err.error.message, 'Error', {
          timeOut: 3000, positionClass: 'toast-bottom-left',
        });
        this.volver();
      }
    );
  }

  modificarProducto(id: number): void {
    let idProducto: number = this.producto!.id;
    this.router.navigate(['/editarProducto/', idProducto])
  }
  borrarProducto(id: number): void {
    Swal.fire({
      title: '¿Estás seguro de que desea eliminar el producto?',
      text: 'Esta acción no se puede deshacer',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Eliminar',
      cancelButtonText: 'Cancelar'
    }).then((result) => {
      if (result.value) {
        this.productoService.delete(id).subscribe(res => this.router.navigate(['/listaProducto']));
        Swal.fire(
          'OK',
          'Producto eliminado',
          'success'
        );
        // For more information about handling dismissals please visit
        // https://sweetalert2.github.io/#handling-dismissals
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        Swal.fire(
          'Cancelado',
          'El producto no se ha eliminado',
          'error'
        );
      }
    });
  }

  volver(): void {
    this.router.navigate(['/listaProducto']);
  }
}
