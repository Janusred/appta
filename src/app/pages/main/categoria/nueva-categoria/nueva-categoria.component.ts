import { CategoriaService } from '../../../../services/categoria.service';
import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { NavbarComponent } from 'src/app/navbar/navbar.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NgSelectModule } from '@ng-select/ng-select';
import { Categoria } from 'src/app/models/categoria';




@Component({
  selector: 'app-nueva-categoria',
  templateUrl: './nueva-categoria.component.html',
  styleUrls: ['./nueva-categoria.component.css'],
  standalone: true,
  imports: [
    CommonModule,
    NavbarComponent,
    FormsModule,
    NgSelectModule
  ]
})
export class NuevaCategoriaComponent implements OnInit {
  nombre = '';

  constructor(
    private categoriaService: CategoriaService,
    private toastr: ToastrService,
    private router: Router
  ) { }


  ngOnInit(): void {
  }

  onCreate(): void {
    const categoria = new Categoria(this.nombre);
    this.categoriaService.save(categoria).subscribe(
      data => {
        this.toastr.success(data.message, 'OK', {
          timeOut: 3000, positionClass: 'toast-top-center'
        });
        this.router.navigate(['/listaCategoria']);
      },
      err => {
        this.toastr.error(err.error.message, 'Fail', {
          timeOut: 3000, positionClass: 'toast-top-center',
        });
      }
    );
  }

  volver(): void {
    this.router.navigate(['/listaCategoria']);
  }

}
