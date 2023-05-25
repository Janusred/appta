import { Component, OnInit } from '@angular/core';
import { RouterModule, Router } from '@angular/router';
import { ColorService } from '@services';
import { DxButtonModule, DxColorBoxModule } from 'devextreme-angular';
import { NavbarComponent } from 'src/app/navbar/navbar.component';

@Component({
  selector: 'app-configuracion',
  templateUrl: './configuracion.component.html',
  styleUrls: ['./configuracion.component.css'],
  standalone: true,
  imports: [
    NavbarComponent,
    DxColorBoxModule,
    DxButtonModule,
    RouterModule
  ]
})
export class ConfiguracionComponent implements OnInit {

  temaGeneral = this.colorService.temaGeneral;

  bordeProductos = this.colorService.bordeProductos;
  fondoProductos = this.colorService.fondoProductos;

  bordeCategorias = this.colorService.bordeCategorias;
  fondoCategorias = this.colorService.fondoCategorias;

  constructor(private colorService: ColorService, private router: Router) {

  }

  ngOnInit(): void {
    if (this.colorService.checkCookieExistence("colorTema")) {
      this.temaGeneral = this.colorService.getCookie("colorTema");
    } else {
      this.temaGeneral = "#0DCAF0";
    }

    if (this.colorService.checkCookieExistence("bordeProductos")) {
      this.bordeProductos = this.colorService.getCookie("bordeProductos");
    } else {
      this.bordeProductos = "#000000";
    }

    if (this.colorService.checkCookieExistence("fondoProductos")) {
      this.fondoProductos = this.colorService.getCookie("fondoProductos");
    } else {
      this.fondoProductos = "#ffffff";
    }

    if (this.colorService.checkCookieExistence("bordeCategorias")) {
      this.bordeCategorias = this.colorService.getCookie("bordeCategorias");
    } else {
      this.bordeCategorias = "#000000";
    }

    if (this.colorService.checkCookieExistence("fondoCategorias")) {
      this.fondoCategorias = this.colorService.getCookie("fondoCategorias");
    } else {
      this.fondoCategorias = "#ffffff";
    }
  }

  cambiarColorGeneral(data: any): void {
    this.colorService.temaGeneral = data.value;
    document.cookie = "colorTema=" + data.value;
  }

  cambiarColorBordeProductos(data: any): void {
    this.colorService.bordeProductos = data.value;
    document.cookie = "bordeProductos=" + data.value;
  }

  cambiarColorFondoProductos(data: any): void {
    this.colorService.fondoProductos = data.value;
    document.cookie = "fondoProductos=" + data.value;
  }


  cambiarColorBordeCategorias(data: any): void {
    this.colorService.bordeCategorias = data.value;
    document.cookie = "bordeCategorias=" + data.value;
  }

  cambiarColorFondoCategorias(data: any): void {
    this.colorService.fondoCategorias = data.value;
    document.cookie = "fondoCategorias=" + data.value;
  }

  cambiarTemaOriginal() {
    this.colorService.temaGeneral = "#0008FF";
    document.cookie = "colorTema=" + "#0008FF";
    this.temaGeneral = "#0008FF";

    this.colorService.bordeProductos = "#0008FF";
    document.cookie = "bordeProductos=" + "#0008FF";
    this.bordeProductos = "#0008FF";

    this.colorService.fondoProductos = "#def8fa";
    document.cookie = "fondoProductos=" + "#def8fa";
    this.fondoProductos = "#def8fa";

    this.colorService.bordeCategorias = "#057f1a";
    document.cookie = "bordeCategorias=" + "#057f1a";
    this.bordeCategorias = "#057f1a";

    this.colorService.fondoCategorias = "#dbffde";
    document.cookie = "fondoCategorias=" + "#dbffde";
    this.fondoCategorias = "#dbffde";
  }

  borrarConfiguraciones() {
    this.colorService.temaGeneral = "";
    document.cookie = "name=temaGeneral; expires=Thu, 01 Jan 1970 00:00:00 UTC;";
    this.temaGeneral = "";

    this.colorService.bordeProductos = "";
    document.cookie = "name=bordeProductos; expires=Thu, 01 Jan 1970 00:00:00 UTC;";
    this.bordeProductos = "";

    this.colorService.fondoProductos = "";
    document.cookie = "name=fondoProductos; expires=Thu, 01 Jan 1970 00:00:00 UTC;";
    this.fondoProductos = "";

    this.colorService.bordeCategorias = "";
    document.cookie = "name=bordeCategorias; expires=Thu, 01 Jan 1970 00:00:00 UTC;";
    this.bordeCategorias = "";

    this.colorService.fondoCategorias = "";
    document.cookie = "name=fondoCategorias; expires=Thu, 01 Jan 1970 00:00:00 UTC;";
    this.fondoCategorias = "";
  }
  volver() {
    this.router.navigate(['/main'])
  }
}
