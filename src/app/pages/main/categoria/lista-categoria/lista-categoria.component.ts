import { CategoriaService } from '@services';
import { Categoria } from 'src/app/models/categoria';
import { Component, OnInit } from '@angular/core';
import { NavbarComponent } from 'src/app/navbar/navbar.component';
import { CommonModule } from '@angular/common';
import { RouterModule, Router } from '@angular/router';
import { DxDataGridModule } from 'devextreme-angular';


@Component({
  selector: 'app-lista-categoria',
  templateUrl: './lista-categoria.component.html',
  styleUrls: ['./lista-categoria.component.css'],
  standalone: true,
  imports: [
    CommonModule,
    NavbarComponent,
    RouterModule,
    DxDataGridModule,
  ]
})
export class ListaCategoriaComponent implements OnInit {

  categorias: Categoria[] = [];

  listaVacia = undefined;

  constructor(
    private categoriaService: CategoriaService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.cargarCategorias();
  }


  cargarCategorias(): void {
    this.categoriaService.lista().subscribe(
      (data: any) => {
        this.categorias = data;
        this.listaVacia = undefined;
      },
      (err: any) => {
        this.listaVacia = err.error.message;
      }
    );
  }


  mostrarDetalle(e: any) {
    const idCategoria = e.data.id;
    this.router.navigate(['/detalleCategoria/', idCategoria])
  }
}
