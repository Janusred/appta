import { ProveedorService, CategoriaService, ProductoService } from '@services';
import { Producto } from '../../../../models/producto';
import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { NavbarComponent } from 'src/app/navbar/navbar.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Proveedor } from 'src/app/models/proveedor';
import { NgSelectModule } from '@ng-select/ng-select';
import { Categoria } from 'src/app/models/categoria';




@Component({
  selector: 'app-nuevo-producto',
  templateUrl: './nuevo-producto.component.html',
  styleUrls: ['./nuevo-producto.component.css'],
  standalone: true,
  imports: [
    CommonModule,
    NavbarComponent,
    FormsModule,
    NgSelectModule
  ]
})
export class NuevoProductoComponent implements OnInit {
  nombre = '';
  precio: number | null = null;
  idProveedor: number | null = null;
  idCategoria: number | null = null;
  //La cantidad por defecto al añadir un producto es de 1
  cantidad: number = 1;

  categorias: Categoria[] = [];
  listaVaciaCategorias = undefined;

  proveedores: Proveedor[] = [];
  listaVaciaProveedores = undefined;


  constructor(
    private categoriaService: CategoriaService,
    private proveedorService: ProveedorService,
    private productoService: ProductoService,
    private toastr: ToastrService,
    private router: Router
  ) { }


  ngOnInit(): void {
    this.cargarProveedores();
    this.cargarCategorias();
  }

  cargarProveedores(): void {
    this.proveedorService.lista().subscribe(
      (data: any) => {
        this.proveedores = data;
        this.listaVaciaProveedores = undefined;
      },
      (err: any) => {
        this.listaVaciaProveedores = err.error.message;
      }
    );
  }
  cargarCategorias(): void {
    this.categoriaService.lista().subscribe(
      (data: any) => {
        this.categorias = data;
        this.listaVaciaCategorias = undefined;
      },
      (err: any) => {
        this.listaVaciaCategorias = err.error.message;
      }
    );
  }
  onCreate(): void {
    const producto = new Producto(this.nombre, this.precio!, this.idProveedor!, this.idCategoria!, this.cantidad);
    this.productoService.save(producto).subscribe(
      (data: any) => {
        this.toastr.success(data.message, 'OK', {
          timeOut: 3000, positionClass: 'toast-bottom-left'
        });
        this.router.navigate(['/listaProducto']);
      },
      (err: any) => {
        this.toastr.error(err.error.message, 'Error', {
          timeOut: 3000, positionClass: 'toast-bottom-left',
        });
      }
    );
  }

  volver(): void {
    this.router.navigate(['/listaProducto']);
  }

}
