import { Component, OnInit, NgModule } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { ColorService, UserService } from '@services';
import { SidebarModule } from 'primeng/sidebar';
import { NavbarComponent } from 'src/app/navbar/navbar.component';


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
  standalone: true,
  imports: [
    SidebarModule,
    NavbarComponent,
    RouterModule
  ]
})
export class MainComponent implements OnInit {
  selectedColor = this.colorService.temaGeneral;

  sidebarVisible: boolean = false;
  constructor(private UserService: UserService, private router: Router, protected colorService: ColorService) {

  }

  ngOnInit(): void {
    this.comprobarColorTema();
  }

  // Comprueba si se ha seleccionado algún color del tema en la configuración
  comprobarColorTema() {
    if (this.colorService.checkCookieExistence('colorTema')) {
      this.selectedColor = this.colorService.getCookie('colorTema');
    } else {
      this.selectedColor = "#0DCAF0";
    }
  }
}
