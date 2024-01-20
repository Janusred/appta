import { environment } from '../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Proveedor } from '../models/proveedor';

@Injectable({
  providedIn: 'root'
})
export class ProveedorService {

  //proveedorURL = environment.proveedorURL;
  provedorURL = 'http://localhost:3000/api/proveedor';

  constructor(private httpClient: HttpClient) { }

  public lista(): Observable<Proveedor[]> {
    return this.httpClient.get<Proveedor[]>(`${this.provedorURL}`);
  }

  public detail(id: number): Observable<Proveedor> {
    return this.httpClient.get<Proveedor>(`${this.provedorURL}${id}`);
  }

  public save(proveedor: Proveedor): Observable<any> {
    return this.httpClient.post<any>(`${this.provedorURL}`, proveedor);
  }

  public update(id: number, proveedor: Proveedor): Observable<any> {
    return this.httpClient.put<any>(`${this.provedorURL}${id}`, proveedor);
  }

  public delete(id: number): Observable<any> {
    return this.httpClient.delete<any>(`${this.provedorURL}${id}`);
  }
}
