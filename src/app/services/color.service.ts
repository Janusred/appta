
import { Injectable, OnInit } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class ColorService implements OnInit {
  public temaGeneral = "";

  public bordeProductos = "";
  public fondoProductos = "";

  public bordeCategorias = "";
  public fondoCategorias = "";

  ngOnInit(): void {
    if (this.checkCookieExistence("colorTema")) {
      this.temaGeneral = this.getCookie("colorTema");
    } else {
      this.temaGeneral = "#0DCAF0";
    }

    if (this.checkCookieExistence("bordeProductos")) {
      this.bordeProductos = this.getCookie("bordeProductos");
    } else {
      this.bordeProductos = "#000000";
    }

    if (this.checkCookieExistence("fondoProductos")) {
      this.fondoProductos = this.getCookie("fondoProductos");
    } else {
      this.fondoProductos = "#ffffff";
    }


    if (this.checkCookieExistence("bordeCategorias")) {
      this.bordeCategorias = this.getCookie("bordeCategorias");
    } else {
      this.bordeCategorias = "#000000";
    }

    if (this.checkCookieExistence("fondoCategorias")) {
      this.fondoCategorias = this.getCookie("fondoCategorias");
    } else {
      this.fondoCategorias = "#ffffff";
    }
  }

  public checkCookieExistence(cookieName: string) {
    var cookies = document.cookie.split(';');
    for (var i = 0; i < cookies.length; i++) {
      var cookie = cookies[i].trim();
      if (cookie.indexOf(cookieName + '=') === 0) {
        return true;
      }
    }
    return false;
  }


  public getCookie(nombre: string) {
    let name = nombre + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    for (let i = 0; i < ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) == ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
      }
    }
    return "";
  }


}
