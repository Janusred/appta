import { ActivatedRoute, Router } from '@angular/router';
import { CategoriaService } from '@services';
import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { NavbarComponent } from 'src/app/navbar/navbar.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NgSelectModule } from '@ng-select/ng-select';
import { Categoria } from 'src/app/models/categoria';

@Component({
  selector: 'app-editar-categoria',
  templateUrl: './editar-categoria.component.html',
  styleUrls: ['./editar-categoria.component.css'],
  standalone: true,
  imports: [
    NavbarComponent,
    CommonModule,
    FormsModule,
    NgSelectModule]
})
export class EditarCategoriaComponent implements OnInit {

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
        this.router.navigate(['/listaCategoria']);
      }
    );
  }

  onUpdate(): void {
    const idCategoria: number = this.categoria!.id;
    const id = this.activatedRoute.snapshot.params['id'];
    this.categoriaService.update(id, this.categoria!).subscribe(
      (data: any) => {
        this.toastr.success(data.message, 'OK', {
          timeOut: 3000, positionClass: 'toast-bottom-left'
        });
        this.router.navigate(['/detalleCategoria/', idCategoria])
      },
      (err: any) => {
        this.toastr.error(err.error.message, 'Error', {
          timeOut: 3000, positionClass: 'toast-bottom-left',
        });
      }
    );
  }

  volver(): void {
    this.router.navigate(['/listaCategoria']);
  }

}
