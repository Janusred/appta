import { Categoria } from '../models/categoria';
import { environment } from '../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FormatService {

  public formatCantidad = "#0.00";
  public formatPrecio = "0#.00 '€'";

}
