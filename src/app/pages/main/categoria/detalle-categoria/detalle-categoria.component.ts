import { Router, ActivatedRoute } from '@angular/router';
import { CategoriaService } from '@services';
import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { NavbarComponent } from 'src/app/navbar/navbar.component';
import { CommonModule } from '@angular/common';
import { Categoria } from 'src/app/models/categoria';
import { DxFormModule } from 'devextreme-angular';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-detalle-categoria',
  templateUrl: './detalle-categoria.component.html',
  styleUrls: ['./detalle-categoria.component.css'],
  standalone: true,
  imports: [
    NavbarComponent,
    CommonModule,
    DxFormModule]
})
export class DetalleCategoriaComponent implements OnInit {

  categoria: Categoria | null = null;

  constructor(
    private categoriaService: CategoriaService,
    private activatedRoute: ActivatedRoute,
    private toastr: ToastrService,
    private router: Router
  ) { }

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.params['id'];
    this.categoriaService.detail(id).subscribe(
      (data: any) => {
        this.categoria = data;
      },
      (err: any) => {
        this.toastr.error(err.error.message, 'Error', {
          timeOut: 3000, positionClass: 'toast-bottom-left',
        });
        this.volver();
      }
    );
  }
  modificarCategoria(id: number): void {
    let idCategoria: number = this.categoria!.id;
    this.router.navigate(['/editarCategoria/', idCategoria])
  }
  borrarCategoria(id: number): void {
    Swal.fire({
      title: '¿Estás seguro?, Se eliminaran TODOS los productos asignados a este categoría',
      text: 'Esta opción no se puede deshacer',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Eliminar',
      cancelButtonText: 'Volver'
    }).then((result) => {
      if (result.value) {
        this.categoriaService.delete(id).subscribe(res => this.router.navigate(['/listaCategoria']));
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
  volver(): void {
    this.router.navigate(['/listaCategoria']);
  }

}
