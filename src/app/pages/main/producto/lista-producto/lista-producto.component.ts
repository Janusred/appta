import { ProductoService, FormatService } from '@services';
import { Producto } from '../../../../models/producto';
import { Component, OnInit } from '@angular/core';
import { DxDataGridModule } from 'devextreme-angular';
import { NavbarComponent } from 'src/app/navbar/navbar.component';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-lista-producto',
  templateUrl: './lista-producto.component.html',
  styleUrls: ['./lista-producto.component.css'],
  standalone: true,
  imports: [
    CommonModule,
    NavbarComponent,
    RouterModule,
    DxDataGridModule,


  ]
})
export class ListaProductoComponent implements OnInit {

  productos: Producto[] = [];

  listaVacia = undefined;

  constructor(
    private productoService: ProductoService,
    protected formatService: FormatService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.cargarProductos();
  }

  cargarProductos(): void {
    this.productoService.lista().subscribe(
      (data: any) => {
        this.productos = data;
        this.listaVacia = undefined;
      },
      (err: any) => {
        this.listaVacia = err.error.message;
      }
    );
  }

  mostrarDetalle(e: any) {
    const idProducto = e.data.id;
    this.router.navigate(['/detalleProducto/', idProducto])
  }

}
