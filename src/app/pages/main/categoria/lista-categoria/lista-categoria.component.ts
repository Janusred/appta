import { CategoriaService } from '../../../../services/categoria.service';
import { Categoria } from 'src/app/models/categoria';
import { Component, OnInit } from '@angular/core';
import { NavbarComponent } from 'src/app/navbar/navbar.component';

import Swal from 'sweetalert2';
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
      data => {
        this.categorias = data;
        this.listaVacia = undefined;
      },
      err => {
        this.listaVacia = err.error.message;
      }
    );
  }


  mostrarDetalle(e: any) {
    const idCategoria = e.data.id;
    this.router.navigate(['/detalleCategoria/', idCategoria])
  }
  borrar(id: number): void {
    Swal.fire({
      title: '¿Estás seguro?, Se eliminaran TODOS los productos asignados a este categoría',
      text: 'Esta opción no se puede deshacer',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Eliminar',
      cancelButtonText: 'Volver'
    }).then((result) => {
      if (result.value) {
        this.categoriaService.delete(id).subscribe(res => this.cargarCategorias(),
          error => {
            // Capturar el error y mostrar un mensaje personalizado
          });

        Swal.fire(
          'OK',
          'La categoría y todos sus productos han sido eliminados ',
          'success'
        );
        // For more information about handling dismissals please visit
        // https://sweetalert2.github.io/#handling-dismissals
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        Swal.fire(
          'Cancelado',
          'La categoría no se ha eliminado',
          'error'
        );
      }
    });
  }


}
