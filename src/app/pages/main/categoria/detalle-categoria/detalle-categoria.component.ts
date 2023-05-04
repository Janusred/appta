import { Router, ActivatedRoute } from '@angular/router';
import { CategoriaService } from '../../../../services/categoria.service';
import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { NavbarComponent } from 'src/app/navbar/navbar.component';
import { CommonModule } from '@angular/common';
import { Categoria } from 'src/app/models/categoria';

@Component({
  selector: 'app-detalle-categoria',
  templateUrl: './detalle-categoria.component.html',
  styleUrls: ['./detalle-categoria.component.css'],
  standalone: true,
  imports: [
    NavbarComponent,
    CommonModule]
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
      data => {
        this.categoria = data;
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
    this.router.navigate(['/listaCategoria']);
  }

}
