import { ActivatedRoute, Router } from '@angular/router';
import { ProductoService } from '../../../../services/producto.service';
import { Producto } from '../../../../models/producto';
import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { NavbarComponent } from 'src/app/navbar/navbar.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Proveedor } from 'src/app/models/proveedor';
import { ProveedorService } from '../../../../services/proveedor.service';
import { CategoriaService } from '../../../../services/categoria.service';
import { NgSelectModule } from '@ng-select/ng-select';
import { Categoria } from 'src/app/models/categoria';

@Component({
  selector: 'app-editar-producto',
  templateUrl: './editar-producto.component.html',
  styleUrls: ['./editar-producto.component.css'],
  standalone: true,
  imports: [
    NavbarComponent,
    CommonModule,
    FormsModule,
    NgSelectModule]
})
export class EditarProductoComponent implements OnInit {

  producto: Producto | null = null;
  idProveedor: number | null = null;
  idCategoria: number | null = null;

  categorias: Categoria[] = [];
  listaVaciaCategorias = undefined;

  proveedores: Proveedor[] = [];
  listaVaciaProveedores = undefined;
  constructor(
    private categoriaService: CategoriaService,
    private proveedorService: ProveedorService,
    private productoService: ProductoService,
    private activatedRoute: ActivatedRoute,
    private toastr: ToastrService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.cargarProveedores();
    this.cargarCategorias();
    const id = this.activatedRoute.snapshot.params['id'];
    this.productoService.detail(id).subscribe(
      data => {
        this.producto = data;
      },
      err => {
        this.toastr.error(err.error.message, 'Error', {
          timeOut: 3000, positionClass: 'toast-bottom-left',
        });
        this.router.navigate(['/listaProducto']);
      }
    );
  }

  cargarProveedores(): void {
    this.proveedorService.lista().subscribe(
      data => {
        this.proveedores = data;
        this.listaVaciaProveedores = undefined;
      },
      err => {
        this.listaVaciaProveedores = err.error.message;
      }
    );
  }
  cargarCategorias(): void {
    this.categoriaService.lista().subscribe(
      data => {
        this.categorias = data;
        this.listaVaciaCategorias = undefined;
      },
      err => {
        this.listaVaciaCategorias = err.error.message;
      }
    );
  }
  onUpdate(): void {
    const idProducto: number = this.producto!.id;
    const id = this.activatedRoute.snapshot.params['id'];
    this.productoService.update(id, this.producto!).subscribe(
      data => {
        this.toastr.success(data.message, 'OK', {
          timeOut: 3000, positionClass: 'toast-bottom-left'
        });

        this.router.navigate(['/detalleProducto/', idProducto])
      },
      err => {
        this.toastr.error(err.error.message, 'Error, no se ha modificado el producto', {
          timeOut: 3000, positionClass: 'toast-bottom-left',
        });
      }
    );
  }

  volver(): void {
    const idProducto: number = this.producto!.id;
    this.router.navigate(['/detalleProducto/', idProducto])
  }

}
