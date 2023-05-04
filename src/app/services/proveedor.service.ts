import { environment } from '../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Proveedor } from '../models/proveedor';

@Injectable({
  providedIn: 'root'
})
export class ProveedorService {

  proveedorURL = environment.proveedorURL;

  constructor(private httpClient: HttpClient) { }

  public lista(): Observable<Proveedor[]> {
    return this.httpClient.get<Proveedor[]>(`${this.proveedorURL}`);
  }

  public detail(id: number): Observable<Proveedor> {
    return this.httpClient.get<Proveedor>(`${this.proveedorURL}${id}`);
  }

  public save(proveedor: Proveedor): Observable<any> {
    return this.httpClient.post<any>(`${this.proveedorURL}`, proveedor);
  }

  public update(id: number, proveedor: Proveedor): Observable<any> {
    return this.httpClient.put<any>(`${this.proveedorURL}${id}`, proveedor);
  }

  public delete(id: number): Observable<any> {
    return this.httpClient.delete<any>(`${this.proveedorURL}${id}`);
  }
}
