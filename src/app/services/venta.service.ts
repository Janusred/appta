import { Venta } from '../models/venta';
import { environment } from '../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VentaService {

  ventaURL = environment.ventaURL;

  constructor(private httpClient: HttpClient) { }

  public lista(): Observable<Venta[]> {
    return this.httpClient.get<Venta[]>(`${this.ventaURL}`);
  }

  public detail(id: number): Observable<Venta> {
    return this.httpClient.get<Venta>(`${this.ventaURL}${id}`);
  }

  public save(venta: Venta): Observable<any> {
    return this.httpClient.post<any>(`${this.ventaURL}`, venta);
  }

  public update(id: number, venta: Venta): Observable<any> {
    return this.httpClient.put<any>(`${this.ventaURL}${id}`, venta);
  }

  public delete(id: number): Observable<any> {
    return this.httpClient.delete<any>(`${this.ventaURL}${id}`);
  }


}
