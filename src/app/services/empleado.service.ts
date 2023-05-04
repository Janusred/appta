import { Empleado } from '../models/empleado';
import { environment } from '../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmpleadoService {

  empleadoURL = environment.empleadoURL;

  constructor(private httpClient: HttpClient) { }

  public lista(): Observable<Empleado[]> {
    return this.httpClient.get<Empleado[]>(`${this.empleadoURL}`);
  }

  public detail(id: number): Observable<Empleado> {
    return this.httpClient.get<Empleado>(`${this.empleadoURL}${id}`);
  }

  public save(empleado: Empleado): Observable<any> {
    return this.httpClient.post<any>(`${this.empleadoURL}`, empleado);
  }

  public update(id: number, empleado: Empleado): Observable<any> {
    return this.httpClient.put<any>(`${this.empleadoURL}${id}`, empleado);
  }

  public delete(id: number): Observable<any> {
    return this.httpClient.delete<any>(`${this.empleadoURL}${id}`);
  }


}
