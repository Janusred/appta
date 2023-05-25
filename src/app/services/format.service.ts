import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FormatService {

  public formatCantidad = "#0.00";
  public formatPrecio = "0#.00 '€'";

}
