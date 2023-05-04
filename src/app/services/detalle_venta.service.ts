import { DetalleVenta } from '../models/detalle_venta';
import { environment } from '../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DetalleVentaService {

  detalleVentaURL = environment.detalleVentaURL;

  constructor(private httpClient: HttpClient) { }

  public lista(): Observable<DetalleVenta[]> {
    return this.httpClient.get<DetalleVenta[]>(`${this.detalleVentaURL}`);
  }

  public detail(id: number): Observable<DetalleVenta> {
    return this.httpClient.get<DetalleVenta>(`${this.detalleVentaURL}${id}`);
  }

  public save(detalle_venta: DetalleVenta): Observable<any> {
    return this.httpClient.post<any>(`${this.detalleVentaURL}`, detalle_venta);
  }

  public update(id: number, detalle_venta: DetalleVenta): Observable<any> {
    return this.httpClient.put<any>(`${this.detalleVentaURL}${id}`, detalle_venta);
  }

  public delete(id: number): Observable<any> {
    return this.httpClient.delete<any>(`${this.detalleVentaURL}${id}`);
  }
}
